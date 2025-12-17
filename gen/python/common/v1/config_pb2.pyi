from shared.v1 import error_pb2 as _error_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Environment(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
    __slots__ = ()
    LOCAL: _ClassVar[Environment]
    DEV: _ClassVar[Environment]
    PRODUCTION: _ClassVar[Environment]
LOCAL: Environment
DEV: Environment
PRODUCTION: Environment

class ConfigMain(_message.Message):
    __slots__ = ("env", "site_name", "site_url", "enable_link_previews", "restrict_link_previews", "enable_client_performance_debugging", "enable_gif_picker", "enable_custom_emoji", "enable_emoji_picker", "time_between_user_typing_updates_milliseconds", "enable_file_search", "enable_user_typing_messages", "enable_user_statuses", "enable_email_invitations", "enable_svgs", "allow_persistent_notifications", "persistent_notification_interval_minutes", "persistent_notification_max_count", "persistent_notification_max_recipients", "feature_flag_sync_interval_seconds", "allow_synced_drafts")
    ENV_FIELD_NUMBER: _ClassVar[int]
    SITE_NAME_FIELD_NUMBER: _ClassVar[int]
    SITE_URL_FIELD_NUMBER: _ClassVar[int]
    ENABLE_LINK_PREVIEWS_FIELD_NUMBER: _ClassVar[int]
    RESTRICT_LINK_PREVIEWS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_CLIENT_PERFORMANCE_DEBUGGING_FIELD_NUMBER: _ClassVar[int]
    ENABLE_GIF_PICKER_FIELD_NUMBER: _ClassVar[int]
    ENABLE_CUSTOM_EMOJI_FIELD_NUMBER: _ClassVar[int]
    ENABLE_EMOJI_PICKER_FIELD_NUMBER: _ClassVar[int]
    TIME_BETWEEN_USER_TYPING_UPDATES_MILLISECONDS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_FILE_SEARCH_FIELD_NUMBER: _ClassVar[int]
    ENABLE_USER_TYPING_MESSAGES_FIELD_NUMBER: _ClassVar[int]
    ENABLE_USER_STATUSES_FIELD_NUMBER: _ClassVar[int]
    ENABLE_EMAIL_INVITATIONS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SVGS_FIELD_NUMBER: _ClassVar[int]
    ALLOW_PERSISTENT_NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    PERSISTENT_NOTIFICATION_INTERVAL_MINUTES_FIELD_NUMBER: _ClassVar[int]
    PERSISTENT_NOTIFICATION_MAX_COUNT_FIELD_NUMBER: _ClassVar[int]
    PERSISTENT_NOTIFICATION_MAX_RECIPIENTS_FIELD_NUMBER: _ClassVar[int]
    FEATURE_FLAG_SYNC_INTERVAL_SECONDS_FIELD_NUMBER: _ClassVar[int]
    ALLOW_SYNCED_DRAFTS_FIELD_NUMBER: _ClassVar[int]
    env: str
    site_name: str
    site_url: str
    enable_link_previews: bool
    restrict_link_previews: str
    enable_client_performance_debugging: bool
    enable_gif_picker: bool
    enable_custom_emoji: bool
    enable_emoji_picker: bool
    time_between_user_typing_updates_milliseconds: int
    enable_file_search: bool
    enable_user_typing_messages: bool
    enable_user_statuses: bool
    enable_email_invitations: bool
    enable_svgs: bool
    allow_persistent_notifications: bool
    persistent_notification_interval_minutes: int
    persistent_notification_max_count: int
    persistent_notification_max_recipients: int
    feature_flag_sync_interval_seconds: int
    allow_synced_drafts: bool
    def __init__(self, env: _Optional[str] = ..., site_name: _Optional[str] = ..., site_url: _Optional[str] = ..., enable_link_previews: bool = ..., restrict_link_previews: _Optional[str] = ..., enable_client_performance_debugging: bool = ..., enable_gif_picker: bool = ..., enable_custom_emoji: bool = ..., enable_emoji_picker: bool = ..., time_between_user_typing_updates_milliseconds: _Optional[int] = ..., enable_file_search: bool = ..., enable_user_typing_messages: bool = ..., enable_user_statuses: bool = ..., enable_email_invitations: bool = ..., enable_svgs: bool = ..., allow_persistent_notifications: bool = ..., persistent_notification_interval_minutes: _Optional[int] = ..., persistent_notification_max_count: _Optional[int] = ..., persistent_notification_max_recipients: _Optional[int] = ..., feature_flag_sync_interval_seconds: _Optional[int] = ..., allow_synced_drafts: bool = ...) -> None: ...

class ConfigServices(_message.Message):
    __slots__ = ("common_service_grpc_url", "user_service_grpc_url", "products_service_grpc_url", "jaeger_collector_url", "common_service_prometheus_url", "user_service_prometheus_url", "products_service_prometheus_url", "users_service_max_receive_message_size_bytes", "auth_service_grpc_url", "auth_service_prometheus_url", "search_service_grpc_url", "search_service_prometheus_url", "orders_service_grpc_url", "orders_service_prometheus_url", "orders_service_max_receive_message_size_bytes", "inventory_service_grpc_url", "inventory_service_prometheus_url", "inventory_service_max_receive_message_size_bytes")
    COMMON_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    USER_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    JAEGER_COLLECTOR_URL_FIELD_NUMBER: _ClassVar[int]
    COMMON_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    USER_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    USERS_SERVICE_MAX_RECEIVE_MESSAGE_SIZE_BYTES_FIELD_NUMBER: _ClassVar[int]
    AUTH_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    AUTH_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    SEARCH_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    ORDERS_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    ORDERS_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    ORDERS_SERVICE_MAX_RECEIVE_MESSAGE_SIZE_BYTES_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_SERVICE_GRPC_URL_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_SERVICE_PROMETHEUS_URL_FIELD_NUMBER: _ClassVar[int]
    INVENTORY_SERVICE_MAX_RECEIVE_MESSAGE_SIZE_BYTES_FIELD_NUMBER: _ClassVar[int]
    common_service_grpc_url: str
    user_service_grpc_url: str
    products_service_grpc_url: str
    jaeger_collector_url: str
    common_service_prometheus_url: str
    user_service_prometheus_url: str
    products_service_prometheus_url: str
    users_service_max_receive_message_size_bytes: int
    auth_service_grpc_url: str
    auth_service_prometheus_url: str
    search_service_grpc_url: str
    search_service_prometheus_url: str
    orders_service_grpc_url: str
    orders_service_prometheus_url: str
    orders_service_max_receive_message_size_bytes: int
    inventory_service_grpc_url: str
    inventory_service_prometheus_url: str
    inventory_service_max_receive_message_size_bytes: int
    def __init__(self, common_service_grpc_url: _Optional[str] = ..., user_service_grpc_url: _Optional[str] = ..., products_service_grpc_url: _Optional[str] = ..., jaeger_collector_url: _Optional[str] = ..., common_service_prometheus_url: _Optional[str] = ..., user_service_prometheus_url: _Optional[str] = ..., products_service_prometheus_url: _Optional[str] = ..., users_service_max_receive_message_size_bytes: _Optional[int] = ..., auth_service_grpc_url: _Optional[str] = ..., auth_service_prometheus_url: _Optional[str] = ..., search_service_grpc_url: _Optional[str] = ..., search_service_prometheus_url: _Optional[str] = ..., orders_service_grpc_url: _Optional[str] = ..., orders_service_prometheus_url: _Optional[str] = ..., orders_service_max_receive_message_size_bytes: _Optional[int] = ..., inventory_service_grpc_url: _Optional[str] = ..., inventory_service_prometheus_url: _Optional[str] = ..., inventory_service_max_receive_message_size_bytes: _Optional[int] = ...) -> None: ...

class ConfigOAuth(_message.Message):
    __slots__ = ("oauth_provider_url", "oauth_client_id", "oauth_client_secret", "oauth_db_dsn", "oauth_redirect_url", "oauth_login_url", "oauth_consent_url", "oauth_response_type", "oauth_scope", "oauth_admin_url", "oauth_backend_url", "frontend_login_url", "frontend_login_error_url", "oauth_grant_access_token_audience")
    OAUTH_PROVIDER_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_CLIENT_ID_FIELD_NUMBER: _ClassVar[int]
    OAUTH_CLIENT_SECRET_FIELD_NUMBER: _ClassVar[int]
    OAUTH_DB_DSN_FIELD_NUMBER: _ClassVar[int]
    OAUTH_REDIRECT_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_LOGIN_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_CONSENT_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_RESPONSE_TYPE_FIELD_NUMBER: _ClassVar[int]
    OAUTH_SCOPE_FIELD_NUMBER: _ClassVar[int]
    OAUTH_ADMIN_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_BACKEND_URL_FIELD_NUMBER: _ClassVar[int]
    FRONTEND_LOGIN_URL_FIELD_NUMBER: _ClassVar[int]
    FRONTEND_LOGIN_ERROR_URL_FIELD_NUMBER: _ClassVar[int]
    OAUTH_GRANT_ACCESS_TOKEN_AUDIENCE_FIELD_NUMBER: _ClassVar[int]
    oauth_provider_url: str
    oauth_client_id: str
    oauth_client_secret: str
    oauth_db_dsn: str
    oauth_redirect_url: str
    oauth_login_url: str
    oauth_consent_url: str
    oauth_response_type: str
    oauth_scope: _containers.RepeatedScalarFieldContainer[str]
    oauth_admin_url: str
    oauth_backend_url: str
    frontend_login_url: str
    frontend_login_error_url: str
    oauth_grant_access_token_audience: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, oauth_provider_url: _Optional[str] = ..., oauth_client_id: _Optional[str] = ..., oauth_client_secret: _Optional[str] = ..., oauth_db_dsn: _Optional[str] = ..., oauth_redirect_url: _Optional[str] = ..., oauth_login_url: _Optional[str] = ..., oauth_consent_url: _Optional[str] = ..., oauth_response_type: _Optional[str] = ..., oauth_scope: _Optional[_Iterable[str]] = ..., oauth_admin_url: _Optional[str] = ..., oauth_backend_url: _Optional[str] = ..., frontend_login_url: _Optional[str] = ..., frontend_login_error_url: _Optional[str] = ..., oauth_grant_access_token_audience: _Optional[_Iterable[str]] = ...) -> None: ...

