use std::{env, fs, path::Path, path::PathBuf};

fn main() -> Result<(), Box<dyn std::error::Error>> {
  let out_dir = "wrappers/proto-crate/src";
  std::fs::create_dir_all(out_dir)?;

  let out_dir_env = env::var("OUT_DIR")?;
  let descriptor_bin_path = PathBuf::from(&out_dir_env).join("descriptor.bin");

  // Verify googleapis exists
  let googleapis_path = "external_libs";
  if !std::path::Path::new(googleapis_path).exists() {
    panic!("Google APIs protos not found. Please run:\n  mkdir -p external_libs && git clone --depth 1 https://github.com/googleapis/googleapis.git external_libs/googleapis");
  }

  tonic_build::configure()
    .out_dir(out_dir)
    .file_descriptor_set_path(&descriptor_bin_path)
    .build_server(true)
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
      ],
      &[googleapis_path, "."],
    )?;

  // Create a module with include_file_descriptor_set!
  let descriptor_rs = r#"
        pub const FILE_DESCRIPTOR_SET: &[u8] = tonic::include_file_descriptor_set!("descriptor");
    "#;
  fs::write(Path::new(&out_dir_env).join("descriptor.rs"), descriptor_rs)?;

  Ok(())
}
