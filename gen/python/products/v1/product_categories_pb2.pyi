from shared.v1 import types_pb2 as _types_pb2
from shared.v1 import validation_pb2 as _validation_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Category(_message.Message):
    __slots__ = ("id", "name", "image", "translations", "subcategories")
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    TRANSLATIONS_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    image: str
    translations: _containers.RepeatedCompositeFieldContainer[CategoryTranslations]
    subcategories: _containers.RepeatedCompositeFieldContainer[Subcategory]
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., image: _Optional[str] = ..., translations: _Optional[_Iterable[_Union[CategoryTranslations, _Mapping]]] = ..., subcategories: _Optional[_Iterable[_Union[Subcategory, _Mapping]]] = ...) -> None: ...

class CategoryTranslations(_message.Message):
    __slots__ = ("name", "language", "version", "subcategories")
    class SubcategoriesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SubcategoryTranslations
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SubcategoryTranslations, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    LANGUAGE_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    SUBCATEGORIES_FIELD_NUMBER: _ClassVar[int]
    name: str
    language: str
    version: int
    subcategories: _containers.MessageMap[str, SubcategoryTranslations]
    def __init__(self, name: _Optional[str] = ..., language: _Optional[str] = ..., version: _Optional[int] = ..., subcategories: _Optional[_Mapping[str, SubcategoryTranslations]] = ...) -> None: ...

class SubcategoryTranslations(_message.Message):
    __slots__ = ("name", "attributes", "data", "safety")
    class AttributesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SubcategoryAttributeTranslation
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SubcategoryAttributeTranslation, _Mapping]] = ...) -> None: ...
    class DataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.StringMap
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.StringMap, _Mapping]] = ...) -> None: ...
    NAME_FIELD_NUMBER: _ClassVar[int]
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    name: str
    attributes: _containers.MessageMap[str, SubcategoryAttributeTranslation]
    data: _containers.MessageMap[str, _types_pb2.StringMap]
    safety: SubcategorySafetyTranslation
    def __init__(self, name: _Optional[str] = ..., attributes: _Optional[_Mapping[str, SubcategoryAttributeTranslation]] = ..., data: _Optional[_Mapping[str, _types_pb2.StringMap]] = ..., safety: _Optional[_Union[SubcategorySafetyTranslation, _Mapping]] = ...) -> None: ...

class SubcategoryAttributeTranslation(_message.Message):
    __slots__ = ("label", "placeholder", "info")
    LABEL_FIELD_NUMBER: _ClassVar[int]
    PLACEHOLDER_FIELD_NUMBER: _ClassVar[int]
    INFO_FIELD_NUMBER: _ClassVar[int]
    label: str
    placeholder: str
    info: str
    def __init__(self, label: _Optional[str] = ..., placeholder: _Optional[str] = ..., info: _Optional[str] = ...) -> None: ...

class SubcategorySafetyTranslation(_message.Message):
    __slots__ = ("attributes", "data")
    class AttributesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SubcategoryAttributeTranslation
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SubcategoryAttributeTranslation, _Mapping]] = ...) -> None: ...
    class DataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: _types_pb2.StringMap
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[_types_pb2.StringMap, _Mapping]] = ...) -> None: ...
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    DATA_FIELD_NUMBER: _ClassVar[int]
    attributes: _containers.MessageMap[str, SubcategoryAttributeTranslation]
    data: _containers.MessageMap[str, _types_pb2.StringMap]
    def __init__(self, attributes: _Optional[_Mapping[str, SubcategoryAttributeTranslation]] = ..., data: _Optional[_Mapping[str, _types_pb2.StringMap]] = ...) -> None: ...

class Subcategory(_message.Message):
    __slots__ = ("id", "name", "version", "created_at", "attributes", "safety")
    class AttributesEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SubcategoryAttribute
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SubcategoryAttribute, _Mapping]] = ...) -> None: ...
    class SafetyEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: SubcategorySafety
        def __init__(self, key: _Optional[str] = ..., value: _Optional[_Union[SubcategorySafety, _Mapping]] = ...) -> None: ...
    ID_FIELD_NUMBER: _ClassVar[int]
    NAME_FIELD_NUMBER: _ClassVar[int]
    VERSION_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    ATTRIBUTES_FIELD_NUMBER: _ClassVar[int]
    SAFETY_FIELD_NUMBER: _ClassVar[int]
    id: str
    name: str
    version: int
    created_at: str
    attributes: _containers.MessageMap[str, SubcategoryAttribute]
    safety: _containers.MessageMap[str, SubcategorySafety]
    def __init__(self, id: _Optional[str] = ..., name: _Optional[str] = ..., version: _Optional[int] = ..., created_at: _Optional[str] = ..., attributes: _Optional[_Mapping[str, SubcategoryAttribute]] = ..., safety: _Optional[_Mapping[str, SubcategorySafety]] = ...) -> None: ...

class SubcategoryAttribute(_message.Message):
    __slots__ = ("required", "type", "include_in_variants", "reference", "string_array", "is_multiple", "validation")
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    INCLUDE_IN_VARIANTS_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    STRING_ARRAY_FIELD_NUMBER: _ClassVar[int]
    IS_MULTIPLE_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_FIELD_NUMBER: _ClassVar[int]
    required: bool
    type: str
    include_in_variants: bool
    reference: str
    string_array: _containers.RepeatedScalarFieldContainer[str]
    is_multiple: bool
    validation: _validation_pb2.ValidationField
    def __init__(self, required: bool = ..., type: _Optional[str] = ..., include_in_variants: bool = ..., reference: _Optional[str] = ..., string_array: _Optional[_Iterable[str]] = ..., is_multiple: bool = ..., validation: _Optional[_Union[_validation_pb2.ValidationField, _Mapping]] = ...) -> None: ...

class SubcategorySafety(_message.Message):
    __slots__ = ("required", "type", "reference", "string_array", "is_multiple", "validation")
    REQUIRED_FIELD_NUMBER: _ClassVar[int]
    TYPE_FIELD_NUMBER: _ClassVar[int]
    REFERENCE_FIELD_NUMBER: _ClassVar[int]
    STRING_ARRAY_FIELD_NUMBER: _ClassVar[int]
    IS_MULTIPLE_FIELD_NUMBER: _ClassVar[int]
    VALIDATION_FIELD_NUMBER: _ClassVar[int]
    required: bool
    type: str
    reference: str
    string_array: _containers.RepeatedScalarFieldContainer[str]
    is_multiple: bool
    validation: _validation_pb2.ValidationField
    def __init__(self, required: bool = ..., type: _Optional[str] = ..., reference: _Optional[str] = ..., string_array: _Optional[_Iterable[str]] = ..., is_multiple: bool = ..., validation: _Optional[_Union[_validation_pb2.ValidationField, _Mapping]] = ...) -> None: ...