class ConfigSecurity(_message.Message):
    __slots__ = ("access_token_expiry_web_in_hours", "access_token_expiry_mobile_in_hours", "access_token_expiry_sso_in_hours", "access_token_cache_in_minutes", "refresh_token_expiry_in_hours", "maximum_login_attempts", "terminate_sessions_on_password_change", "email_confirmation_url", "password_reset_url", "token_confirmation_expiry_in_hours", "token_password_reset_expiry_in_hours", "enable_insecure_outgoing_connections", "enable_multifactor_authentication", "enforce_multifactor_authentication", "enable_oauth_service_provider", "enable_outgoing_oauth_connections", "allow_cors_from", "cors_exposed_headers", "cors_allow_credentials", "cors_debug", "allow_cookies_for_subdomains")
    ACCESS_TOKEN_EXPIRY_WEB_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_EXPIRY_MOBILE_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_EXPIRY_SSO_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    ACCESS_TOKEN_CACHE_IN_MINUTES_FIELD_NUMBER: _ClassVar[int]
    REFRESH_TOKEN_EXPIRY_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_LOGIN_ATTEMPTS_FIELD_NUMBER: _ClassVar[int]
    TERMINATE_SESSIONS_ON_PASSWORD_CHANGE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_CONFIRMATION_URL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_RESET_URL_FIELD_NUMBER: _ClassVar[int]
    TOKEN_CONFIRMATION_EXPIRY_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    TOKEN_PASSWORD_RESET_EXPIRY_IN_HOURS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_INSECURE_OUTGOING_CONNECTIONS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_MULTIFACTOR_AUTHENTICATION_FIELD_NUMBER: _ClassVar[int]
    ENFORCE_MULTIFACTOR_AUTHENTICATION_FIELD_NUMBER: _ClassVar[int]
    ENABLE_OAUTH_SERVICE_PROVIDER_FIELD_NUMBER: _ClassVar[int]
    ENABLE_OUTGOING_OAUTH_CONNECTIONS_FIELD_NUMBER: _ClassVar[int]
    ALLOW_CORS_FROM_FIELD_NUMBER: _ClassVar[int]
    CORS_EXPOSED_HEADERS_FIELD_NUMBER: _ClassVar[int]
    CORS_ALLOW_CREDENTIALS_FIELD_NUMBER: _ClassVar[int]
    CORS_DEBUG_FIELD_NUMBER: _ClassVar[int]
    ALLOW_COOKIES_FOR_SUBDOMAINS_FIELD_NUMBER: _ClassVar[int]
    access_token_expiry_web_in_hours: int
    access_token_expiry_mobile_in_hours: int
    access_token_expiry_sso_in_hours: int
    access_token_cache_in_minutes: int
    refresh_token_expiry_in_hours: int
    maximum_login_attempts: int
    terminate_sessions_on_password_change: bool
    email_confirmation_url: str
    password_reset_url: str
    token_confirmation_expiry_in_hours: int
    token_password_reset_expiry_in_hours: int
    enable_insecure_outgoing_connections: bool
    enable_multifactor_authentication: bool
    enforce_multifactor_authentication: bool
    enable_oauth_service_provider: bool
    enable_outgoing_oauth_connections: bool
    allow_cors_from: str
    cors_exposed_headers: str
    cors_allow_credentials: bool
    cors_debug: bool
    allow_cookies_for_subdomains: bool
    def __init__(self, access_token_expiry_web_in_hours: _Optional[int] = ..., access_token_expiry_mobile_in_hours: _Optional[int] = ..., access_token_expiry_sso_in_hours: _Optional[int] = ..., access_token_cache_in_minutes: _Optional[int] = ..., refresh_token_expiry_in_hours: _Optional[int] = ..., maximum_login_attempts: _Optional[int] = ..., terminate_sessions_on_password_change: bool = ..., email_confirmation_url: _Optional[str] = ..., password_reset_url: _Optional[str] = ..., token_confirmation_expiry_in_hours: _Optional[int] = ..., token_password_reset_expiry_in_hours: _Optional[int] = ..., enable_insecure_outgoing_connections: bool = ..., enable_multifactor_authentication: bool = ..., enforce_multifactor_authentication: bool = ..., enable_oauth_service_provider: bool = ..., enable_outgoing_oauth_connections: bool = ..., allow_cors_from: _Optional[str] = ..., cors_exposed_headers: _Optional[str] = ..., cors_allow_credentials: bool = ..., cors_debug: bool = ..., allow_cookies_for_subdomains: bool = ...) -> None: ...

