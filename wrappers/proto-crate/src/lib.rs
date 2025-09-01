//! MegaCommerce Protocol Buffer Definitions

#![allow(clippy::all)]

mod envoy {
  pub mod service {
    pub mod auth {
      pub mod v3 {
        include!("envoy/envoy.service.auth.v3.rs");
      }
    }
  }

  pub mod config {
    pub mod core {
      pub mod v3 {
        include!("envoy/envoy.config.core.v3.rs");
      }
    }
  }

  pub mod r#type {
    pub mod v3 {
      include!("envoy/envoy.r#type.v3.rs");
    }
  }

  pub mod google {
    pub mod rpc {
      include!("envoy/google.rpc.rs");
    }

    pub mod protobuf {
      include!("envoy/google.protobuf.rs");
    }
  }

  pub mod udpa {
    pub mod annotations {
      include!("envoy/udpa.annotations.rs");
    }
  }

  pub mod validate {
    include!("envoy/validate.rs");
  }

  pub mod xds {
    pub mod core {
      pub mod v3 {
        include!("envoy/xds.core.v3.rs");
      }
    }
  }
}

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

mod users {
  pub mod v1 {
    include!("users.v1.rs");
  }
}

mod products {
  pub mod v1 {
    include!("products.v1.rs");
  }
}

mod uploader {
  pub mod v1 {
    include!("uploader.v1.rs");
  }
}

// Re-export main types at crate root
pub use common::v1::*;
pub use envoy::*;
pub use products::v1::*;
pub use shared::v1::*;
pub use uploader::v1::*;
pub use users::v1::*;
