from products.v1 import product_pb2 as _product_pb2
from shared.v1 import error_pb2 as _error_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductSnapshot(_message.Message):
    __slots__ = ("id", "title", "version", "schema_version", "offer")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_VERSION_FIELD_NUMBER: _ClassVar[int]
    OFFER_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    version: int
    schema_version: int
    offer: _product_pb2.ProductOffer
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., version: _Optional[int] = ..., schema_version: _Optional[int] = ..., offer: _Optional[_Union[_product_pb2.ProductOffer, _Mapping]] = ...) -> None: ...

class ProductSnapshotRequest(_message.Message):
    __slots__ = ("product_id",)
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    def __init__(self, product_id: _Optional[str] = ...) -> None: ...

class ProductSnapshotResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductSnapshot
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductSnapshot, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