class CacheConfig(_message.Message):
    __slots__ = ("cache_type", "redis_address", "redis_password", "redis_db", "redis_cache_prefix", "disable_client_cache")
    CACHE_TYPE_FIELD_NUMBER: _ClassVar[int]
    REDIS_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    REDIS_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    REDIS_DB_FIELD_NUMBER: _ClassVar[int]
    REDIS_CACHE_PREFIX_FIELD_NUMBER: _ClassVar[int]
    DISABLE_CLIENT_CACHE_FIELD_NUMBER: _ClassVar[int]
    cache_type: str
    redis_address: str
    redis_password: str
    redis_db: int
    redis_cache_prefix: str
    disable_client_cache: bool
    def __init__(self, cache_type: _Optional[str] = ..., redis_address: _Optional[str] = ..., redis_password: _Optional[str] = ..., redis_db: _Optional[int] = ..., redis_cache_prefix: _Optional[str] = ..., disable_client_cache: bool = ...) -> None: ...

class ConfigMetrics(_message.Message):
    __slots__ = ("enable", "block_profile_rate", "listen_address", "enable_client_metrics", "enable_notification_metrics", "client_side_user_ids")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    BLOCK_PROFILE_RATE_FIELD_NUMBER: _ClassVar[int]
    LISTEN_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_CLIENT_METRICS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_NOTIFICATION_METRICS_FIELD_NUMBER: _ClassVar[int]
    CLIENT_SIDE_USER_IDS_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    block_profile_rate: int
    listen_address: str
    enable_client_metrics: bool
    enable_notification_metrics: bool
    client_side_user_ids: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, enable: bool = ..., block_profile_rate: _Optional[int] = ..., listen_address: _Optional[str] = ..., enable_client_metrics: bool = ..., enable_notification_metrics: bool = ..., client_side_user_ids: _Optional[_Iterable[str]] = ...) -> None: ...

class ConfigSSO(_message.Message):
    __slots__ = ("enable", "secret", "id", "scope", "auth_endpoint", "token_endpoint", "user_api_endpoint", "discovery_endpoint", "button_text", "button_color")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    SECRET_FIELD_NUMBER: _ClassVar[int]
    ID_FIELD_NUMBER: _ClassVar[int]
    SCOPE_FIELD_NUMBER: _ClassVar[int]
    AUTH_ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    TOKEN_ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    USER_API_ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    DISCOVERY_ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    BUTTON_TEXT_FIELD_NUMBER: _ClassVar[int]
    BUTTON_COLOR_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    secret: str
    id: str
    scope: str
    auth_endpoint: str
    token_endpoint: str
    user_api_endpoint: str
    discovery_endpoint: str
    button_text: str
    button_color: str
    def __init__(self, enable: bool = ..., secret: _Optional[str] = ..., id: _Optional[str] = ..., scope: _Optional[str] = ..., auth_endpoint: _Optional[str] = ..., token_endpoint: _Optional[str] = ..., user_api_endpoint: _Optional[str] = ..., discovery_endpoint: _Optional[str] = ..., button_text: _Optional[str] = ..., button_color: _Optional[str] = ...) -> None: ...

class ConfigSql(_message.Message):
    __slots__ = ("driver_name", "data_source", "max_idle_conns", "conn_max_lifetime_milliseconds", "conn_max_idle_time_milliseconds", "max_open_conns", "trace", "at_rest_encrypt_key", "query_timeout", "disable_database_search")
    DRIVER_NAME_FIELD_NUMBER: _ClassVar[int]
    DATA_SOURCE_FIELD_NUMBER: _ClassVar[int]
    MAX_IDLE_CONNS_FIELD_NUMBER: _ClassVar[int]
    CONN_MAX_LIFETIME_MILLISECONDS_FIELD_NUMBER: _ClassVar[int]
    CONN_MAX_IDLE_TIME_MILLISECONDS_FIELD_NUMBER: _ClassVar[int]
    MAX_OPEN_CONNS_FIELD_NUMBER: _ClassVar[int]
    TRACE_FIELD_NUMBER: _ClassVar[int]
    AT_REST_ENCRYPT_KEY_FIELD_NUMBER: _ClassVar[int]
    QUERY_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    DISABLE_DATABASE_SEARCH_FIELD_NUMBER: _ClassVar[int]
    driver_name: str
    data_source: str
    max_idle_conns: int
    conn_max_lifetime_milliseconds: int
    conn_max_idle_time_milliseconds: int
    max_open_conns: int
    trace: bool
    at_rest_encrypt_key: str
    query_timeout: int
    disable_database_search: bool
    def __init__(self, driver_name: _Optional[str] = ..., data_source: _Optional[str] = ..., max_idle_conns: _Optional[int] = ..., conn_max_lifetime_milliseconds: _Optional[int] = ..., conn_max_idle_time_milliseconds: _Optional[int] = ..., max_open_conns: _Optional[int] = ..., trace: bool = ..., at_rest_encrypt_key: _Optional[str] = ..., query_timeout: _Optional[int] = ..., disable_database_search: bool = ...) -> None: ...

class ConfigPassword(_message.Message):
    __slots__ = ("minimum_length", "maximum_length", "lowercase", "number", "uppercase", "symbol", "enable_forgot_link")
    MINIMUM_LENGTH_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_LENGTH_FIELD_NUMBER: _ClassVar[int]
    LOWERCASE_FIELD_NUMBER: _ClassVar[int]
    NUMBER_FIELD_NUMBER: _ClassVar[int]
    UPPERCASE_FIELD_NUMBER: _ClassVar[int]
    SYMBOL_FIELD_NUMBER: _ClassVar[int]
    ENABLE_FORGOT_LINK_FIELD_NUMBER: _ClassVar[int]
    minimum_length: int
    maximum_length: int
    lowercase: bool
    number: bool
    uppercase: bool
    symbol: bool
    enable_forgot_link: bool
    def __init__(self, minimum_length: _Optional[int] = ..., maximum_length: _Optional[int] = ..., lowercase: bool = ..., number: bool = ..., uppercase: bool = ..., symbol: bool = ..., enable_forgot_link: bool = ...) -> None: ...

