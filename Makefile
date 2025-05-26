generate:
	rm -rf gen/
	buf generate
	python scripts/add_init_files.py
