from shared.v1 import error_pb2 as _error_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class SupplierProfileRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class SupplierProfile(_message.Message):
    __slots__ = ("id", "full_name", "email", "username", "image", "user_type", "membership", "is_email_verified", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    FULL_NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    MEMBERSHIP_FIELD_NUMBER: _ClassVar[int]
    IS_EMAIL_VERIFIED_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    full_name: str
    email: str
    username: str
    image: str
    user_type: str
    membership: str
    is_email_verified: bool
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., full_name: _Optional[str] = ..., email: _Optional[str] = ..., username: _Optional[str] = ..., image: _Optional[str] = ..., user_type: _Optional[str] = ..., membership: _Optional[str] = ..., is_email_verified: bool = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class SupplierProfileResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: SupplierProfile
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[SupplierProfile, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