class ConfigFile(_message.Message):
    __slots__ = ("enable_file_attachments", "enable_mobile_upload", "enable_mobile_download", "max_image_resolution", "max_image_decoder_concurrency", "driver_name", "amazon_s3_access_key_id", "amazon_s3_secret_access_key", "amazon_s3_bucket", "amazon_s3_path_prefix", "amazon_s3_region", "amazon_s3_endpoint", "amazon_s3_ssl", "amazon_s3_sign_v2", "amazon_s3_sse", "amazon_s3_trace", "amazon_s3_request_timeout_milliseconds", "amazon_s3_upload_part_size_bytes", "amazon_s3_storage_class")
    ENABLE_FILE_ATTACHMENTS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_MOBILE_UPLOAD_FIELD_NUMBER: _ClassVar[int]
    ENABLE_MOBILE_DOWNLOAD_FIELD_NUMBER: _ClassVar[int]
    MAX_IMAGE_RESOLUTION_FIELD_NUMBER: _ClassVar[int]
    MAX_IMAGE_DECODER_CONCURRENCY_FIELD_NUMBER: _ClassVar[int]
    DRIVER_NAME_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_ACCESS_KEY_ID_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_SECRET_ACCESS_KEY_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_BUCKET_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_PATH_PREFIX_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_REGION_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_ENDPOINT_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_SSL_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_SIGN_V2_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_SSE_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_TRACE_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_REQUEST_TIMEOUT_MILLISECONDS_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_UPLOAD_PART_SIZE_BYTES_FIELD_NUMBER: _ClassVar[int]
    AMAZON_S3_STORAGE_CLASS_FIELD_NUMBER: _ClassVar[int]
    enable_file_attachments: bool
    enable_mobile_upload: bool
    enable_mobile_download: bool
    max_image_resolution: int
    max_image_decoder_concurrency: int
    driver_name: str
    amazon_s3_access_key_id: str
    amazon_s3_secret_access_key: str
    amazon_s3_bucket: str
    amazon_s3_path_prefix: str
    amazon_s3_region: str
    amazon_s3_endpoint: str
    amazon_s3_ssl: bool
    amazon_s3_sign_v2: bool
    amazon_s3_sse: bool
    amazon_s3_trace: bool
    amazon_s3_request_timeout_milliseconds: int
    amazon_s3_upload_part_size_bytes: int
    amazon_s3_storage_class: str
    def __init__(self, enable_file_attachments: bool = ..., enable_mobile_upload: bool = ..., enable_mobile_download: bool = ..., max_image_resolution: _Optional[int] = ..., max_image_decoder_concurrency: _Optional[int] = ..., driver_name: _Optional[str] = ..., amazon_s3_access_key_id: _Optional[str] = ..., amazon_s3_secret_access_key: _Optional[str] = ..., amazon_s3_bucket: _Optional[str] = ..., amazon_s3_path_prefix: _Optional[str] = ..., amazon_s3_region: _Optional[str] = ..., amazon_s3_endpoint: _Optional[str] = ..., amazon_s3_ssl: bool = ..., amazon_s3_sign_v2: bool = ..., amazon_s3_sse: bool = ..., amazon_s3_trace: bool = ..., amazon_s3_request_timeout_milliseconds: _Optional[int] = ..., amazon_s3_upload_part_size_bytes: _Optional[int] = ..., amazon_s3_storage_class: _Optional[str] = ...) -> None: ...

class ConfigEmail(_message.Message):
    __slots__ = ("send_email_notifications", "require_email_verification", "feedback_email", "reply_to_address", "enable_smtp_auth", "smtp_username", "smtp_password", "smtp_server", "smtp_port", "smtp_server_timeout", "connection_security", "send_push_notifications", "push_notification_server", "push_notification_contents", "push_notification_buffer", "enable_email_batching", "email_batching_buffer_size", "email_batching_interval", "skip_server_certificate_verification", "email_notification_contents_type", "login_button_color", "login_button_border_color", "login_button_text_color", "rate_limiting_memory_size", "rate_limiting_per_hour", "rate_limiting_max_burst")
    SEND_EMAIL_NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    REQUIRE_EMAIL_VERIFICATION_FIELD_NUMBER: _ClassVar[int]
    FEEDBACK_EMAIL_FIELD_NUMBER: _ClassVar[int]
    REPLY_TO_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SMTP_AUTH_FIELD_NUMBER: _ClassVar[int]
    SMTP_USERNAME_FIELD_NUMBER: _ClassVar[int]
    SMTP_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    SMTP_SERVER_FIELD_NUMBER: _ClassVar[int]
    SMTP_PORT_FIELD_NUMBER: _ClassVar[int]
    SMTP_SERVER_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_SECURITY_FIELD_NUMBER: _ClassVar[int]
    SEND_PUSH_NOTIFICATIONS_FIELD_NUMBER: _ClassVar[int]
    PUSH_NOTIFICATION_SERVER_FIELD_NUMBER: _ClassVar[int]
    PUSH_NOTIFICATION_CONTENTS_FIELD_NUMBER: _ClassVar[int]
    PUSH_NOTIFICATION_BUFFER_FIELD_NUMBER: _ClassVar[int]
    ENABLE_EMAIL_BATCHING_FIELD_NUMBER: _ClassVar[int]
    EMAIL_BATCHING_BUFFER_SIZE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_BATCHING_INTERVAL_FIELD_NUMBER: _ClassVar[int]
    SKIP_SERVER_CERTIFICATE_VERIFICATION_FIELD_NUMBER: _ClassVar[int]
    EMAIL_NOTIFICATION_CONTENTS_TYPE_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_BORDER_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_TEXT_COLOR_FIELD_NUMBER: _ClassVar[int]
    RATE_LIMITING_MEMORY_SIZE_FIELD_NUMBER: _ClassVar[int]
    RATE_LIMITING_PER_HOUR_FIELD_NUMBER: _ClassVar[int]
    RATE_LIMITING_MAX_BURST_FIELD_NUMBER: _ClassVar[int]
    send_email_notifications: bool
    require_email_verification: bool
    feedback_email: str
    reply_to_address: str
    enable_smtp_auth: bool
    smtp_username: str
    smtp_password: str
    smtp_server: str
    smtp_port: str
    smtp_server_timeout: int
    connection_security: str
    send_push_notifications: bool
    push_notification_server: str
    push_notification_contents: str
    push_notification_buffer: int
    enable_email_batching: bool
    email_batching_buffer_size: int
    email_batching_interval: int
    skip_server_certificate_verification: bool
    email_notification_contents_type: str
    login_button_color: str
    login_button_border_color: str
    login_button_text_color: str
    rate_limiting_memory_size: int
    rate_limiting_per_hour: int
    rate_limiting_max_burst: int
    def __init__(self, send_email_notifications: bool = ..., require_email_verification: bool = ..., feedback_email: _Optional[str] = ..., reply_to_address: _Optional[str] = ..., enable_smtp_auth: bool = ..., smtp_username: _Optional[str] = ..., smtp_password: _Optional[str] = ..., smtp_server: _Optional[str] = ..., smtp_port: _Optional[str] = ..., smtp_server_timeout: _Optional[int] = ..., connection_security: _Optional[str] = ..., send_push_notifications: bool = ..., push_notification_server: _Optional[str] = ..., push_notification_contents: _Optional[str] = ..., push_notification_buffer: _Optional[int] = ..., enable_email_batching: bool = ..., email_batching_buffer_size: _Optional[int] = ..., email_batching_interval: _Optional[int] = ..., skip_server_certificate_verification: bool = ..., email_notification_contents_type: _Optional[str] = ..., login_button_color: _Optional[str] = ..., login_button_border_color: _Optional[str] = ..., login_button_text_color: _Optional[str] = ..., rate_limiting_memory_size: _Optional[int] = ..., rate_limiting_per_hour: _Optional[int] = ..., rate_limiting_max_burst: _Optional[int] = ...) -> None: ...

class ConfigRateLimit(_message.Message):
    __slots__ = ("enable", "per_sec", "max_burst", "memory_store_size", "vary_by_remote_addr", "vary_by_user", "vary_by_header")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    PER_SEC_FIELD_NUMBER: _ClassVar[int]
    MAX_BURST_FIELD_NUMBER: _ClassVar[int]
    MEMORY_STORE_SIZE_FIELD_NUMBER: _ClassVar[int]
    VARY_BY_REMOTE_ADDR_FIELD_NUMBER: _ClassVar[int]
    VARY_BY_USER_FIELD_NUMBER: _ClassVar[int]
    VARY_BY_HEADER_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    per_sec: int
    max_burst: int
    memory_store_size: int
    vary_by_remote_addr: bool
    vary_by_user: bool
    vary_by_header: str
    def __init__(self, enable: bool = ..., per_sec: _Optional[int] = ..., max_burst: _Optional[int] = ..., memory_store_size: _Optional[int] = ..., vary_by_remote_addr: bool = ..., vary_by_user: bool = ..., vary_by_header: _Optional[str] = ...) -> None: ...

