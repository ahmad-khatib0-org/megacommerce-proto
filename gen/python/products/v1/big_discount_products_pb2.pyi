from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class BigDiscountProductsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class BigDiscountProductsResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: BigDiscountProductsResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[BigDiscountProductsResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class BigDiscountProductsResponseData(_message.Message):
    __slots__ = ("products",)
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[BigDiscountProductListItem]
    def __init__(self, products: _Optional[_Iterable[_Union[BigDiscountProductListItem, _Mapping]]] = ...) -> None: ...

class BigDiscountProductListItem(_message.Message):
    __slots__ = ("id", "title", "image", "price_cents", "discount_price_cents", "discount_percentage", "sold_count", "variant_id")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    SOLD_COUNT_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    price_cents: int
    discount_price_cents: int
    discount_percentage: int
    sold_count: int
    variant_id: str
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price_cents: _Optional[int] = ..., discount_price_cents: _Optional[int] = ..., discount_percentage: _Optional[int] = ..., sold_count: _Optional[int] = ..., variant_id: _Optional[str] = ...) -> None: ...
