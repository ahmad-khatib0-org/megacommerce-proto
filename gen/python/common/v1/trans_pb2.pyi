from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class TranslationsGetRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class TranslationsGetResponse(_message.Message):
    __slots__ = ("data", "error")
    class DataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: TranslationElements
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[TranslationElements, _Mapping]] = ...) -> None: ...
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _containers.MessageMap[str, TranslationElements]
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Mapping[str, TranslationElements]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class TranslationsForLangGetRequest(_message.Message):
    __slots__ = ("lang",)
    LANG_FIELD_NUMBER: _ClassVar[int]
    lang: str
    def __init__(self, lang: _Optional[str] = ...) -> None: ...

class TranslationsForLangGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: TranslationElements
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[TranslationElements, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class TranslationElement(_message.Message):
    __slots__ = ("id", "tr")
    ID_FIELD_NUMBER: _ClassVar[int]
    TR_FIELD_NUMBER: _ClassVar[int]
    id: str
    tr: str
    def __init__(self, id: _Optional[str] = ..., tr: _Optional[str] = ...) -> None: ...

class TranslationElements(_message.Message):
    __slots__ = ("trans",)
    TRANS_FIELD_NUMBER: _ClassVar[int]
    trans: _containers.RepeatedCompositeFieldContainer[TranslationElement]
    def __init__(self, trans: _Optional[_Iterable[_Union[TranslationElement, _Mapping]]] = ...) -> None: ...
