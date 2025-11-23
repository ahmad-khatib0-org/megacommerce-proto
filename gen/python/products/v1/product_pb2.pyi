from shared.v1 import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductBulletPoint(_message.Message):
    __slots__ = ("id", "text", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    TEXT_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    text: str
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., text: _Optional[str] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class ProductDetails(_message.Message):
    __slots__ = ("shared", "details")
    class SharedEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    class DetailsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ProductDetailsVariant
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ProductDetailsVariant, _Mapping]] = ...) -> None: ...
    SHARED_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    shared: _containers.MessageMap[str, _types_pb2.Any]
    details: _containers.MessageMap[str, ProductDetailsVariant]
    def __init__(self, shared: _Optional[_Mapping[str, _types_pb2.Any]] = ..., details: _Optional[_Mapping[str, ProductDetailsVariant]] = ...) -> None: ...

class ProductDetailsVariant(_message.Message):
    __slots__ = ("variant_name", "variant_data")
    class VariantDataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    VARIANT_NAME_FIELD_NUMBER: _ClassVar[int]
    VARIANT_DATA_FIELD_NUMBER: _ClassVar[int]
    variant_name: str
    variant_data: _containers.MessageMap[str, _types_pb2.Any]
    def __init__(self, variant_name: _Optional[str] = ..., variant_data: _Optional[_Mapping[str, _types_pb2.Any]] = ...) -> None: ...

class ProductMedia(_message.Message):
    __slots__ = ("media",)
    class MediaEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ProductMediaVariant
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ProductMediaVariant, _Mapping]] = ...) -> None: ...
    MEDIA_FIELD_NUMBER: _ClassVar[int]
    media: _containers.MessageMap[str, ProductMediaVariant]
    def __init__(self, media: _Optional[_Mapping[str, ProductMediaVariant]] = ...) -> None: ...

class ProductMediaVariant(_message.Message):
    __slots__ = ("images", "videos")
    class ImagesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ProductMediaImage
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ProductMediaImage, _Mapping]] = ...) -> None: ...
    class VideosEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ProductMediaVideo
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ProductMediaVideo, _Mapping]] = ...) -> None: ...
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    VIDEOS_FIELD_NUMBER: _ClassVar[int]
    images: _containers.MessageMap[str, ProductMediaImage]
    videos: _containers.MessageMap[str, ProductMediaVideo]
    def __init__(self, images: _Optional[_Mapping[str, ProductMediaImage]] = ..., videos: _Optional[_Mapping[str, ProductMediaVideo]] = ...) -> None: ...

class ProductMediaImage(_message.Message):
    __slots__ = ("format", "url", "size")
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    format: str
    url: str
    size: int
    def __init__(self, format: _Optional[str] = ..., url: _Optional[str] = ..., size: _Optional[int] = ...) -> None: ...

class ProductMediaVideo(_message.Message):
    __slots__ = ("format", "url", "size", "duration")
    FORMAT_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    SIZE_FIELD_NUMBER: _ClassVar[int]
    DURATION_FIELD_NUMBER: _ClassVar[int]
    format: str
    url: str
    size: int
    duration: int
    def __init__(self, format: _Optional[str] = ..., url: _Optional[str] = ..., size: _Optional[int] = ..., duration: _Optional[int] = ...) -> None: ...

class ProductOffer(_message.Message):
    __slots__ = ("offer",)
    class OfferEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: ProductOfferVariant
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[ProductOfferVariant, _Mapping]] = ...) -> None: ...
    OFFER_FIELD_NUMBER: _ClassVar[int]
    offer: _containers.MessageMap[str, ProductOfferVariant]
    def __init__(self, offer: _Optional[_Mapping[str, ProductOfferVariant]] = ...) -> None: ...

class ProductOfferVariant(_message.Message):
    __slots__ = ("sku", "quantity", "price", "offering_condition", "condition_note", "list_price", "has_sale_price", "sale_price", "sale_price_start", "sale_price_end", "has_minimum_orders", "minimum_orders")
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    OFFERING_CONDITION_FIELD_NUMBER: _ClassVar[int]
    CONDITION_NOTE_FIELD_NUMBER: _ClassVar[int]
    LIST_PRICE_FIELD_NUMBER: _ClassVar[int]
    HAS_SALE_PRICE_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_START_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_END_FIELD_NUMBER: _ClassVar[int]
    HAS_MINIMUM_ORDERS_FIELD_NUMBER: _ClassVar[int]
    MINIMUM_ORDERS_FIELD_NUMBER: _ClassVar[int]
    sku: str
    quantity: int
    price: str
    offering_condition: str
    condition_note: str
    list_price: str
    has_sale_price: bool
    sale_price: str
    sale_price_start: str
    sale_price_end: str
    has_minimum_orders: bool
    minimum_orders: _containers.RepeatedCompositeFieldContainer[ProductOfferMinimumOrder]
    def __init__(self, sku: _Optional[str] = ..., quantity: _Optional[int] = ..., price: _Optional[str] = ..., offering_condition: _Optional[str] = ..., condition_note: _Optional[str] = ..., list_price: _Optional[str] = ..., has_sale_price: bool = ..., sale_price: _Optional[str] = ..., sale_price_start: _Optional[str] = ..., sale_price_end: _Optional[str] = ..., has_minimum_orders: bool = ..., minimum_orders: _Optional[_Iterable[_Union[ProductOfferMinimumOrder, _Mapping]]] = ...) -> None: ...

