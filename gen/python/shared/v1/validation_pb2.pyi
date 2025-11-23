from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class NumericRuleType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    NUMERIC_RULE_TYPE_MIN: _ClassVar[NumericRuleType]
    NUMERIC_RULE_TYPE_MAX: _ClassVar[NumericRuleType]
    NUMERIC_RULE_TYPE_GT: _ClassVar[NumericRuleType]
    NUMERIC_RULE_TYPE_LT: _ClassVar[NumericRuleType]

class StringRuleType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    STRING_RULE_TYPE_MIN: _ClassVar[StringRuleType]
    STRING_RULE_TYPE_MAX: _ClassVar[StringRuleType]
NUMERIC_RULE_TYPE_MIN: NumericRuleType
NUMERIC_RULE_TYPE_MAX: NumericRuleType
NUMERIC_RULE_TYPE_GT: NumericRuleType
NUMERIC_RULE_TYPE_LT: NumericRuleType
STRING_RULE_TYPE_MIN: StringRuleType
STRING_RULE_TYPE_MAX: StringRuleType

class ValidationField(_message.Message):
    __slots__ = ("numeric", "str", "regex")
    NUMERIC_FIELD_NUMBER: _ClassVar[int]
    STR_FIELD_NUMBER: _ClassVar[int]
    REGEX_FIELD_NUMBER: _ClassVar[int]
    numeric: ValidationFieldNumeric
    str: ValidationFieldString
    regex: ValidationFieldRegex
    def __init__(self, numeric: _Optional[_Union[ValidationFieldNumeric, _Mapping]] = ..., str: _Optional[_Union[ValidationFieldString, _Mapping]] = ..., regex: _Optional[_Union[ValidationFieldRegex, _Mapping]] = ...) -> None: ...

class ValidationFieldNumeric(_message.Message):
    __slots__ = ("rules",)
    RULES_FIELD_NUMBER: _ClassVar[int]
    rules: _containers.RepeatedCompositeFieldContainer[NumericRule]
    def __init__(self, rules: _Optional[_Iterable[_Union[NumericRule, _Mapping]]] = ...) -> None: ...

class NumericRule(_message.Message):
    __slots__ = ("type", "value")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    type: NumericRuleType
    value: float
    def __init__(self, type: _Optional[_Union[NumericRuleType, str]] = ..., value: _Optional[float] = ...) -> None: ...

class ValidationFieldString(_message.Message):
    __slots__ = ("rules",)
    RULES_FIELD_NUMBER: _ClassVar[int]
    rules: _containers.RepeatedCompositeFieldContainer[StringRule]
    def __init__(self, rules: _Optional[_Iterable[_Union[StringRule, _Mapping]]] = ...) -> None: ...

class StringRule(_message.Message):
    __slots__ = ("type", "value")
    TYPE_FIELD_NUMBER: _ClassVar[int]
    VALUE_FIELD_NUMBER: _ClassVar[int]
    type: StringRuleType
    value: float
    def __init__(self, type: _Optional[_Union[StringRuleType, str]] = ..., value: _Optional[float] = ...) -> None: ...

class ValidationFieldRegex(_message.Message):
    __slots__ = ("pattern", "case_sensitive")
    PATTERN_FIELD_NUMBER: _ClassVar[int]
    CASE_SENSITIVE_FIELD_NUMBER: _ClassVar[int]
    pattern: str
    case_sensitive: bool
    def __init__(self, pattern: _Optional[str] = ..., case_sensitive: bool = ...) -> None: ...
