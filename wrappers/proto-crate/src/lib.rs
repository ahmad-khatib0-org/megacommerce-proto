//! MegaCommerce Protocol Buffer Definitions

#![allow(clippy::all)]

// Auto-include all generated files
mod common {
  pub mod v1 {
    include!("common.v1.rs");
  }
}

mod shared {
  pub mod v1 {
    include!("shared.v1.rs");
  }
}

mod user {
  pub mod v1 {
    include!("user.v1.rs");
  }
}

mod products {
  pub mod v1 {
    include!("products.v1.rs");
  }
}

// Re-export main types at crate root
pub use common::v1::*;
pub use products::v1::*;
pub use shared::v1::*;
pub use user::v1::*;

// This makes it available for server reflection
include!(concat!(env!("OUT_DIR"), "/descriptor.rs"));
