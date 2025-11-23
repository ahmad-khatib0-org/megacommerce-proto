from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryMovementType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INVENTORY_MOVEMENT_TYPE_UNSPECIFIED: _ClassVar[InventoryMovementType]
    INVENTORY_MOVEMENT_TYPE_IN: _ClassVar[InventoryMovementType]
    INVENTORY_MOVEMENT_TYPE_OUT: _ClassVar[InventoryMovementType]
    INVENTORY_MOVEMENT_TYPE_ADJUSTMENT: _ClassVar[InventoryMovementType]
    INVENTORY_MOVEMENT_TYPE_RESERVATION: _ClassVar[InventoryMovementType]
    INVENTORY_MOVEMENT_TYPE_RELEASE: _ClassVar[InventoryMovementType]
INVENTORY_MOVEMENT_TYPE_UNSPECIFIED: InventoryMovementType
INVENTORY_MOVEMENT_TYPE_IN: InventoryMovementType
INVENTORY_MOVEMENT_TYPE_OUT: InventoryMovementType
INVENTORY_MOVEMENT_TYPE_ADJUSTMENT: InventoryMovementType
INVENTORY_MOVEMENT_TYPE_RESERVATION: InventoryMovementType
INVENTORY_MOVEMENT_TYPE_RELEASE: InventoryMovementType

class InventoryItem(_message.Message):
    __slots__ = ("id", "product_id", "variant_id", "sku", "quantity_available", "quantity_reserved", "quantity_total", "location_id", "metadata", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_AVAILABLE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_RESERVED_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_TOTAL_FIELD_NUMBER: _ClassVar[int]
    LOCATION_ID_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    product_id: str
    variant_id: str
    sku: str
    quantity_available: int
    quantity_reserved: int
    quantity_total: int
    location_id: str
    metadata: _struct_pb2.Struct
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity_available: _Optional[int] = ..., quantity_reserved: _Optional[int] = ..., quantity_total: _Optional[int] = ..., location_id: _Optional[str] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class InventoryReservation(_message.Message):
    __slots__ = ("id", "reservation_token", "order_id", "status", "expires_at", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    RESERVATION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    reservation_token: str
    order_id: str
    status: str
    expires_at: int
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., reservation_token: _Optional[str] = ..., order_id: _Optional[str] = ..., status: _Optional[str] = ..., expires_at: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class InventoryReservationItem(_message.Message):
    __slots__ = ("id", "reservation_id", "inventory_item_id", "quantity", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    RESERVATION_ID_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_ITEM_ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    reservation_id: str
    inventory_item_id: str
    quantity: int
    created_at: int
    def __init__(self, id: _Optional[str] = ..., reservation_id: _Optional[str] = ..., inventory_item_id: _Optional[str] = ..., quantity: _Optional[int] = ..., created_at: _Optional[int] = ...) -> None: ...

class InventoryMovement(_message.Message):
    __slots__ = ("id", "inventory_item_id", "movement_type", "quantity", "reference_id", "reason", "metadata", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_ITEM_ID_FIELD_NUMBER: _ClassVar[int]
    MOVEMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_ID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    inventory_item_id: str
    movement_type: str
    quantity: int
    reference_id: str
    reason: str
    metadata: _struct_pb2.Struct
    created_at: int
    def __init__(self, id: _Optional[str] = ..., inventory_item_id: _Optional[str] = ..., movement_type: _Optional[str] = ..., quantity: _Optional[int] = ..., reference_id: _Optional[str] = ..., reason: _Optional[str] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., created_at: _Optional[int] = ...) -> None: ...
