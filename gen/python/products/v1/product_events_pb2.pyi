from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ChangeFeed(_message.Message):
    __slots__ = ("after", "before", "updated", "resolved")
    AFTER_FIELD_NUMBER: _ClassVar[int]
    BEFORE_FIELD_NUMBER: _ClassVar[int]
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    RESOLVED_FIELD_NUMBER: _ClassVar[int]
    after: ProductOutbox
    before: ProductOutbox
    updated: int
    resolved: int
    def __init__(self, after: _Optional[_Union[ProductOutbox, _Mapping]] = ..., before: _Optional[_Union[ProductOutbox, _Mapping]] = ..., updated: _Optional[int] = ..., resolved: _Optional[int] = ...) -> None: ...

class ProductOutbox(_message.Message):
    __slots__ = ("id", "product_id", "type", "processed_at", "processing_attempts", "last_error", "created_at", "updated_at", "created", "updated", "deleted")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    PROCESSED_AT_FIELD_NUMBER: _ClassVar[int]
    PROCESSING_ATTEMPTS_FIELD_NUMBER: _ClassVar[int]
    LAST_ERROR_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    CREATED_FIELD_NUMBER: _ClassVar[int]
    UPDATED_FIELD_NUMBER: _ClassVar[int]
    DELETED_FIELD_NUMBER: _ClassVar[int]
    id: str
    product_id: str
    type: str
    processed_at: int
    processing_attempts: int
    last_error: str
    created_at: int
    updated_at: int
    created: ProductCreatedEvent
    updated: ProductUpdatedEvent
    deleted: ProductDeletedEvent
    def __init__(self, id: _Optional[str] = ..., product_id: _Optional[str] = ..., type: _Optional[str] = ..., processed_at: _Optional[int] = ..., processing_attempts: _Optional[int] = ..., last_error: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ..., created: _Optional[_Union[ProductCreatedEvent, _Mapping]] = ..., updated: _Optional[_Union[ProductUpdatedEvent, _Mapping]] = ..., deleted: _Optional[_Union[ProductDeletedEvent, _Mapping]] = ...) -> None: ...

class ProductCreatedEvent(_message.Message):
    __slots__ = ("title", "description")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    title: str
    description: str
    def __init__(self, title: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class ProductUpdatedEvent(_message.Message):
    __slots__ = ("title", "description")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    title: str
    description: str
    def __init__(self, title: _Optional[str] = ..., description: _Optional[str] = ...) -> None: ...

class ProductDeletedEvent(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...
