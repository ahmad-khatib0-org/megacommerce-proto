fn main() -> Result<(), Box<dyn std::error::Error>> {
  let out_dir = "wrappers/proto-crate/src";
  std::fs::create_dir_all(out_dir)?;

  // Verify googleapis exists
  let googleapis_path = "external_libs";
  if !std::path::Path::new(googleapis_path).exists() {
    panic!("Google APIs protos not found. Please run:\n  mkdir -p external_libs && git clone --depth 1 https://github.com/googleapis/googleapis.git external_libs/googleapis");
  }

  tonic_build::configure()
    .out_dir(out_dir)
    .build_server(true)
    .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
    .compile_protos(
      &[
        "common/v1/common.proto",
        "common/v1/config.proto",
        "common/v1/trans.proto",
        "common/v1/types.proto",
        "shared/v1/error.proto",
        "shared/v1/types.proto",
        "user/v1/supplier.proto",
        "user/v1/user.proto",
        "products/v1/products.proto",
        "products/v1/product.proto",
        "products/v1/product_categories.proto",
        "products/v1/product_create.proto",
        "products/v1/product_data.proto",
        "uploader/v1/uploader.proto",
      ],
      &[googleapis_path, "."],
    )?;
  Ok(())
}
