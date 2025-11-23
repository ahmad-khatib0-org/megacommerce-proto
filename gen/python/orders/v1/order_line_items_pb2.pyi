from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderLineItemStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORDER_LINE_ITEM_STATUS_CREATED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_CONFIRMED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_SHIPPED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_DELIVERED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_CANCELLED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_REFUNDED: _ClassVar[OrderLineItemStatus]
    ORDER_LINE_ITEM_STATUS_REFUND_REQUESTED: _ClassVar[OrderLineItemStatus]
ORDER_LINE_ITEM_STATUS_CREATED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_CONFIRMED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_SHIPPED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_DELIVERED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_CANCELLED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_REFUNDED: OrderLineItemStatus
ORDER_LINE_ITEM_STATUS_REFUND_REQUESTED: OrderLineItemStatus

class OrderLineItem(_message.Message):
    __slots__ = ("id", "order_id", "product_id", "variant_id", "sku", "title", "attributes", "quantity", "unit_price_cents", "list_price_cents", "sale_price_cents", "discount_cents", "tax_cents", "total_cents", "applied_offer_ids", "product_snapshot", "status", "shipping_cents", "created_at", "updated_at")
    class AttributesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    UNIT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    LIST_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_CENTS_FIELD_NUMBER: _ClassVar[int]
    TAX_CENTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_CENTS_FIELD_NUMBER: _ClassVar[int]
    APPLIED_OFFER_IDS_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_SNAPSHOT_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_CENTS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    order_id: str
    product_id: str
    variant_id: str
    sku: str
    title: str
    attributes: _containers.ScalarMap[str, str]
    quantity: int
    unit_price_cents: int
    list_price_cents: int
    sale_price_cents: int
    discount_cents: int
    tax_cents: int
    total_cents: int
    applied_offer_ids: _containers.RepeatedScalarFieldContainer[str]
    product_snapshot: _struct_pb2.Struct
    status: str
    shipping_cents: int
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., order_id: _Optional[str] = ..., product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., title: _Optional[str] = ..., attributes: _Optional[_Mapping[str, str]] = ..., quantity: _Optional[int] = ..., unit_price_cents: _Optional[int] = ..., list_price_cents: _Optional[int] = ..., sale_price_cents: _Optional[int] = ..., discount_cents: _Optional[int] = ..., tax_cents: _Optional[int] = ..., total_cents: _Optional[int] = ..., applied_offer_ids: _Optional[_Iterable[str]] = ..., product_snapshot: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., status: _Optional[str] = ..., shipping_cents: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...
