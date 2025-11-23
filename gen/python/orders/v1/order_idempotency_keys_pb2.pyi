from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class OrderIdempotencyKeyStatus(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    ORDER_IDEMPOTENCY_KEY_STATUS_UNSPECIFIED: _ClassVar[OrderIdempotencyKeyStatus]
    ORDER_IDEMPOTENCY_KEY_STATUS_IN_PROGRESS: _ClassVar[OrderIdempotencyKeyStatus]
    ORDER_IDEMPOTENCY_KEY_STATUS_COMPLETED: _ClassVar[OrderIdempotencyKeyStatus]
    ORDER_IDEMPOTENCY_KEY_STATUS_FAILED: _ClassVar[OrderIdempotencyKeyStatus]
ORDER_IDEMPOTENCY_KEY_STATUS_UNSPECIFIED: OrderIdempotencyKeyStatus
ORDER_IDEMPOTENCY_KEY_STATUS_IN_PROGRESS: OrderIdempotencyKeyStatus
ORDER_IDEMPOTENCY_KEY_STATUS_COMPLETED: OrderIdempotencyKeyStatus
ORDER_IDEMPOTENCY_KEY_STATUS_FAILED: OrderIdempotencyKeyStatus

class OrderIdempotencyKey(_message.Message):
    __slots__ = ("id", "idempotency_key", "user_id", "order_id", "status", "created_at", "updated_at", "expires_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    IDEMPOTENCY_KEY_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    EXPIRES_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    idempotency_key: str
    user_id: str
    order_id: str
    status: str
    created_at: int
    updated_at: int
    expires_at: int
    def __init__(self, id: _Optional[str] = ..., idempotency_key: _Optional[str] = ..., user_id: _Optional[str] = ..., order_id: _Optional[str] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., expires_at: _Optional[int] = ...) -> None: ...
