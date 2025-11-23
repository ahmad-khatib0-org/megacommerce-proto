from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import types_pb2 as _types_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class OrderRefundResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: _types_pb2.SuccessResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[_types_pb2.SuccessResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class OrderRefundRequest(_message.Message):
    __slots__ = ("order_id", "item", "reason", "refund_shipping")
    ORDER_ID_FIELD_NUMBER: _ClassVar[int]
    ITEM_FIELD_NUMBER: _ClassVar[int]
    REASON_FIELD_NUMBER: _ClassVar[int]
    REFUND_SHIPPING_FIELD_NUMBER: _ClassVar[int]
    order_id: str
    item: RefundLineItemRefund
    reason: str
    refund_shipping: bool
    def __init__(self, order_id: _Optional[str] = ..., item: _Optional[_Union[RefundLineItemRefund, _Mapping]] = ..., reason: _Optional[str] = ..., refund_shipping: bool = ...) -> None: ...

class RefundLineItemRefund(_message.Message):
    __slots__ = ("id", "quantity", "amount_cents")
    ID_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    AMOUNT_CENTS_FIELD_NUMBER: _ClassVar[int]
    id: str
    quantity: int
    amount_cents: int
    def __init__(self, id: _Optional[str] = ..., quantity: _Optional[int] = ..., amount_cents: _Optional[int] = ...) -> None: ...
