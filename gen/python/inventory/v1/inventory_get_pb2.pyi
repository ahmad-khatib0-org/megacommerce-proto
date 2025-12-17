from inventory.v1 import inventory_list_pb2 as _inventory_list_pb2
from shared.v1 import error_pb2 as _error_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryGetRequest(_message.Message):
    __slots__ = ("id",)
    ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    def __init__(self, id: _Optional[str] = ...) -> None: ...

class InventoryGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: InventoryGetResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[InventoryGetResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class InventoryGetResponseData(_message.Message):
    __slots__ = ("item",)
    ITEM_FIELD_NUMBER: _ClassVar[int]
    item: _inventory_list_pb2.InventoryListItem
    def __init__(self, item: _Optional[_Union[_inventory_list_pb2.InventoryListItem, _Mapping]] = ...) -> None: ...
