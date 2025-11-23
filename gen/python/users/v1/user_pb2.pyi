from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class UserImageMetadata(_message.Message):
    __slots__ = ("mime", "height", "widht", "size_bytes")
    MIME_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    WIDHT_FIELD_NUMBER: _ClassVar[int]
    SIZE_BYTES_FIELD_NUMBER: _ClassVar[int]
    mime: str
    height: int
    widht: int
    size_bytes: int
    def __init__(self, mime: _Optional[str] = ..., height: _Optional[int] = ..., widht: _Optional[int] = ..., size_bytes: _Optional[int] = ...) -> None: ...

class User(_message.Message):
    __slots__ = ("id", "username", "first_name", "last_name", "email", "user_type", "image", "image_metadata", "membership", "is_email_verified", "password", "auth_data", "auth_service", "roles", "props", "notify_props", "last_password_update", "last_picture_update", "failed_attempts", "locale", "mfa_active", "mfa_secret", "last_activity_at", "last_login", "created_at", "updated_at", "deleted_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    FIRST_NAME_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    USER_TYPE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_METADATA_FIELD_NUMBER: _ClassVar[int]
    MEMBERSHIP_FIELD_NUMBER: _ClassVar[int]
    IS_EMAIL_VERIFIED_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    AUTH_DATA_FIELD_NUMBER: _ClassVar[int]
    AUTH_SERVICE_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    PROPS_FIELD_NUMBER: _ClassVar[int]
    NOTIFY_PROPS_FIELD_NUMBER: _ClassVar[int]
    LAST_PASSWORD_UPDATE_FIELD_NUMBER: _ClassVar[int]
    LAST_PICTURE_UPDATE_FIELD_NUMBER: _ClassVar[int]
    FAILED_ATTEMPTS_FIELD_NUMBER: _ClassVar[int]
    LOCALE_FIELD_NUMBER: _ClassVar[int]
    MFA_ACTIVE_FIELD_NUMBER: _ClassVar[int]
    MFA_SECRET_FIELD_NUMBER: _ClassVar[int]
    LAST_ACTIVITY_AT_FIELD_NUMBER: _ClassVar[int]
    LAST_LOGIN_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    DELETED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    username: str
    first_name: str
    last_name: str
    email: str
    user_type: str
    image: str
    image_metadata: UserImageMetadata
    membership: str
    is_email_verified: bool
    password: str
    auth_data: str
    auth_service: str
    roles: _containers.RepeatedScalarFieldContainer[str]
    props: _containers.RepeatedScalarFieldContainer[str]
    notify_props: _containers.RepeatedScalarFieldContainer[str]
    last_password_update: int
    last_picture_update: int
    failed_attempts: int
    locale: str
    mfa_active: bool
    mfa_secret: str
    last_activity_at: int
    last_login: int
    created_at: int
    updated_at: int
    deleted_at: int
    def __init__(self, id: _Optional[str] = ..., username: _Optional[str] = ..., first_name: _Optional[str] = ..., last_name: _Optional[str] = ..., email: _Optional[str] = ..., user_type: _Optional[str] = ..., image: _Optional[str] = ..., image_metadata: _Optional[_Union[UserImageMetadata, _Mapping]] = ..., membership: _Optional[str] = ..., is_email_verified: bool = ..., password: _Optional[str] = ..., auth_data: _Optional[str] = ..., auth_service: _Optional[str] = ..., roles: _Optional[_Iterable[str]] = ..., props: _Optional[_Iterable[str]] = ..., notify_props: _Optional[_Iterable[str]] = ..., last_password_update: _Optional[int] = ..., last_picture_update: _Optional[int] = ..., failed_attempts: _Optional[int] = ..., locale: _Optional[str] = ..., mfa_active: bool = ..., mfa_secret: _Optional[str] = ..., last_activity_at: _Optional[int] = ..., last_login: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., deleted_at: _Optional[int] = ...) -> None: ...
