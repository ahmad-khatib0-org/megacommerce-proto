##  How to call an RPC with a JSON data file?

```sh 
evans --host localhost --port 50052 -r \
  --package users.v1 \
  --service UsersService \
  --call CreateSupplier \
  --file create_supplier_without_img.json.json

```

