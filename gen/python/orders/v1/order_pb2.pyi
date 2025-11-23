from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PaymentStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PAYMENT_UNKNOWN: _ClassVar[PaymentStatus]
    PAYMENT_AUTHORIZED: _ClassVar[PaymentStatus]
    PAYMENT_CAPTURED: _ClassVar[PaymentStatus]
    PAYMENT_FAILED: _ClassVar[PaymentStatus]

class OrderStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORDER_STATUS_CREATED: _ClassVar[OrderStatus]
    ORDER_STATUS_CONFIRMED: _ClassVar[OrderStatus]
    ORDER_STATUS_SHIPPED: _ClassVar[OrderStatus]
    ORDER_STATUS_DELIVERED: _ClassVar[OrderStatus]
    ORDER_STATUS_CANCELLED: _ClassVar[OrderStatus]
    ORDER_STATUS_REFUNDED: _ClassVar[OrderStatus]
    ORDER_STATUS_REFUND_REQUESTED: _ClassVar[OrderStatus]
    ORDER_STATUS_PAYMENT_SUCCEEDED: _ClassVar[OrderStatus]
    ORDER_STATUS_PAYMENT_FAILED: _ClassVar[OrderStatus]
PAYMENT_UNKNOWN: PaymentStatus
PAYMENT_AUTHORIZED: PaymentStatus
PAYMENT_CAPTURED: PaymentStatus
PAYMENT_FAILED: PaymentStatus
ORDER_STATUS_CREATED: OrderStatus
ORDER_STATUS_CONFIRMED: OrderStatus
ORDER_STATUS_SHIPPED: OrderStatus
ORDER_STATUS_DELIVERED: OrderStatus
ORDER_STATUS_CANCELLED: OrderStatus
ORDER_STATUS_REFUNDED: OrderStatus
ORDER_STATUS_REFUND_REQUESTED: OrderStatus
ORDER_STATUS_PAYMENT_SUCCEEDED: OrderStatus
ORDER_STATUS_PAYMENT_FAILED: OrderStatus

class Order(_message.Message):
    __slots__ = ("id", "user_id", "currency_code", "subtotal_cents", "shipping_cents", "tax_cents", "discount_cents", "total_cents", "payment_provider", "payment_transaction_id", "payment_status", "payment_provider_response", "payment_fee_cents", "inventory_reservation_status", "product_source", "shipping_address", "billing_address", "metadata", "status", "created_at", "updated_at", "deleted_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    SUBTOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_CENTS_FIELD_NUMBER: _ClassVar[int]
    TAX_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_CENTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_TRANSACTION_ID_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_STATUS_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_PROVIDER_RESPONSE_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_FEE_CENTS_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_RESERVATION_STATUS_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_SOURCE_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    currency_code: str
    subtotal_cents: int
    shipping_cents: int
    tax_cents: int
    discount_cents: int
    total_cents: int
    payment_provider: str
    payment_transaction_id: str
    payment_status: str
    payment_provider_response: _struct_pb2.Struct
    payment_fee_cents: int
    inventory_reservation_status: str
    product_source: str
    shipping_address: _struct_pb2.Struct
    billing_address: _struct_pb2.Struct
    metadata: _struct_pb2.Struct
    status: str
    created_at: int
    updated_at: int
    deleted_at: int
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., currency_code: _Optional[str] = ..., subtotal_cents: _Optional[int] = ..., shipping_cents: _Optional[int] = ..., tax_cents: _Optional[int] = ..., discount_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., payment_provider: _Optional[str] = ..., payment_transaction_id: _Optional[str] = ..., payment_status: _Optional[str] = ..., payment_provider_response: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., payment_fee_cents: _Optional[int] = ..., inventory_reservation_status: _Optional[str] = ..., product_source: _Optional[str] = ..., shipping_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., billing_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., deleted_at: _Optional[int] = ...) -> None: ...
