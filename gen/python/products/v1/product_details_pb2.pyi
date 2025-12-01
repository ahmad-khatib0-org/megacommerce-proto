from products.v1 import product_pb2 as _product_pb2
from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductDetailsRequest(_message.Message):
    __slots__ = ("product_id", "variant_id")
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    variant_id: str
    def __init__(self, product_id: _Optional[str] = ..., variant_id: _Optional[str] = ...) -> None: ...

class ProductDetailsResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductDetailsResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductDetailsResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ProductDetailsResponseData(_message.Message):
    __slots__ = ("id", "supplier_id", "title", "category", "subcategory", "has_variations", "brand_name", "product_id", "product_id_type", "description", "bullet_points", "currency_code", "fulfillment_type", "processing_time", "details", "media", "offer", "safety", "tags", "metadata")
    ID_FIELD_NUMBER: _ClassVar[int]
    SUPPLIER_ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    HAS_VARIATIONS_FIELD_NUMBER: _ClassVar[int]
    BRAND_NAME_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
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
    id: str
    supplier_id: str
    title: str
    category: str
    subcategory: str
    has_variations: bool
    brand_name: str
    product_id: str
    product_id_type: str
    description: str
    bullet_points: _containers.RepeatedCompositeFieldContainer[_product_pb2.ProductBulletPoint]
    currency_code: str
    fulfillment_type: str
    processing_time: int
    details: _product_pb2.ProductDetails
    media: _product_pb2.ProductMedia
    offer: _product_pb2.ProductOffer
    safety: _product_pb2.ProductSafety
    tags: _containers.RepeatedCompositeFieldContainer[_product_pb2.ProductTag]
    metadata: _product_pb2.ProductMetadata
    def __init__(self, id: _Optional[str] = ..., supplier_id: _Optional[str] = ..., title: _Optional[str] = ..., category: _Optional[str] = ..., subcategory: _Optional[str] = ..., has_variations: bool = ..., brand_name: _Optional[str] = ..., product_id: _Optional[str] = ..., product_id_type: _Optional[str] = ..., description: _Optional[str] = ..., bullet_points: _Optional[_Iterable[_Union[_product_pb2.ProductBulletPoint, _Mapping]]] = ..., currency_code: _Optional[str] = ..., fulfillment_type: _Optional[str] = ..., processing_time: _Optional[int] = ..., details: _Optional[_Union[_product_pb2.ProductDetails, _Mapping]] = ..., media: _Optional[_Union[_product_pb2.ProductMedia, _Mapping]] = ..., offer: _Optional[_Union[_product_pb2.ProductOffer, _Mapping]] = ..., safety: _Optional[_Union[_product_pb2.ProductSafety, _Mapping]] = ..., tags: _Optional[_Iterable[_Union[_product_pb2.ProductTag, _Mapping]]] = ..., metadata: _Optional[_Union[_product_pb2.ProductMetadata, _Mapping]] = ...) -> None: ...
