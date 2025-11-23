from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryReservationStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INVENTORY_RESERVATION_STATUS_UNSPECIFIED: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_RESERVED: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_PARTIALLY_RESERVED: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_NOT_RESERVED: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_PENDING: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_RELEASED: _ClassVar[InventoryReservationStatus]
    INVENTORY_RESERVATION_STATUS_FULFILLED: _ClassVar[InventoryReservationStatus]

class InventoryReservationItemStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INVENTORY_RESERVATION_ITEM_STATUS_UNSPECIFIED: _ClassVar[InventoryReservationItemStatus]
    INVENTORY_RESERVATION_ITEM_STATUS_RESERVED: _ClassVar[InventoryReservationItemStatus]
    INVENTORY_RESERVATION_ITEM_STATUS_PARTIALLY_RESERVED: _ClassVar[InventoryReservationItemStatus]
    INVENTORY_RESERVATION_ITEM_STATUS_NOT_RESERVED: _ClassVar[InventoryReservationItemStatus]
    INVENTORY_RESERVATION_ITEM_STATUS_OUT_OF_STOCK: _ClassVar[InventoryReservationItemStatus]
INVENTORY_RESERVATION_STATUS_UNSPECIFIED: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_RESERVED: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_PARTIALLY_RESERVED: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_NOT_RESERVED: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_PENDING: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_RELEASED: InventoryReservationStatus
INVENTORY_RESERVATION_STATUS_FULFILLED: InventoryReservationStatus
INVENTORY_RESERVATION_ITEM_STATUS_UNSPECIFIED: InventoryReservationItemStatus
INVENTORY_RESERVATION_ITEM_STATUS_RESERVED: InventoryReservationItemStatus
INVENTORY_RESERVATION_ITEM_STATUS_PARTIALLY_RESERVED: InventoryReservationItemStatus
INVENTORY_RESERVATION_ITEM_STATUS_NOT_RESERVED: InventoryReservationItemStatus
INVENTORY_RESERVATION_ITEM_STATUS_OUT_OF_STOCK: InventoryReservationItemStatus

class InventoryReservationGetRequest(_message.Message):
    __slots__ = ("reservation_token",)
    RESERVATION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    reservation_token: str
    def __init__(self, reservation_token: _Optional[str] = ...) -> None: ...

class InventoryReservationGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: InventoryReservationGetResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[InventoryReservationGetResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class InventoryReservationGetResponseData(_message.Message):
    __slots__ = ("reservation_token", "order_id", "status", "expires_at", "items")
    RESERVATION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    reservation_token: str
    order_id: str
    status: InventoryReservationStatus
    expires_at: int
    items: _containers.RepeatedCompositeFieldContainer[InventoryReservationListItem]
    def __init__(self, reservation_token: _Optional[str] = ..., order_id: _Optional[str] = ..., status: _Optional[_Union[InventoryReservationStatus, str]] = ..., expires_at: _Optional[int] = ..., items: _Optional[_Iterable[_Union[InventoryReservationListItem, _Mapping]]] = ...) -> None: ...

class InventoryReservationListItem(_message.Message):
    __slots__ = ("product_id", "variant_id", "sku", "quantity_requested", "quantity_reserved", "status")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_REQUESTED_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_RESERVED_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    variant_id: str
    sku: str
    quantity_requested: int
    quantity_reserved: int
    status: InventoryReservationItemStatus
    def __init__(self, product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity_requested: _Optional[int] = ..., quantity_reserved: _Optional[int] = ..., status: _Optional[_Union[InventoryReservationItemStatus, str]] = ...) -> None: ...
