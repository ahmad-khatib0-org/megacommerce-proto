.PHONY: generate clean
	
generate:
	rm -rf gen/
	@echo "Generating protobuf files..."
	buf generate --exclude-path external_libs/
	
	@echo "Generating Rust protobuf files..."
	find wrappers/proto-crate/src -name "*.rs" -not -name "lib.rs" -o -name "descriptor.bin" -o -name "build.rs" -delete
	cd wrappers/proto-crate && cargo build
	
	@echo "Generating Python protobuf files..."
	find . -name "*.proto" -not -path "./external_libs/*" | while read -r file; do \
		python -m grpc_tools.protoc \
			--proto_path=. \
			--python_out=gen/python \
			--grpc_python_out=gen/python \
			$$file ; \
	done
	python scripts/add_init_files.py
	@echo "✅ Generation complete"

clean:
	rm -rf gen/
	cd wrappers/proto-crate && cargo clean
