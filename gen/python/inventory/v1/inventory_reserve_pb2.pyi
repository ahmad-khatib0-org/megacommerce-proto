from inventory.v1 import reservation_get_pb2 as _reservation_get_pb2
from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryReserveRequest(_message.Message):
    __slots__ = ("order_id", "items", "ttl_seconds")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    TTL_SECONDS_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    items: _containers.RepeatedCompositeFieldContainer[InventoryReserveRequestItem]
    ttl_seconds: int
    def __init__(self, order_id: _Optional[str] = ..., items: _Optional[_Iterable[_Union[InventoryReserveRequestItem, _Mapping]]] = ..., ttl_seconds: _Optional[int] = ...) -> None: ...

class InventoryReserveRequestItem(_message.Message):
    __slots__ = ("product_id", "variant_id", "sku", "quantity")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    variant_id: str
    sku: str
    quantity: int
    def __init__(self, product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity: _Optional[int] = ...) -> None: ...

class InventoryReserveResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: InventoryReserveResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[InventoryReserveResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class InventoryReserveResponseData(_message.Message):
    __slots__ = ("reservation_token", "status", "items")
    RESERVATION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    reservation_token: str
    status: _reservation_get_pb2.InventoryReservationStatus
    items: _containers.RepeatedCompositeFieldContainer[_reservation_get_pb2.InventoryReservationListItem]
    def __init__(self, reservation_token: _Optional[str] = ..., status: _Optional[_Union[_reservation_get_pb2.InventoryReservationStatus, str]] = ..., items: _Optional[_Iterable[_Union[_reservation_get_pb2.InventoryReservationListItem, _Mapping]]] = ...) -> None: ...
