# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: user/v1/supplier.proto
# Protobuf Python Version: 5.29.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    0,
    '',
    'user/v1/supplier.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from shared.v1 import error_pb2 as shared_dot_v1_dot_error__pb2
from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x16user/v1/supplier.proto\x12\x07user.v1\x1a\x15shared/v1/error.proto\x1a\x1bgoogle/protobuf/empty.proto\"\x85\x01\n\x15SupplierCreateRequest\x12\x10\n\x08username\x18\x01 \x01(\t\x12\r\n\x05\x65mail\x18\x02 \x01(\t\x12\x12\n\nfirst_name\x18\x03 \x01(\t\x12\x11\n\tlast_name\x18\x04 \x01(\t\x12\x10\n\x08password\x18\x05 \x01(\t\x12\x12\n\nmembership\x18\x06 \x01(\t\"r\n\x16SupplierCreateResponse\x12&\n\x04\x64\x61ta\x18\x01 \x01(\x0b\x32\x16.google.protobuf.EmptyH\x00\x12$\n\x05\x65rror\x18\x02 \x01(\x0b\x32\x13.shared.v1.AppErrorH\x00\x42\n\n\x08responseBo\n\x18org.megacommerce.user.v1B\rSupplierProtoZAgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/user/v1;v1\xf8\x01\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'user.v1.supplier_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\030org.megacommerce.user.v1B\rSupplierProtoZAgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/user/v1;v1\370\001\001'
  _globals['_SUPPLIERCREATEREQUEST']._serialized_start=88
  _globals['_SUPPLIERCREATEREQUEST']._serialized_end=221
  _globals['_SUPPLIERCREATERESPONSE']._serialized_start=223
  _globals['_SUPPLIERCREATERESPONSE']._serialized_end=337
# @@protoc_insertion_point(module_scope)
