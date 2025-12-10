from inventory.v1 import reservation_get_pb2 as _reservation_get_pb2
from orders.v1 import order_line_items_pb2 as _order_line_items_pb2
from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import pagination_pb2 as _pagination_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrdersListRequest(_message.Message):
    __slots__ = ("pagination", "status")
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    pagination: _pagination_pb2.PaginationRequest
    status: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, pagination: _Optional[_Union[_pagination_pb2.PaginationRequest, _Mapping]] = ..., status: _Optional[_Iterable[str]] = ...) -> None: ...

class OrdersListResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: OrdersListResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[OrdersListResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class OrdersListResponseData(_message.Message):
    __slots__ = ("orders", "pagination")
    ORDERS_FIELD_NUMBER: _ClassVar[int]
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    orders: _containers.RepeatedCompositeFieldContainer[OrderListItem]
    pagination: _pagination_pb2.PaginationResponse
    def __init__(self, orders: _Optional[_Iterable[_Union[OrderListItem, _Mapping]]] = ..., pagination: _Optional[_Union[_pagination_pb2.PaginationResponse, _Mapping]] = ...) -> None: ...

class OrderListItem(_message.Message):
    __slots__ = ("id", "shipping_cents", "total_cents", "currency_code", "inventory_reservation_status", "status", "created_at", "items")
    ID_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_CENTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_RESERVATION_STATUS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    id: str
    shipping_cents: int
    total_cents: int
    currency_code: str
    inventory_reservation_status: _reservation_get_pb2.InventoryReservationStatus
    status: str
    created_at: int
    items: _containers.RepeatedCompositeFieldContainer[_order_line_items_pb2.OrderLineItem]
    def __init__(self, id: _Optional[str] = ..., shipping_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., currency_code: _Optional[str] = ..., inventory_reservation_status: _Optional[_Union[_reservation_get_pb2.InventoryReservationStatus, str]] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., items: _Optional[_Iterable[_Union[_order_line_items_pb2.OrderLineItem, _Mapping]]] = ...) -> None: ...
