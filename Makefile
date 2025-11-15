.PHONY: generate release clean publish

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

	buf generate 

	@echo "Generating Rust protobuf files..."
	find wrappers/proto-crate/src -name "*.rs" -not -name "lib.rs" -o -name "descriptor.bin" -o -name "envoy_descriptor.bin" -delete
	cargo build --verbose
	
	@echo "Generating Python protobuf files..."
	mkdir -p gen/python
	find . -name "*.proto" \
	-not -path "./**/node_modules/*" \
	-not -path "./wrappers/proto-npm/node_modules/*" \
	-not -path "./third_party/*" \
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
	@echo "Building proto CJS artifacts..."
	@node ./scripts/build-cjs.js ./wrappers/proto-npm/dist

	@echo "✅ Generation complete"

# -----------------------------------------------------------------------------
# Release: commit + tag + push
# -----------------------------------------------------------------------------
release:
ifeq ($(VERSION),)
	@echo "❌ ERROR: No version specified for release."
	@exit 1
endif

	@echo "📦 Updating versions to $(VERSION)..."
	sed -i.bak 's/^version = ".*"/version = "$(VERSION)"/' ./wrappers/proto-crate/Cargo.toml && rm -f wrappers/proto-crate/Cargo.toml.bak
	sed -i.bak 's/^\(\s*\)"version": ".*"/\1"version": "$(VERSION)"/' ./wrappers/proto-npm/package.json && rm -f wrappers/proto-npm/package.json.bak
	sed -i.bak 's/^    version=["'"'"'][^"'"'"']*["'"'"'],/    version="$(VERSION)",/' setup.py && rm -f setup.py.bak

	@echo "Generating updated Cargo.lock..."
	cargo check  # This will update Cargo.lock with the new version

	@echo "Waiting some seconds before commiting..."
	sleep 5

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

publish:
	@echo "Publishing npm package..."
	cd wrappers/proto-npm && npm publish
	# cd ./wrappers/proto-npm && npm publish --registry http://localhost:4873/ --access=restricted
	@echo "Publishing rust crate..."
	cd wrappers/proto-crate && cargo publish
	@echo "Publishing done successfully"

# -----------------------------------------------------------------------------
# Clean generated artifacts
# -----------------------------------------------------------------------------
clean:
	rm -rf gen/
	cd wrappers/proto-crate && cargo clean

