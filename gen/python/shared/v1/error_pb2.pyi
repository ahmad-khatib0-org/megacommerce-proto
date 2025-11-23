from shared.v1 import types_pb2 as _types_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AppError(_message.Message):
    __slots__ = ("id", "message", "detailed_error", "request_id", "status_code", "where", "skip_translation", "errors", "errors_nested")
    ID_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    DETAILED_ERROR_FIELD_NUMBER: _ClassVar[int]
    REQUEST_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_CODE_FIELD_NUMBER: _ClassVar[int]
    WHERE_FIELD_NUMBER: _ClassVar[int]
    SKIP_TRANSLATION_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    ERRORS_NESTED_FIELD_NUMBER: _ClassVar[int]
    id: str
    message: str
    detailed_error: str
    request_id: str
    status_code: int
    where: str
    skip_translation: bool
    errors: _types_pb2.StringMap
    errors_nested: _types_pb2.NestedStringMap
    def __init__(self, id: _Optional[str] = ..., message: _Optional[str] = ..., detailed_error: _Optional[str] = ..., request_id: _Optional[str] = ..., status_code: _Optional[int] = ..., where: _Optional[str] = ..., skip_translation: bool = ..., errors: _Optional[_Union[_types_pb2.StringMap, _Mapping]] = ..., errors_nested: _Optional[_Union[_types_pb2.NestedStringMap, _Mapping]] = ...) -> None: ...
