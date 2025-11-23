from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class AvailableDataStorages(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    AVAILABLE_DATA_STORAGES_UNSPECIFIED: _ClassVar[AvailableDataStorages]
    FILE_STORAGE: _ClassVar[AvailableDataStorages]
    S3: _ClassVar[AvailableDataStorages]
    HYBRID_S3: _ClassVar[AvailableDataStorages]

class AvailableInfoStorages(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    AVAILABLE_INFO_STORAGES_UNSPECIFIED: _ClassVar[AvailableInfoStorages]
    FILES: _ClassVar[AvailableInfoStorages]
    REDIS: _ClassVar[AvailableInfoStorages]
    POSTGRES: _ClassVar[AvailableInfoStorages]

class Hook(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    HOOK_UNSPECIFIED: _ClassVar[Hook]
    PRE_CREATE: _ClassVar[Hook]
    POST_CREATE: _ClassVar[Hook]
    POST_RECEIVE: _ClassVar[Hook]
    PRE_TERMINATE: _ClassVar[Hook]
    POST_TERMINATE: _ClassVar[Hook]
    POST_FINISH: _ClassVar[Hook]

class Format(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    FORMAT_UNSPECIFIED: _ClassVar[Format]
    DEFAULT: _ClassVar[Format]
    V2: _ClassVar[Format]

class Extension(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    EXTENSION_UNSPECIFIED: _ClassVar[Extension]
    GETTING: _ClassVar[Extension]
    CREATION: _ClassVar[Extension]
    CREATION_WITH_UPLOAD: _ClassVar[Extension]
    CREATION_DEFER_LENGTH: _ClassVar[Extension]
    TERMINATION: _ClassVar[Extension]
    CONCATENATION: _ClassVar[Extension]
    CHECKSUM: _ClassVar[Extension]
AVAILABLE_DATA_STORAGES_UNSPECIFIED: AvailableDataStorages
FILE_STORAGE: AvailableDataStorages
S3: AvailableDataStorages
HYBRID_S3: AvailableDataStorages
AVAILABLE_INFO_STORAGES_UNSPECIFIED: AvailableInfoStorages
FILES: AvailableInfoStorages
REDIS: AvailableInfoStorages
POSTGRES: AvailableInfoStorages
HOOK_UNSPECIFIED: Hook
PRE_CREATE: Hook
POST_CREATE: Hook
POST_RECEIVE: Hook
PRE_TERMINATE: Hook
POST_TERMINATE: Hook
POST_FINISH: Hook
FORMAT_UNSPECIFIED: Format
DEFAULT: Format
V2: Format
EXTENSION_UNSPECIFIED: Extension
GETTING: Extension
CREATION: Extension
CREATION_WITH_UPLOAD: Extension
CREATION_DEFER_LENGTH: Extension
TERMINATION: Extension
CONCATENATION: Extension
CHECKSUM: Extension

class DataStorageOptions(_message.Message):
    __slots__ = ("storage", "data_dir", "dir_structure", "force_fsync", "s3_bucket", "s3_region", "s3_access_key", "s3_access_key_path", "s3_secret_key", "s3_secret_key_path", "s3_url", "s3_force_path_style", "s3_security_token", "s3_session_token", "s3_profile", "s3_headers", "s3_concat_concurrent_downloads")
    STORAGE_FIELD_NUMBER: _ClassVar[int]
    DATA_DIR_FIELD_NUMBER: _ClassVar[int]
    DIR_STRUCTURE_FIELD_NUMBER: _ClassVar[int]
    FORCE_FSYNC_FIELD_NUMBER: _ClassVar[int]
    S3_BUCKET_FIELD_NUMBER: _ClassVar[int]
    S3_REGION_FIELD_NUMBER: _ClassVar[int]
    S3_ACCESS_KEY_FIELD_NUMBER: _ClassVar[int]
    S3_ACCESS_KEY_PATH_FIELD_NUMBER: _ClassVar[int]
    S3_SECRET_KEY_FIELD_NUMBER: _ClassVar[int]
    S3_SECRET_KEY_PATH_FIELD_NUMBER: _ClassVar[int]
    S3_URL_FIELD_NUMBER: _ClassVar[int]
    S3_FORCE_PATH_STYLE_FIELD_NUMBER: _ClassVar[int]
    S3_SECURITY_TOKEN_FIELD_NUMBER: _ClassVar[int]
    S3_SESSION_TOKEN_FIELD_NUMBER: _ClassVar[int]
    S3_PROFILE_FIELD_NUMBER: _ClassVar[int]
    S3_HEADERS_FIELD_NUMBER: _ClassVar[int]
    S3_CONCAT_CONCURRENT_DOWNLOADS_FIELD_NUMBER: _ClassVar[int]
    storage: AvailableDataStorages
    data_dir: str
    dir_structure: str
    force_fsync: bool
    s3_bucket: str
    s3_region: str
    s3_access_key: str
    s3_access_key_path: str
    s3_secret_key: str
    s3_secret_key_path: str
    s3_url: str
    s3_force_path_style: bool
    s3_security_token: str
    s3_session_token: str
    s3_profile: str
    s3_headers: str
    s3_concat_concurrent_downloads: int
    def __init__(self, storage: _Optional[_Union[AvailableDataStorages, str]] = ..., data_dir: _Optional[str] = ..., dir_structure: _Optional[str] = ..., force_fsync: bool = ..., s3_bucket: _Optional[str] = ..., s3_region: _Optional[str] = ..., s3_access_key: _Optional[str] = ..., s3_access_key_path: _Optional[str] = ..., s3_secret_key: _Optional[str] = ..., s3_secret_key_path: _Optional[str] = ..., s3_url: _Optional[str] = ..., s3_force_path_style: bool = ..., s3_security_token: _Optional[str] = ..., s3_session_token: _Optional[str] = ..., s3_profile: _Optional[str] = ..., s3_headers: _Optional[str] = ..., s3_concat_concurrent_downloads: _Optional[int] = ...) -> None: ...

class InfoStoreOptions(_message.Message):
    __slots__ = ("info_storage", "info_dir", "info_db_dsn", "redis_info_expiration")
    INFO_STORAGE_FIELD_NUMBER: _ClassVar[int]
    INFO_DIR_FIELD_NUMBER: _ClassVar[int]
    INFO_DB_DSN_FIELD_NUMBER: _ClassVar[int]
    REDIS_INFO_EXPIRATION_FIELD_NUMBER: _ClassVar[int]
    info_storage: AvailableInfoStorages
    info_dir: str
    info_db_dsn: str
    redis_info_expiration: int
    def __init__(self, info_storage: _Optional[_Union[AvailableInfoStorages, str]] = ..., info_dir: _Optional[str] = ..., info_db_dsn: _Optional[str] = ..., redis_info_expiration: _Optional[int] = ...) -> None: ...

class AMQPHooksOptions(_message.Message):
    __slots__ = ("url", "declare_exchange", "declare_queues", "durable_exchange", "durable_queues", "celery", "exchange", "exchange_kind", "routing_key", "queues_prefix", "connection_pool_size", "channel_pool_size", "idle_connection_timeout", "idle_channels_timeout", "auto_delete")
    URL_FIELD_NUMBER: _ClassVar[int]
    DECLARE_EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    DECLARE_QUEUES_FIELD_NUMBER: _ClassVar[int]
    DURABLE_EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    DURABLE_QUEUES_FIELD_NUMBER: _ClassVar[int]
    CELERY_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_KIND_FIELD_NUMBER: _ClassVar[int]
    ROUTING_KEY_FIELD_NUMBER: _ClassVar[int]
    QUEUES_PREFIX_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_POOL_SIZE_FIELD_NUMBER: _ClassVar[int]
    CHANNEL_POOL_SIZE_FIELD_NUMBER: _ClassVar[int]
    IDLE_CONNECTION_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    IDLE_CHANNELS_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    AUTO_DELETE_FIELD_NUMBER: _ClassVar[int]
    url: str
    declare_exchange: bool
    declare_queues: bool
    durable_exchange: bool
    durable_queues: bool
    celery: bool
    exchange: str
    exchange_kind: str
    routing_key: str
    queues_prefix: str
    connection_pool_size: int
    channel_pool_size: int
    idle_connection_timeout: int
    idle_channels_timeout: int
    auto_delete: bool
    def __init__(self, url: _Optional[str] = ..., declare_exchange: bool = ..., declare_queues: bool = ..., durable_exchange: bool = ..., durable_queues: bool = ..., celery: bool = ..., exchange: _Optional[str] = ..., exchange_kind: _Optional[str] = ..., routing_key: _Optional[str] = ..., queues_prefix: _Optional[str] = ..., connection_pool_size: _Optional[int] = ..., channel_pool_size: _Optional[int] = ..., idle_connection_timeout: _Optional[int] = ..., idle_channels_timeout: _Optional[int] = ..., auto_delete: bool = ...) -> None: ...

class KafkaHookOptions(_message.Message):
    __slots__ = ("urls", "client_id", "topic", "prefix", "required_acks", "compression", "idle_timeout", "send_timeout", "extra_kafka_opts")
    class ExtraKafkaOptsEntry(_message.Message):
        __slots__ = ("key", "value")
        KEY_FIELD_NUMBER: _ClassVar[int]
        VALUE_FIELD_NUMBER: _ClassVar[int]
        key: str
        value: str
        def __init__(self, key: _Optional[str] = ..., value: _Optional[str] = ...) -> None: ...
    URLS_FIELD_NUMBER: _ClassVar[int]
    CLIENT_ID_FIELD_NUMBER: _ClassVar[int]
    TOPIC_FIELD_NUMBER: _ClassVar[int]
    PREFIX_FIELD_NUMBER: _ClassVar[int]
    REQUIRED_ACKS_FIELD_NUMBER: _ClassVar[int]
    COMPRESSION_FIELD_NUMBER: _ClassVar[int]
    IDLE_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    SEND_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    EXTRA_KAFKA_OPTS_FIELD_NUMBER: _ClassVar[int]
    urls: str
    client_id: str
    topic: str
    prefix: str
    required_acks: str
    compression: str
    idle_timeout: int
    send_timeout: int
    extra_kafka_opts: _containers.ScalarMap[str, str]
    def __init__(self, urls: _Optional[str] = ..., client_id: _Optional[str] = ..., topic: _Optional[str] = ..., prefix: _Optional[str] = ..., required_acks: _Optional[str] = ..., compression: _Optional[str] = ..., idle_timeout: _Optional[int] = ..., send_timeout: _Optional[int] = ..., extra_kafka_opts: _Optional[_Mapping[str, str]] = ...) -> None: ...

class NatsHookOptions(_message.Message):
    __slots__ = ("urls", "subject", "prefix", "wait_for_replies", "username", "password", "token")
    URLS_FIELD_NUMBER: _ClassVar[int]
    SUBJECT_FIELD_NUMBER: _ClassVar[int]
    PREFIX_FIELD_NUMBER: _ClassVar[int]
    WAIT_FOR_REPLIES_FIELD_NUMBER: _ClassVar[int]
    USERNAME_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    TOKEN_FIELD_NUMBER: _ClassVar[int]
    urls: _containers.RepeatedScalarFieldContainer[str]
    subject: str
    prefix: str
    wait_for_replies: bool
    username: str
    password: str
    token: str
    def __init__(self, urls: _Optional[_Iterable[str]] = ..., subject: _Optional[str] = ..., prefix: _Optional[str] = ..., wait_for_replies: bool = ..., username: _Optional[str] = ..., password: _Optional[str] = ..., token: _Optional[str] = ...) -> None: ...

class NotificationsOptions(_message.Message):
    __slots__ = ("hooks_format", "hooks", "behind_proxy", "hooks_http_urls", "http_hook_timeout", "hooks_http_proxy_headers", "hooks_dir", "hooks_file", "amqp_hook_opts", "kafka_hook_opts", "nats_hook_opts")
    HOOKS_FORMAT_FIELD_NUMBER: _ClassVar[int]
    HOOKS_FIELD_NUMBER: _ClassVar[int]
    BEHIND_PROXY_FIELD_NUMBER: _ClassVar[int]
    HOOKS_HTTP_URLS_FIELD_NUMBER: _ClassVar[int]
    HTTP_HOOK_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    HOOKS_HTTP_PROXY_HEADERS_FIELD_NUMBER: _ClassVar[int]
    HOOKS_DIR_FIELD_NUMBER: _ClassVar[int]
    HOOKS_FILE_FIELD_NUMBER: _ClassVar[int]
    AMQP_HOOK_OPTS_FIELD_NUMBER: _ClassVar[int]
    KAFKA_HOOK_OPTS_FIELD_NUMBER: _ClassVar[int]
    NATS_HOOK_OPTS_FIELD_NUMBER: _ClassVar[int]
    hooks_format: Format
    hooks: _containers.RepeatedScalarFieldContainer[Hook]
    behind_proxy: bool
    hooks_http_urls: _containers.RepeatedScalarFieldContainer[str]
    http_hook_timeout: int
    hooks_http_proxy_headers: _containers.RepeatedScalarFieldContainer[str]
    hooks_dir: str
    hooks_file: str
    amqp_hook_opts: AMQPHooksOptions
    kafka_hook_opts: KafkaHookOptions
    nats_hook_opts: NatsHookOptions
    def __init__(self, hooks_format: _Optional[_Union[Format, str]] = ..., hooks: _Optional[_Iterable[_Union[Hook, str]]] = ..., behind_proxy: bool = ..., hooks_http_urls: _Optional[_Iterable[str]] = ..., http_hook_timeout: _Optional[int] = ..., hooks_http_proxy_headers: _Optional[_Iterable[str]] = ..., hooks_dir: _Optional[str] = ..., hooks_file: _Optional[str] = ..., amqp_hook_opts: _Optional[_Union[AMQPHooksOptions, _Mapping]] = ..., kafka_hook_opts: _Optional[_Union[KafkaHookOptions, _Mapping]] = ..., nats_hook_opts: _Optional[_Union[NatsHookOptions, _Mapping]] = ...) -> None: ...

class SentryOptions(_message.Message):
    __slots__ = ("dsn", "sample_rate")
    DSN_FIELD_NUMBER: _ClassVar[int]
    SAMPLE_RATE_FIELD_NUMBER: _ClassVar[int]
    dsn: str
    sample_rate: float
    def __init__(self, dsn: _Optional[str] = ..., sample_rate: _Optional[float] = ...) -> None: ...

class RustusConf(_message.Message):
    __slots__ = ("host", "port", "disable_health_access_log", "url", "cors", "max_body_size", "log_level", "workers", "tus_extensions", "allow_empty", "remove_parts", "max_file_size", "storage_opts", "info_storage_opts", "notification_opts", "sentry_opts")
    HOST_FIELD_NUMBER: _ClassVar[int]
    PORT_FIELD_NUMBER: _ClassVar[int]
    DISABLE_HEALTH_ACCESS_LOG_FIELD_NUMBER: _ClassVar[int]
    URL_FIELD_NUMBER: _ClassVar[int]
    CORS_FIELD_NUMBER: _ClassVar[int]
    MAX_BODY_SIZE_FIELD_NUMBER: _ClassVar[int]
    LOG_LEVEL_FIELD_NUMBER: _ClassVar[int]
    WORKERS_FIELD_NUMBER: _ClassVar[int]
    TUS_EXTENSIONS_FIELD_NUMBER: _ClassVar[int]
    ALLOW_EMPTY_FIELD_NUMBER: _ClassVar[int]
    REMOVE_PARTS_FIELD_NUMBER: _ClassVar[int]
    MAX_FILE_SIZE_FIELD_NUMBER: _ClassVar[int]
    STORAGE_OPTS_FIELD_NUMBER: _ClassVar[int]
    INFO_STORAGE_OPTS_FIELD_NUMBER: _ClassVar[int]
    NOTIFICATION_OPTS_FIELD_NUMBER: _ClassVar[int]
    SENTRY_OPTS_FIELD_NUMBER: _ClassVar[int]
    host: str
    port: int
    disable_health_access_log: bool
    url: str
    cors: _containers.RepeatedScalarFieldContainer[str]
    max_body_size: int
    log_level: str
    workers: int
    tus_extensions: _containers.RepeatedScalarFieldContainer[Extension]
    allow_empty: bool
    remove_parts: bool
    max_file_size: int
    storage_opts: DataStorageOptions
    info_storage_opts: InfoStoreOptions
    notification_opts: NotificationsOptions
    sentry_opts: SentryOptions
    def __init__(self, host: _Optional[str] = ..., port: _Optional[int] = ..., disable_health_access_log: bool = ..., url: _Optional[str] = ..., cors: _Optional[_Iterable[str]] = ..., max_body_size: _Optional[int] = ..., log_level: _Optional[str] = ..., workers: _Optional[int] = ..., tus_extensions: _Optional[_Iterable[_Union[Extension, str]]] = ..., allow_empty: bool = ..., remove_parts: bool = ..., max_file_size: _Optional[int] = ..., storage_opts: _Optional[_Union[DataStorageOptions, _Mapping]] = ..., info_storage_opts: _Optional[_Union[InfoStoreOptions, _Mapping]] = ..., notification_opts: _Optional[_Union[NotificationsOptions, _Mapping]] = ..., sentry_opts: _Optional[_Union[SentryOptions, _Mapping]] = ...) -> None: ...
