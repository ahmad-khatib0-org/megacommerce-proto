from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryGetRequest(_message.Message):
    __slots__ = ("product_ids", "variant_ids", "skus")
    PRODUCT_IDS_FIELD_NUMBER: _ClassVar[int]
    VARIANT_IDS_FIELD_NUMBER: _ClassVar[int]
    SKUS_FIELD_NUMBER: _ClassVar[int]
    product_ids: _containers.RepeatedScalarFieldContainer[str]
    variant_ids: _containers.RepeatedScalarFieldContainer[str]
    skus: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, product_ids: _Optional[_Iterable[str]] = ..., variant_ids: _Optional[_Iterable[str]] = ..., skus: _Optional[_Iterable[str]] = ...) -> None: ...

class InventoryGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: InventoryGetResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[InventoryGetResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class InventoryGetResponseData(_message.Message):
    __slots__ = ("items",)
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[InventoryItemList]
    def __init__(self, items: _Optional[_Iterable[_Union[InventoryItemList, _Mapping]]] = ...) -> None: ...

class InventoryItemList(_message.Message):
    __slots__ = ("id", "product_id", "variant_id", "sku", "quantity_total", "quantity_reserved", "quantity_available", "location_id", "metadata")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_TOTAL_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_RESERVED_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    LOCATION_ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    id: str
    product_id: str
    variant_id: str
    sku: str
    quantity_total: int
    quantity_reserved: int
    quantity_available: int
    location_id: str
    metadata: _struct_pb2.Struct
    def __init__(self, id: _Optional[str] = ..., product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity_total: _Optional[int] = ..., quantity_reserved: _Optional[int] = ..., quantity_available: _Optional[int] = ..., location_id: _Optional[str] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...
