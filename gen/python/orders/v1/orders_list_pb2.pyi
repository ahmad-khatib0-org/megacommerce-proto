from inventory.v1 import reservation_get_pb2 as _reservation_get_pb2
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
    items: _containers.RepeatedCompositeFieldContainer[OrderLineListItem]
    def __init__(self, id: _Optional[str] = ..., shipping_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., currency_code: _Optional[str] = ..., inventory_reservation_status: _Optional[_Union[_reservation_get_pb2.InventoryReservationStatus, str]] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., items: _Optional[_Iterable[_Union[OrderLineListItem, _Mapping]]] = ...) -> None: ...

class OrderLineListItem(_message.Message):
    __slots__ = ("id", "order_id", "product_id", "variant_id", "title", "quantity", "unit_price_cents", "list_price_cents", "sale_price_cents", "discount_cents", "tax_cents", "shipping_cents", "total_cents", "applied_offer_ids", "status", "estimated_delivery_date", "product_image")
    ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    UNIT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    LIST_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_CENTS_FIELD_NUMBER: _ClassVar[int]
    TAX_CENTS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_CENTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    APPLIED_OFFER_IDS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    ESTIMATED_DELIVERY_DATE_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    order_id: str
    product_id: str
    variant_id: str
    title: str
    quantity: int
    unit_price_cents: int
    list_price_cents: int
    sale_price_cents: int
    discount_cents: int
    tax_cents: int
    shipping_cents: int
    total_cents: int
    applied_offer_ids: _containers.RepeatedScalarFieldContainer[str]
    status: str
    estimated_delivery_date: int
    product_image: str
    def __init__(self, id: _Optional[str] = ..., order_id: _Optional[str] = ..., product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., title: _Optional[str] = ..., quantity: _Optional[int] = ..., unit_price_cents: _Optional[int] = ..., list_price_cents: _Optional[int] = ..., sale_price_cents: _Optional[int] = ..., discount_cents: _Optional[int] = ..., tax_cents: _Optional[int] = ..., shipping_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., applied_offer_ids: _Optional[_Iterable[str]] = ..., status: _Optional[str] = ..., estimated_delivery_date: _Optional[int] = ..., product_image: _Optional[str] = ...) -> None: ...
