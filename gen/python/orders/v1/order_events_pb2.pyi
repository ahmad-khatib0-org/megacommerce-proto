from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderEventType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORDER_EVENT_UNKNOWN: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_CREATED: _ClassVar[OrderEventType]
    ORDER_EVENT_PAYMENT_CAPTURED: _ClassVar[OrderEventType]
    ORDER_EVENT_PAYMENT_FAILED: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_SHIPPED: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_DELIVERED: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_CANCELLED: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_ITEM_REFUNDED: _ClassVar[OrderEventType]
    ORDER_EVENT_ORDER_ITEM_REFUND_REQUESTED: _ClassVar[OrderEventType]
    ORDER_EVENT_INVENTORY_RESERVED: _ClassVar[OrderEventType]
    ORDER_EVENT_INVENTORY_RELEASED: _ClassVar[OrderEventType]
ORDER_EVENT_UNKNOWN: OrderEventType
ORDER_EVENT_ORDER_CREATED: OrderEventType
ORDER_EVENT_PAYMENT_CAPTURED: OrderEventType
ORDER_EVENT_PAYMENT_FAILED: OrderEventType
ORDER_EVENT_ORDER_SHIPPED: OrderEventType
ORDER_EVENT_ORDER_DELIVERED: OrderEventType
ORDER_EVENT_ORDER_CANCELLED: OrderEventType
ORDER_EVENT_ORDER_ITEM_REFUNDED: OrderEventType
ORDER_EVENT_ORDER_ITEM_REFUND_REQUESTED: OrderEventType
ORDER_EVENT_INVENTORY_RESERVED: OrderEventType
ORDER_EVENT_INVENTORY_RELEASED: OrderEventType

class OrderEvent(_message.Message):
    __slots__ = ("id", "order_id", "event_type", "event_payload", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    EVENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    EVENT_PAYLOAD_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    order_id: str
    event_type: str
    event_payload: _struct_pb2.Struct
    created_at: int
    def __init__(self, id: _Optional[str] = ..., order_id: _Optional[str] = ..., event_type: _Optional[str] = ..., event_payload: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., created_at: _Optional[int] = ...) -> None: ...