class ConfigPrivacy(_message.Message):
    __slots__ = ("show_email_address", "show_full_name")
    SHOW_EMAIL_ADDRESS_FIELD_NUMBER: _ClassVar[int]
    SHOW_FULL_NAME_FIELD_NUMBER: _ClassVar[int]
    show_email_address: bool
    show_full_name: bool
    def __init__(self, show_email_address: bool = ..., show_full_name: bool = ...) -> None: ...

class ConfigSupport(_message.Message):
    __slots__ = ("terms_of_service_link", "privacy_policy_link", "about_link", "help_link", "report_a_problem_link", "forgot_password_link", "support_email")
    TERMS_OF_SERVICE_LINK_FIELD_NUMBER: _ClassVar[int]
    PRIVACY_POLICY_LINK_FIELD_NUMBER: _ClassVar[int]
    ABOUT_LINK_FIELD_NUMBER: _ClassVar[int]
    HELP_LINK_FIELD_NUMBER: _ClassVar[int]
    REPORT_A_PROBLEM_LINK_FIELD_NUMBER: _ClassVar[int]
    FORGOT_PASSWORD_LINK_FIELD_NUMBER: _ClassVar[int]
    SUPPORT_EMAIL_FIELD_NUMBER: _ClassVar[int]
    terms_of_service_link: str
    privacy_policy_link: str
    about_link: str
    help_link: str
    report_a_problem_link: str
    forgot_password_link: str
    support_email: str
    def __init__(self, terms_of_service_link: _Optional[str] = ..., privacy_policy_link: _Optional[str] = ..., about_link: _Optional[str] = ..., help_link: _Optional[str] = ..., report_a_problem_link: _Optional[str] = ..., forgot_password_link: _Optional[str] = ..., support_email: _Optional[str] = ...) -> None: ...

class ConfigLocalization(_message.Message):
    __slots__ = ("default_server_locale", "default_client_locale", "available_locales")
    DEFAULT_SERVER_LOCALE_FIELD_NUMBER: _ClassVar[int]
    DEFAULT_CLIENT_LOCALE_FIELD_NUMBER: _ClassVar[int]
    AVAILABLE_LOCALES_FIELD_NUMBER: _ClassVar[int]
    default_server_locale: str
    default_client_locale: str
    available_locales: _containers.RepeatedScalarFieldContainer[str]
    def __init__(self, default_server_locale: _Optional[str] = ..., default_client_locale: _Optional[str] = ..., available_locales: _Optional[_Iterable[str]] = ...) -> None: ...

class ConfigLdap(_message.Message):
    __slots__ = ("enable", "enable_sync", "ldap_server", "ldap_port", "connection_security", "base_dn", "bind_username", "bind_password", "maximum_login_attempts", "user_filter", "group_filter", "enable_admin_filter", "admin_filter", "group_display_name_attribute", "group_id_attribute", "first_name_attribute", "last_name_attribute", "email_attribute", "username_attribute", "nickname_attribute", "id_attribute", "position_attribute", "login_id_attribute", "picture_attribute", "sync_interval_minutes", "query_timeout", "max_page_size", "login_field_name", "login_button_color", "login_button_border_color", "login_button_text_color")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SYNC_FIELD_NUMBER: _ClassVar[int]
    LDAP_SERVER_FIELD_NUMBER: _ClassVar[int]
    LDAP_PORT_FIELD_NUMBER: _ClassVar[int]
    CONNECTION_SECURITY_FIELD_NUMBER: _ClassVar[int]
    BASE_DN_FIELD_NUMBER: _ClassVar[int]
    BIND_USERNAME_FIELD_NUMBER: _ClassVar[int]
    BIND_PASSWORD_FIELD_NUMBER: _ClassVar[int]
    MAXIMUM_LOGIN_ATTEMPTS_FIELD_NUMBER: _ClassVar[int]
    USER_FILTER_FIELD_NUMBER: _ClassVar[int]
    GROUP_FILTER_FIELD_NUMBER: _ClassVar[int]
    ENABLE_ADMIN_FILTER_FIELD_NUMBER: _ClassVar[int]
    ADMIN_FILTER_FIELD_NUMBER: _ClassVar[int]
    GROUP_DISPLAY_NAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    GROUP_ID_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    FIRST_NAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    USERNAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    ID_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    POSITION_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    LOGIN_ID_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    PICTURE_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    SYNC_INTERVAL_MINUTES_FIELD_NUMBER: _ClassVar[int]
    QUERY_TIMEOUT_FIELD_NUMBER: _ClassVar[int]
    MAX_PAGE_SIZE_FIELD_NUMBER: _ClassVar[int]
    LOGIN_FIELD_NAME_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_BORDER_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_TEXT_COLOR_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    enable_sync: bool
    ldap_server: str
    ldap_port: int
    connection_security: str
    base_dn: str
    bind_username: str
    bind_password: str
    maximum_login_attempts: int
    user_filter: str
    group_filter: str
    enable_admin_filter: bool
    admin_filter: str
    group_display_name_attribute: str
    group_id_attribute: str
    first_name_attribute: str
    last_name_attribute: str
    email_attribute: str
    username_attribute: str
    nickname_attribute: str
    id_attribute: str
    position_attribute: str
    login_id_attribute: str
    picture_attribute: str
    sync_interval_minutes: int
    query_timeout: int
    max_page_size: int
    login_field_name: str
    login_button_color: str
    login_button_border_color: str
    login_button_text_color: str
    def __init__(self, enable: bool = ..., enable_sync: bool = ..., ldap_server: _Optional[str] = ..., ldap_port: _Optional[int] = ..., connection_security: _Optional[str] = ..., base_dn: _Optional[str] = ..., bind_username: _Optional[str] = ..., bind_password: _Optional[str] = ..., maximum_login_attempts: _Optional[int] = ..., user_filter: _Optional[str] = ..., group_filter: _Optional[str] = ..., enable_admin_filter: bool = ..., admin_filter: _Optional[str] = ..., group_display_name_attribute: _Optional[str] = ..., group_id_attribute: _Optional[str] = ..., first_name_attribute: _Optional[str] = ..., last_name_attribute: _Optional[str] = ..., email_attribute: _Optional[str] = ..., username_attribute: _Optional[str] = ..., nickname_attribute: _Optional[str] = ..., id_attribute: _Optional[str] = ..., position_attribute: _Optional[str] = ..., login_id_attribute: _Optional[str] = ..., picture_attribute: _Optional[str] = ..., sync_interval_minutes: _Optional[int] = ..., query_timeout: _Optional[int] = ..., max_page_size: _Optional[int] = ..., login_field_name: _Optional[str] = ..., login_button_color: _Optional[str] = ..., login_button_border_color: _Optional[str] = ..., login_button_text_color: _Optional[str] = ...) -> None: ...

