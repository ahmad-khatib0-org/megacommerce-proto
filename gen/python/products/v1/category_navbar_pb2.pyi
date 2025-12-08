from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class CategoryNavbarRequest(_message.Message):
    __slots__ = ("category_id", "subcategory_id")
    CATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    category_id: str
    subcategory_id: str
    def __init__(self, category_id: _Optional[str] = ..., subcategory_id: _Optional[str] = ...) -> None: ...

class CategoryNavbarResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: CategoryNavbarResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[CategoryNavbarResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class CategoryNavbarResponseData(_message.Message):
    __slots__ = ("category_id", "category_name", "subcategory_id", "subcategory_name", "recommended_products")
    CATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_NAME_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_ID_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_NAME_FIELD_NUMBER: _ClassVar[int]
    RECOMMENDED_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    category_id: str
    category_name: str
    subcategory_id: str
    subcategory_name: str
    recommended_products: _containers.RepeatedCompositeFieldContainer[CategoryNavbarProductItem]
    def __init__(self, category_id: _Optional[str] = ..., category_name: _Optional[str] = ..., subcategory_id: _Optional[str] = ..., subcategory_name: _Optional[str] = ..., recommended_products: _Optional[_Iterable[_Union[CategoryNavbarProductItem, _Mapping]]] = ...) -> None: ...

class CategoryNavbarProductItem(_message.Message):
    __slots__ = ("id", "variant_id", "title", "image", "price_cents", "discount_price_cents", "discount_percentage", "sold_by")
    ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    SOLD_BY_FIELD_NUMBER: _ClassVar[int]
    id: str
    variant_id: str
    title: str
    image: str
    price_cents: int
    discount_price_cents: int
    discount_percentage: int
    sold_by: str
    def __init__(self, id: _Optional[str] = ..., variant_id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price_cents: _Optional[int] = ..., discount_price_cents: _Optional[int] = ..., discount_percentage: _Optional[int] = ..., sold_by: _Optional[str] = ...) -> None: ...
