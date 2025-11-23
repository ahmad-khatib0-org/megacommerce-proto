from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryUpdateOperation(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    INVENTORY_UPDATE_OPERATION_UNSPECIFIED: _ClassVar[InventoryUpdateOperation]
    INVENTORY_UPDATE_OPERATION_SET: _ClassVar[InventoryUpdateOperation]
    INVENTORY_UPDATE_OPERATION_ADD: _ClassVar[InventoryUpdateOperation]
    INVENTORY_UPDATE_OPERATION_SUBTRACT: _ClassVar[InventoryUpdateOperation]
INVENTORY_UPDATE_OPERATION_UNSPECIFIED: InventoryUpdateOperation
INVENTORY_UPDATE_OPERATION_SET: InventoryUpdateOperation
INVENTORY_UPDATE_OPERATION_ADD: InventoryUpdateOperation
INVENTORY_UPDATE_OPERATION_SUBTRACT: InventoryUpdateOperation

class InventoryUpdateRequest(_message.Message):
    __slots__ = ("items", "reason")
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    items: _containers.RepeatedCompositeFieldContainer[InventoryUpdateItem]
    reason: str
    def __init__(self, items: _Optional[_Iterable[_Union[InventoryUpdateItem, _Mapping]]] = ..., reason: _Optional[str] = ...) -> None: ...

class InventoryUpdateItem(_message.Message):
    __slots__ = ("product_id", "variant_id", "sku", "operation", "quantity")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    OPERATION_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    variant_id: str
    sku: str
    operation: InventoryUpdateOperation
    quantity: int
    def __init__(self, product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., operation: _Optional[_Union[InventoryUpdateOperation, str]] = ..., quantity: _Optional[int] = ...) -> None: ...

class InventoryUpdateResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
