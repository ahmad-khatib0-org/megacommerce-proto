from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BestSellingProductsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class BestSellingProductsResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: BestSellingProductsResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[BestSellingProductsResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class BestSellingProductsResponseData(_message.Message):
    __slots__ = ("products",)
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[BestSellingProductListItem]
    def __init__(self, products: _Optional[_Iterable[_Union[BestSellingProductListItem, _Mapping]]] = ...) -> None: ...

class BestSellingProductListItem(_message.Message):
    __slots__ = ("id", "title", "image", "price_cents", "sale_price_cents", "rating", "sold_count")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    RATING_FIELD_NUMBER: _ClassVar[int]
    SOLD_COUNT_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    price_cents: int
    sale_price_cents: int
    rating: int
    sold_count: int
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price_cents: _Optional[int] = ..., sale_price_cents: _Optional[int] = ..., rating: _Optional[int] = ..., sold_count: _Optional[int] = ...) -> None: ...
