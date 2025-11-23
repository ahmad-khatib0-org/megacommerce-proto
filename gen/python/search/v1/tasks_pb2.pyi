from shared.v1 import struct_pb2 as _struct_pb2
from shared.v1 import time_pb2 as _time_pb2
from shared.v1 import wrappers_pb2 as _wrappers_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TaskCreateResponse(_message.Message):
    __slots__ = ("task_uid", "index_uid", "status", "type", "enqueued_at")
    TASK_UID_FIELD_NUMBER: _ClassVar[int]
    INDEX_UID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ENQUEUED_AT_FIELD_NUMBER: _ClassVar[int]
    task_uid: int
    index_uid: str
    status: str
    type: str
    enqueued_at: _time_pb2.Timestamp
    def __init__(self, task_uid: _Optional[int] = ..., index_uid: _Optional[str] = ..., status: _Optional[str] = ..., type: _Optional[str] = ..., enqueued_at: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TaskGetResponse(_message.Message):
    __slots__ = ("uid", "index_uid", "status", "type", "canceled_by", "details", "error", "duration", "enqueued_at", "started_at", "finished_at")
    UID_FIELD_NUMBER: _ClassVar[int]
    INDEX_UID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    CANCELED_BY_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    ENQUEUED_AT_FIELD_NUMBER: _ClassVar[int]
    STARTED_AT_FIELD_NUMBER: _ClassVar[int]
    FINISHED_AT_FIELD_NUMBER: _ClassVar[int]
    uid: int
    index_uid: str
    status: str
    type: str
    canceled_by: _wrappers_pb2.UInt64Value
    details: _struct_pb2.Struct
    error: TaskGetResponseError
    duration: str
    enqueued_at: _time_pb2.Timestamp
    started_at: _time_pb2.Timestamp
    finished_at: _time_pb2.Timestamp
    def __init__(self, uid: _Optional[int] = ..., index_uid: _Optional[str] = ..., status: _Optional[str] = ..., type: _Optional[str] = ..., canceled_by: _Optional[_Union[_wrappers_pb2.UInt64Value, _Mapping]] = ..., details: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., error: _Optional[_Union[TaskGetResponseError, _Mapping]] = ..., duration: _Optional[str] = ..., enqueued_at: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ..., started_at: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ..., finished_at: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ...) -> None: ...

class TaskGetResponseError(_message.Message):
    __slots__ = ("message", "code", "type", "link", "details")
    MESSAGE_FIELD_NUMBER: _ClassVar[int]
    CODE_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    LINK_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    message: str
    code: str
    type: str
    link: str
    details: _struct_pb2.Struct
    def __init__(self, message: _Optional[str] = ..., code: _Optional[str] = ..., type: _Optional[str] = ..., link: _Optional[str] = ..., details: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ...) -> None: ...

class TaskDeleteResponse(_message.Message):
    __slots__ = ("task_uid", "index_uid", "status", "type", "enqueued_at")
    TASK_UID_FIELD_NUMBER: _ClassVar[int]
    INDEX_UID_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    ENQUEUED_AT_FIELD_NUMBER: _ClassVar[int]
    task_uid: int
    index_uid: str
    status: str
    type: str
    enqueued_at: _time_pb2.Timestamp
    def __init__(self, task_uid: _Optional[int] = ..., index_uid: _Optional[str] = ..., status: _Optional[str] = ..., type: _Optional[str] = ..., enqueued_at: _Optional[_Union[_time_pb2.Timestamp, _Mapping]] = ...) -> None: ...
