from conan import ConanFile
from conan.tools.files import copy
import os


class MegaCommerceProtoConan(ConanFile):
  name = "megacommerce-proto"
  version = "0.1.54"  # update per release
  license = "MIT"
  url = "https://github.com/ahmad-khatib0-org/megacommerce-proto"
  description = "C++ Protobuf generated code for MegaCommerce"
  topics = ("protobuf", "grpc", "megacommerce")
  settings = "os", "compiler", "build_type", "arch"
  exports_sources = "gen/cpp/**"
  no_copy_source = True

  def package(self):
    # Copy main proto-generated folders
    for folder in ["common", "products", "shared", "uploader", "users"]:
      src_path = os.path.join(self.source_folder, "gen", "cpp", folder)
      dst_path_include = os.path.join("include", folder)
      dst_path_lib = os.path.join("lib", folder)
      if os.path.exists(src_path):
        copy(self, "*.h", src=src_path, dst=dst_path_include, keep_path=True)
        copy(self, "*.cc", src=src_path, dst=dst_path_lib, keep_path=True)

    # Copy only the needed envoy proto files
    envoy_src = os.path.join(self.source_folder, "gen", "cpp", "envoy", "envoy", "service", "auth",
                             "v3")
    if os.path.exists(envoy_src):
      copy(self,
           "*.h",
           src=envoy_src,
           dst=os.path.join("include", "envoy", "service", "auth", "v3"),
           keep_path=True)
      copy(self,
           "*.cc",
           src=envoy_src,
           dst=os.path.join("lib", "envoy", "service", "auth", "v3"),
           keep_path=True)

  def package_info(self):
    self.cpp_info.includedirs = ["include"]
    self.cpp_info.libdirs = ["lib"]
