# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: users/v1/users.proto
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
    'users/v1/users.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from users.v1 import supplier_pb2 as users_dot_v1_dot_supplier__pb2
from users.v1 import auth_pb2 as users_dot_v1_dot_auth__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x14users/v1/users.proto\x12\x08users.v1\x1a\x17users/v1/supplier.proto\x1a\x13users/v1/auth.proto2\xc1\x01\n\x0cUsersService\x12S\n\x0e\x43reateSupplier\x12\x1f.users.v1.SupplierCreateRequest\x1a .users.v1.SupplierCreateResponse\x12\\\n\x11\x45mailConfirmation\x12\".users.v1.EmailConfirmationRequest\x1a#.users.v1.EmailConfirmationResponseBn\n\x19org.megacommerce.users.v1B\nUsersProtoZBgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/users/v1;v1\xf8\x01\x01\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'users.v1.users_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  _globals['DESCRIPTOR']._loaded_options = None
  _globals['DESCRIPTOR']._serialized_options = b'\n\031org.megacommerce.users.v1B\nUsersProtoZBgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/users/v1;v1\370\001\001'
  _globals['_USERSSERVICE']._serialized_start=81
  _globals['_USERSSERVICE']._serialized_end=274
# @@protoc_insertion_point(module_scope)
