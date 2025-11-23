from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class InventoryReleaseRequest(_message.Message):
    __slots__ = ("reservation_token",)
    RESERVATION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    reservation_token: str
    def __init__(self, reservation_token: _Optional[str] = ...) -> None: ...

class InventoryReleaseResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
