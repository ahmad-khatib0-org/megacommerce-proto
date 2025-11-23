from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderCancelRequest(_message.Message):
    __slots__ = ("order_id", "reason", "refund")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    REFUND_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    reason: str
    refund: bool
    def __init__(self, order_id: _Optional[str] = ..., reason: _Optional[str] = ..., refund: bool = ...) -> None: ...

class OrderCancelResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
