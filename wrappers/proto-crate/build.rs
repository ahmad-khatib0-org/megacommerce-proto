use std::{
  env, fs,
  path::{Path, PathBuf},
};

fn main() -> Result<(), Box<dyn std::error::Error>> {
  // Path to googleapis protos relative to project root
  let googleapis_path = Path::new("../../external_libs");
  if !googleapis_path.exists() {
    panic!("Google APIs protos not found. Please run:\n  mkdir -p external_libs && git clone --depth 1 https://github.com/googleapis/googleapis.git external_libs/googleapis");
  }

  // Output directory for generated Rust files (relative to crate root)
  let out_dir_rs = Path::new("src");
  fs::create_dir_all(&out_dir_rs)?;

  // OUT_DIR provided by cargo for build scripts
  let out_dir_env = env::var("OUT_DIR")?;
  let descriptor_bin_path = PathBuf::from(&out_dir_env).join("descriptor.bin");

  // Calculate the project root (parent of the crate directory)
  // CARGO_MANIFEST_DIR points to wrappers/proto-crate
  let project_root = Path::new(env!("CARGO_MANIFEST_DIR"))
    .parent()
    .and_then(|p| p.parent())
    .expect("Failed to get project root");

  // List proto files relative to project_root, but as absolute strings
  let proto_files = [
    project_root.join("common/v1/common.proto"),
    project_root.join("common/v1/config.proto"),
    project_root.join("common/v1/trans.proto"),
    project_root.join("common/v1/types.proto"),
    project_root.join("shared/v1/error.proto"),
    project_root.join("shared/v1/types.proto"),
    project_root.join("user/v1/supplier.proto"),
    project_root.join("user/v1/user.proto"),
    project_root.join("products/v1/products.proto"),
    project_root.join("products/v1/product.proto"),
  ];

  let proto_files_str: Vec<&str> = proto_files
    .iter()
    .map(|p| p.to_str().expect("Invalid proto file path"))
    .collect();

  tonic_build::configure()
    .out_dir(&out_dir_rs)
    .file_descriptor_set_path(&descriptor_bin_path)
    .build_server(true)
    .compile_protos(&proto_files_str, &[project_root, googleapis_path])?;

  // Write the descriptor.rs file to OUT_DIR for tonic include
  let descriptor_rs = r#"
        pub const FILE_DESCRIPTOR_SET: &[u8] = tonic::include_file_descriptor_set!("descriptor");
    "#;
  fs::write(Path::new(&out_dir_env).join("descriptor.rs"), descriptor_rs)?;

  Ok(())
}

