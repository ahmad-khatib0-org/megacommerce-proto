from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import struct_pb2 as _struct_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderCreateRequest(_message.Message):
    __slots__ = ("idempotency_key", "currency_code", "metadata", "shipping_address", "billing_address", "items", "shipping_method", "promotion_codes", "payment_method_token", "customer_note")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    IDEMPOTENCY_KEY_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    BILLING_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ITEMS_FIELD_NUMBER: _ClassVar[int]
    SHIPPING_METHOD_FIELD_NUMBER: _ClassVar[int]
    PROMOTION_CODES_FIELD_NUMBER: _ClassVar[int]
    PAYMENT_METHOD_TOKEN_FIELD_NUMBER: _ClassVar[int]
    CUSTOMER_NOTE_FIELD_NUMBER: _ClassVar[int]
    idempotency_key: str
    currency_code: str
    metadata: _containers.ScalarMap[str, str]
    shipping_address: _struct_pb2.Struct
    billing_address: _struct_pb2.Struct
    items: _containers.RepeatedCompositeFieldContainer[OrderLineItemRequest]
    shipping_method: str
    promotion_codes: _containers.RepeatedScalarFieldContainer[str]
    payment_method_token: str
    customer_note: str
    def __init__(self, idempotency_key: _Optional[str] = ..., currency_code: _Optional[str] = ..., metadata: _Optional[_Mapping[str, str]] = ..., shipping_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., billing_address: _Optional[_Union[_struct_pb2.Struct, _Mapping]] = ..., items: _Optional[_Iterable[_Union[OrderLineItemRequest, _Mapping]]] = ..., shipping_method: _Optional[str] = ..., promotion_codes: _Optional[_Iterable[str]] = ..., payment_method_token: _Optional[str] = ..., customer_note: _Optional[str] = ...) -> None: ...

class OrderLineItemRequest(_message.Message):
    __slots__ = ("product_id", "variant_id", "sku", "quantity", "unit_price_cents_client", "metadata")
    class MetadataEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    PRODUCT_ID_FIELD_NUMBER: _ClassVar[int]
    VARIANT_ID_FIELD_NUMBER: _ClassVar[int]
    SKU_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    UNIT_PRICE_CENTS_CLIENT_FIELD_NUMBER: _ClassVar[int]
    METADATA_FIELD_NUMBER: _ClassVar[int]
    product_id: str
    variant_id: str
    sku: str
    quantity: int
    unit_price_cents_client: int
    metadata: _containers.ScalarMap[str, str]
    def __init__(self, product_id: _Optional[str] = ..., variant_id: _Optional[str] = ..., sku: _Optional[str] = ..., quantity: _Optional[int] = ..., unit_price_cents_client: _Optional[int] = ..., metadata: _Optional[_Mapping[str, str]] = ...) -> None: ...

class OrderCreateResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
