from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import pagination_pb2 as _pagination_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductsCategoryRequest(_message.Message):
    __slots__ = ("category_id", "subcategory_ids", "pagination")
    CATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_IDS_FIELD_NUMBER: _ClassVar[int]
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    category_id: str
    subcategory_ids: _containers.RepeatedScalarFieldContainer[str]
    pagination: _pagination_pb2.PaginationRequest
    def __init__(self, category_id: _Optional[str] = ..., subcategory_ids: _Optional[_Iterable[str]] = ..., pagination: _Optional[_Union[_pagination_pb2.PaginationRequest, _Mapping]] = ...) -> None: ...

class ProductsCategoryResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductsCategoryResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductsCategoryResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ProductsCategoryResponseData(_message.Message):
    __slots__ = ("products", "pagination")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[ProductsCategoryItem]
    pagination: _pagination_pb2.PaginationResponse
    def __init__(self, products: _Optional[_Iterable[_Union[ProductsCategoryItem, _Mapping]]] = ..., pagination: _Optional[_Union[_pagination_pb2.PaginationResponse, _Mapping]] = ...) -> None: ...

class ProductsCategoryItem(_message.Message):
    __slots__ = ("id", "title", "image", "variant_id", "price_cents", "discount_price_cents", "discount_percentage", "sold_by", "rating", "sold_count", "created_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    SOLD_BY_FIELD_NUMBER: _ClassVar[int]
    RATING_FIELD_NUMBER: _ClassVar[int]
    SOLD_COUNT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    variant_id: str
    price_cents: int
    discount_price_cents: int
    discount_percentage: int
    sold_by: str
    rating: float
    sold_count: int
    created_at: int
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., variant_id: _Optional[str] = ..., price_cents: _Optional[int] = ..., discount_price_cents: _Optional[int] = ..., discount_percentage: _Optional[int] = ..., sold_by: _Optional[str] = ..., rating: _Optional[float] = ..., sold_count: _Optional[int] = ..., created_at: _Optional[int] = ...) -> None: ...
