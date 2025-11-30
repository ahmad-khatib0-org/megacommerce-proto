from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductShippingMethod(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRODUCT_SHIPPING_METHOD_UNSPECIFIED: _ClassVar[ProductShippingMethod]
    PRODUCT_SHIPPING_METHOD_STANDARD: _ClassVar[ProductShippingMethod]
    PRODUCT_SHIPPING_METHOD_EXPRESS: _ClassVar[ProductShippingMethod]

class ProductItemMetadataType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    PRODUCT_ITEM_METADATA_TYPE_UNSPECIFIED: _ClassVar[ProductItemMetadataType]
    PRODUCT_ITEM_METADATA_TYPE_COUPON: _ClassVar[ProductItemMetadataType]
    PRODUCT_ITEM_METADATA_TYPE_NEW_SHOPPER: _ClassVar[ProductItemMetadataType]
    PRODUCT_ITEM_METADATA_TYPE_BUNDLE: _ClassVar[ProductItemMetadataType]
PRODUCT_SHIPPING_METHOD_UNSPECIFIED: ProductShippingMethod
PRODUCT_SHIPPING_METHOD_STANDARD: ProductShippingMethod
PRODUCT_SHIPPING_METHOD_EXPRESS: ProductShippingMethod
PRODUCT_ITEM_METADATA_TYPE_UNSPECIFIED: ProductItemMetadataType
PRODUCT_ITEM_METADATA_TYPE_COUPON: ProductItemMetadataType
PRODUCT_ITEM_METADATA_TYPE_NEW_SHOPPER: ProductItemMetadataType
PRODUCT_ITEM_METADATA_TYPE_BUNDLE: ProductItemMetadataType

class ProductPrice(_message.Message):
    __slots__ = ("amount", "formatted", "discount_price", "save_amount", "save_percentage")
    AMOUNT_FIELD_NUMBER: _ClassVar[int]
    FORMATTED_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PRICE_FIELD_NUMBER: _ClassVar[int]
    SAVE_AMOUNT_FIELD_NUMBER: _ClassVar[int]
    SAVE_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    amount: float
    formatted: str
    discount_price: float
    save_amount: str
    save_percentage: str
    def __init__(self, amount: _Optional[float] = ..., formatted: _Optional[str] = ..., discount_price: _Optional[float] = ..., save_amount: _Optional[str] = ..., save_percentage: _Optional[str] = ...) -> None: ...

class ProductShippingInfo(_message.Message):
    __slots__ = ("free", "method", "origin", "min_estimated_days", "max_estimated_days")
    FREE_FIELD_NUMBER: _ClassVar[int]
    METHOD_FIELD_NUMBER: _ClassVar[int]
    ORIGIN_FIELD_NUMBER: _ClassVar[int]
    MIN_ESTIMATED_DAYS_FIELD_NUMBER: _ClassVar[int]
    MAX_ESTIMATED_DAYS_FIELD_NUMBER: _ClassVar[int]
    free: bool
    method: ProductShippingMethod
    origin: str
    min_estimated_days: int
    max_estimated_days: int
    def __init__(self, free: bool = ..., method: _Optional[_Union[ProductShippingMethod, str]] = ..., origin: _Optional[str] = ..., min_estimated_days: _Optional[int] = ..., max_estimated_days: _Optional[int] = ...) -> None: ...

class ProductItemMetadata(_message.Message):
    __slots__ = ("type", "label")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    LABEL_FIELD_NUMBER: _ClassVar[int]
    type: ProductItemMetadataType
    label: str
    def __init__(self, type: _Optional[_Union[ProductItemMetadataType, str]] = ..., label: _Optional[str] = ...) -> None: ...

class ProductItem(_message.Message):
    __slots__ = ("id", "title", "image", "price", "rating", "sold", "meta")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    RATING_FIELD_NUMBER: _ClassVar[int]
    SOLD_FIELD_NUMBER: _ClassVar[int]
    META_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    price: ProductPrice
    rating: float
    sold: int
    meta: _containers.RepeatedCompositeFieldContainer[ProductItemMetadata]
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price: _Optional[_Union[ProductPrice, _Mapping]] = ..., rating: _Optional[float] = ..., sold: _Optional[int] = ..., meta: _Optional[_Iterable[_Union[ProductItemMetadata, _Mapping]]] = ...) -> None: ...

class ProductListItem(_message.Message):
    __slots__ = ("id", "user_id", "title", "description", "slug", "price", "currency_code", "ar_enabled")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    SLUG_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    AR_ENABLED_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    title: str
    description: str
    slug: str
    price: str
    currency_code: str
    ar_enabled: bool
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., title: _Optional[str] = ..., description: _Optional[str] = ..., slug: _Optional[str] = ..., price: _Optional[str] = ..., currency_code: _Optional[str] = ..., ar_enabled: bool = ...) -> None: ...

class ProductListRequest(_message.Message):
    __slots__ = ("page", "last_id", "order_price")
    PAGE_FIELD_NUMBER: _ClassVar[int]
    LAST_ID_FIELD_NUMBER: _ClassVar[int]
    ORDER_PRICE_FIELD_NUMBER: _ClassVar[int]
    page: int
    last_id: str
    order_price: _types_pb2.OrderDirection
    def __init__(self, page: _Optional[int] = ..., last_id: _Optional[str] = ..., order_price: _Optional[_Union[_types_pb2.OrderDirection, _Mapping]] = ...) -> None: ...

class ProductListResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductListResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductListResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ProductListResponseData(_message.Message):
    __slots__ = ("data",)
    DATA_FIELD_NUMBER: _ClassVar[int]
    data: _containers.RepeatedCompositeFieldContainer[ProductListItem]
    def __init__(self, data: _Optional[_Iterable[_Union[ProductListItem, _Mapping]]] = ...) -> None: ...
