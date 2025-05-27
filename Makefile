generate:
	rm -rf gen/
	buf generate
	python scripts/add_init_files.py
	# Generate gRPC stubs using grpc_tools
	find . -name "*.proto" | while read -r file; do \
		python -m grpc_tools.protoc \
			--proto_path=. \
			--python_out=gen/python \
			--grpc_python_out=gen/python \
			$$file ; \
	done

