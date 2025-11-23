from inventory.v1 import reservation_get_pb2 as _reservation_get_pb2
from orders.v1 import order_line_items_pb2 as _order_line_items_pb2
from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderItem(_message.Message):
    __slots__ = ("id", "subtotal_cents", "shipping_cents", "tax_cents", "discount_cents", "total_cents", "currency_code", "line_items", "shipping_address", "billing_address", "payment", "inventory_reservation_status", "status", "created_at", "updated_at", "product_source", "product_version", "metadata")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    SUBTOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_CENTS_FIELD_NUMBER: _ClassVar[int]
    TAX_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_CENTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    LINE_ITEMS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_RESERVATION_STATUS_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_SOURCE_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_VERSION_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    id: str
    subtotal_cents: int
    shipping_cents: int
    tax_cents: int
    discount_cents: int
    total_cents: int
    currency_code: str
    line_items: _containers.RepeatedCompositeFieldContainer[_order_line_items_pb2.OrderLineItem]
    shipping_address: _struct_pb2.Struct
    billing_address: _struct_pb2.Struct
    payment: PaymentSnapshot
    inventory_reservation_status: _reservation_get_pb2.InventoryReservationStatus
    status: str
    created_at: int
    updated_at: int
    product_source: str
    product_version: str
    metadata: _containers.ScalarMap[str, str]
    def __init__(self, id: _Optional[str] = ..., subtotal_cents: _Optional[int] = ..., shipping_cents: _Optional[int] = ..., tax_cents: _Optional[int] = ..., discount_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., currency_code: _Optional[str] = ..., line_items: _Optional[_Iterable[_Union[_order_line_items_pb2.OrderLineItem, _Mapping]]] = ..., shipping_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., billing_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., payment: _Optional[_Union[PaymentSnapshot, _Mapping]] = ..., inventory_reservation_status: _Optional[_Union[_reservation_get_pb2.InventoryReservationStatus, str]] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., product_source: _Optional[str] = ..., product_version: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ...) -> None: ...

class PaymentSnapshot(_message.Message):
    __slots__ = ("provider", "transaction_id", "status", "payment_method", "provider_response", "fee_cents")
    PROVIDER_FIELD_NUMBER: _ClassVar[int]
    TRANSACTION_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_FIELD_NUMBER: _ClassVar[int]
    PROVIDER_RESPONSE_FIELD_NUMBER: _ClassVar[int]
    FEE_CENTS_FIELD_NUMBER: _ClassVar[int]
    provider: str
    transaction_id: str
    status: str
    payment_method: str
    provider_response: _struct_pb2.Struct
    fee_cents: int
    def __init__(self, provider: _Optional[str] = ..., transaction_id: _Optional[str] = ..., status: _Optional[str] = ..., payment_method: _Optional[str] = ..., provider_response: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., fee_cents: _Optional[int] = ...) -> None: ...

class OrderGetRequest(_message.Message):
    __slots__ = ("order_id",)
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    def __init__(self, order_id: _Optional[str] = ...) -> None: ...

class OrderGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: OrderItem
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[OrderItem, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