class ConfigSaml(_message.Message):
    __slots__ = ("enable", "enable_sync_with_ldap", "enable_sync_with_ldap_include_auth", "ignore_guests_ldap_sync", "verify", "encrypt", "sign_request", "idp_url", "idp_descriptor_url", "idp_metadata_url", "service_provider_identifier", "assertion_consumer_service_url", "signature_algorithm", "canonical_algorithm", "scoping_idp_provider_id", "scoping_idp_name", "idp_certificate_file", "public_certificate_file", "private_key_file", "id_attribute", "enable_admin_attribute", "admin_attribute", "first_name_attribute", "last_name_attribute", "email_attribute", "username_attribute", "nickname_attribute", "locale_attribute", "position_attribute", "login_button_text", "login_button_color", "login_button_border_color", "login_button_text_color")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SYNC_WITH_LDAP_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SYNC_WITH_LDAP_INCLUDE_AUTH_FIELD_NUMBER: _ClassVar[int]
    IGNORE_GUESTS_LDAP_SYNC_FIELD_NUMBER: _ClassVar[int]
    VERIFY_FIELD_NUMBER: _ClassVar[int]
    ENCRYPT_FIELD_NUMBER: _ClassVar[int]
    SIGN_REQUEST_FIELD_NUMBER: _ClassVar[int]
    IDP_URL_FIELD_NUMBER: _ClassVar[int]
    IDP_DESCRIPTOR_URL_FIELD_NUMBER: _ClassVar[int]
    IDP_METADATA_URL_FIELD_NUMBER: _ClassVar[int]
    SERVICE_PROVIDER_IDENTIFIER_FIELD_NUMBER: _ClassVar[int]
    ASSERTION_CONSUMER_SERVICE_URL_FIELD_NUMBER: _ClassVar[int]
    SIGNATURE_ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    CANONICAL_ALGORITHM_FIELD_NUMBER: _ClassVar[int]
    SCOPING_IDP_PROVIDER_ID_FIELD_NUMBER: _ClassVar[int]
    SCOPING_IDP_NAME_FIELD_NUMBER: _ClassVar[int]
    IDP_CERTIFICATE_FILE_FIELD_NUMBER: _ClassVar[int]
    PUBLIC_CERTIFICATE_FILE_FIELD_NUMBER: _ClassVar[int]
    PRIVATE_KEY_FILE_FIELD_NUMBER: _ClassVar[int]
    ID_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    ENABLE_ADMIN_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    ADMIN_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    FIRST_NAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    LAST_NAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    USERNAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    NICKNAME_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    LOCALE_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    POSITION_ATTRIBUTE_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_TEXT_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_BORDER_COLOR_FIELD_NUMBER: _ClassVar[int]
    LOGIN_BUTTON_TEXT_COLOR_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    enable_sync_with_ldap: bool
    enable_sync_with_ldap_include_auth: bool
    ignore_guests_ldap_sync: bool
    verify: bool
    encrypt: bool
    sign_request: bool
    idp_url: str
    idp_descriptor_url: str
    idp_metadata_url: str
    service_provider_identifier: str
    assertion_consumer_service_url: str
    signature_algorithm: str
    canonical_algorithm: str
    scoping_idp_provider_id: str
    scoping_idp_name: str
    idp_certificate_file: str
    public_certificate_file: str
    private_key_file: str
    id_attribute: str
    enable_admin_attribute: bool
    admin_attribute: str
    first_name_attribute: str
    last_name_attribute: str
    email_attribute: str
    username_attribute: str
    nickname_attribute: str
    locale_attribute: str
    position_attribute: str
    login_button_text: str
    login_button_color: str
    login_button_border_color: str
    login_button_text_color: str
    def __init__(self, enable: bool = ..., enable_sync_with_ldap: bool = ..., enable_sync_with_ldap_include_auth: bool = ..., ignore_guests_ldap_sync: bool = ..., verify: bool = ..., encrypt: bool = ..., sign_request: bool = ..., idp_url: _Optional[str] = ..., idp_descriptor_url: _Optional[str] = ..., idp_metadata_url: _Optional[str] = ..., service_provider_identifier: _Optional[str] = ..., assertion_consumer_service_url: _Optional[str] = ..., signature_algorithm: _Optional[str] = ..., canonical_algorithm: _Optional[str] = ..., scoping_idp_provider_id: _Optional[str] = ..., scoping_idp_name: _Optional[str] = ..., idp_certificate_file: _Optional[str] = ..., public_certificate_file: _Optional[str] = ..., private_key_file: _Optional[str] = ..., id_attribute: _Optional[str] = ..., enable_admin_attribute: bool = ..., admin_attribute: _Optional[str] = ..., first_name_attribute: _Optional[str] = ..., last_name_attribute: _Optional[str] = ..., email_attribute: _Optional[str] = ..., username_attribute: _Optional[str] = ..., nickname_attribute: _Optional[str] = ..., locale_attribute: _Optional[str] = ..., position_attribute: _Optional[str] = ..., login_button_text: _Optional[str] = ..., login_button_color: _Optional[str] = ..., login_button_border_color: _Optional[str] = ..., login_button_text_color: _Optional[str] = ...) -> None: ...

class ConfigNativeApp(_message.Message):
    __slots__ = ("app_custom_url_schemes", "app_download_link", "android_app_download_link", "ios_app_download_link", "mobile_external_browser", "mobile_enable_biometrics", "mobile_prevent_screen_capture", "mobile_jailbreak_protection")
    APP_CUSTOM_URL_SCHEMES_FIELD_NUMBER: _ClassVar[int]
    APP_DOWNLOAD_LINK_FIELD_NUMBER: _ClassVar[int]
    ANDROID_APP_DOWNLOAD_LINK_FIELD_NUMBER: _ClassVar[int]
    IOS_APP_DOWNLOAD_LINK_FIELD_NUMBER: _ClassVar[int]
    MOBILE_EXTERNAL_BROWSER_FIELD_NUMBER: _ClassVar[int]
    MOBILE_ENABLE_BIOMETRICS_FIELD_NUMBER: _ClassVar[int]
    MOBILE_PREVENT_SCREEN_CAPTURE_FIELD_NUMBER: _ClassVar[int]
    MOBILE_JAILBREAK_PROTECTION_FIELD_NUMBER: _ClassVar[int]
    app_custom_url_schemes: _containers.RepeatedScalarFieldContainer[str]
    app_download_link: str
    android_app_download_link: str
    ios_app_download_link: str
    mobile_external_browser: bool
    mobile_enable_biometrics: bool
    mobile_prevent_screen_capture: bool
    mobile_jailbreak_protection: bool
    def __init__(self, app_custom_url_schemes: _Optional[_Iterable[str]] = ..., app_download_link: _Optional[str] = ..., android_app_download_link: _Optional[str] = ..., ios_app_download_link: _Optional[str] = ..., mobile_external_browser: bool = ..., mobile_enable_biometrics: bool = ..., mobile_prevent_screen_capture: bool = ..., mobile_jailbreak_protection: bool = ...) -> None: ...

