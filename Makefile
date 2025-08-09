.PHONY: generate clean

generate:
	rm -rf gen/
	cd wrappers/proto-npm/ && rm -rf dist src/node src/web
	
	@echo "Generating protobuf files..."
	echo "Using buf at: $(shell which buf)"
	buf --version
	buf generate \
	  --exclude-path external_libs/ \
	  --exclude-path node_modules/ \
	  --exclude-path wrappers/proto-npm/node_modules/
	
	@echo "Generating Rust protobuf files..."
	find wrappers/proto-crate/src -name "*.rs" -not -name "lib.rs" -o -name "descriptor.bin" -delete
	cargo build
	
	@echo "Generating Python protobuf files..."
	mkdir gen/python
	find . -name "*.proto" \
		-not -path "./external_libs/*" \
		-not -path "./**/node_modules/*" \
	| while read -r file; do \
		python -m grpc_tools.protoc \
			--proto_path=. \
			--proto_path=external_libs/googleapis \
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

clean:
	rm -rf gen/
	cd wrappers/proto-crate && cargo clean

