from shared.v1 import error_pb2 as _error_pb2
from shared.v1 import pagination_pb2 as _pagination_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ProductsListRequest(_message.Message):
    __slots__ = ("pagination",)
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    pagination: _pagination_pb2.PaginationRequest
    def __init__(self, pagination: _Optional[_Union[_pagination_pb2.PaginationRequest, _Mapping]] = ...) -> None: ...

class ProductsListResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: ProductsListResponseData
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[ProductsListResponseData, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ProductsListResponseData(_message.Message):
    __slots__ = ("products", "pagination")
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    PAGINATION_FIELD_NUMBER: _ClassVar[int]
    products: _containers.RepeatedCompositeFieldContainer[ProductListItem]
    pagination: _pagination_pb2.PaginationResponse
    def __init__(self, products: _Optional[_Iterable[_Union[ProductListItem, _Mapping]]] = ..., pagination: _Optional[_Union[_pagination_pb2.PaginationResponse, _Mapping]] = ...) -> None: ...

class ProductListItem(_message.Message):
    __slots__ = ("id", "title", "status", "created_at", "price", "list_price", "sale_price", "currency_code", "quantity", "image")
    ID_FIELD_NUMBER: _ClassVar[int]
    TITLE_FIELD_NUMBER: _ClassVar[int]
    STATUS_FIELD_NUMBER: _ClassVar[int]
    CREATED_AT_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    LIST_PRICE_FIELD_NUMBER: _ClassVar[int]
    SALE_PRICE_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_CODE_FIELD_NUMBER: _ClassVar[int]
    QUANTITY_FIELD_NUMBER: _ClassVar[int]
    IMAGE_FIELD_NUMBER: _ClassVar[int]
    id: str
    title: str
    status: str
    created_at: int
    price: float
    list_price: float
    sale_price: float
    currency_code: str
    quantity: int
    image: str
    def __init__(self, id: _Optional[str] = ..., title: _Optional[str] = ..., status: _Optional[str] = ..., created_at: _Optional[int] = ..., price: _Optional[float] = ..., list_price: _Optional[float] = ..., sale_price: _Optional[float] = ..., currency_code: _Optional[str] = ..., quantity: _Optional[int] = ..., image: _Optional[str] = ...) -> None: ...