class ConfigMeilisearch(_message.Message):
    __slots__ = ("server_urls", "master_key", "enable_indexing", "enable_searching", "enable_autocomplete", "max_concurrency", "request_timeout_seconds", "index_prefix", "search_cutoff_ms", "enable_typo_tolerance", "kafka_broker", "kafka_group_id", "kafak_topic", "kafak_topic_dlq", "task_max_wait_ms", "task_max_retries", "task_backoff_base_ms", "shutdown_wait_secs")
    SERVER_URLS_FIELD_NUMBER: _ClassVar[int]
    MASTER_KEY_FIELD_NUMBER: _ClassVar[int]
    ENABLE_INDEXING_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SEARCHING_FIELD_NUMBER: _ClassVar[int]
    ENABLE_AUTOCOMPLETE_FIELD_NUMBER: _ClassVar[int]
    MAX_CONCURRENCY_FIELD_NUMBER: _ClassVar[int]
    REQUEST_TIMEOUT_SECONDS_FIELD_NUMBER: _ClassVar[int]
    INDEX_PREFIX_FIELD_NUMBER: _ClassVar[int]
    SEARCH_CUTOFF_MS_FIELD_NUMBER: _ClassVar[int]
    ENABLE_TYPO_TOLERANCE_FIELD_NUMBER: _ClassVar[int]
    KAFKA_BROKER_FIELD_NUMBER: _ClassVar[int]
    KAFKA_GROUP_ID_FIELD_NUMBER: _ClassVar[int]
    KAFAK_TOPIC_FIELD_NUMBER: _ClassVar[int]
    KAFAK_TOPIC_DLQ_FIELD_NUMBER: _ClassVar[int]
    TASK_MAX_WAIT_MS_FIELD_NUMBER: _ClassVar[int]
    TASK_MAX_RETRIES_FIELD_NUMBER: _ClassVar[int]
    TASK_BACKOFF_BASE_MS_FIELD_NUMBER: _ClassVar[int]
    SHUTDOWN_WAIT_SECS_FIELD_NUMBER: _ClassVar[int]
    server_urls: _containers.RepeatedScalarFieldContainer[str]
    master_key: str
    enable_indexing: bool
    enable_searching: bool
    enable_autocomplete: bool
    max_concurrency: int
    request_timeout_seconds: int
    index_prefix: str
    search_cutoff_ms: int
    enable_typo_tolerance: bool
    kafka_broker: str
    kafka_group_id: str
    kafak_topic: str
    kafak_topic_dlq: str
    task_max_wait_ms: int
    task_max_retries: int
    task_backoff_base_ms: int
    shutdown_wait_secs: int
    def __init__(self, server_urls: _Optional[_Iterable[str]] = ..., master_key: _Optional[str] = ..., enable_indexing: bool = ..., enable_searching: bool = ..., enable_autocomplete: bool = ..., max_concurrency: _Optional[int] = ..., request_timeout_seconds: _Optional[int] = ..., index_prefix: _Optional[str] = ..., search_cutoff_ms: _Optional[int] = ..., enable_typo_tolerance: bool = ..., kafka_broker: _Optional[str] = ..., kafka_group_id: _Optional[str] = ..., kafak_topic: _Optional[str] = ..., kafak_topic_dlq: _Optional[str] = ..., task_max_wait_ms: _Optional[int] = ..., task_max_retries: _Optional[int] = ..., task_backoff_base_ms: _Optional[int] = ..., shutdown_wait_secs: _Optional[int] = ...) -> None: ...

class ConfigBleve(_message.Message):
    __slots__ = ("index_dir", "enable_indexing", "enable_searching", "enable_autocomplete", "bulk_indexing_time_window_seconds", "batch_size")
    INDEX_DIR_FIELD_NUMBER: _ClassVar[int]
    ENABLE_INDEXING_FIELD_NUMBER: _ClassVar[int]
    ENABLE_SEARCHING_FIELD_NUMBER: _ClassVar[int]
    ENABLE_AUTOCOMPLETE_FIELD_NUMBER: _ClassVar[int]
    BULK_INDEXING_TIME_WINDOW_SECONDS_FIELD_NUMBER: _ClassVar[int]
    BATCH_SIZE_FIELD_NUMBER: _ClassVar[int]
    index_dir: str
    enable_indexing: bool
    enable_searching: bool
    enable_autocomplete: bool
    bulk_indexing_time_window_seconds: int
    batch_size: int
    def __init__(self, index_dir: _Optional[str] = ..., enable_indexing: bool = ..., enable_searching: bool = ..., enable_autocomplete: bool = ..., bulk_indexing_time_window_seconds: _Optional[int] = ..., batch_size: _Optional[int] = ...) -> None: ...

class ConfigDataRetention(_message.Message):
    __slots__ = ("enable_message_deletion", "enable_file_deletion", "enable_boards_deletion", "message_retention_hours", "file_retention_hours", "boards_retention_days", "deletion_job_start_time", "batch_size", "time_between_batches_milliseconds", "retention_ids_batch_size")
    ENABLE_MESSAGE_DELETION_FIELD_NUMBER: _ClassVar[int]
    ENABLE_FILE_DELETION_FIELD_NUMBER: _ClassVar[int]
    ENABLE_BOARDS_DELETION_FIELD_NUMBER: _ClassVar[int]
    MESSAGE_RETENTION_HOURS_FIELD_NUMBER: _ClassVar[int]
    FILE_RETENTION_HOURS_FIELD_NUMBER: _ClassVar[int]
    BOARDS_RETENTION_DAYS_FIELD_NUMBER: _ClassVar[int]
    DELETION_JOB_START_TIME_FIELD_NUMBER: _ClassVar[int]
    BATCH_SIZE_FIELD_NUMBER: _ClassVar[int]
    TIME_BETWEEN_BATCHES_MILLISECONDS_FIELD_NUMBER: _ClassVar[int]
    RETENTION_IDS_BATCH_SIZE_FIELD_NUMBER: _ClassVar[int]
    enable_message_deletion: bool
    enable_file_deletion: bool
    enable_boards_deletion: bool
    message_retention_hours: int
    file_retention_hours: int
    boards_retention_days: int
    deletion_job_start_time: str
    batch_size: int
    time_between_batches_milliseconds: int
    retention_ids_batch_size: int
    def __init__(self, enable_message_deletion: bool = ..., enable_file_deletion: bool = ..., enable_boards_deletion: bool = ..., message_retention_hours: _Optional[int] = ..., file_retention_hours: _Optional[int] = ..., boards_retention_days: _Optional[int] = ..., deletion_job_start_time: _Optional[str] = ..., batch_size: _Optional[int] = ..., time_between_batches_milliseconds: _Optional[int] = ..., retention_ids_batch_size: _Optional[int] = ...) -> None: ...

class ConfigImageProxy(_message.Message):
    __slots__ = ("enable", "image_proxy_type", "remote_image_proxy_url", "remote_image_proxy_options")
    ENABLE_FIELD_NUMBER: _ClassVar[int]
    IMAGE_PROXY_TYPE_FIELD_NUMBER: _ClassVar[int]
    REMOTE_IMAGE_PROXY_URL_FIELD_NUMBER: _ClassVar[int]
    REMOTE_IMAGE_PROXY_OPTIONS_FIELD_NUMBER: _ClassVar[int]
    enable: bool
    image_proxy_type: str
    remote_image_proxy_url: str
    remote_image_proxy_options: str
    def __init__(self, enable: bool = ..., image_proxy_type: _Optional[str] = ..., remote_image_proxy_url: _Optional[str] = ..., remote_image_proxy_options: _Optional[str] = ...) -> None: ...

