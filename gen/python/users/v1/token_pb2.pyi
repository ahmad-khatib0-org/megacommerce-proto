from shared.v1 import struct_pb2 as _struct_pb2
from shared.v1 import time_pb2 as _time_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class JwtClaims(_message.Message):
    __slots__ = ("iss", "sub", "aud", "exp", "nbf", "iat", "jti", "custom")
    class CustomEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _struct_pb2.Value
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_struct_pb2.Value, _Mapping]] = ...) -> None: ...
    ISS_FIELD_NUMBER: _ClassVar[int]
    SUB_FIELD_NUMBER: _ClassVar[int]
    AUD_FIELD_NUMBER: _ClassVar[int]
    EXP_FIELD_NUMBER: _ClassVar[int]
    NBF_FIELD_NUMBER: _ClassVar[int]
    IAT_FIELD_NUMBER: _ClassVar[int]
    JTI_FIELD_NUMBER: _ClassVar[int]
    CUSTOM_FIELD_NUMBER: _ClassVar[int]
    iss: str
    sub: str
    aud: _containers.RepeatedScalarFieldContainer[str]
    exp: _time_pb2.Timestamp
    nbf: _time_pb2.Timestamp
    iat: _time_pb2.Timestamp
    jti: str
    custom: _containers.MessageMap[str, _struct_pb2.Value]
    def __init__(self, iss: _Optional[str] = ..., sub: _Optional[str] = ..., aud: _Optional[_Iterable[str]] = ..., exp: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ..., nbf: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ..., iat: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ..., jti: _Optional[str] = ..., custom: _Optional[_Mapping[str, _struct_pb2.Value]] = ...) -> None: ...

class Token(_message.Message):
    __slots__ = ("id", "user_id", "token", "type", "used", "created_at", "expires_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    USED_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    token: str
    type: str
    used: bool
    created_at: int
    expires_at: int
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., token: _Optional[str] = ..., type: _Optional[str] = ..., used: bool = ..., created_at: _Optional[int] = ..., expires_at: _Optional[int] = ...) -> None: ...
