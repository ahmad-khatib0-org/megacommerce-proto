from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class CachedUserData(_message.Message):
    __slots__ = ("is_oauth", "roles", "props")
    IS_OAUTH_FIELD_NUMBER: _ClassVar[int]
    ROLES_FIELD_NUMBER: _ClassVar[int]
    PROPS_FIELD_NUMBER: _ClassVar[int]
    is_oauth: bool
    roles: str
    props: str
    def __init__(self, is_oauth: bool = ..., roles: _Optional[str] = ..., props: _Optional[str] = ...) -> None: ...

class CachedTokenStatus(_message.Message):
    __slots__ = ("dev_id", "last_checked", "revoked")
    DEV_ID_FIELD_NUMBER: _ClassVar[int]
    LAST_CHECKED_FIELD_NUMBER: _ClassVar[int]
    REVOKED_FIELD_NUMBER: _ClassVar[int]
    dev_id: str
    last_checked: int
    revoked: bool
    def __init__(self, dev_id: _Optional[str] = ..., last_checked: _Optional[int] = ..., revoked: bool = ...) -> None: ...