class ConfigProducts(_message.Message):
    __slots__ = ("product_image_max_size_mb", "product_image_accepted_formats", "product_image_max_width", "product_image_max_height", "product_image_min_width", "product_image_min_height", "product_images_min_count_per_variant", "product_images_max_count_per_variant", "product_media_max_direct_uploading_size_mb")
    PRODUCT_IMAGE_MAX_SIZE_MB_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_ACCEPTED_FORMATS_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_MAX_WIDTH_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_MAX_HEIGHT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_MIN_WIDTH_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGE_MIN_HEIGHT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGES_MIN_COUNT_PER_VARIANT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_IMAGES_MAX_COUNT_PER_VARIANT_FIELD_NUMBER: _ClassVar[int]
    PRODUCT_MEDIA_MAX_DIRECT_UPLOADING_SIZE_MB_FIELD_NUMBER: _ClassVar[int]
    product_image_max_size_mb: int
    product_image_accepted_formats: _containers.RepeatedScalarFieldContainer[str]
    product_image_max_width: int
    product_image_max_height: int
    product_image_min_width: int
    product_image_min_height: int
    product_images_min_count_per_variant: int
    product_images_max_count_per_variant: int
    product_media_max_direct_uploading_size_mb: int
    def __init__(self, product_image_max_size_mb: _Optional[int] = ..., product_image_accepted_formats: _Optional[_Iterable[str]] = ..., product_image_max_width: _Optional[int] = ..., product_image_max_height: _Optional[int] = ..., product_image_min_width: _Optional[int] = ..., product_image_min_height: _Optional[int] = ..., product_images_min_count_per_variant: _Optional[int] = ..., product_images_max_count_per_variant: _Optional[int] = ..., product_media_max_direct_uploading_size_mb: _Optional[int] = ...) -> None: ...

class Config(_message.Message):
    __slots__ = ("main", "services", "security", "cache", "metrics", "sso", "sql", "password", "file", "email", "rate_limit", "privacy", "support", "localization", "ldap", "saml", "native_app", "meilisearch", "bleve", "data_retention", "image_proxy", "oauth", "products")
    MAIN_FIELD_NUMBER: _ClassVar[int]
    SERVICES_FIELD_NUMBER: _ClassVar[int]
    SECURITY_FIELD_NUMBER: _ClassVar[int]
    CACHE_FIELD_NUMBER: _ClassVar[int]
    METRICS_FIELD_NUMBER: _ClassVar[int]
    SSO_FIELD_NUMBER: _ClassVar[int]
    SQL_FIELD_NUMBER: _ClassVar[int]
    PASSWORD_FIELD_NUMBER: _ClassVar[int]
    FILE_FIELD_NUMBER: _ClassVar[int]
    EMAIL_FIELD_NUMBER: _ClassVar[int]
    RATE_LIMIT_FIELD_NUMBER: _ClassVar[int]
    PRIVACY_FIELD_NUMBER: _ClassVar[int]
    SUPPORT_FIELD_NUMBER: _ClassVar[int]
    LOCALIZATION_FIELD_NUMBER: _ClassVar[int]
    LDAP_FIELD_NUMBER: _ClassVar[int]
    SAML_FIELD_NUMBER: _ClassVar[int]
    NATIVE_APP_FIELD_NUMBER: _ClassVar[int]
    MEILISEARCH_FIELD_NUMBER: _ClassVar[int]
    BLEVE_FIELD_NUMBER: _ClassVar[int]
    DATA_RETENTION_FIELD_NUMBER: _ClassVar[int]
    IMAGE_PROXY_FIELD_NUMBER: _ClassVar[int]
    OAUTH_FIELD_NUMBER: _ClassVar[int]
    PRODUCTS_FIELD_NUMBER: _ClassVar[int]
    main: ConfigMain
    services: ConfigServices
    security: ConfigSecurity
    cache: CacheConfig
    metrics: ConfigMetrics
    sso: ConfigSSO
    sql: ConfigSql
    password: ConfigPassword
    file: ConfigFile
    email: ConfigEmail
    rate_limit: ConfigRateLimit
    privacy: ConfigPrivacy
    support: ConfigSupport
    localization: ConfigLocalization
    ldap: ConfigLdap
    saml: ConfigSaml
    native_app: ConfigNativeApp
    meilisearch: ConfigMeilisearch
    bleve: ConfigBleve
    data_retention: ConfigDataRetention
    image_proxy: ConfigImageProxy
    oauth: ConfigOAuth
    products: ConfigProducts
    def __init__(self, main: _Optional[_Union[ConfigMain, _Mapping]] = ..., services: _Optional[_Union[ConfigServices, _Mapping]] = ..., security: _Optional[_Union[ConfigSecurity, _Mapping]] = ..., cache: _Optional[_Union[CacheConfig, _Mapping]] = ..., metrics: _Optional[_Union[ConfigMetrics, _Mapping]] = ..., sso: _Optional[_Union[ConfigSSO, _Mapping]] = ..., sql: _Optional[_Union[ConfigSql, _Mapping]] = ..., password: _Optional[_Union[ConfigPassword, _Mapping]] = ..., file: _Optional[_Union[ConfigFile, _Mapping]] = ..., email: _Optional[_Union[ConfigEmail, _Mapping]] = ..., rate_limit: _Optional[_Union[ConfigRateLimit, _Mapping]] = ..., privacy: _Optional[_Union[ConfigPrivacy, _Mapping]] = ..., support: _Optional[_Union[ConfigSupport, _Mapping]] = ..., localization: _Optional[_Union[ConfigLocalization, _Mapping]] = ..., ldap: _Optional[_Union[ConfigLdap, _Mapping]] = ..., saml: _Optional[_Union[ConfigSaml, _Mapping]] = ..., native_app: _Optional[_Union[ConfigNativeApp, _Mapping]] = ..., meilisearch: _Optional[_Union[ConfigMeilisearch, _Mapping]] = ..., bleve: _Optional[_Union[ConfigBleve, _Mapping]] = ..., data_retention: _Optional[_Union[ConfigDataRetention, _Mapping]] = ..., image_proxy: _Optional[_Union[ConfigImageProxy, _Mapping]] = ..., oauth: _Optional[_Union[ConfigOAuth, _Mapping]] = ..., products: _Optional[_Union[ConfigProducts, _Mapping]] = ...) -> None: ...

class ConfigGetRequest(_message.Message):
    __slots__ = ("env",)
    ENV_FIELD_NUMBER: _ClassVar[int]
    env: Environment
    def __init__(self, env: _Optional[_Union[Environment, str]] = ...) -> None: ...

class ConfigGetResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: Config
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[Config, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ConfigUpdateRequest(_message.Message):
    __slots__ = ("config",)
    CONFIG_FIELD_NUMBER: _ClassVar[int]
    config: Config
    def __init__(self, config: _Optional[_Union[Config, _Mapping]] = ...) -> None: ...

class ConfigUpdateResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: Config
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[Config, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ConfigListenerResponse(_message.Message):
    __slots__ = ("data", "error")
    DATA_FIELD_NUMBER: _ClassVar[int]
    ERROR_FIELD_NUMBER: _ClassVar[int]
    data: Config
    error: _error_pb2.AppError
    def __init__(self, data: _Optional[_Union[Config, _Mapping]] = ..., error: _Optional[_Union[_error_pb2.AppError, _Mapping]] = ...) -> None: ...

class ConfigListenerRequest(_message.Message):
    __slots__ = ("client_id",)
    CLIENT_ID_FIELD_NUMBER: _ClassVar[int]
    client_id: str
    def __init__(self, client_id: _Optional[str] = ...) -> None: ...
