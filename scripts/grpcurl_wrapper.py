#!/usr/bin/env python3
"""
grpcurl_wrapper.py

Usage:
  ./grpcurl_wrapper.py <grpcurl-args...>

Example:
  ./grpcurl_wrapper.py -v -plaintext \
    -H "user-id: 01JZQVEY4RXJFA6PEE7W5VY7DM" \
    -H "accept-language: en" \
    -proto products/v1/products.proto \
    -d '{"subcategory": {"category": "agricultural_goods", "subcategory": "agri_machinery"}}' \
    -import-path . localhost:50053 products.v1.ProductsService/ProductData
"""

import subprocess
import sys
import time
import json
import shlex
import re

# optional pretty printer
try:
  from rich.console import Console
  from rich.panel import Panel
  from rich.syntax import Syntax
  console = Console()
except Exception:
  console = None


def parse_grpcurl_stderr(stderr_text: str):
  """
    Parse grpcurl verbose stderr for:
      - Response headers
      - Response trailers
      - Status line (if present)
    Returns dict with keys: 
      request_headers, 
      response_headers, 
      response_trailers, 
      status, 
      other_lines
    """

  lines = stderr_text.splitlines()
  sections = {
      "request_headers": [],
      "response_headers": [],
      "response_trailers": [],
      "status": None,
      "other": []
  }

  mode = None
  # patterns that mark headers/trailers
  header_re = re.compile(r'^\s*([^:]+):\s*(.*)$')
  for ln in lines:
    stripped = ln.strip()
    # detect start of sections
    if stripped.startswith("Request headers set:") or stripped.startswith("Request headers:"):
      mode = "request_headers"
      continue
    if stripped.startswith("Response headers received:") or stripped.startswith(
        "Response headers:"):
      mode = "response_headers"
      continue
    if stripped.startswith("Response trailers received:") or stripped.startswith(
        "Response trailers:"):
      mode = "response_trailers"
      continue
    if stripped.startswith("Status:"):
      # capture the whole status line
      sections["status"] = stripped
      mode = None
      continue
    # if blank line, turn off current header mode
    if stripped == "":
      mode = None
      continue

    # try to parse header-like lines into current mode
    m = header_re.match(ln)
    if m and mode in ("request_headers", "response_headers", "response_trailers"):
      key = m.group(1).strip()
      val = m.group(2).strip()
      sections[mode].append((key, val))
    else:
      # if not a header line, stash into other
      sections["other"].append(ln)
  return sections


def run_grpcurl(args):
  # Build command, ensure grpcurl present
  cmd = ["grpcurl", *args]

  start = time.perf_counter()
  # grpcurl prints verbose metadata to stderr; capture both
  proc = subprocess.run(cmd, capture_output=True, text=True)
  end = time.perf_counter()
  elapsed_ms = (end - start) * 1000.0

  stdout = proc.stdout.strip()
  stderr = proc.stderr.strip()

  parsed_stderr = parse_grpcurl_stderr(stderr)

  return {
      "cmd": " ".join(shlex.quote(p) for p in cmd),
      "rc": proc.returncode,
      "stdout": stdout,
      "stderr": stderr,
      "parsed_stderr": parsed_stderr,
      "elapsed_ms": round(elapsed_ms, 2),
  }


def pretty_print_result(res):
  if console:
    console.rule("[bold blue]grpcurl output[/bold blue]")
    console.print(f"[bold]Command:[/bold] {res['cmd']}")
    console.print(f"[bold]Exit code:[/bold] {res['rc']}")
    console.print(f"[bold]Elapsed:[/bold] {res['elapsed_ms']} ms")

    ps = res["parsed_stderr"]
    if ps["response_headers"]:
      console.rule("[green]Response headers[/green]")
      for k, v in ps["response_headers"]:
        console.print(f"[cyan]{k}[/cyan]: {v}")
    else:
      console.print("[green]Response headers:[/green] (none)")

    if ps["status"]:
      console.print(Panel(ps["status"], title="Status", style="magenta"))

    if ps["response_trailers"]:
      console.rule("[yellow]Response trailers[/yellow]")
      for k, v in ps["response_trailers"]:
        console.print(f"[cyan]{k}[/cyan]: {v}")
    else:
      console.print("[yellow]Response trailers:[/yellow] (none)")

    if res["stdout"]:
      console.rule("[bold green]Response body (stdout)[/bold green]")
      # try parse JSON
      try:
        parsed = json.loads(res["stdout"])
        console.print_json(json.dumps(parsed, indent=2))
      except Exception:
        # print raw
        console.print(Syntax(res["stdout"], "json" if res["stdout"].startswith("{") else "text"))
    if res["stderr"]:
      console.rule("[red]Full stderr (raw)[/red]")
      console.print(res["stderr"])
  else:
    # plain fallback
    print("Command:", res["cmd"])
    print("Exit code:", res["rc"])
    print("Elapsed (ms):", res["elapsed_ms"])
    print("\nResponse headers:")
    for k, v in res["parsed_stderr"]["response_headers"]:
      print(f"  {k}: {v}")
    print("\nStatus:", res["parsed_stderr"]["status"])
    print("\nResponse trailers:")
    for k, v in res["parsed_stderr"]["response_trailers"]:
      print(f"  {k}: {v}")
    print("\nStdout:")
    print(res["stdout"])
    if res["stderr"]:
      print("\nFull stderr:")
      print(res["stderr"])


def main():
  if len(sys.argv) < 2:
    print("Usage: grpcurl_wrapper.py <grpcurl args...>")
    sys.exit(1)

  # ensure -v is present to get headers/trailers in stderr
  args = sys.argv[1:]
  if "-v" not in args and "-vv" not in args:
    # add single -v by default so user sees headers
    args = ["-v", *args]

  res = run_grpcurl(args)
  pretty_print_result(res)
  sys.exit(res["rc"])


if __name__ == "__main__":
  main()
