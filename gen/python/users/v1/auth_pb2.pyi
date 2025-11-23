from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class EmailConfirmationRequest(_message.Message):
    __slots__ = ("email", "token", "token_id")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ID_FIELD_NUMBER: _ClassVar[int]
    email: str
    token: str
    token_id: str
    def __init__(self, email: _Optional[str] = ..., token: _Optional[str] = ..., token_id: _Optional[str] = ...) -> None: ...

class EmailConfirmationResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class PasswordForgotRequest(_message.Message):
    __slots__ = ("email",)
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    email: str
    def __init__(self, email: _Optional[str] = ...) -> None: ...

class PasswordForgotResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class LoginRequest(_message.Message):
    __slots__ = ("email", "password", "mfa", "login_challenge")
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    MFA_FIELD_NUMBER: _ClassVar[int]
    LOGIN_CHALLENGE_FIELD_NUMBER: _ClassVar[int]
    email: str
    password: str
    mfa: str
    login_challenge: str
    def __init__(self, email: _Optional[str] = ..., password: _Optional[str] = ..., mfa: _Optional[str] = ..., login_challenge: _Optional[str] = ...) -> None: ...

class LoginResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
