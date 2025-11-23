from products.v1 import product_pb2 as _product_pb2
from products.v1 import product_categories_pb2 as _product_categories_pb2
from shared.v1 import error_pb2 as _error_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductDataResponseData(_message.Message):
    __slots__ = ("subcategory", "tags")
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    TAGS_FIELD_NUMBER: _ClassVar[int]
    subcategory: ProductDataResponseSubcategory
    tags: _product_pb2.ProductTags
    def __init__(self, subcategory: _Optional[_Union[ProductDataResponseSubcategory, _Mapping]] = ..., tags: _Optional[_Union[_product_pb2.ProductTags, _Mapping]] = ...) -> None: ...

class ProductDataResponseSubcategory(_message.Message):
    __slots__ = ("data", "translations")
    DATA_FIELD_NUMBER: _ClassVar[int]
    TRANSLATIONS_FIELD_NUMBER: _ClassVar[int]
    data: _product_categories_pb2.Subcategory
    translations: _product_categories_pb2.SubcategoryTranslations
    def __init__(self, data: _Optional[_Union[_product_categories_pb2.Subcategory, _Mapping]] = ..., translations: _Optional[_Union[_product_categories_pb2.SubcategoryTranslations, _Mapping]] = ...) -> None: ...

class ProductDataRequest(_message.Message):
    __slots__ = ("subcategory", "get_tags")
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    GET_TAGS_FIELD_NUMBER: _ClassVar[int]
    subcategory: ProductDataRequestCategory
    get_tags: bool
    def __init__(self, subcategory: _Optional[_Union[ProductDataRequestCategory, _Mapping]] = ..., get_tags: bool = ...) -> None: ...

class ProductDataRequestCategory(_message.Message):
    __slots__ = ("category", "subcategory")
    CATEGORY_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORY_FIELD_NUMBER: _ClassVar[int]
    category: str
    subcategory: str
    def __init__(self, category: _Optional[str] = ..., subcategory: _Optional[str] = ...) -> None: ...

class ProductDataResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductDataResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductDataResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
