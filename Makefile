.PHONY: generate release clean

VERSION ?=
MSG ?=

# -----------------------------------------------------------------------------
# Generate all protobuf artifacts
# -----------------------------------------------------------------------------
generate:
	@echo "Cleaning previous generated code..."
	rm -rf gen/
	cd wrappers/proto-npm/ && rm -rf dist src/node src/web

	@echo "Generating protobuf files for local module..."
	echo "Using buf at: $(shell which buf)"
	buf --version || true
	
	# Update deps and lockfile 
	buf dep update .

	# Generate your own proto files
	buf generate \
	  --exclude-path node_modules/ \
	  --exclude-path wrappers/proto-npm/node_modules/

	# Generate Envoy API protos (remote module) into gen/cpp/envoy
	buf generate buf.build/envoyproxy/envoy --template buf.gen.envoy.yaml --include-imports

	@echo "Generating Rust protobuf files..."
	find wrappers/proto-crate/src -name "*.rs" -not -name "lib.rs" -o -name "descriptor.bin" -delete
	cargo build
	
	@echo "Generating Python protobuf files..."
	mkdir -p gen/python
	find . -name "*.proto" \
	-not -path "./**/node_modules/*" \
	-not -path "./wrappers/proto-npm/node_modules/*" \
	| while read -r file; do \
		python -m grpc_tools.protoc \
			--proto_path=. \
			--python_out=gen/python \
			--grpc_python_out=gen/python \
			$$file ; \
	done
	python scripts/add_init_files.py

	@echo "Generating TypeScript barrel files..."
	pnpm exec tsx scripts/gen-barrels.ts
	@echo "Compiling TypeScript (tsc)..."
	cd wrappers/proto-npm && pnpm run build

	@echo "✅ Generation complete"

# -----------------------------------------------------------------------------
# Release: generate + commit + tag + push
# -----------------------------------------------------------------------------
release: generate
ifeq ($(VERSION),)
	@echo "❌ ERROR: No version specified for release."
	@exit 1
endif

	@echo "📦 Updating versions to $(VERSION)..."
	sed -i.bak 's/^version = ".*"/version = "$(VERSION)"/' ./wrappers/proto-crate/Cargo.toml && rm -f wrappers/proto-crate/Cargo.toml.bak
	sed -i.bak 's/^\(\s*\)"version": ".*"/\1"version": "$(VERSION)"/' ./wrappers/proto-npm/package.json && rm -f wrappers/proto-npm/package.json.bak
	sed -i.bak 's/^    version=["'"'"'][^"'"'"']*["'"'"'],/    version="$(VERSION)",/' setup.py && rm -f setup.py.bak

	@echo "Committing generated files and tagging release..."
	git add -A
	git commit -m "$${MSG:-chore(proto): generated artifacts for $(VERSION)}" || true

	# create annotated tag (skip if exists)
	if git rev-parse "refs/tags/v$(VERSION)" >/dev/null 2>&1; then \
	  echo "Tag v$(VERSION) already exists — updating commit (force)"; \
	  git tag -f -a "v$(VERSION)" -m "proto gen $(VERSION)"; \
	else \
	  git tag -a "v$(VERSION)" -m "proto gen $(VERSION)"; \
	fi
	git push origin --tags || true
	git push origin main
	@echo "✅ Release complete"


# -----------------------------------------------------------------------------
# Clean generated artifacts
# -----------------------------------------------------------------------------
clean:
	rm -rf gen/
	cd wrappers/proto-crate && cargo clean

