from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Attachment(_message.Message):
    __slots__ = ("id", "filename", "file_type", "file_size", "file_extension", "base64", "exif_orientation", "crop", "metadata", "data", "mime", "checksum", "url", "duration_seconds", "error")
    ID_FIELD_NUMBER: _ClassVar[int]
    FILENAME_FIELD_NUMBER: _ClassVar[int]
    FILE_TYPE_FIELD_NUMBER: _ClassVar[int]
    FILE_SIZE_FIELD_NUMBER: _ClassVar[int]
    FILE_EXTENSION_FIELD_NUMBER: _ClassVar[int]
    BASE64_FIELD_NUMBER: _ClassVar[int]
    EXIF_ORIENTATION_FIELD_NUMBER: _ClassVar[int]
    CROP_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    MIME_FIELD_NUMBER: _ClassVar[int]
    CHECKSUM_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    DURATION_SECONDS_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    id: str
    filename: str
    file_type: str
    file_size: int
    file_extension: str
    base64: str
    exif_orientation: int
    crop: Crop
    metadata: _struct_pb2.Struct
    data: bytes
    mime: str
    checksum: str
    url: str
    duration_seconds: int
    error: str
    def __init__(self, id: _Optional[str] = ..., filename: _Optional[str] = ..., file_type: _Optional[str] = ..., file_size: _Optional[int] = ..., file_extension: _Optional[str] = ..., base64: _Optional[str] = ..., exif_orientation: _Optional[int] = ..., crop: _Optional[_Union[Crop, _Mapping]] = ..., metadata: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., data: _Optional[bytes] = ..., mime: _Optional[str] = ..., checksum: _Optional[str] = ..., url: _Optional[str] = ..., duration_seconds: _Optional[int] = ..., error: _Optional[str] = ...) -> None: ...

class Attachments(_message.Message):
    __slots__ = ("attachments",)
    ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    attachments: _containers.RepeatedCompositeFieldContainer[Attachment]
    def __init__(self, attachments: _Optional[_Iterable[_Union[Attachment, _Mapping]]] = ...) -> None: ...

class Crop(_message.Message):
    __slots__ = ("x", "y", "width", "height", "aspect_ratio")
    X_FIELD_NUMBER: _ClassVar[int]
    Y_FIELD_NUMBER: _ClassVar[int]
    WIDTH_FIELD_NUMBER: _ClassVar[int]
    HEIGHT_FIELD_NUMBER: _ClassVar[int]
    ASPECT_RATIO_FIELD_NUMBER: _ClassVar[int]
    x: float
    y: float
    width: float
    height: float
    aspect_ratio: float
    def __init__(self, x: _Optional[float] = ..., y: _Optional[float] = ..., width: _Optional[float] = ..., height: _Optional[float] = ..., aspect_ratio: _Optional[float] = ...) -> None: ...
