from shared.v1 import attachment_pb2 as _attachment_pb2
from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductCreateTag(_message.Message):
    __slots__ = ("id", "name")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    id: int
    name: str
    def __init__(self, id: _Optional[int] = ..., name: _Optional[str] = ...) -> None: ...

class ProductCreateRequest(_message.Message):
    __slots__ = ("identity", "description", "details", "media", "offer", "safety")
    IDENTITY_FIELD_NUMBER: _ClassVar[int]
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    DETAILS_FIELD_NUMBER: _ClassVar[int]
    MEDIA_FIELD_NUMBER: _ClassVar[int]
    OFFER_FIELD_NUMBER: _ClassVar[int]
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    identity: ProductCreateRequestIdentity
    description: ProductCreateRequestDescription
    details: ProductCreateRequestDetails
    media: ProductCreateRequestMedia
    offer: ProductCreateRequestOffer
    safety: ProductCreateRequestSafety
    def __init__(self, identity: _Optional[_Union[ProductCreateRequestIdentity, _Mapping]] = ..., description: _Optional[_Union[ProductCreateRequestDescription, _Mapping]] = ..., details: _Optional[_Union[ProductCreateRequestDetails, _Mapping]] = ..., media: _Optional[_Union[ProductCreateRequestMedia, _Mapping]] = ..., offer: _Optional[_Union[ProductCreateRequestOffer, _Mapping]] = ..., safety: _Optional[_Union[ProductCreateRequestSafety, _Mapping]] = ...) -> None: ...

class ProductCreateRequestIdentity(_message.Message):
    __slots__ = ("title", "category", "subcategory", "has_variations", "brand_name", "no_brand", "product_id", "product_id_type", "no_product_id")
    TITLE_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    HAS_VARIATIONS_FIELD_NUMBER: _ClassVar[int]
    BRAND_NAME_FIELD_NUMBER: _ClassVar[int]
    NO_BRAND_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_TYPE_FIELD_NUMBER: _ClassVar[int]
    NO_PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    title: str
    category: str
    subcategory: str
    has_variations: bool
    brand_name: str
    no_brand: bool
    product_id: str
    product_id_type: str
    no_product_id: bool
    def __init__(self, title: _Optional[str] = ..., category: _Optional[str] = ..., subcategory: _Optional[str] = ..., has_variations: bool = ..., brand_name: _Optional[str] = ..., no_brand: bool = ..., product_id: _Optional[str] = ..., product_id_type: _Optional[str] = ..., no_product_id: bool = ...) -> None: ...

