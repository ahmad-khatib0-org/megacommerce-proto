from shared.v1 import error_pb2 as _error_pb2
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class VisitsByPeriod(_message.Message):
    __slots__ = ("today", "yesterday", "last_week", "last_month", "last_year")
    TODAY_FIELD_NUMBER: _ClassVar[int]
    YESTERDAY_FIELD_NUMBER: _ClassVar[int]
    LAST_WEEK_FIELD_NUMBER: _ClassVar[int]
    LAST_MONTH_FIELD_NUMBER: _ClassVar[int]
    LAST_YEAR_FIELD_NUMBER: _ClassVar[int]
    today: int
    yesterday: int
    last_week: int
    last_month: int
    last_year: int
    def __init__(self, today: _Optional[int] = ..., yesterday: _Optional[int] = ..., last_week: _Optional[int] = ..., last_month: _Optional[int] = ..., last_year: _Optional[int] = ...) -> None: ...

class DashboardStats(_message.Message):
    __slots__ = ("total_products", "total_inventory_items", "total_reviews", "product_visits_count", "visits_by_period", "pending_orders", "total_orders")
    TOTAL_PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_INVENTORY_ITEMS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_REVIEWS_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_VISITS_COUNT_FIELD_NUMBER: _ClassVar[int]
    VISITS_BY_PERIOD_FIELD_NUMBER: _ClassVar[int]
    PENDING_ORDERS_FIELD_NUMBER: _ClassVar[int]
    TOTAL_ORDERS_FIELD_NUMBER: _ClassVar[int]
    total_products: int
    total_inventory_items: int
    total_reviews: int
    product_visits_count: int
    visits_by_period: VisitsByPeriod
    pending_orders: int
    total_orders: int
    def __init__(self, total_products: _Optional[int] = ..., total_inventory_items: _Optional[int] = ..., total_reviews: _Optional[int] = ..., product_visits_count: _Optional[int] = ..., visits_by_period: _Optional[_Union[VisitsByPeriod, _Mapping]] = ..., pending_orders: _Optional[int] = ..., total_orders: _Optional[int] = ...) -> None: ...

class DashboardRequest(_message.Message):
    __slots__ = ()
    def __init__(self) -> None: ...

class DashboardResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: DashboardStats
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[DashboardStats, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...
