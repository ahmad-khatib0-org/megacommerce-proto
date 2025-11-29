from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import struct_pb2 as _struct_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class HeroProduct(_message.Message):
    __slots__ = ("id", "products_data", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_DATA_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    products_data: _struct_pb2.Struct
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., products_data: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class HeroProductsRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class HeroProductsResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: HeroProductsResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[HeroProductsResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class HeroProductsResponseData(_message.Message):
    __slots__ = ("category_slider", "welcome_deals_slider")
    CATEGORY_SLIDER_FIELD_NUMBER: _ClassVar[int]
    WELCOME_DEALS_SLIDER_FIELD_NUMBER: _ClassVar[int]
    category_slider: CategorySlider
    welcome_deals_slider: WelcomeDealsSlider
    def __init__(self, category_slider: _Optional[_Union[CategorySlider, _Mapping]] = ..., welcome_deals_slider: _Optional[_Union[WelcomeDealsSlider, _Mapping]] = ...) -> None: ...

class CategorySlider(_message.Message):
    __slots__ = ("title", "subtitle", "button_text", "products")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    SUBTITLE_FIELD_NUMBER: _ClassVar[int]
    BUTTON_TEXT_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    title: str
    subtitle: str
    button_text: str
    products: _containers.RepeatedCompositeFieldContainer[HeroProductListItem]
    def __init__(self, title: _Optional[str] = ..., subtitle: _Optional[str] = ..., button_text: _Optional[str] = ..., products: _Optional[_Iterable[_Union[HeroProductListItem, _Mapping]]] = ...) -> None: ...

class WelcomeDealsSlider(_message.Message):
    __slots__ = ("title", "subtitle", "button_text", "products")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    SUBTITLE_FIELD_NUMBER: _ClassVar[int]
    BUTTON_TEXT_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    title: str
    subtitle: str
    button_text: str
    products: _containers.RepeatedCompositeFieldContainer[HeroProductListItem]
    def __init__(self, title: _Optional[str] = ..., subtitle: _Optional[str] = ..., button_text: _Optional[str] = ..., products: _Optional[_Iterable[_Union[HeroProductListItem, _Mapping]]] = ...) -> None: ...

class HeroProductListItem(_message.Message):
    __slots__ = ("id", "title", "image", "price_cents", "discount_price_cents", "discount_percentage")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PRICE_CENTS_FIELD_NUMBER: _ClassVar[int]
    DISCOUNT_PERCENTAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    image: str
    price_cents: int
    discount_price_cents: int
    discount_percentage: int
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., image: _Optional[str] = ..., price_cents: _Optional[int] = ..., discount_price_cents: _Optional[int] = ..., discount_percentage: _Optional[int] = ...) -> None: ...
