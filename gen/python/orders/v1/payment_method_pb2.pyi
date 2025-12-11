from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class PaymentMethod(_message.Message):
    __slots__ = ("id", "user_id", "type", "name", "last_four", "expiry_date", "is_default", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    EXPIRY_DATE_FIELD_NUMBER: _ClassVar[int]
    IS_DEFAULT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    type: str
    name: str
    last_four: str
    expiry_date: str
    is_default: bool
    created_at: int
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., type: _Optional[str] = ..., name: _Optional[str] = ..., last_four: _Optional[str] = ..., expiry_date: _Optional[str] = ..., is_default: bool = ..., created_at: _Optional[int] = ...) -> None: ...

class PaymentAddMethodRequest(_message.Message):
    __slots__ = ("type", "name", "last_four", "expiry_date", "token")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    LAST_FOUR_FIELD_NUMBER: _ClassVar[int]
    EXPIRY_DATE_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    type: str
    name: str
    last_four: str
    expiry_date: str
    token: str
    def __init__(self, type: _Optional[str] = ..., name: _Optional[str] = ..., last_four: _Optional[str] = ..., expiry_date: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class PaymentAddMethodResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: PaymentMethod
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[PaymentMethod, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class PaymentRemoveMethodRequest(_message.Message):
    __slots__ = ("payment_method_id",)
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    payment_method_id: str
    def __init__(self, payment_method_id: _Optional[str] = ...) -> None: ...

class PaymentRemoveMethodResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: PaymentRemoveMethodData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[PaymentRemoveMethodData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class PaymentRemoveMethodData(_message.Message):
    __slots__ = ("success",)
    SUCCESS_FIELD_NUMBER: _ClassVar[int]
    success: bool
    def __init__(self, success: bool = ...) -> None: ...

class PaymentMakeDefaultRequest(_message.Message):
    __slots__ = ("payment_method_id",)
    PAYMENT_METHOD_ID_FIELD_NUMBER: _ClassVar[int]
    payment_method_id: str
    def __init__(self, payment_method_id: _Optional[str] = ...) -> None: ...

class PaymentMakeDefaultResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: PaymentMethod
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[PaymentMethod, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class PaymentsListRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class PaymentsListResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: PaymentsListData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[PaymentsListData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class PaymentsListData(_message.Message):
    __slots__ = ("payment_methods",)
    PAYMENT_METHODS_FIELD_NUMBER: _ClassVar[int]
    payment_methods: _containers.RepeatedCompositeFieldContainer[PaymentMethod]
    def __init__(self, payment_methods: _Optional[_Iterable[_Union[PaymentMethod, _Mapping]]] = ...) -> None: ...
