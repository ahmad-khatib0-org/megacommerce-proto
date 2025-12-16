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
        "inventory/v1/database.proto",
        "inventory/v1/inventory.proto",
        "inventory/v1/inventory_get.proto",
        "inventory/v1/inventory_list.proto",
        "inventory/v1/inventory_release.proto",
        "inventory/v1/inventory_reserve.proto",
        "inventory/v1/inventory_update.proto",
        "inventory/v1/reservation_get.proto",
        "orders/v1/order.proto",
        "orders/v1/order_cancel.proto",
        "orders/v1/order_create.proto",
        "orders/v1/order_events.proto",
        "orders/v1/order_get.proto",
        "orders/v1/order_idempotency_keys.proto",
        "orders/v1/order_line_items.proto",
        "orders/v1/order_refund.proto",
        "orders/v1/orders.proto",
        "orders/v1/orders_list.proto",
        "orders/v1/payment_method.proto",
        "shared/v1/attachment.proto",
        "shared/v1/error.proto",
        "shared/v1/pagination.proto",
        "shared/v1/struct.proto",
        "shared/v1/time.proto",
        "shared/v1/types.proto",
        "shared/v1/validation.proto",
        "shared/v1/wrappers.proto",
        "users/v1/users.proto",
        "users/v1/cache.proto",
        "users/v1/user.proto",
        "users/v1/supplier.proto",
        "users/v1/token.proto",
        "users/v1/auth.proto",
        "search/v1/search.proto",
        "search/v1/tasks.proto",
        "products/v1/products.proto",
        "products/v1/best_selling_products.proto",
        "products/v1/big_discount_products.proto",
        "products/v1/newly_added_products.proto",
        "products/v1/hero_products.proto",
        "products/v1/product.proto",
        "products/v1/product_categories.proto",
        "products/v1/product_create.proto",
        "products/v1/product_data.proto",
        "products/v1/product_details.proto",
        "products/v1/product_events.proto",
        "products/v1/products_to_like.proto",
        "products/v1/product_snapshot.proto",
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
