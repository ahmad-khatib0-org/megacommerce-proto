from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class NewlyAddedProductsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class NewlyAddedProductsResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: NewlyAddedProductsResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[NewlyAddedProductsResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class NewlyAddedProductsResponseData(_message.Message):
    __slots__ = ("products",)
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[NewlyAddedProductListItem]
    def __init__(self, products: _Optional[_Iterable[_Union[NewlyAddedProductListItem, _Mapping]]] = ...) -> None: ...

class NewlyAddedProductListItem(_message.Message):
    __slots__ = ("id", "title", "image", "price_cents", "sale_price_cents", "discount_percentage", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    price_cents: int
    sale_price_cents: int
    discount_percentage: int
    created_at: str
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price_cents: _Optional[int] = ..., sale_price_cents: _Optional[int] = ..., discount_percentage: _Optional[int] = ..., created_at: _Optional[str] = ...) -> None: ...
