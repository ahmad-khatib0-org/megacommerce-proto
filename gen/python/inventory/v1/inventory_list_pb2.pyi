from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import pagination_pb2 as _pagination_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryListRequest(_message.Message):
    __slots__ = ("pagination",)
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    pagination: _pagination_pb2.PaginationRequest
    def __init__(self, pagination: _Optional[_Union[_pagination_pb2.PaginationRequest, _Mapping]] = ...) -> None: ...

class InventoryListResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: InventoryListResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[InventoryListResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class InventoryListResponseData(_message.Message):
    __slots__ = ("items", "pagination")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[InventoryListItem]
    pagination: _pagination_pb2.PaginationResponse
    def __init__(self, items: _Optional[_Iterable[_Union[InventoryListItem, _Mapping]]] = ..., pagination: _Optional[_Union[_pagination_pb2.PaginationResponse, _Mapping]] = ...) -> None: ...

class InventoryListItem(_message.Message):
    __slots__ = ("id", "product_id", "variant_id", "sku", "product_name", "quantity_total", "quantity_available", "quantity_reserved", "status", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_NAME_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_TOTAL_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_RESERVED_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    product_id: str
    variant_id: str
    sku: str
    product_name: str
    quantity_total: int
    quantity_available: int
    quantity_reserved: int
    status: str
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., product_name: _Optional[str] = ..., quantity_total: _Optional[int] = ..., quantity_available: _Optional[int] = ..., quantity_reserved: _Optional[int] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...
