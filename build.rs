fn main() -> Result<(), Box<dyn std::error::Error>> {
  let out_dir = "wrappers/proto-crate/src";
  std::fs::create_dir_all(out_dir)?;

  let includes = &[
    "third_party/proto/envoyproxy/api", // Envoy protos
    "third_party/proto/googleapis",
    "third_party/proto/udpa",
    "third_party/proto/validate",
  ];

  tonic_build::configure()
    .out_dir(out_dir)
    .build_server(true)
    .type_attribute(".", "#[derive(serde::Serialize, serde::Deserialize)]")
    .field_attribute(
      "products.v1.ProductSubcategoryAttribute.string_array",
      "#[serde(default)]",
    )
    .file_descriptor_set_path(format!("{}/descriptor.bin", out_dir)) // Add this line
    .compile_protos(
      &[
        "common/v1/common.proto",
        "common/v1/config.proto",
        "common/v1/trans.proto",
        "common/v1/types.proto",
        "shared/v1/error.proto",
        "shared/v1/types.proto",
        "shared/v1/attachment.proto",
        "shared/v1/struct.proto",
        "shared/v1/time.proto",
        "shared/v1/validation.proto",
        "users/v1/users.proto",
        "users/v1/cache.proto",
        "users/v1/user.proto",
        "users/v1/supplier.proto",
        "users/v1/token.proto",
        "users/v1/auth.proto",
        "products/v1/products.proto",
        "products/v1/product.proto",
        "products/v1/product_categories.proto",
        "products/v1/product_create.proto",
        "products/v1/product_data.proto",
        "products/v1/product_list.proto",
        "uploader/v1/uploader.proto",
        "uploader/v1/config.proto",
      ],
      &["."],
    )?;

  // Generate Envoy external_auth proto + minimal dependencies
  tonic_build::configure()
    .out_dir(format!("{}/envoy", out_dir))
    .build_server(true)
    .compile_well_known_types(true)
    .file_descriptor_set_path(format!("{}/envoy_descriptor.bin", out_dir))
    .compile_protos(
      &["envoy/service/auth/v3/external_auth.proto"], // path relative to include folder
      includes,
    )?;

  Ok(())
}
