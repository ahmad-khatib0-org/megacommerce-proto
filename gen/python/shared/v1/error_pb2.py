# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: shared/v1/error.proto
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
    'shared/v1/error.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from shared.v1 import types_pb2 as shared_dot_v1_dot_types__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15shared/v1/error.proto\x12\tshared.v1\x1a\x15shared/v1/types.proto\"\xea\x01\n\x08\x41ppError\x12\n\n\x02id\x18\x01 \x01(\t\x12\x0f\n\x07message\x18\x02 \x01(\t\x12\x16\n\x0e\x64\x65tailed_error\x18\x03 \x01(\t\x12\x12\n\nrequest_id\x18\x04 \x01(\t\x12\x13\n\x0bstatus_code\x18\x05 \x01(\x05\x12\r\n\x05where\x18\x06 \x01(\t\x12\x18\n\x10skip_translation\x18\x07 \x01(\x08\x12$\n\x06params\x18\x08 \x01(\x0b\x32\x14.shared.v1.StringMap\x12\x31\n\rnested_params\x18\t \x01(\x0b\x32\x1a.shared.v1.NestedStringMapBp\n\x1aorg.megacommerce.shared.v1B\nErrorProtoZCgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/shared/v1;v1\xf8\x01\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'shared.v1.error_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\032org.megacommerce.shared.v1B\nErrorProtoZCgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/shared/v1;v1\370\001\001'
  _globals['_APPERROR']._serialized_start=60
  _globals['_APPERROR']._serialized_end=294
# @@protoc_insertion_point(module_scope)