class ProductCreateRequestDescription(_message.Message):
    __slots__ = ("description", "bullet_points")
    DESCRIPTION_FIELD_NUMBER: _ClassVar[int]
    BULLET_POINTS_FIELD_NUMBER: _ClassVar[int]
    description: str
    bullet_points: _containers.RepeatedCompositeFieldContainer[ProductCreateRequestBulletPoint]
    def __init__(self, description: _Optional[str] = ..., bullet_points: _Optional[_Iterable[_Union[ProductCreateRequestBulletPoint, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestBulletPoint(_message.Message):
    __slots__ = ("id", "bullet_point")
    ID_FIELD_NUMBER: _ClassVar[int]
    BULLET_POINT_FIELD_NUMBER: _ClassVar[int]
    id: str
    bullet_point: str
    def __init__(self, id: _Optional[str] = ..., bullet_point: _Optional[str] = ...) -> None: ...

class ProductCreateRequestDetails(_message.Message):
    __slots__ = ("shared", "with_variants", "without_variants")
    class SharedEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    SHARED_FIELD_NUMBER: _ClassVar[int]
    WITH_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    WITHOUT_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    shared: _containers.MessageMap[str, _types_pb2.Any]
    with_variants: ProductCreateRequestDetailsWithVariants
    without_variants: ProductCreateRequestDetailsWithoutVariants
    def __init__(self, shared: _Optional[_Mapping[str, _types_pb2.Any]] = ..., with_variants: _Optional[_Union[ProductCreateRequestDetailsWithVariants, _Mapping]] = ..., without_variants: _Optional[_Union[ProductCreateRequestDetailsWithoutVariants, _Mapping]] = ...) -> None: ...

class ProductCreateRequestDetailsWithVariants(_message.Message):
    __slots__ = ("variants",)
    VARIANTS_FIELD_NUMBER: _ClassVar[int]
    variants: _containers.RepeatedCompositeFieldContainer[ProductCreateRequestDetailsVariantForm]
    def __init__(self, variants: _Optional[_Iterable[_Union[ProductCreateRequestDetailsVariantForm, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestDetailsVariantForm(_message.Message):
    __slots__ = ("form",)
    class FormEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    FORM_FIELD_NUMBER: _ClassVar[int]
    form: _containers.MessageMap[str, _types_pb2.Any]
    def __init__(self, form: _Optional[_Mapping[str, _types_pb2.Any]] = ...) -> None: ...

class ProductCreateRequestDetailsWithoutVariants(_message.Message):
    __slots__ = ("form",)
    class FormEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    FORM_FIELD_NUMBER: _ClassVar[int]
    form: _containers.MessageMap[str, _types_pb2.Any]
    def __init__(self, form: _Optional[_Mapping[str, _types_pb2.Any]] = ...) -> None: ...

class ProductCreateRequestMedia(_message.Message):
    __slots__ = ("total_size", "with_variants", "without_variants")
    TOTAL_SIZE_FIELD_NUMBER: _ClassVar[int]
    WITH_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    WITHOUT_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    total_size: int
    with_variants: ProductCreateRequestMediaWithVariants
    without_variants: ProductCreateRequestMediaWithoutVariants
    def __init__(self, total_size: _Optional[int] = ..., with_variants: _Optional[_Union[ProductCreateRequestMediaWithVariants, _Mapping]] = ..., without_variants: _Optional[_Union[ProductCreateRequestMediaWithoutVariants, _Mapping]] = ...) -> None: ...

class ProductCreateRequestMediaWithVariants(_message.Message):
    __slots__ = ("images", "videos")
    class ImagesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _attachment_pb2.Attachments
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_attachment_pb2.Attachments, _Mapping]] = ...) -> None: ...
    class VideosEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _attachment_pb2.Attachments
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_attachment_pb2.Attachments, _Mapping]] = ...) -> None: ...
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    VIDEOS_FIELD_NUMBER: _ClassVar[int]
    images: _containers.MessageMap[str, _attachment_pb2.Attachments]
    videos: _containers.MessageMap[str, _attachment_pb2.Attachments]
    def __init__(self, images: _Optional[_Mapping[str, _attachment_pb2.Attachments]] = ..., videos: _Optional[_Mapping[str, _attachment_pb2.Attachments]] = ...) -> None: ...

class ProductCreateRequestMediaWithoutVariants(_message.Message):
    __slots__ = ("images", "videos")
    IMAGES_FIELD_NUMBER: _ClassVar[int]
    VIDEOS_FIELD_NUMBER: _ClassVar[int]
    images: _containers.RepeatedCompositeFieldContainer[_attachment_pb2.Attachment]
    videos: _containers.RepeatedCompositeFieldContainer[_attachment_pb2.Attachment]
    def __init__(self, images: _Optional[_Iterable[_Union[_attachment_pb2.Attachment, _Mapping]]] = ..., videos: _Optional[_Iterable[_Union[_attachment_pb2.Attachment, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestOffer(_message.Message):
    __slots__ = ("currency", "fulfillment_type", "processing_time", "with_variants", "without_variants")
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    FULFILLMENT_TYPE_FIELD_NUMBER: _ClassVar[int]
    PROCESSING_TIME_FIELD_NUMBER: _ClassVar[int]
    WITH_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    WITHOUT_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    currency: str
    fulfillment_type: str
    processing_time: int
    with_variants: ProductCreateRequestOfferWithVariants
    without_variants: ProductCreateRequestOfferWithoutVariants
    def __init__(self, currency: _Optional[str] = ..., fulfillment_type: _Optional[str] = ..., processing_time: _Optional[int] = ..., with_variants: _Optional[_Union[ProductCreateRequestOfferWithVariants, _Mapping]] = ..., without_variants: _Optional[_Union[ProductCreateRequestOfferWithoutVariants, _Mapping]] = ...) -> None: ...

class ProductCreateRequestOfferWithVariants(_message.Message):
    __slots__ = ("variants",)
    VARIANTS_FIELD_NUMBER: _ClassVar[int]
    variants: _containers.RepeatedCompositeFieldContainer[ProductCreateRequestOfferVariant]
    def __init__(self, variants: _Optional[_Iterable[_Union[ProductCreateRequestOfferVariant, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestOfferVariant(_message.Message):
    __slots__ = ("id", "sku", "quantity", "price", "offering_condition", "condition_note", "list_price", "has_sale_price", "sale_price", "sale_price_start", "sale_price_end", "has_minimum_orders", "minimum_orders")
    ID_FIELD_NUMBER: _ClassVar[int]
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
    id: str
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
    minimum_orders: _containers.RepeatedCompositeFieldContainer[ProductCreateRequestOfferMinimumOrder]
    def __init__(self, id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity: _Optional[int] = ..., price: _Optional[str] = ..., offering_condition: _Optional[str] = ..., condition_note: _Optional[str] = ..., list_price: _Optional[str] = ..., has_sale_price: bool = ..., sale_price: _Optional[str] = ..., sale_price_start: _Optional[str] = ..., sale_price_end: _Optional[str] = ..., has_minimum_orders: bool = ..., minimum_orders: _Optional[_Iterable[_Union[ProductCreateRequestOfferMinimumOrder, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestOfferWithoutVariants(_message.Message):
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
    minimum_orders: _containers.RepeatedCompositeFieldContainer[ProductCreateRequestOfferMinimumOrder]
    def __init__(self, sku: _Optional[str] = ..., quantity: _Optional[int] = ..., price: _Optional[str] = ..., offering_condition: _Optional[str] = ..., condition_note: _Optional[str] = ..., list_price: _Optional[str] = ..., has_sale_price: bool = ..., sale_price: _Optional[str] = ..., sale_price_start: _Optional[str] = ..., sale_price_end: _Optional[str] = ..., has_minimum_orders: bool = ..., minimum_orders: _Optional[_Iterable[_Union[ProductCreateRequestOfferMinimumOrder, _Mapping]]] = ...) -> None: ...

class ProductCreateRequestOfferMinimumOrder(_message.Message):
    __slots__ = ("id", "price", "quantity")
    ID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    id: str
    price: str
    quantity: int
    def __init__(self, id: _Optional[str] = ..., price: _Optional[str] = ..., quantity: _Optional[int] = ...) -> None: ...

class ProductCreateRequestSafety(_message.Message):
    __slots__ = ("attestation", "form")
    class FormEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.Any
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.Any, _Mapping]] = ...) -> None: ...
    ATTESTATION_FIELD_NUMBER: _ClassVar[int]
    FORM_FIELD_NUMBER: _ClassVar[int]
    attestation: bool
    form: _containers.MessageMap[str, _types_pb2.Any]
    def __init__(self, attestation: bool = ..., form: _Optional[_Mapping[str, _types_pb2.Any]] = ...) -> None: ...

class ProductCreateResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