class ProductOfferMinimumOrder(_message.Message):
    __slots__ = ("id", "price", "quantity", "created_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    price: str
    quantity: int
    created_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., price: _Optional[str] = ..., quantity: _Optional[int] = ..., created_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...

class ProductSafety(_message.Message):
    __slots__ = ("safety",)
    class SafetyEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    safety: _containers.MessageMap[str, _types_pb2.Any]
    def __init__(self, safety: _Optional[_Mapping[str, _types_pb2.Any]] = ...) -> None: ...

class ProductTag(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class ProductTags(_message.Message):
    __slots__ = ("tags",)
    TAGS_FIELD_NUMBER: _ClassVar[int]
    tags: _containers.RepeatedCompositeFieldContainer[ProductTag]
    def __init__(self, tags: _Optional[_Iterable[_Union[ProductTag, _Mapping]]] = ...) -> None: ...

class ProductMetadata(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class Product(_message.Message):
    __slots__ = ("id", "user_id", "title", "category", "subcategory", "has_variations", "brand_name", "has_brand_name", "product_id", "has_product_id", "product_id_type", "description", "bullet_points", "currency_code", "fulfillment_type", "processing_time", "details", "media", "offer", "safety", "tags", "metadata", "ar_enabled", "slug", "status", "version", "schema_version", "created_at", "published_at", "updated_at")
    ID_FIELD_NUMBER: _ClassVar[int]
    USER_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    HAS_VARIATIONS_FIELD_NUMBER: _ClassVar[int]
    BRAND_NAME_FIELD_NUMBER: _ClassVar[int]
    HAS_BRAND_NAME_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    HAS_PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_TYPE_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    BULLET_POINTS_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    FULFILLMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    PROCESSING_TIME_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    MEDIA_FIELD_NUMBER: _ClassVar[int]
    OFFER_FIELD_NUMBER: _ClassVar[int]
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    AR_ENABLED_FIELD_NUMBER: _ClassVar[int]
    SLUG_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SCHEMA_VERSION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    PUBLISHED_AT_FIELD_NUMBER: _ClassVar[int]
    UPDATED_AT_FIELD_NUMBER: _ClassVar[int]
    id: str
    user_id: str
    title: str
    category: str
    subcategory: str
    has_variations: bool
    brand_name: str
    has_brand_name: bool
    product_id: str
    has_product_id: bool
    product_id_type: str
    description: str
    bullet_points: _containers.RepeatedCompositeFieldContainer[ProductBulletPoint]
    currency_code: str
    fulfillment_type: str
    processing_time: int
    details: ProductDetails
    media: ProductMedia
    offer: ProductOffer
    safety: ProductSafety
    tags: _containers.RepeatedCompositeFieldContainer[ProductTag]
    metadata: ProductMetadata
    ar_enabled: bool
    slug: str
    status: str
    version: int
    schema_version: int
    created_at: int
    published_at: int
    updated_at: int
    def __init__(self, id: _Optional[str] = ..., user_id: _Optional[str] = ..., title: _Optional[str] = ..., category: _Optional[str] = ..., subcategory: _Optional[str] = ..., has_variations: bool = ..., brand_name: _Optional[str] = ..., has_brand_name: bool = ..., product_id: _Optional[str] = ..., has_product_id: bool = ..., product_id_type: _Optional[str] = ..., description: _Optional[str] = ..., bullet_points: _Optional[_Iterable[_Union[ProductBulletPoint, _Mapping]]] = ..., currency_code: _Optional[str] = ..., fulfillment_type: _Optional[str] = ..., processing_time: _Optional[int] = ..., details: _Optional[_Union[ProductDetails, _Mapping]] = ..., media: _Optional[_Union[ProductMedia, _Mapping]] = ..., offer: _Optional[_Union[ProductOffer, _Mapping]] = ..., safety: _Optional[_Union[ProductSafety, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[ProductTag, _Mapping]]] = ..., metadata: _Optional[_Union[ProductMetadata, _Mapping]] = ..., ar_enabled: bool = ..., slug: _Optional[str] = ..., status: _Optional[str] = ..., version: _Optional[int] = ..., schema_version: _Optional[int] = ..., created_at: _Optional[int] = ..., published_at: _Optional[int] = ..., updated_at: _Optional[int] = ...) -> None: ...
