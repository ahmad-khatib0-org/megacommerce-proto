import * as jspb from 'google-protobuf'



export class ConfigMain extends jspb.Message {
  getReadTimeout(): number;
  setReadTimeout(value: number): ConfigMain;
  hasReadTimeout(): boolean;
  clearReadTimeout(): ConfigMain;

  getWriteTimeout(): number;
  setWriteTimeout(value: number): ConfigMain;
  hasWriteTimeout(): boolean;
  clearWriteTimeout(): ConfigMain;

  getIdleTimeout(): number;
  setIdleTimeout(value: number): ConfigMain;
  hasIdleTimeout(): boolean;
  clearIdleTimeout(): ConfigMain;

  getEnableLinkPreviews(): boolean;
  setEnableLinkPreviews(value: boolean): ConfigMain;
  hasEnableLinkPreviews(): boolean;
  clearEnableLinkPreviews(): ConfigMain;

  getRestrictLinkPreviews(): string;
  setRestrictLinkPreviews(value: string): ConfigMain;
  hasRestrictLinkPreviews(): boolean;
  clearRestrictLinkPreviews(): ConfigMain;

  getEnableClientPerformanceDebugging(): boolean;
  setEnableClientPerformanceDebugging(value: boolean): ConfigMain;
  hasEnableClientPerformanceDebugging(): boolean;
  clearEnableClientPerformanceDebugging(): ConfigMain;

  getEnableGifPicker(): boolean;
  setEnableGifPicker(value: boolean): ConfigMain;
  hasEnableGifPicker(): boolean;
  clearEnableGifPicker(): ConfigMain;

  getEnableCustomEmoji(): boolean;
  setEnableCustomEmoji(value: boolean): ConfigMain;
  hasEnableCustomEmoji(): boolean;
  clearEnableCustomEmoji(): ConfigMain;

  getEnableEmojiPicker(): boolean;
  setEnableEmojiPicker(value: boolean): ConfigMain;
  hasEnableEmojiPicker(): boolean;
  clearEnableEmojiPicker(): ConfigMain;

  getTimeBetweenUserTypingUpdatesMilliseconds(): number;
  setTimeBetweenUserTypingUpdatesMilliseconds(value: number): ConfigMain;
  hasTimeBetweenUserTypingUpdatesMilliseconds(): boolean;
  clearTimeBetweenUserTypingUpdatesMilliseconds(): ConfigMain;

  getEnableFileSearch(): boolean;
  setEnableFileSearch(value: boolean): ConfigMain;
  hasEnableFileSearch(): boolean;
  clearEnableFileSearch(): ConfigMain;

  getEnableUserTypingMessages(): boolean;
  setEnableUserTypingMessages(value: boolean): ConfigMain;
  hasEnableUserTypingMessages(): boolean;
  clearEnableUserTypingMessages(): ConfigMain;

  getEnableUserStatuses(): boolean;
  setEnableUserStatuses(value: boolean): ConfigMain;
  hasEnableUserStatuses(): boolean;
  clearEnableUserStatuses(): ConfigMain;

  getEnableEmailInvitations(): boolean;
  setEnableEmailInvitations(value: boolean): ConfigMain;
  hasEnableEmailInvitations(): boolean;
  clearEnableEmailInvitations(): ConfigMain;

  getEnableSvgs(): boolean;
  setEnableSvgs(value: boolean): ConfigMain;
  hasEnableSvgs(): boolean;
  clearEnableSvgs(): ConfigMain;

  getAllowPersistentNotifications(): boolean;
  setAllowPersistentNotifications(value: boolean): ConfigMain;
  hasAllowPersistentNotifications(): boolean;
  clearAllowPersistentNotifications(): ConfigMain;

  getPersistentNotificationIntervalMinutes(): number;
  setPersistentNotificationIntervalMinutes(value: number): ConfigMain;
  hasPersistentNotificationIntervalMinutes(): boolean;
  clearPersistentNotificationIntervalMinutes(): ConfigMain;

  getPersistentNotificationMaxCount(): number;
  setPersistentNotificationMaxCount(value: number): ConfigMain;
  hasPersistentNotificationMaxCount(): boolean;
  clearPersistentNotificationMaxCount(): ConfigMain;

  getPersistentNotificationMaxRecipients(): number;
  setPersistentNotificationMaxRecipients(value: number): ConfigMain;
  hasPersistentNotificationMaxRecipients(): boolean;
  clearPersistentNotificationMaxRecipients(): ConfigMain;

  getFeatureFlagSyncIntervalSeconds(): number;
  setFeatureFlagSyncIntervalSeconds(value: number): ConfigMain;
  hasFeatureFlagSyncIntervalSeconds(): boolean;
  clearFeatureFlagSyncIntervalSeconds(): ConfigMain;

  getAllowSyncedDrafts(): boolean;
  setAllowSyncedDrafts(value: boolean): ConfigMain;
  hasAllowSyncedDrafts(): boolean;
  clearAllowSyncedDrafts(): ConfigMain;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMain.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMain): ConfigMain.AsObject;
  static serializeBinaryToWriter(message: ConfigMain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMain;
  static deserializeBinaryFromReader(message: ConfigMain, reader: jspb.BinaryReader): ConfigMain;
}

export namespace ConfigMain {
  export type AsObject = {
    readTimeout?: number,
    writeTimeout?: number,
    idleTimeout?: number,
    enableLinkPreviews?: boolean,
    restrictLinkPreviews?: string,
    enableClientPerformanceDebugging?: boolean,
    enableGifPicker?: boolean,
    enableCustomEmoji?: boolean,
    enableEmojiPicker?: boolean,
    timeBetweenUserTypingUpdatesMilliseconds?: number,
    enableFileSearch?: boolean,
    enableUserTypingMessages?: boolean,
    enableUserStatuses?: boolean,
    enableEmailInvitations?: boolean,
    enableSvgs?: boolean,
    allowPersistentNotifications?: boolean,
    persistentNotificationIntervalMinutes?: number,
    persistentNotificationMaxCount?: number,
    persistentNotificationMaxRecipients?: number,
    featureFlagSyncIntervalSeconds?: number,
    allowSyncedDrafts?: boolean,
  }

  export enum ReadTimeoutCase { 
    _READ_TIMEOUT_NOT_SET = 0,
    READ_TIMEOUT = 1,
  }

  export enum WriteTimeoutCase { 
    _WRITE_TIMEOUT_NOT_SET = 0,
    WRITE_TIMEOUT = 2,
  }

  export enum IdleTimeoutCase { 
    _IDLE_TIMEOUT_NOT_SET = 0,
    IDLE_TIMEOUT = 3,
  }

  export enum EnableLinkPreviewsCase { 
    _ENABLE_LINK_PREVIEWS_NOT_SET = 0,
    ENABLE_LINK_PREVIEWS = 4,
  }

  export enum RestrictLinkPreviewsCase { 
    _RESTRICT_LINK_PREVIEWS_NOT_SET = 0,
    RESTRICT_LINK_PREVIEWS = 5,
  }

  export enum EnableClientPerformanceDebuggingCase { 
    _ENABLE_CLIENT_PERFORMANCE_DEBUGGING_NOT_SET = 0,
    ENABLE_CLIENT_PERFORMANCE_DEBUGGING = 6,
  }

  export enum EnableGifPickerCase { 
    _ENABLE_GIF_PICKER_NOT_SET = 0,
    ENABLE_GIF_PICKER = 7,
  }

  export enum EnableCustomEmojiCase { 
    _ENABLE_CUSTOM_EMOJI_NOT_SET = 0,
    ENABLE_CUSTOM_EMOJI = 8,
  }

  export enum EnableEmojiPickerCase { 
    _ENABLE_EMOJI_PICKER_NOT_SET = 0,
    ENABLE_EMOJI_PICKER = 9,
  }

  export enum TimeBetweenUserTypingUpdatesMillisecondsCase { 
    _TIME_BETWEEN_USER_TYPING_UPDATES_MILLISECONDS_NOT_SET = 0,
    TIME_BETWEEN_USER_TYPING_UPDATES_MILLISECONDS = 10,
  }

  export enum EnableFileSearchCase { 
    _ENABLE_FILE_SEARCH_NOT_SET = 0,
    ENABLE_FILE_SEARCH = 11,
  }

  export enum EnableUserTypingMessagesCase { 
    _ENABLE_USER_TYPING_MESSAGES_NOT_SET = 0,
    ENABLE_USER_TYPING_MESSAGES = 12,
  }

  export enum EnableUserStatusesCase { 
    _ENABLE_USER_STATUSES_NOT_SET = 0,
    ENABLE_USER_STATUSES = 13,
  }

  export enum EnableEmailInvitationsCase { 
    _ENABLE_EMAIL_INVITATIONS_NOT_SET = 0,
    ENABLE_EMAIL_INVITATIONS = 14,
  }

  export enum EnableSvgsCase { 
    _ENABLE_SVGS_NOT_SET = 0,
    ENABLE_SVGS = 15,
  }

  export enum AllowPersistentNotificationsCase { 
    _ALLOW_PERSISTENT_NOTIFICATIONS_NOT_SET = 0,
    ALLOW_PERSISTENT_NOTIFICATIONS = 16,
  }

  export enum PersistentNotificationIntervalMinutesCase { 
    _PERSISTENT_NOTIFICATION_INTERVAL_MINUTES_NOT_SET = 0,
    PERSISTENT_NOTIFICATION_INTERVAL_MINUTES = 17,
  }

  export enum PersistentNotificationMaxCountCase { 
    _PERSISTENT_NOTIFICATION_MAX_COUNT_NOT_SET = 0,
    PERSISTENT_NOTIFICATION_MAX_COUNT = 18,
  }

  export enum PersistentNotificationMaxRecipientsCase { 
    _PERSISTENT_NOTIFICATION_MAX_RECIPIENTS_NOT_SET = 0,
    PERSISTENT_NOTIFICATION_MAX_RECIPIENTS = 19,
  }

  export enum FeatureFlagSyncIntervalSecondsCase { 
    _FEATURE_FLAG_SYNC_INTERVAL_SECONDS_NOT_SET = 0,
    FEATURE_FLAG_SYNC_INTERVAL_SECONDS = 20,
  }

  export enum AllowSyncedDraftsCase { 
    _ALLOW_SYNCED_DRAFTS_NOT_SET = 0,
    ALLOW_SYNCED_DRAFTS = 21,
  }
}

export class ConfigSecurity extends jspb.Message {
  getMaximumLoginAttempts(): number;
  setMaximumLoginAttempts(value: number): ConfigSecurity;
  hasMaximumLoginAttempts(): boolean;
  clearMaximumLoginAttempts(): ConfigSecurity;

  getEnableInsecureOutgoingConnections(): boolean;
  setEnableInsecureOutgoingConnections(value: boolean): ConfigSecurity;
  hasEnableInsecureOutgoingConnections(): boolean;
  clearEnableInsecureOutgoingConnections(): ConfigSecurity;

  getEnableMultifactorAuthentication(): boolean;
  setEnableMultifactorAuthentication(value: boolean): ConfigSecurity;
  hasEnableMultifactorAuthentication(): boolean;
  clearEnableMultifactorAuthentication(): ConfigSecurity;

  getEnforceMultifactorAuthentication(): boolean;
  setEnforceMultifactorAuthentication(value: boolean): ConfigSecurity;
  hasEnforceMultifactorAuthentication(): boolean;
  clearEnforceMultifactorAuthentication(): ConfigSecurity;

  getEnableOauthServiceProvider(): boolean;
  setEnableOauthServiceProvider(value: boolean): ConfigSecurity;
  hasEnableOauthServiceProvider(): boolean;
  clearEnableOauthServiceProvider(): ConfigSecurity;

  getEnableOutgoingOauthConnections(): boolean;
  setEnableOutgoingOauthConnections(value: boolean): ConfigSecurity;
  hasEnableOutgoingOauthConnections(): boolean;
  clearEnableOutgoingOauthConnections(): ConfigSecurity;

  getTerminateSessionsOnPasswordChange(): boolean;
  setTerminateSessionsOnPasswordChange(value: boolean): ConfigSecurity;
  hasTerminateSessionsOnPasswordChange(): boolean;
  clearTerminateSessionsOnPasswordChange(): ConfigSecurity;

  getSessionLengthWebInHours(): number;
  setSessionLengthWebInHours(value: number): ConfigSecurity;
  hasSessionLengthWebInHours(): boolean;
  clearSessionLengthWebInHours(): ConfigSecurity;

  getSessionLengthMobileInHours(): number;
  setSessionLengthMobileInHours(value: number): ConfigSecurity;
  hasSessionLengthMobileInHours(): boolean;
  clearSessionLengthMobileInHours(): ConfigSecurity;

  getSessionLengthSsoInHours(): number;
  setSessionLengthSsoInHours(value: number): ConfigSecurity;
  hasSessionLengthSsoInHours(): boolean;
  clearSessionLengthSsoInHours(): ConfigSecurity;

  getAllowCorsFrom(): string;
  setAllowCorsFrom(value: string): ConfigSecurity;
  hasAllowCorsFrom(): boolean;
  clearAllowCorsFrom(): ConfigSecurity;

  getCorsExposedHeaders(): string;
  setCorsExposedHeaders(value: string): ConfigSecurity;
  hasCorsExposedHeaders(): boolean;
  clearCorsExposedHeaders(): ConfigSecurity;

  getCorsAllowCredentials(): boolean;
  setCorsAllowCredentials(value: boolean): ConfigSecurity;
  hasCorsAllowCredentials(): boolean;
  clearCorsAllowCredentials(): ConfigSecurity;

  getCorsDebug(): boolean;
  setCorsDebug(value: boolean): ConfigSecurity;
  hasCorsDebug(): boolean;
  clearCorsDebug(): ConfigSecurity;

  getAllowCookiesForSubdomains(): boolean;
  setAllowCookiesForSubdomains(value: boolean): ConfigSecurity;
  hasAllowCookiesForSubdomains(): boolean;
  clearAllowCookiesForSubdomains(): ConfigSecurity;

  getSessionCacheInMinutes(): number;
  setSessionCacheInMinutes(value: number): ConfigSecurity;
  hasSessionCacheInMinutes(): boolean;
  clearSessionCacheInMinutes(): ConfigSecurity;

  getWebsocketSecurePort(): number;
  setWebsocketSecurePort(value: number): ConfigSecurity;
  hasWebsocketSecurePort(): boolean;
  clearWebsocketSecurePort(): ConfigSecurity;

  getWebsocketPort(): number;
  setWebsocketPort(value: number): ConfigSecurity;
  hasWebsocketPort(): boolean;
  clearWebsocketPort(): ConfigSecurity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSecurity.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSecurity): ConfigSecurity.AsObject;
  static serializeBinaryToWriter(message: ConfigSecurity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSecurity;
  static deserializeBinaryFromReader(message: ConfigSecurity, reader: jspb.BinaryReader): ConfigSecurity;
}

export namespace ConfigSecurity {
  export type AsObject = {
    maximumLoginAttempts?: number,
    enableInsecureOutgoingConnections?: boolean,
    enableMultifactorAuthentication?: boolean,
    enforceMultifactorAuthentication?: boolean,
    enableOauthServiceProvider?: boolean,
    enableOutgoingOauthConnections?: boolean,
    terminateSessionsOnPasswordChange?: boolean,
    sessionLengthWebInHours?: number,
    sessionLengthMobileInHours?: number,
    sessionLengthSsoInHours?: number,
    allowCorsFrom?: string,
    corsExposedHeaders?: string,
    corsAllowCredentials?: boolean,
    corsDebug?: boolean,
    allowCookiesForSubdomains?: boolean,
    sessionCacheInMinutes?: number,
    websocketSecurePort?: number,
    websocketPort?: number,
  }

  export enum MaximumLoginAttemptsCase { 
    _MAXIMUM_LOGIN_ATTEMPTS_NOT_SET = 0,
    MAXIMUM_LOGIN_ATTEMPTS = 1,
  }

  export enum EnableInsecureOutgoingConnectionsCase { 
    _ENABLE_INSECURE_OUTGOING_CONNECTIONS_NOT_SET = 0,
    ENABLE_INSECURE_OUTGOING_CONNECTIONS = 2,
  }

  export enum EnableMultifactorAuthenticationCase { 
    _ENABLE_MULTIFACTOR_AUTHENTICATION_NOT_SET = 0,
    ENABLE_MULTIFACTOR_AUTHENTICATION = 3,
  }

  export enum EnforceMultifactorAuthenticationCase { 
    _ENFORCE_MULTIFACTOR_AUTHENTICATION_NOT_SET = 0,
    ENFORCE_MULTIFACTOR_AUTHENTICATION = 4,
  }

  export enum EnableOauthServiceProviderCase { 
    _ENABLE_OAUTH_SERVICE_PROVIDER_NOT_SET = 0,
    ENABLE_OAUTH_SERVICE_PROVIDER = 5,
  }

  export enum EnableOutgoingOauthConnectionsCase { 
    _ENABLE_OUTGOING_OAUTH_CONNECTIONS_NOT_SET = 0,
    ENABLE_OUTGOING_OAUTH_CONNECTIONS = 6,
  }

  export enum TerminateSessionsOnPasswordChangeCase { 
    _TERMINATE_SESSIONS_ON_PASSWORD_CHANGE_NOT_SET = 0,
    TERMINATE_SESSIONS_ON_PASSWORD_CHANGE = 7,
  }

  export enum SessionLengthWebInHoursCase { 
    _SESSION_LENGTH_WEB_IN_HOURS_NOT_SET = 0,
    SESSION_LENGTH_WEB_IN_HOURS = 8,
  }

  export enum SessionLengthMobileInHoursCase { 
    _SESSION_LENGTH_MOBILE_IN_HOURS_NOT_SET = 0,
    SESSION_LENGTH_MOBILE_IN_HOURS = 9,
  }

  export enum SessionLengthSsoInHoursCase { 
    _SESSION_LENGTH_SSO_IN_HOURS_NOT_SET = 0,
    SESSION_LENGTH_SSO_IN_HOURS = 10,
  }

  export enum AllowCorsFromCase { 
    _ALLOW_CORS_FROM_NOT_SET = 0,
    ALLOW_CORS_FROM = 11,
  }

  export enum CorsExposedHeadersCase { 
    _CORS_EXPOSED_HEADERS_NOT_SET = 0,
    CORS_EXPOSED_HEADERS = 12,
  }

  export enum CorsAllowCredentialsCase { 
    _CORS_ALLOW_CREDENTIALS_NOT_SET = 0,
    CORS_ALLOW_CREDENTIALS = 13,
  }

  export enum CorsDebugCase { 
    _CORS_DEBUG_NOT_SET = 0,
    CORS_DEBUG = 14,
  }

  export enum AllowCookiesForSubdomainsCase { 
    _ALLOW_COOKIES_FOR_SUBDOMAINS_NOT_SET = 0,
    ALLOW_COOKIES_FOR_SUBDOMAINS = 15,
  }

  export enum SessionCacheInMinutesCase { 
    _SESSION_CACHE_IN_MINUTES_NOT_SET = 0,
    SESSION_CACHE_IN_MINUTES = 16,
  }

  export enum WebsocketSecurePortCase { 
    _WEBSOCKET_SECURE_PORT_NOT_SET = 0,
    WEBSOCKET_SECURE_PORT = 17,
  }

  export enum WebsocketPortCase { 
    _WEBSOCKET_PORT_NOT_SET = 0,
    WEBSOCKET_PORT = 18,
  }
}

export class CacheConfig extends jspb.Message {
  getCacheType(): string;
  setCacheType(value: string): CacheConfig;
  hasCacheType(): boolean;
  clearCacheType(): CacheConfig;

  getRedisAddress(): string;
  setRedisAddress(value: string): CacheConfig;
  hasRedisAddress(): boolean;
  clearRedisAddress(): CacheConfig;

  getRedisPassword(): string;
  setRedisPassword(value: string): CacheConfig;
  hasRedisPassword(): boolean;
  clearRedisPassword(): CacheConfig;

  getRedisDb(): number;
  setRedisDb(value: number): CacheConfig;
  hasRedisDb(): boolean;
  clearRedisDb(): CacheConfig;

  getRedisCachePrefix(): string;
  setRedisCachePrefix(value: string): CacheConfig;
  hasRedisCachePrefix(): boolean;
  clearRedisCachePrefix(): CacheConfig;

  getDisableClientCache(): boolean;
  setDisableClientCache(value: boolean): CacheConfig;
  hasDisableClientCache(): boolean;
  clearDisableClientCache(): CacheConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CacheConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CacheConfig): CacheConfig.AsObject;
  static serializeBinaryToWriter(message: CacheConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CacheConfig;
  static deserializeBinaryFromReader(message: CacheConfig, reader: jspb.BinaryReader): CacheConfig;
}

export namespace CacheConfig {
  export type AsObject = {
    cacheType?: string,
    redisAddress?: string,
    redisPassword?: string,
    redisDb?: number,
    redisCachePrefix?: string,
    disableClientCache?: boolean,
  }

  export enum CacheTypeCase { 
    _CACHE_TYPE_NOT_SET = 0,
    CACHE_TYPE = 1,
  }

  export enum RedisAddressCase { 
    _REDIS_ADDRESS_NOT_SET = 0,
    REDIS_ADDRESS = 2,
  }

  export enum RedisPasswordCase { 
    _REDIS_PASSWORD_NOT_SET = 0,
    REDIS_PASSWORD = 3,
  }

  export enum RedisDbCase { 
    _REDIS_DB_NOT_SET = 0,
    REDIS_DB = 4,
  }

  export enum RedisCachePrefixCase { 
    _REDIS_CACHE_PREFIX_NOT_SET = 0,
    REDIS_CACHE_PREFIX = 5,
  }

  export enum DisableClientCacheCase { 
    _DISABLE_CLIENT_CACHE_NOT_SET = 0,
    DISABLE_CLIENT_CACHE = 6,
  }
}

export class ConfigMetrics extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigMetrics;
  hasEnable(): boolean;
  clearEnable(): ConfigMetrics;

  getBlockProfileRate(): number;
  setBlockProfileRate(value: number): ConfigMetrics;
  hasBlockProfileRate(): boolean;
  clearBlockProfileRate(): ConfigMetrics;

  getListenAddress(): string;
  setListenAddress(value: string): ConfigMetrics;
  hasListenAddress(): boolean;
  clearListenAddress(): ConfigMetrics;

  getEnableClientMetrics(): boolean;
  setEnableClientMetrics(value: boolean): ConfigMetrics;
  hasEnableClientMetrics(): boolean;
  clearEnableClientMetrics(): ConfigMetrics;

  getEnableNotificationMetrics(): boolean;
  setEnableNotificationMetrics(value: boolean): ConfigMetrics;
  hasEnableNotificationMetrics(): boolean;
  clearEnableNotificationMetrics(): ConfigMetrics;

  getClientSideUserIdsList(): Array<string>;
  setClientSideUserIdsList(value: Array<string>): ConfigMetrics;
  clearClientSideUserIdsList(): ConfigMetrics;
  addClientSideUserIds(value: string, index?: number): ConfigMetrics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMetrics): ConfigMetrics.AsObject;
  static serializeBinaryToWriter(message: ConfigMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMetrics;
  static deserializeBinaryFromReader(message: ConfigMetrics, reader: jspb.BinaryReader): ConfigMetrics;
}

export namespace ConfigMetrics {
  export type AsObject = {
    enable?: boolean,
    blockProfileRate?: number,
    listenAddress?: string,
    enableClientMetrics?: boolean,
    enableNotificationMetrics?: boolean,
    clientSideUserIdsList: Array<string>,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum BlockProfileRateCase { 
    _BLOCK_PROFILE_RATE_NOT_SET = 0,
    BLOCK_PROFILE_RATE = 2,
  }

  export enum ListenAddressCase { 
    _LISTEN_ADDRESS_NOT_SET = 0,
    LISTEN_ADDRESS = 3,
  }

  export enum EnableClientMetricsCase { 
    _ENABLE_CLIENT_METRICS_NOT_SET = 0,
    ENABLE_CLIENT_METRICS = 4,
  }

  export enum EnableNotificationMetricsCase { 
    _ENABLE_NOTIFICATION_METRICS_NOT_SET = 0,
    ENABLE_NOTIFICATION_METRICS = 5,
  }
}

export class ConfigSSO extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigSSO;
  hasEnable(): boolean;
  clearEnable(): ConfigSSO;

  getSecret(): string;
  setSecret(value: string): ConfigSSO;
  hasSecret(): boolean;
  clearSecret(): ConfigSSO;

  getId(): string;
  setId(value: string): ConfigSSO;
  hasId(): boolean;
  clearId(): ConfigSSO;

  getScope(): string;
  setScope(value: string): ConfigSSO;
  hasScope(): boolean;
  clearScope(): ConfigSSO;

  getAuthEndpoint(): string;
  setAuthEndpoint(value: string): ConfigSSO;
  hasAuthEndpoint(): boolean;
  clearAuthEndpoint(): ConfigSSO;

  getTokenEndpoint(): string;
  setTokenEndpoint(value: string): ConfigSSO;
  hasTokenEndpoint(): boolean;
  clearTokenEndpoint(): ConfigSSO;

  getUserApiEndpoint(): string;
  setUserApiEndpoint(value: string): ConfigSSO;
  hasUserApiEndpoint(): boolean;
  clearUserApiEndpoint(): ConfigSSO;

  getDiscoveryEndpoint(): string;
  setDiscoveryEndpoint(value: string): ConfigSSO;
  hasDiscoveryEndpoint(): boolean;
  clearDiscoveryEndpoint(): ConfigSSO;

  getButtonText(): string;
  setButtonText(value: string): ConfigSSO;
  hasButtonText(): boolean;
  clearButtonText(): ConfigSSO;

  getButtonColor(): string;
  setButtonColor(value: string): ConfigSSO;
  hasButtonColor(): boolean;
  clearButtonColor(): ConfigSSO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSSO.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSSO): ConfigSSO.AsObject;
  static serializeBinaryToWriter(message: ConfigSSO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSSO;
  static deserializeBinaryFromReader(message: ConfigSSO, reader: jspb.BinaryReader): ConfigSSO;
}

export namespace ConfigSSO {
  export type AsObject = {
    enable?: boolean,
    secret?: string,
    id?: string,
    scope?: string,
    authEndpoint?: string,
    tokenEndpoint?: string,
    userApiEndpoint?: string,
    discoveryEndpoint?: string,
    buttonText?: string,
    buttonColor?: string,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum SecretCase { 
    _SECRET_NOT_SET = 0,
    SECRET = 2,
  }

  export enum IdCase { 
    _ID_NOT_SET = 0,
    ID = 3,
  }

  export enum ScopeCase { 
    _SCOPE_NOT_SET = 0,
    SCOPE = 4,
  }

  export enum AuthEndpointCase { 
    _AUTH_ENDPOINT_NOT_SET = 0,
    AUTH_ENDPOINT = 5,
  }

  export enum TokenEndpointCase { 
    _TOKEN_ENDPOINT_NOT_SET = 0,
    TOKEN_ENDPOINT = 6,
  }

  export enum UserApiEndpointCase { 
    _USER_API_ENDPOINT_NOT_SET = 0,
    USER_API_ENDPOINT = 7,
  }

  export enum DiscoveryEndpointCase { 
    _DISCOVERY_ENDPOINT_NOT_SET = 0,
    DISCOVERY_ENDPOINT = 8,
  }

  export enum ButtonTextCase { 
    _BUTTON_TEXT_NOT_SET = 0,
    BUTTON_TEXT = 9,
  }

  export enum ButtonColorCase { 
    _BUTTON_COLOR_NOT_SET = 0,
    BUTTON_COLOR = 10,
  }
}

export class ConfigSql extends jspb.Message {
  getDriverName(): string;
  setDriverName(value: string): ConfigSql;
  hasDriverName(): boolean;
  clearDriverName(): ConfigSql;

  getDataSource(): string;
  setDataSource(value: string): ConfigSql;
  hasDataSource(): boolean;
  clearDataSource(): ConfigSql;

  getMaxIdleConns(): number;
  setMaxIdleConns(value: number): ConfigSql;
  hasMaxIdleConns(): boolean;
  clearMaxIdleConns(): ConfigSql;

  getConnMaxLifetimeMilliseconds(): number;
  setConnMaxLifetimeMilliseconds(value: number): ConfigSql;
  hasConnMaxLifetimeMilliseconds(): boolean;
  clearConnMaxLifetimeMilliseconds(): ConfigSql;

  getConnMaxIdleTimeMilliseconds(): number;
  setConnMaxIdleTimeMilliseconds(value: number): ConfigSql;
  hasConnMaxIdleTimeMilliseconds(): boolean;
  clearConnMaxIdleTimeMilliseconds(): ConfigSql;

  getMaxOpenConns(): number;
  setMaxOpenConns(value: number): ConfigSql;
  hasMaxOpenConns(): boolean;
  clearMaxOpenConns(): ConfigSql;

  getTrace(): boolean;
  setTrace(value: boolean): ConfigSql;
  hasTrace(): boolean;
  clearTrace(): ConfigSql;

  getAtRestEncryptKey(): string;
  setAtRestEncryptKey(value: string): ConfigSql;
  hasAtRestEncryptKey(): boolean;
  clearAtRestEncryptKey(): ConfigSql;

  getQueryTimeout(): number;
  setQueryTimeout(value: number): ConfigSql;
  hasQueryTimeout(): boolean;
  clearQueryTimeout(): ConfigSql;

  getDisableDatabaseSearch(): boolean;
  setDisableDatabaseSearch(value: boolean): ConfigSql;
  hasDisableDatabaseSearch(): boolean;
  clearDisableDatabaseSearch(): ConfigSql;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSql.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSql): ConfigSql.AsObject;
  static serializeBinaryToWriter(message: ConfigSql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSql;
  static deserializeBinaryFromReader(message: ConfigSql, reader: jspb.BinaryReader): ConfigSql;
}

export namespace ConfigSql {
  export type AsObject = {
    driverName?: string,
    dataSource?: string,
    maxIdleConns?: number,
    connMaxLifetimeMilliseconds?: number,
    connMaxIdleTimeMilliseconds?: number,
    maxOpenConns?: number,
    trace?: boolean,
    atRestEncryptKey?: string,
    queryTimeout?: number,
    disableDatabaseSearch?: boolean,
  }

  export enum DriverNameCase { 
    _DRIVER_NAME_NOT_SET = 0,
    DRIVER_NAME = 1,
  }

  export enum DataSourceCase { 
    _DATA_SOURCE_NOT_SET = 0,
    DATA_SOURCE = 2,
  }

  export enum MaxIdleConnsCase { 
    _MAX_IDLE_CONNS_NOT_SET = 0,
    MAX_IDLE_CONNS = 3,
  }

  export enum ConnMaxLifetimeMillisecondsCase { 
    _CONN_MAX_LIFETIME_MILLISECONDS_NOT_SET = 0,
    CONN_MAX_LIFETIME_MILLISECONDS = 4,
  }

  export enum ConnMaxIdleTimeMillisecondsCase { 
    _CONN_MAX_IDLE_TIME_MILLISECONDS_NOT_SET = 0,
    CONN_MAX_IDLE_TIME_MILLISECONDS = 5,
  }

  export enum MaxOpenConnsCase { 
    _MAX_OPEN_CONNS_NOT_SET = 0,
    MAX_OPEN_CONNS = 6,
  }

  export enum TraceCase { 
    _TRACE_NOT_SET = 0,
    TRACE = 7,
  }

  export enum AtRestEncryptKeyCase { 
    _AT_REST_ENCRYPT_KEY_NOT_SET = 0,
    AT_REST_ENCRYPT_KEY = 8,
  }

  export enum QueryTimeoutCase { 
    _QUERY_TIMEOUT_NOT_SET = 0,
    QUERY_TIMEOUT = 9,
  }

  export enum DisableDatabaseSearchCase { 
    _DISABLE_DATABASE_SEARCH_NOT_SET = 0,
    DISABLE_DATABASE_SEARCH = 10,
  }
}

export class ConfigPassword extends jspb.Message {
  getMinimumLength(): number;
  setMinimumLength(value: number): ConfigPassword;
  hasMinimumLength(): boolean;
  clearMinimumLength(): ConfigPassword;

  getLowercase(): boolean;
  setLowercase(value: boolean): ConfigPassword;
  hasLowercase(): boolean;
  clearLowercase(): ConfigPassword;

  getNumber(): boolean;
  setNumber(value: boolean): ConfigPassword;
  hasNumber(): boolean;
  clearNumber(): ConfigPassword;

  getUppercase(): boolean;
  setUppercase(value: boolean): ConfigPassword;
  hasUppercase(): boolean;
  clearUppercase(): ConfigPassword;

  getSymbol(): boolean;
  setSymbol(value: boolean): ConfigPassword;
  hasSymbol(): boolean;
  clearSymbol(): ConfigPassword;

  getEnableForgotLink(): boolean;
  setEnableForgotLink(value: boolean): ConfigPassword;
  hasEnableForgotLink(): boolean;
  clearEnableForgotLink(): ConfigPassword;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigPassword.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigPassword): ConfigPassword.AsObject;
  static serializeBinaryToWriter(message: ConfigPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigPassword;
  static deserializeBinaryFromReader(message: ConfigPassword, reader: jspb.BinaryReader): ConfigPassword;
}

export namespace ConfigPassword {
  export type AsObject = {
    minimumLength?: number,
    lowercase?: boolean,
    number?: boolean,
    uppercase?: boolean,
    symbol?: boolean,
    enableForgotLink?: boolean,
  }

  export enum MinimumLengthCase { 
    _MINIMUM_LENGTH_NOT_SET = 0,
    MINIMUM_LENGTH = 1,
  }

  export enum LowercaseCase { 
    _LOWERCASE_NOT_SET = 0,
    LOWERCASE = 2,
  }

  export enum NumberCase { 
    _NUMBER_NOT_SET = 0,
    NUMBER = 3,
  }

  export enum UppercaseCase { 
    _UPPERCASE_NOT_SET = 0,
    UPPERCASE = 4,
  }

  export enum SymbolCase { 
    _SYMBOL_NOT_SET = 0,
    SYMBOL = 5,
  }

  export enum EnableForgotLinkCase { 
    _ENABLE_FORGOT_LINK_NOT_SET = 0,
    ENABLE_FORGOT_LINK = 6,
  }
}

export class ConfigFile extends jspb.Message {
  getEnableFileAttachments(): boolean;
  setEnableFileAttachments(value: boolean): ConfigFile;
  hasEnableFileAttachments(): boolean;
  clearEnableFileAttachments(): ConfigFile;

  getEnableMobileUpload(): boolean;
  setEnableMobileUpload(value: boolean): ConfigFile;
  hasEnableMobileUpload(): boolean;
  clearEnableMobileUpload(): ConfigFile;

  getEnableMobileDownload(): boolean;
  setEnableMobileDownload(value: boolean): ConfigFile;
  hasEnableMobileDownload(): boolean;
  clearEnableMobileDownload(): ConfigFile;

  getMaxFileSize(): number;
  setMaxFileSize(value: number): ConfigFile;
  hasMaxFileSize(): boolean;
  clearMaxFileSize(): ConfigFile;

  getMaxImageResolution(): number;
  setMaxImageResolution(value: number): ConfigFile;
  hasMaxImageResolution(): boolean;
  clearMaxImageResolution(): ConfigFile;

  getMaxImageDecoderConcurrency(): number;
  setMaxImageDecoderConcurrency(value: number): ConfigFile;
  hasMaxImageDecoderConcurrency(): boolean;
  clearMaxImageDecoderConcurrency(): ConfigFile;

  getDriverName(): string;
  setDriverName(value: string): ConfigFile;
  hasDriverName(): boolean;
  clearDriverName(): ConfigFile;

  getDirectory(): string;
  setDirectory(value: string): ConfigFile;
  hasDirectory(): boolean;
  clearDirectory(): ConfigFile;

  getEnablePublicLink(): boolean;
  setEnablePublicLink(value: boolean): ConfigFile;
  hasEnablePublicLink(): boolean;
  clearEnablePublicLink(): ConfigFile;

  getExtractContent(): boolean;
  setExtractContent(value: boolean): ConfigFile;
  hasExtractContent(): boolean;
  clearExtractContent(): ConfigFile;

  getArchiveRecursion(): boolean;
  setArchiveRecursion(value: boolean): ConfigFile;
  hasArchiveRecursion(): boolean;
  clearArchiveRecursion(): ConfigFile;

  getPublicLinkSalt(): string;
  setPublicLinkSalt(value: string): ConfigFile;
  hasPublicLinkSalt(): boolean;
  clearPublicLinkSalt(): ConfigFile;

  getInitialFont(): string;
  setInitialFont(value: string): ConfigFile;
  hasInitialFont(): boolean;
  clearInitialFont(): ConfigFile;

  getAmazonS3AccessKeyId(): string;
  setAmazonS3AccessKeyId(value: string): ConfigFile;
  hasAmazonS3AccessKeyId(): boolean;
  clearAmazonS3AccessKeyId(): ConfigFile;

  getAmazonS3SecretAccessKey(): string;
  setAmazonS3SecretAccessKey(value: string): ConfigFile;
  hasAmazonS3SecretAccessKey(): boolean;
  clearAmazonS3SecretAccessKey(): ConfigFile;

  getAmazonS3Bucket(): string;
  setAmazonS3Bucket(value: string): ConfigFile;
  hasAmazonS3Bucket(): boolean;
  clearAmazonS3Bucket(): ConfigFile;

  getAmazonS3PathPrefix(): string;
  setAmazonS3PathPrefix(value: string): ConfigFile;
  hasAmazonS3PathPrefix(): boolean;
  clearAmazonS3PathPrefix(): ConfigFile;

  getAmazonS3Region(): string;
  setAmazonS3Region(value: string): ConfigFile;
  hasAmazonS3Region(): boolean;
  clearAmazonS3Region(): ConfigFile;

  getAmazonS3Endpoint(): string;
  setAmazonS3Endpoint(value: string): ConfigFile;
  hasAmazonS3Endpoint(): boolean;
  clearAmazonS3Endpoint(): ConfigFile;

  getAmazonS3Ssl(): boolean;
  setAmazonS3Ssl(value: boolean): ConfigFile;
  hasAmazonS3Ssl(): boolean;
  clearAmazonS3Ssl(): ConfigFile;

  getAmazonS3SignV2(): boolean;
  setAmazonS3SignV2(value: boolean): ConfigFile;
  hasAmazonS3SignV2(): boolean;
  clearAmazonS3SignV2(): ConfigFile;

  getAmazonS3Sse(): boolean;
  setAmazonS3Sse(value: boolean): ConfigFile;
  hasAmazonS3Sse(): boolean;
  clearAmazonS3Sse(): ConfigFile;

  getAmazonS3Trace(): boolean;
  setAmazonS3Trace(value: boolean): ConfigFile;
  hasAmazonS3Trace(): boolean;
  clearAmazonS3Trace(): ConfigFile;

  getAmazonS3RequestTimeoutMilliseconds(): number;
  setAmazonS3RequestTimeoutMilliseconds(value: number): ConfigFile;
  hasAmazonS3RequestTimeoutMilliseconds(): boolean;
  clearAmazonS3RequestTimeoutMilliseconds(): ConfigFile;

  getAmazonS3UploadPartSizeBytes(): number;
  setAmazonS3UploadPartSizeBytes(value: number): ConfigFile;
  hasAmazonS3UploadPartSizeBytes(): boolean;
  clearAmazonS3UploadPartSizeBytes(): ConfigFile;

  getAmazonS3StorageClass(): string;
  setAmazonS3StorageClass(value: string): ConfigFile;
  hasAmazonS3StorageClass(): boolean;
  clearAmazonS3StorageClass(): ConfigFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigFile.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigFile): ConfigFile.AsObject;
  static serializeBinaryToWriter(message: ConfigFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigFile;
  static deserializeBinaryFromReader(message: ConfigFile, reader: jspb.BinaryReader): ConfigFile;
}

export namespace ConfigFile {
  export type AsObject = {
    enableFileAttachments?: boolean,
    enableMobileUpload?: boolean,
    enableMobileDownload?: boolean,
    maxFileSize?: number,
    maxImageResolution?: number,
    maxImageDecoderConcurrency?: number,
    driverName?: string,
    directory?: string,
    enablePublicLink?: boolean,
    extractContent?: boolean,
    archiveRecursion?: boolean,
    publicLinkSalt?: string,
    initialFont?: string,
    amazonS3AccessKeyId?: string,
    amazonS3SecretAccessKey?: string,
    amazonS3Bucket?: string,
    amazonS3PathPrefix?: string,
    amazonS3Region?: string,
    amazonS3Endpoint?: string,
    amazonS3Ssl?: boolean,
    amazonS3SignV2?: boolean,
    amazonS3Sse?: boolean,
    amazonS3Trace?: boolean,
    amazonS3RequestTimeoutMilliseconds?: number,
    amazonS3UploadPartSizeBytes?: number,
    amazonS3StorageClass?: string,
  }

  export enum EnableFileAttachmentsCase { 
    _ENABLE_FILE_ATTACHMENTS_NOT_SET = 0,
    ENABLE_FILE_ATTACHMENTS = 1,
  }

  export enum EnableMobileUploadCase { 
    _ENABLE_MOBILE_UPLOAD_NOT_SET = 0,
    ENABLE_MOBILE_UPLOAD = 2,
  }

  export enum EnableMobileDownloadCase { 
    _ENABLE_MOBILE_DOWNLOAD_NOT_SET = 0,
    ENABLE_MOBILE_DOWNLOAD = 3,
  }

  export enum MaxFileSizeCase { 
    _MAX_FILE_SIZE_NOT_SET = 0,
    MAX_FILE_SIZE = 4,
  }

  export enum MaxImageResolutionCase { 
    _MAX_IMAGE_RESOLUTION_NOT_SET = 0,
    MAX_IMAGE_RESOLUTION = 5,
  }

  export enum MaxImageDecoderConcurrencyCase { 
    _MAX_IMAGE_DECODER_CONCURRENCY_NOT_SET = 0,
    MAX_IMAGE_DECODER_CONCURRENCY = 6,
  }

  export enum DriverNameCase { 
    _DRIVER_NAME_NOT_SET = 0,
    DRIVER_NAME = 7,
  }

  export enum DirectoryCase { 
    _DIRECTORY_NOT_SET = 0,
    DIRECTORY = 8,
  }

  export enum EnablePublicLinkCase { 
    _ENABLE_PUBLIC_LINK_NOT_SET = 0,
    ENABLE_PUBLIC_LINK = 9,
  }

  export enum ExtractContentCase { 
    _EXTRACT_CONTENT_NOT_SET = 0,
    EXTRACT_CONTENT = 10,
  }

  export enum ArchiveRecursionCase { 
    _ARCHIVE_RECURSION_NOT_SET = 0,
    ARCHIVE_RECURSION = 11,
  }

  export enum PublicLinkSaltCase { 
    _PUBLIC_LINK_SALT_NOT_SET = 0,
    PUBLIC_LINK_SALT = 12,
  }

  export enum InitialFontCase { 
    _INITIAL_FONT_NOT_SET = 0,
    INITIAL_FONT = 13,
  }

  export enum AmazonS3AccessKeyIdCase { 
    _AMAZON_S3_ACCESS_KEY_ID_NOT_SET = 0,
    AMAZON_S3_ACCESS_KEY_ID = 14,
  }

  export enum AmazonS3SecretAccessKeyCase { 
    _AMAZON_S3_SECRET_ACCESS_KEY_NOT_SET = 0,
    AMAZON_S3_SECRET_ACCESS_KEY = 15,
  }

  export enum AmazonS3BucketCase { 
    _AMAZON_S3_BUCKET_NOT_SET = 0,
    AMAZON_S3_BUCKET = 16,
  }

  export enum AmazonS3PathPrefixCase { 
    _AMAZON_S3_PATH_PREFIX_NOT_SET = 0,
    AMAZON_S3_PATH_PREFIX = 17,
  }

  export enum AmazonS3RegionCase { 
    _AMAZON_S3_REGION_NOT_SET = 0,
    AMAZON_S3_REGION = 18,
  }

  export enum AmazonS3EndpointCase { 
    _AMAZON_S3_ENDPOINT_NOT_SET = 0,
    AMAZON_S3_ENDPOINT = 19,
  }

  export enum AmazonS3SslCase { 
    _AMAZON_S3_SSL_NOT_SET = 0,
    AMAZON_S3_SSL = 20,
  }

  export enum AmazonS3SignV2Case { 
    _AMAZON_S3_SIGN_V2_NOT_SET = 0,
    AMAZON_S3_SIGN_V2 = 21,
  }

  export enum AmazonS3SseCase { 
    _AMAZON_S3_SSE_NOT_SET = 0,
    AMAZON_S3_SSE = 22,
  }

  export enum AmazonS3TraceCase { 
    _AMAZON_S3_TRACE_NOT_SET = 0,
    AMAZON_S3_TRACE = 23,
  }

  export enum AmazonS3RequestTimeoutMillisecondsCase { 
    _AMAZON_S3_REQUEST_TIMEOUT_MILLISECONDS_NOT_SET = 0,
    AMAZON_S3_REQUEST_TIMEOUT_MILLISECONDS = 24,
  }

  export enum AmazonS3UploadPartSizeBytesCase { 
    _AMAZON_S3_UPLOAD_PART_SIZE_BYTES_NOT_SET = 0,
    AMAZON_S3_UPLOAD_PART_SIZE_BYTES = 25,
  }

  export enum AmazonS3StorageClassCase { 
    _AMAZON_S3_STORAGE_CLASS_NOT_SET = 0,
    AMAZON_S3_STORAGE_CLASS = 26,
  }
}

export class ConfigEmail extends jspb.Message {
  getSendEmailNotifications(): boolean;
  setSendEmailNotifications(value: boolean): ConfigEmail;
  hasSendEmailNotifications(): boolean;
  clearSendEmailNotifications(): ConfigEmail;

  getRequireEmailVerification(): boolean;
  setRequireEmailVerification(value: boolean): ConfigEmail;
  hasRequireEmailVerification(): boolean;
  clearRequireEmailVerification(): ConfigEmail;

  getFeedbackEmail(): string;
  setFeedbackEmail(value: string): ConfigEmail;
  hasFeedbackEmail(): boolean;
  clearFeedbackEmail(): ConfigEmail;

  getReplyToAddress(): string;
  setReplyToAddress(value: string): ConfigEmail;
  hasReplyToAddress(): boolean;
  clearReplyToAddress(): ConfigEmail;

  getEnableSmtpAuth(): boolean;
  setEnableSmtpAuth(value: boolean): ConfigEmail;
  hasEnableSmtpAuth(): boolean;
  clearEnableSmtpAuth(): ConfigEmail;

  getSmtpUsername(): string;
  setSmtpUsername(value: string): ConfigEmail;
  hasSmtpUsername(): boolean;
  clearSmtpUsername(): ConfigEmail;

  getSmtpPassword(): string;
  setSmtpPassword(value: string): ConfigEmail;
  hasSmtpPassword(): boolean;
  clearSmtpPassword(): ConfigEmail;

  getSmtpServer(): string;
  setSmtpServer(value: string): ConfigEmail;
  hasSmtpServer(): boolean;
  clearSmtpServer(): ConfigEmail;

  getSmtpPort(): string;
  setSmtpPort(value: string): ConfigEmail;
  hasSmtpPort(): boolean;
  clearSmtpPort(): ConfigEmail;

  getSmtpServerTimeout(): number;
  setSmtpServerTimeout(value: number): ConfigEmail;
  hasSmtpServerTimeout(): boolean;
  clearSmtpServerTimeout(): ConfigEmail;

  getConnectionSecurity(): string;
  setConnectionSecurity(value: string): ConfigEmail;
  hasConnectionSecurity(): boolean;
  clearConnectionSecurity(): ConfigEmail;

  getSendPushNotifications(): boolean;
  setSendPushNotifications(value: boolean): ConfigEmail;
  hasSendPushNotifications(): boolean;
  clearSendPushNotifications(): ConfigEmail;

  getPushNotificationServer(): string;
  setPushNotificationServer(value: string): ConfigEmail;
  hasPushNotificationServer(): boolean;
  clearPushNotificationServer(): ConfigEmail;

  getPushNotificationContents(): string;
  setPushNotificationContents(value: string): ConfigEmail;
  hasPushNotificationContents(): boolean;
  clearPushNotificationContents(): ConfigEmail;

  getPushNotificationBuffer(): number;
  setPushNotificationBuffer(value: number): ConfigEmail;
  hasPushNotificationBuffer(): boolean;
  clearPushNotificationBuffer(): ConfigEmail;

  getEnableEmailBatching(): boolean;
  setEnableEmailBatching(value: boolean): ConfigEmail;
  hasEnableEmailBatching(): boolean;
  clearEnableEmailBatching(): ConfigEmail;

  getEmailBatchingBufferSize(): number;
  setEmailBatchingBufferSize(value: number): ConfigEmail;
  hasEmailBatchingBufferSize(): boolean;
  clearEmailBatchingBufferSize(): ConfigEmail;

  getEmailBatchingInterval(): number;
  setEmailBatchingInterval(value: number): ConfigEmail;
  hasEmailBatchingInterval(): boolean;
  clearEmailBatchingInterval(): ConfigEmail;

  getSkipServerCertificateVerification(): boolean;
  setSkipServerCertificateVerification(value: boolean): ConfigEmail;
  hasSkipServerCertificateVerification(): boolean;
  clearSkipServerCertificateVerification(): ConfigEmail;

  getEmailNotificationContentsType(): string;
  setEmailNotificationContentsType(value: string): ConfigEmail;
  hasEmailNotificationContentsType(): boolean;
  clearEmailNotificationContentsType(): ConfigEmail;

  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): ConfigEmail;
  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): ConfigEmail;

  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): ConfigEmail;
  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): ConfigEmail;

  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): ConfigEmail;
  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): ConfigEmail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigEmail.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigEmail): ConfigEmail.AsObject;
  static serializeBinaryToWriter(message: ConfigEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigEmail;
  static deserializeBinaryFromReader(message: ConfigEmail, reader: jspb.BinaryReader): ConfigEmail;
}

export namespace ConfigEmail {
  export type AsObject = {
    sendEmailNotifications?: boolean,
    requireEmailVerification?: boolean,
    feedbackEmail?: string,
    replyToAddress?: string,
    enableSmtpAuth?: boolean,
    smtpUsername?: string,
    smtpPassword?: string,
    smtpServer?: string,
    smtpPort?: string,
    smtpServerTimeout?: number,
    connectionSecurity?: string,
    sendPushNotifications?: boolean,
    pushNotificationServer?: string,
    pushNotificationContents?: string,
    pushNotificationBuffer?: number,
    enableEmailBatching?: boolean,
    emailBatchingBufferSize?: number,
    emailBatchingInterval?: number,
    skipServerCertificateVerification?: boolean,
    emailNotificationContentsType?: string,
    loginButtonColor?: string,
    loginButtonBorderColor?: string,
    loginButtonTextColor?: string,
  }

  export enum SendEmailNotificationsCase { 
    _SEND_EMAIL_NOTIFICATIONS_NOT_SET = 0,
    SEND_EMAIL_NOTIFICATIONS = 1,
  }

  export enum RequireEmailVerificationCase { 
    _REQUIRE_EMAIL_VERIFICATION_NOT_SET = 0,
    REQUIRE_EMAIL_VERIFICATION = 2,
  }

  export enum FeedbackEmailCase { 
    _FEEDBACK_EMAIL_NOT_SET = 0,
    FEEDBACK_EMAIL = 3,
  }

  export enum ReplyToAddressCase { 
    _REPLY_TO_ADDRESS_NOT_SET = 0,
    REPLY_TO_ADDRESS = 4,
  }

  export enum EnableSmtpAuthCase { 
    _ENABLE_SMTP_AUTH_NOT_SET = 0,
    ENABLE_SMTP_AUTH = 5,
  }

  export enum SmtpUsernameCase { 
    _SMTP_USERNAME_NOT_SET = 0,
    SMTP_USERNAME = 6,
  }

  export enum SmtpPasswordCase { 
    _SMTP_PASSWORD_NOT_SET = 0,
    SMTP_PASSWORD = 7,
  }

  export enum SmtpServerCase { 
    _SMTP_SERVER_NOT_SET = 0,
    SMTP_SERVER = 8,
  }

  export enum SmtpPortCase { 
    _SMTP_PORT_NOT_SET = 0,
    SMTP_PORT = 9,
  }

  export enum SmtpServerTimeoutCase { 
    _SMTP_SERVER_TIMEOUT_NOT_SET = 0,
    SMTP_SERVER_TIMEOUT = 10,
  }

  export enum ConnectionSecurityCase { 
    _CONNECTION_SECURITY_NOT_SET = 0,
    CONNECTION_SECURITY = 11,
  }

  export enum SendPushNotificationsCase { 
    _SEND_PUSH_NOTIFICATIONS_NOT_SET = 0,
    SEND_PUSH_NOTIFICATIONS = 12,
  }

  export enum PushNotificationServerCase { 
    _PUSH_NOTIFICATION_SERVER_NOT_SET = 0,
    PUSH_NOTIFICATION_SERVER = 13,
  }

  export enum PushNotificationContentsCase { 
    _PUSH_NOTIFICATION_CONTENTS_NOT_SET = 0,
    PUSH_NOTIFICATION_CONTENTS = 14,
  }

  export enum PushNotificationBufferCase { 
    _PUSH_NOTIFICATION_BUFFER_NOT_SET = 0,
    PUSH_NOTIFICATION_BUFFER = 15,
  }

  export enum EnableEmailBatchingCase { 
    _ENABLE_EMAIL_BATCHING_NOT_SET = 0,
    ENABLE_EMAIL_BATCHING = 16,
  }

  export enum EmailBatchingBufferSizeCase { 
    _EMAIL_BATCHING_BUFFER_SIZE_NOT_SET = 0,
    EMAIL_BATCHING_BUFFER_SIZE = 17,
  }

  export enum EmailBatchingIntervalCase { 
    _EMAIL_BATCHING_INTERVAL_NOT_SET = 0,
    EMAIL_BATCHING_INTERVAL = 18,
  }

  export enum SkipServerCertificateVerificationCase { 
    _SKIP_SERVER_CERTIFICATE_VERIFICATION_NOT_SET = 0,
    SKIP_SERVER_CERTIFICATE_VERIFICATION = 19,
  }

  export enum EmailNotificationContentsTypeCase { 
    _EMAIL_NOTIFICATION_CONTENTS_TYPE_NOT_SET = 0,
    EMAIL_NOTIFICATION_CONTENTS_TYPE = 20,
  }

  export enum LoginButtonColorCase { 
    _LOGIN_BUTTON_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_COLOR = 21,
  }

  export enum LoginButtonBorderColorCase { 
    _LOGIN_BUTTON_BORDER_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_BORDER_COLOR = 22,
  }

  export enum LoginButtonTextColorCase { 
    _LOGIN_BUTTON_TEXT_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_TEXT_COLOR = 23,
  }
}

export class ConfigRateLimit extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigRateLimit;
  hasEnable(): boolean;
  clearEnable(): ConfigRateLimit;

  getPerSec(): number;
  setPerSec(value: number): ConfigRateLimit;
  hasPerSec(): boolean;
  clearPerSec(): ConfigRateLimit;

  getMaxBurst(): number;
  setMaxBurst(value: number): ConfigRateLimit;
  hasMaxBurst(): boolean;
  clearMaxBurst(): ConfigRateLimit;

  getMemoryStoreSize(): number;
  setMemoryStoreSize(value: number): ConfigRateLimit;
  hasMemoryStoreSize(): boolean;
  clearMemoryStoreSize(): ConfigRateLimit;

  getVaryByRemoteAddr(): boolean;
  setVaryByRemoteAddr(value: boolean): ConfigRateLimit;
  hasVaryByRemoteAddr(): boolean;
  clearVaryByRemoteAddr(): ConfigRateLimit;

  getVaryByUser(): boolean;
  setVaryByUser(value: boolean): ConfigRateLimit;
  hasVaryByUser(): boolean;
  clearVaryByUser(): ConfigRateLimit;

  getVaryByHeader(): string;
  setVaryByHeader(value: string): ConfigRateLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRateLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRateLimit): ConfigRateLimit.AsObject;
  static serializeBinaryToWriter(message: ConfigRateLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRateLimit;
  static deserializeBinaryFromReader(message: ConfigRateLimit, reader: jspb.BinaryReader): ConfigRateLimit;
}

export namespace ConfigRateLimit {
  export type AsObject = {
    enable?: boolean,
    perSec?: number,
    maxBurst?: number,
    memoryStoreSize?: number,
    varyByRemoteAddr?: boolean,
    varyByUser?: boolean,
    varyByHeader: string,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum PerSecCase { 
    _PER_SEC_NOT_SET = 0,
    PER_SEC = 2,
  }

  export enum MaxBurstCase { 
    _MAX_BURST_NOT_SET = 0,
    MAX_BURST = 3,
  }

  export enum MemoryStoreSizeCase { 
    _MEMORY_STORE_SIZE_NOT_SET = 0,
    MEMORY_STORE_SIZE = 4,
  }

  export enum VaryByRemoteAddrCase { 
    _VARY_BY_REMOTE_ADDR_NOT_SET = 0,
    VARY_BY_REMOTE_ADDR = 5,
  }

  export enum VaryByUserCase { 
    _VARY_BY_USER_NOT_SET = 0,
    VARY_BY_USER = 6,
  }
}

export class ConfigPrivacy extends jspb.Message {
  getShowEmailAddress(): boolean;
  setShowEmailAddress(value: boolean): ConfigPrivacy;
  hasShowEmailAddress(): boolean;
  clearShowEmailAddress(): ConfigPrivacy;

  getShowFullName(): boolean;
  setShowFullName(value: boolean): ConfigPrivacy;
  hasShowFullName(): boolean;
  clearShowFullName(): ConfigPrivacy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigPrivacy.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigPrivacy): ConfigPrivacy.AsObject;
  static serializeBinaryToWriter(message: ConfigPrivacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigPrivacy;
  static deserializeBinaryFromReader(message: ConfigPrivacy, reader: jspb.BinaryReader): ConfigPrivacy;
}

export namespace ConfigPrivacy {
  export type AsObject = {
    showEmailAddress?: boolean,
    showFullName?: boolean,
  }

  export enum ShowEmailAddressCase { 
    _SHOW_EMAIL_ADDRESS_NOT_SET = 0,
    SHOW_EMAIL_ADDRESS = 1,
  }

  export enum ShowFullNameCase { 
    _SHOW_FULL_NAME_NOT_SET = 0,
    SHOW_FULL_NAME = 2,
  }
}

export class ConfigSupport extends jspb.Message {
  getTermsOfServiceLink(): string;
  setTermsOfServiceLink(value: string): ConfigSupport;
  hasTermsOfServiceLink(): boolean;
  clearTermsOfServiceLink(): ConfigSupport;

  getPrivacyPolicyLink(): string;
  setPrivacyPolicyLink(value: string): ConfigSupport;
  hasPrivacyPolicyLink(): boolean;
  clearPrivacyPolicyLink(): ConfigSupport;

  getAboutLink(): string;
  setAboutLink(value: string): ConfigSupport;
  hasAboutLink(): boolean;
  clearAboutLink(): ConfigSupport;

  getHelpLink(): string;
  setHelpLink(value: string): ConfigSupport;
  hasHelpLink(): boolean;
  clearHelpLink(): ConfigSupport;

  getReportAProblemLink(): string;
  setReportAProblemLink(value: string): ConfigSupport;
  hasReportAProblemLink(): boolean;
  clearReportAProblemLink(): ConfigSupport;

  getForgotPasswordLink(): string;
  setForgotPasswordLink(value: string): ConfigSupport;
  hasForgotPasswordLink(): boolean;
  clearForgotPasswordLink(): ConfigSupport;

  getSupportEmail(): string;
  setSupportEmail(value: string): ConfigSupport;
  hasSupportEmail(): boolean;
  clearSupportEmail(): ConfigSupport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSupport.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSupport): ConfigSupport.AsObject;
  static serializeBinaryToWriter(message: ConfigSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSupport;
  static deserializeBinaryFromReader(message: ConfigSupport, reader: jspb.BinaryReader): ConfigSupport;
}

export namespace ConfigSupport {
  export type AsObject = {
    termsOfServiceLink?: string,
    privacyPolicyLink?: string,
    aboutLink?: string,
    helpLink?: string,
    reportAProblemLink?: string,
    forgotPasswordLink?: string,
    supportEmail?: string,
  }

  export enum TermsOfServiceLinkCase { 
    _TERMS_OF_SERVICE_LINK_NOT_SET = 0,
    TERMS_OF_SERVICE_LINK = 1,
  }

  export enum PrivacyPolicyLinkCase { 
    _PRIVACY_POLICY_LINK_NOT_SET = 0,
    PRIVACY_POLICY_LINK = 2,
  }

  export enum AboutLinkCase { 
    _ABOUT_LINK_NOT_SET = 0,
    ABOUT_LINK = 3,
  }

  export enum HelpLinkCase { 
    _HELP_LINK_NOT_SET = 0,
    HELP_LINK = 4,
  }

  export enum ReportAProblemLinkCase { 
    _REPORT_A_PROBLEM_LINK_NOT_SET = 0,
    REPORT_A_PROBLEM_LINK = 5,
  }

  export enum ForgotPasswordLinkCase { 
    _FORGOT_PASSWORD_LINK_NOT_SET = 0,
    FORGOT_PASSWORD_LINK = 6,
  }

  export enum SupportEmailCase { 
    _SUPPORT_EMAIL_NOT_SET = 0,
    SUPPORT_EMAIL = 7,
  }
}

export class ConfigLocalization extends jspb.Message {
  getDefaultServerLocale(): string;
  setDefaultServerLocale(value: string): ConfigLocalization;
  hasDefaultServerLocale(): boolean;
  clearDefaultServerLocale(): ConfigLocalization;

  getDefaultClientLocale(): string;
  setDefaultClientLocale(value: string): ConfigLocalization;
  hasDefaultClientLocale(): boolean;
  clearDefaultClientLocale(): ConfigLocalization;

  getAvailableLocales(): string;
  setAvailableLocales(value: string): ConfigLocalization;
  hasAvailableLocales(): boolean;
  clearAvailableLocales(): ConfigLocalization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigLocalization.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigLocalization): ConfigLocalization.AsObject;
  static serializeBinaryToWriter(message: ConfigLocalization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigLocalization;
  static deserializeBinaryFromReader(message: ConfigLocalization, reader: jspb.BinaryReader): ConfigLocalization;
}

export namespace ConfigLocalization {
  export type AsObject = {
    defaultServerLocale?: string,
    defaultClientLocale?: string,
    availableLocales?: string,
  }

  export enum DefaultServerLocaleCase { 
    _DEFAULT_SERVER_LOCALE_NOT_SET = 0,
    DEFAULT_SERVER_LOCALE = 1,
  }

  export enum DefaultClientLocaleCase { 
    _DEFAULT_CLIENT_LOCALE_NOT_SET = 0,
    DEFAULT_CLIENT_LOCALE = 2,
  }

  export enum AvailableLocalesCase { 
    _AVAILABLE_LOCALES_NOT_SET = 0,
    AVAILABLE_LOCALES = 3,
  }
}

export class ConfigLdap extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigLdap;
  hasEnable(): boolean;
  clearEnable(): ConfigLdap;

  getEnableSync(): boolean;
  setEnableSync(value: boolean): ConfigLdap;
  hasEnableSync(): boolean;
  clearEnableSync(): ConfigLdap;

  getLdapServer(): string;
  setLdapServer(value: string): ConfigLdap;
  hasLdapServer(): boolean;
  clearLdapServer(): ConfigLdap;

  getLdapPort(): number;
  setLdapPort(value: number): ConfigLdap;
  hasLdapPort(): boolean;
  clearLdapPort(): ConfigLdap;

  getConnectionSecurity(): string;
  setConnectionSecurity(value: string): ConfigLdap;
  hasConnectionSecurity(): boolean;
  clearConnectionSecurity(): ConfigLdap;

  getBaseDn(): string;
  setBaseDn(value: string): ConfigLdap;
  hasBaseDn(): boolean;
  clearBaseDn(): ConfigLdap;

  getBindUsername(): string;
  setBindUsername(value: string): ConfigLdap;
  hasBindUsername(): boolean;
  clearBindUsername(): ConfigLdap;

  getBindPassword(): string;
  setBindPassword(value: string): ConfigLdap;
  hasBindPassword(): boolean;
  clearBindPassword(): ConfigLdap;

  getMaximumLoginAttempts(): number;
  setMaximumLoginAttempts(value: number): ConfigLdap;
  hasMaximumLoginAttempts(): boolean;
  clearMaximumLoginAttempts(): ConfigLdap;

  getUserFilter(): string;
  setUserFilter(value: string): ConfigLdap;
  hasUserFilter(): boolean;
  clearUserFilter(): ConfigLdap;

  getGroupFilter(): string;
  setGroupFilter(value: string): ConfigLdap;
  hasGroupFilter(): boolean;
  clearGroupFilter(): ConfigLdap;

  getEnableAdminFilter(): boolean;
  setEnableAdminFilter(value: boolean): ConfigLdap;
  hasEnableAdminFilter(): boolean;
  clearEnableAdminFilter(): ConfigLdap;

  getAdminFilter(): string;
  setAdminFilter(value: string): ConfigLdap;
  hasAdminFilter(): boolean;
  clearAdminFilter(): ConfigLdap;

  getGroupDisplayNameAttribute(): string;
  setGroupDisplayNameAttribute(value: string): ConfigLdap;
  hasGroupDisplayNameAttribute(): boolean;
  clearGroupDisplayNameAttribute(): ConfigLdap;

  getGroupIdAttribute(): string;
  setGroupIdAttribute(value: string): ConfigLdap;
  hasGroupIdAttribute(): boolean;
  clearGroupIdAttribute(): ConfigLdap;

  getFirstNameAttribute(): string;
  setFirstNameAttribute(value: string): ConfigLdap;
  hasFirstNameAttribute(): boolean;
  clearFirstNameAttribute(): ConfigLdap;

  getLastNameAttribute(): string;
  setLastNameAttribute(value: string): ConfigLdap;
  hasLastNameAttribute(): boolean;
  clearLastNameAttribute(): ConfigLdap;

  getEmailAttribute(): string;
  setEmailAttribute(value: string): ConfigLdap;
  hasEmailAttribute(): boolean;
  clearEmailAttribute(): ConfigLdap;

  getUsernameAttribute(): string;
  setUsernameAttribute(value: string): ConfigLdap;
  hasUsernameAttribute(): boolean;
  clearUsernameAttribute(): ConfigLdap;

  getNicknameAttribute(): string;
  setNicknameAttribute(value: string): ConfigLdap;
  hasNicknameAttribute(): boolean;
  clearNicknameAttribute(): ConfigLdap;

  getIdAttribute(): string;
  setIdAttribute(value: string): ConfigLdap;
  hasIdAttribute(): boolean;
  clearIdAttribute(): ConfigLdap;

  getPositionAttribute(): string;
  setPositionAttribute(value: string): ConfigLdap;
  hasPositionAttribute(): boolean;
  clearPositionAttribute(): ConfigLdap;

  getLoginIdAttribute(): string;
  setLoginIdAttribute(value: string): ConfigLdap;
  hasLoginIdAttribute(): boolean;
  clearLoginIdAttribute(): ConfigLdap;

  getPictureAttribute(): string;
  setPictureAttribute(value: string): ConfigLdap;
  hasPictureAttribute(): boolean;
  clearPictureAttribute(): ConfigLdap;

  getSyncIntervalMinutes(): number;
  setSyncIntervalMinutes(value: number): ConfigLdap;
  hasSyncIntervalMinutes(): boolean;
  clearSyncIntervalMinutes(): ConfigLdap;

  getQueryTimeout(): number;
  setQueryTimeout(value: number): ConfigLdap;
  hasQueryTimeout(): boolean;
  clearQueryTimeout(): ConfigLdap;

  getMaxPageSize(): number;
  setMaxPageSize(value: number): ConfigLdap;
  hasMaxPageSize(): boolean;
  clearMaxPageSize(): ConfigLdap;

  getLoginFieldName(): string;
  setLoginFieldName(value: string): ConfigLdap;
  hasLoginFieldName(): boolean;
  clearLoginFieldName(): ConfigLdap;

  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): ConfigLdap;
  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): ConfigLdap;

  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): ConfigLdap;
  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): ConfigLdap;

  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): ConfigLdap;
  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): ConfigLdap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigLdap.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigLdap): ConfigLdap.AsObject;
  static serializeBinaryToWriter(message: ConfigLdap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigLdap;
  static deserializeBinaryFromReader(message: ConfigLdap, reader: jspb.BinaryReader): ConfigLdap;
}

export namespace ConfigLdap {
  export type AsObject = {
    enable?: boolean,
    enableSync?: boolean,
    ldapServer?: string,
    ldapPort?: number,
    connectionSecurity?: string,
    baseDn?: string,
    bindUsername?: string,
    bindPassword?: string,
    maximumLoginAttempts?: number,
    userFilter?: string,
    groupFilter?: string,
    enableAdminFilter?: boolean,
    adminFilter?: string,
    groupDisplayNameAttribute?: string,
    groupIdAttribute?: string,
    firstNameAttribute?: string,
    lastNameAttribute?: string,
    emailAttribute?: string,
    usernameAttribute?: string,
    nicknameAttribute?: string,
    idAttribute?: string,
    positionAttribute?: string,
    loginIdAttribute?: string,
    pictureAttribute?: string,
    syncIntervalMinutes?: number,
    queryTimeout?: number,
    maxPageSize?: number,
    loginFieldName?: string,
    loginButtonColor?: string,
    loginButtonBorderColor?: string,
    loginButtonTextColor?: string,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum EnableSyncCase { 
    _ENABLE_SYNC_NOT_SET = 0,
    ENABLE_SYNC = 2,
  }

  export enum LdapServerCase { 
    _LDAP_SERVER_NOT_SET = 0,
    LDAP_SERVER = 3,
  }

  export enum LdapPortCase { 
    _LDAP_PORT_NOT_SET = 0,
    LDAP_PORT = 4,
  }

  export enum ConnectionSecurityCase { 
    _CONNECTION_SECURITY_NOT_SET = 0,
    CONNECTION_SECURITY = 5,
  }

  export enum BaseDnCase { 
    _BASE_DN_NOT_SET = 0,
    BASE_DN = 6,
  }

  export enum BindUsernameCase { 
    _BIND_USERNAME_NOT_SET = 0,
    BIND_USERNAME = 7,
  }

  export enum BindPasswordCase { 
    _BIND_PASSWORD_NOT_SET = 0,
    BIND_PASSWORD = 8,
  }

  export enum MaximumLoginAttemptsCase { 
    _MAXIMUM_LOGIN_ATTEMPTS_NOT_SET = 0,
    MAXIMUM_LOGIN_ATTEMPTS = 9,
  }

  export enum UserFilterCase { 
    _USER_FILTER_NOT_SET = 0,
    USER_FILTER = 10,
  }

  export enum GroupFilterCase { 
    _GROUP_FILTER_NOT_SET = 0,
    GROUP_FILTER = 11,
  }

  export enum EnableAdminFilterCase { 
    _ENABLE_ADMIN_FILTER_NOT_SET = 0,
    ENABLE_ADMIN_FILTER = 12,
  }

  export enum AdminFilterCase { 
    _ADMIN_FILTER_NOT_SET = 0,
    ADMIN_FILTER = 13,
  }

  export enum GroupDisplayNameAttributeCase { 
    _GROUP_DISPLAY_NAME_ATTRIBUTE_NOT_SET = 0,
    GROUP_DISPLAY_NAME_ATTRIBUTE = 14,
  }

  export enum GroupIdAttributeCase { 
    _GROUP_ID_ATTRIBUTE_NOT_SET = 0,
    GROUP_ID_ATTRIBUTE = 15,
  }

  export enum FirstNameAttributeCase { 
    _FIRST_NAME_ATTRIBUTE_NOT_SET = 0,
    FIRST_NAME_ATTRIBUTE = 16,
  }

  export enum LastNameAttributeCase { 
    _LAST_NAME_ATTRIBUTE_NOT_SET = 0,
    LAST_NAME_ATTRIBUTE = 17,
  }

  export enum EmailAttributeCase { 
    _EMAIL_ATTRIBUTE_NOT_SET = 0,
    EMAIL_ATTRIBUTE = 18,
  }

  export enum UsernameAttributeCase { 
    _USERNAME_ATTRIBUTE_NOT_SET = 0,
    USERNAME_ATTRIBUTE = 19,
  }

  export enum NicknameAttributeCase { 
    _NICKNAME_ATTRIBUTE_NOT_SET = 0,
    NICKNAME_ATTRIBUTE = 20,
  }

  export enum IdAttributeCase { 
    _ID_ATTRIBUTE_NOT_SET = 0,
    ID_ATTRIBUTE = 21,
  }

  export enum PositionAttributeCase { 
    _POSITION_ATTRIBUTE_NOT_SET = 0,
    POSITION_ATTRIBUTE = 22,
  }

  export enum LoginIdAttributeCase { 
    _LOGIN_ID_ATTRIBUTE_NOT_SET = 0,
    LOGIN_ID_ATTRIBUTE = 23,
  }

  export enum PictureAttributeCase { 
    _PICTURE_ATTRIBUTE_NOT_SET = 0,
    PICTURE_ATTRIBUTE = 24,
  }

  export enum SyncIntervalMinutesCase { 
    _SYNC_INTERVAL_MINUTES_NOT_SET = 0,
    SYNC_INTERVAL_MINUTES = 25,
  }

  export enum QueryTimeoutCase { 
    _QUERY_TIMEOUT_NOT_SET = 0,
    QUERY_TIMEOUT = 26,
  }

  export enum MaxPageSizeCase { 
    _MAX_PAGE_SIZE_NOT_SET = 0,
    MAX_PAGE_SIZE = 27,
  }

  export enum LoginFieldNameCase { 
    _LOGIN_FIELD_NAME_NOT_SET = 0,
    LOGIN_FIELD_NAME = 28,
  }

  export enum LoginButtonColorCase { 
    _LOGIN_BUTTON_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_COLOR = 29,
  }

  export enum LoginButtonBorderColorCase { 
    _LOGIN_BUTTON_BORDER_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_BORDER_COLOR = 30,
  }

  export enum LoginButtonTextColorCase { 
    _LOGIN_BUTTON_TEXT_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_TEXT_COLOR = 31,
  }
}

export class ConfigSaml extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigSaml;
  hasEnable(): boolean;
  clearEnable(): ConfigSaml;

  getEnableSyncWithLdap(): boolean;
  setEnableSyncWithLdap(value: boolean): ConfigSaml;
  hasEnableSyncWithLdap(): boolean;
  clearEnableSyncWithLdap(): ConfigSaml;

  getEnableSyncWithLdapIncludeAuth(): boolean;
  setEnableSyncWithLdapIncludeAuth(value: boolean): ConfigSaml;
  hasEnableSyncWithLdapIncludeAuth(): boolean;
  clearEnableSyncWithLdapIncludeAuth(): ConfigSaml;

  getIgnoreGuestsLdapSync(): boolean;
  setIgnoreGuestsLdapSync(value: boolean): ConfigSaml;
  hasIgnoreGuestsLdapSync(): boolean;
  clearIgnoreGuestsLdapSync(): ConfigSaml;

  getVerify(): boolean;
  setVerify(value: boolean): ConfigSaml;
  hasVerify(): boolean;
  clearVerify(): ConfigSaml;

  getEncrypt(): boolean;
  setEncrypt(value: boolean): ConfigSaml;
  hasEncrypt(): boolean;
  clearEncrypt(): ConfigSaml;

  getSignRequest(): boolean;
  setSignRequest(value: boolean): ConfigSaml;
  hasSignRequest(): boolean;
  clearSignRequest(): ConfigSaml;

  getIdpUrl(): string;
  setIdpUrl(value: string): ConfigSaml;
  hasIdpUrl(): boolean;
  clearIdpUrl(): ConfigSaml;

  getIdpDescriptorUrl(): string;
  setIdpDescriptorUrl(value: string): ConfigSaml;
  hasIdpDescriptorUrl(): boolean;
  clearIdpDescriptorUrl(): ConfigSaml;

  getIdpMetadataUrl(): string;
  setIdpMetadataUrl(value: string): ConfigSaml;
  hasIdpMetadataUrl(): boolean;
  clearIdpMetadataUrl(): ConfigSaml;

  getServiceProviderIdentifier(): string;
  setServiceProviderIdentifier(value: string): ConfigSaml;
  hasServiceProviderIdentifier(): boolean;
  clearServiceProviderIdentifier(): ConfigSaml;

  getAssertionConsumerServiceUrl(): string;
  setAssertionConsumerServiceUrl(value: string): ConfigSaml;
  hasAssertionConsumerServiceUrl(): boolean;
  clearAssertionConsumerServiceUrl(): ConfigSaml;

  getSignatureAlgorithm(): string;
  setSignatureAlgorithm(value: string): ConfigSaml;
  hasSignatureAlgorithm(): boolean;
  clearSignatureAlgorithm(): ConfigSaml;

  getCanonicalAlgorithm(): string;
  setCanonicalAlgorithm(value: string): ConfigSaml;
  hasCanonicalAlgorithm(): boolean;
  clearCanonicalAlgorithm(): ConfigSaml;

  getScopingIdpProviderId(): string;
  setScopingIdpProviderId(value: string): ConfigSaml;
  hasScopingIdpProviderId(): boolean;
  clearScopingIdpProviderId(): ConfigSaml;

  getScopingIdpName(): string;
  setScopingIdpName(value: string): ConfigSaml;
  hasScopingIdpName(): boolean;
  clearScopingIdpName(): ConfigSaml;

  getIdpCertificateFile(): string;
  setIdpCertificateFile(value: string): ConfigSaml;
  hasIdpCertificateFile(): boolean;
  clearIdpCertificateFile(): ConfigSaml;

  getPublicCertificateFile(): string;
  setPublicCertificateFile(value: string): ConfigSaml;
  hasPublicCertificateFile(): boolean;
  clearPublicCertificateFile(): ConfigSaml;

  getPrivateKeyFile(): string;
  setPrivateKeyFile(value: string): ConfigSaml;
  hasPrivateKeyFile(): boolean;
  clearPrivateKeyFile(): ConfigSaml;

  getIdAttribute(): string;
  setIdAttribute(value: string): ConfigSaml;
  hasIdAttribute(): boolean;
  clearIdAttribute(): ConfigSaml;

  getEnableAdminAttribute(): boolean;
  setEnableAdminAttribute(value: boolean): ConfigSaml;
  hasEnableAdminAttribute(): boolean;
  clearEnableAdminAttribute(): ConfigSaml;

  getAdminAttribute(): string;
  setAdminAttribute(value: string): ConfigSaml;
  hasAdminAttribute(): boolean;
  clearAdminAttribute(): ConfigSaml;

  getFirstNameAttribute(): string;
  setFirstNameAttribute(value: string): ConfigSaml;
  hasFirstNameAttribute(): boolean;
  clearFirstNameAttribute(): ConfigSaml;

  getLastNameAttribute(): string;
  setLastNameAttribute(value: string): ConfigSaml;
  hasLastNameAttribute(): boolean;
  clearLastNameAttribute(): ConfigSaml;

  getEmailAttribute(): string;
  setEmailAttribute(value: string): ConfigSaml;
  hasEmailAttribute(): boolean;
  clearEmailAttribute(): ConfigSaml;

  getUsernameAttribute(): string;
  setUsernameAttribute(value: string): ConfigSaml;
  hasUsernameAttribute(): boolean;
  clearUsernameAttribute(): ConfigSaml;

  getNicknameAttribute(): string;
  setNicknameAttribute(value: string): ConfigSaml;
  hasNicknameAttribute(): boolean;
  clearNicknameAttribute(): ConfigSaml;

  getLocaleAttribute(): string;
  setLocaleAttribute(value: string): ConfigSaml;
  hasLocaleAttribute(): boolean;
  clearLocaleAttribute(): ConfigSaml;

  getPositionAttribute(): string;
  setPositionAttribute(value: string): ConfigSaml;
  hasPositionAttribute(): boolean;
  clearPositionAttribute(): ConfigSaml;

  getLoginButtonText(): string;
  setLoginButtonText(value: string): ConfigSaml;
  hasLoginButtonText(): boolean;
  clearLoginButtonText(): ConfigSaml;

  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): ConfigSaml;
  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): ConfigSaml;

  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): ConfigSaml;
  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): ConfigSaml;

  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): ConfigSaml;
  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): ConfigSaml;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSaml.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSaml): ConfigSaml.AsObject;
  static serializeBinaryToWriter(message: ConfigSaml, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSaml;
  static deserializeBinaryFromReader(message: ConfigSaml, reader: jspb.BinaryReader): ConfigSaml;
}

export namespace ConfigSaml {
  export type AsObject = {
    enable?: boolean,
    enableSyncWithLdap?: boolean,
    enableSyncWithLdapIncludeAuth?: boolean,
    ignoreGuestsLdapSync?: boolean,
    verify?: boolean,
    encrypt?: boolean,
    signRequest?: boolean,
    idpUrl?: string,
    idpDescriptorUrl?: string,
    idpMetadataUrl?: string,
    serviceProviderIdentifier?: string,
    assertionConsumerServiceUrl?: string,
    signatureAlgorithm?: string,
    canonicalAlgorithm?: string,
    scopingIdpProviderId?: string,
    scopingIdpName?: string,
    idpCertificateFile?: string,
    publicCertificateFile?: string,
    privateKeyFile?: string,
    idAttribute?: string,
    enableAdminAttribute?: boolean,
    adminAttribute?: string,
    firstNameAttribute?: string,
    lastNameAttribute?: string,
    emailAttribute?: string,
    usernameAttribute?: string,
    nicknameAttribute?: string,
    localeAttribute?: string,
    positionAttribute?: string,
    loginButtonText?: string,
    loginButtonColor?: string,
    loginButtonBorderColor?: string,
    loginButtonTextColor?: string,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum EnableSyncWithLdapCase { 
    _ENABLE_SYNC_WITH_LDAP_NOT_SET = 0,
    ENABLE_SYNC_WITH_LDAP = 2,
  }

  export enum EnableSyncWithLdapIncludeAuthCase { 
    _ENABLE_SYNC_WITH_LDAP_INCLUDE_AUTH_NOT_SET = 0,
    ENABLE_SYNC_WITH_LDAP_INCLUDE_AUTH = 3,
  }

  export enum IgnoreGuestsLdapSyncCase { 
    _IGNORE_GUESTS_LDAP_SYNC_NOT_SET = 0,
    IGNORE_GUESTS_LDAP_SYNC = 4,
  }

  export enum VerifyCase { 
    _VERIFY_NOT_SET = 0,
    VERIFY = 5,
  }

  export enum EncryptCase { 
    _ENCRYPT_NOT_SET = 0,
    ENCRYPT = 6,
  }

  export enum SignRequestCase { 
    _SIGN_REQUEST_NOT_SET = 0,
    SIGN_REQUEST = 7,
  }

  export enum IdpUrlCase { 
    _IDP_URL_NOT_SET = 0,
    IDP_URL = 8,
  }

  export enum IdpDescriptorUrlCase { 
    _IDP_DESCRIPTOR_URL_NOT_SET = 0,
    IDP_DESCRIPTOR_URL = 9,
  }

  export enum IdpMetadataUrlCase { 
    _IDP_METADATA_URL_NOT_SET = 0,
    IDP_METADATA_URL = 10,
  }

  export enum ServiceProviderIdentifierCase { 
    _SERVICE_PROVIDER_IDENTIFIER_NOT_SET = 0,
    SERVICE_PROVIDER_IDENTIFIER = 11,
  }

  export enum AssertionConsumerServiceUrlCase { 
    _ASSERTION_CONSUMER_SERVICE_URL_NOT_SET = 0,
    ASSERTION_CONSUMER_SERVICE_URL = 12,
  }

  export enum SignatureAlgorithmCase { 
    _SIGNATURE_ALGORITHM_NOT_SET = 0,
    SIGNATURE_ALGORITHM = 13,
  }

  export enum CanonicalAlgorithmCase { 
    _CANONICAL_ALGORITHM_NOT_SET = 0,
    CANONICAL_ALGORITHM = 14,
  }

  export enum ScopingIdpProviderIdCase { 
    _SCOPING_IDP_PROVIDER_ID_NOT_SET = 0,
    SCOPING_IDP_PROVIDER_ID = 15,
  }

  export enum ScopingIdpNameCase { 
    _SCOPING_IDP_NAME_NOT_SET = 0,
    SCOPING_IDP_NAME = 16,
  }

  export enum IdpCertificateFileCase { 
    _IDP_CERTIFICATE_FILE_NOT_SET = 0,
    IDP_CERTIFICATE_FILE = 17,
  }

  export enum PublicCertificateFileCase { 
    _PUBLIC_CERTIFICATE_FILE_NOT_SET = 0,
    PUBLIC_CERTIFICATE_FILE = 18,
  }

  export enum PrivateKeyFileCase { 
    _PRIVATE_KEY_FILE_NOT_SET = 0,
    PRIVATE_KEY_FILE = 19,
  }

  export enum IdAttributeCase { 
    _ID_ATTRIBUTE_NOT_SET = 0,
    ID_ATTRIBUTE = 20,
  }

  export enum EnableAdminAttributeCase { 
    _ENABLE_ADMIN_ATTRIBUTE_NOT_SET = 0,
    ENABLE_ADMIN_ATTRIBUTE = 21,
  }

  export enum AdminAttributeCase { 
    _ADMIN_ATTRIBUTE_NOT_SET = 0,
    ADMIN_ATTRIBUTE = 22,
  }

  export enum FirstNameAttributeCase { 
    _FIRST_NAME_ATTRIBUTE_NOT_SET = 0,
    FIRST_NAME_ATTRIBUTE = 23,
  }

  export enum LastNameAttributeCase { 
    _LAST_NAME_ATTRIBUTE_NOT_SET = 0,
    LAST_NAME_ATTRIBUTE = 24,
  }

  export enum EmailAttributeCase { 
    _EMAIL_ATTRIBUTE_NOT_SET = 0,
    EMAIL_ATTRIBUTE = 25,
  }

  export enum UsernameAttributeCase { 
    _USERNAME_ATTRIBUTE_NOT_SET = 0,
    USERNAME_ATTRIBUTE = 26,
  }

  export enum NicknameAttributeCase { 
    _NICKNAME_ATTRIBUTE_NOT_SET = 0,
    NICKNAME_ATTRIBUTE = 27,
  }

  export enum LocaleAttributeCase { 
    _LOCALE_ATTRIBUTE_NOT_SET = 0,
    LOCALE_ATTRIBUTE = 28,
  }

  export enum PositionAttributeCase { 
    _POSITION_ATTRIBUTE_NOT_SET = 0,
    POSITION_ATTRIBUTE = 29,
  }

  export enum LoginButtonTextCase { 
    _LOGIN_BUTTON_TEXT_NOT_SET = 0,
    LOGIN_BUTTON_TEXT = 30,
  }

  export enum LoginButtonColorCase { 
    _LOGIN_BUTTON_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_COLOR = 31,
  }

  export enum LoginButtonBorderColorCase { 
    _LOGIN_BUTTON_BORDER_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_BORDER_COLOR = 32,
  }

  export enum LoginButtonTextColorCase { 
    _LOGIN_BUTTON_TEXT_COLOR_NOT_SET = 0,
    LOGIN_BUTTON_TEXT_COLOR = 33,
  }
}

export class ConfigNativeApp extends jspb.Message {
  getAppCustomUrlSchemesList(): Array<string>;
  setAppCustomUrlSchemesList(value: Array<string>): ConfigNativeApp;
  clearAppCustomUrlSchemesList(): ConfigNativeApp;
  addAppCustomUrlSchemes(value: string, index?: number): ConfigNativeApp;

  getAppDownloadLink(): string;
  setAppDownloadLink(value: string): ConfigNativeApp;
  hasAppDownloadLink(): boolean;
  clearAppDownloadLink(): ConfigNativeApp;

  getAndroidAppDownloadLink(): string;
  setAndroidAppDownloadLink(value: string): ConfigNativeApp;
  hasAndroidAppDownloadLink(): boolean;
  clearAndroidAppDownloadLink(): ConfigNativeApp;

  getIosAppDownloadLink(): string;
  setIosAppDownloadLink(value: string): ConfigNativeApp;
  hasIosAppDownloadLink(): boolean;
  clearIosAppDownloadLink(): ConfigNativeApp;

  getMobileExternalBrowser(): boolean;
  setMobileExternalBrowser(value: boolean): ConfigNativeApp;
  hasMobileExternalBrowser(): boolean;
  clearMobileExternalBrowser(): ConfigNativeApp;

  getMobileEnableBiometrics(): boolean;
  setMobileEnableBiometrics(value: boolean): ConfigNativeApp;
  hasMobileEnableBiometrics(): boolean;
  clearMobileEnableBiometrics(): ConfigNativeApp;

  getMobilePreventScreenCapture(): boolean;
  setMobilePreventScreenCapture(value: boolean): ConfigNativeApp;
  hasMobilePreventScreenCapture(): boolean;
  clearMobilePreventScreenCapture(): ConfigNativeApp;

  getMobileJailbreakProtection(): boolean;
  setMobileJailbreakProtection(value: boolean): ConfigNativeApp;
  hasMobileJailbreakProtection(): boolean;
  clearMobileJailbreakProtection(): ConfigNativeApp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigNativeApp.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigNativeApp): ConfigNativeApp.AsObject;
  static serializeBinaryToWriter(message: ConfigNativeApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigNativeApp;
  static deserializeBinaryFromReader(message: ConfigNativeApp, reader: jspb.BinaryReader): ConfigNativeApp;
}

export namespace ConfigNativeApp {
  export type AsObject = {
    appCustomUrlSchemesList: Array<string>,
    appDownloadLink?: string,
    androidAppDownloadLink?: string,
    iosAppDownloadLink?: string,
    mobileExternalBrowser?: boolean,
    mobileEnableBiometrics?: boolean,
    mobilePreventScreenCapture?: boolean,
    mobileJailbreakProtection?: boolean,
  }

  export enum AppDownloadLinkCase { 
    _APP_DOWNLOAD_LINK_NOT_SET = 0,
    APP_DOWNLOAD_LINK = 2,
  }

  export enum AndroidAppDownloadLinkCase { 
    _ANDROID_APP_DOWNLOAD_LINK_NOT_SET = 0,
    ANDROID_APP_DOWNLOAD_LINK = 3,
  }

  export enum IosAppDownloadLinkCase { 
    _IOS_APP_DOWNLOAD_LINK_NOT_SET = 0,
    IOS_APP_DOWNLOAD_LINK = 4,
  }

  export enum MobileExternalBrowserCase { 
    _MOBILE_EXTERNAL_BROWSER_NOT_SET = 0,
    MOBILE_EXTERNAL_BROWSER = 5,
  }

  export enum MobileEnableBiometricsCase { 
    _MOBILE_ENABLE_BIOMETRICS_NOT_SET = 0,
    MOBILE_ENABLE_BIOMETRICS = 6,
  }

  export enum MobilePreventScreenCaptureCase { 
    _MOBILE_PREVENT_SCREEN_CAPTURE_NOT_SET = 0,
    MOBILE_PREVENT_SCREEN_CAPTURE = 7,
  }

  export enum MobileJailbreakProtectionCase { 
    _MOBILE_JAILBREAK_PROTECTION_NOT_SET = 0,
    MOBILE_JAILBREAK_PROTECTION = 8,
  }
}

export class ConfigMeilisearch extends jspb.Message {
  getServerUrl(): string;
  setServerUrl(value: string): ConfigMeilisearch;
  hasServerUrl(): boolean;
  clearServerUrl(): ConfigMeilisearch;

  getMasterKey(): string;
  setMasterKey(value: string): ConfigMeilisearch;
  hasMasterKey(): boolean;
  clearMasterKey(): ConfigMeilisearch;

  getEnableIndexing(): boolean;
  setEnableIndexing(value: boolean): ConfigMeilisearch;
  hasEnableIndexing(): boolean;
  clearEnableIndexing(): ConfigMeilisearch;

  getEnableSearching(): boolean;
  setEnableSearching(value: boolean): ConfigMeilisearch;
  hasEnableSearching(): boolean;
  clearEnableSearching(): ConfigMeilisearch;

  getEnableAutocomplete(): boolean;
  setEnableAutocomplete(value: boolean): ConfigMeilisearch;
  hasEnableAutocomplete(): boolean;
  clearEnableAutocomplete(): ConfigMeilisearch;

  getBatchSize(): number;
  setBatchSize(value: number): ConfigMeilisearch;
  hasBatchSize(): boolean;
  clearBatchSize(): ConfigMeilisearch;

  getRequestTimeoutSeconds(): number;
  setRequestTimeoutSeconds(value: number): ConfigMeilisearch;
  hasRequestTimeoutSeconds(): boolean;
  clearRequestTimeoutSeconds(): ConfigMeilisearch;

  getIndexPrefix(): string;
  setIndexPrefix(value: string): ConfigMeilisearch;
  hasIndexPrefix(): boolean;
  clearIndexPrefix(): ConfigMeilisearch;

  getSearchCutoffMs(): number;
  setSearchCutoffMs(value: number): ConfigMeilisearch;
  hasSearchCutoffMs(): boolean;
  clearSearchCutoffMs(): ConfigMeilisearch;

  getEnableTypoTolerance(): boolean;
  setEnableTypoTolerance(value: boolean): ConfigMeilisearch;
  hasEnableTypoTolerance(): boolean;
  clearEnableTypoTolerance(): ConfigMeilisearch;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMeilisearch.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMeilisearch): ConfigMeilisearch.AsObject;
  static serializeBinaryToWriter(message: ConfigMeilisearch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMeilisearch;
  static deserializeBinaryFromReader(message: ConfigMeilisearch, reader: jspb.BinaryReader): ConfigMeilisearch;
}

export namespace ConfigMeilisearch {
  export type AsObject = {
    serverUrl?: string,
    masterKey?: string,
    enableIndexing?: boolean,
    enableSearching?: boolean,
    enableAutocomplete?: boolean,
    batchSize?: number,
    requestTimeoutSeconds?: number,
    indexPrefix?: string,
    searchCutoffMs?: number,
    enableTypoTolerance?: boolean,
  }

  export enum ServerUrlCase { 
    _SERVER_URL_NOT_SET = 0,
    SERVER_URL = 1,
  }

  export enum MasterKeyCase { 
    _MASTER_KEY_NOT_SET = 0,
    MASTER_KEY = 2,
  }

  export enum EnableIndexingCase { 
    _ENABLE_INDEXING_NOT_SET = 0,
    ENABLE_INDEXING = 3,
  }

  export enum EnableSearchingCase { 
    _ENABLE_SEARCHING_NOT_SET = 0,
    ENABLE_SEARCHING = 4,
  }

  export enum EnableAutocompleteCase { 
    _ENABLE_AUTOCOMPLETE_NOT_SET = 0,
    ENABLE_AUTOCOMPLETE = 5,
  }

  export enum BatchSizeCase { 
    _BATCH_SIZE_NOT_SET = 0,
    BATCH_SIZE = 6,
  }

  export enum RequestTimeoutSecondsCase { 
    _REQUEST_TIMEOUT_SECONDS_NOT_SET = 0,
    REQUEST_TIMEOUT_SECONDS = 7,
  }

  export enum IndexPrefixCase { 
    _INDEX_PREFIX_NOT_SET = 0,
    INDEX_PREFIX = 8,
  }

  export enum SearchCutoffMsCase { 
    _SEARCH_CUTOFF_MS_NOT_SET = 0,
    SEARCH_CUTOFF_MS = 9,
  }

  export enum EnableTypoToleranceCase { 
    _ENABLE_TYPO_TOLERANCE_NOT_SET = 0,
    ENABLE_TYPO_TOLERANCE = 10,
  }
}

export class ConfigBleve extends jspb.Message {
  getIndexDir(): string;
  setIndexDir(value: string): ConfigBleve;
  hasIndexDir(): boolean;
  clearIndexDir(): ConfigBleve;

  getEnableIndexing(): boolean;
  setEnableIndexing(value: boolean): ConfigBleve;
  hasEnableIndexing(): boolean;
  clearEnableIndexing(): ConfigBleve;

  getEnableSearching(): boolean;
  setEnableSearching(value: boolean): ConfigBleve;
  hasEnableSearching(): boolean;
  clearEnableSearching(): ConfigBleve;

  getEnableAutocomplete(): boolean;
  setEnableAutocomplete(value: boolean): ConfigBleve;
  hasEnableAutocomplete(): boolean;
  clearEnableAutocomplete(): ConfigBleve;

  getBulkIndexingTimeWindowSeconds(): number;
  setBulkIndexingTimeWindowSeconds(value: number): ConfigBleve;
  hasBulkIndexingTimeWindowSeconds(): boolean;
  clearBulkIndexingTimeWindowSeconds(): ConfigBleve;

  getBatchSize(): number;
  setBatchSize(value: number): ConfigBleve;
  hasBatchSize(): boolean;
  clearBatchSize(): ConfigBleve;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigBleve.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigBleve): ConfigBleve.AsObject;
  static serializeBinaryToWriter(message: ConfigBleve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigBleve;
  static deserializeBinaryFromReader(message: ConfigBleve, reader: jspb.BinaryReader): ConfigBleve;
}

export namespace ConfigBleve {
  export type AsObject = {
    indexDir?: string,
    enableIndexing?: boolean,
    enableSearching?: boolean,
    enableAutocomplete?: boolean,
    bulkIndexingTimeWindowSeconds?: number,
    batchSize?: number,
  }

  export enum IndexDirCase { 
    _INDEX_DIR_NOT_SET = 0,
    INDEX_DIR = 1,
  }

  export enum EnableIndexingCase { 
    _ENABLE_INDEXING_NOT_SET = 0,
    ENABLE_INDEXING = 2,
  }

  export enum EnableSearchingCase { 
    _ENABLE_SEARCHING_NOT_SET = 0,
    ENABLE_SEARCHING = 3,
  }

  export enum EnableAutocompleteCase { 
    _ENABLE_AUTOCOMPLETE_NOT_SET = 0,
    ENABLE_AUTOCOMPLETE = 4,
  }

  export enum BulkIndexingTimeWindowSecondsCase { 
    _BULK_INDEXING_TIME_WINDOW_SECONDS_NOT_SET = 0,
    BULK_INDEXING_TIME_WINDOW_SECONDS = 5,
  }

  export enum BatchSizeCase { 
    _BATCH_SIZE_NOT_SET = 0,
    BATCH_SIZE = 6,
  }
}

export class ConfigDataRetention extends jspb.Message {
  getEnableMessageDeletion(): boolean;
  setEnableMessageDeletion(value: boolean): ConfigDataRetention;
  hasEnableMessageDeletion(): boolean;
  clearEnableMessageDeletion(): ConfigDataRetention;

  getEnableFileDeletion(): boolean;
  setEnableFileDeletion(value: boolean): ConfigDataRetention;
  hasEnableFileDeletion(): boolean;
  clearEnableFileDeletion(): ConfigDataRetention;

  getEnableBoardsDeletion(): boolean;
  setEnableBoardsDeletion(value: boolean): ConfigDataRetention;
  hasEnableBoardsDeletion(): boolean;
  clearEnableBoardsDeletion(): ConfigDataRetention;

  getMessageRetentionHours(): number;
  setMessageRetentionHours(value: number): ConfigDataRetention;
  hasMessageRetentionHours(): boolean;
  clearMessageRetentionHours(): ConfigDataRetention;

  getFileRetentionHours(): number;
  setFileRetentionHours(value: number): ConfigDataRetention;
  hasFileRetentionHours(): boolean;
  clearFileRetentionHours(): ConfigDataRetention;

  getBoardsRetentionDays(): number;
  setBoardsRetentionDays(value: number): ConfigDataRetention;
  hasBoardsRetentionDays(): boolean;
  clearBoardsRetentionDays(): ConfigDataRetention;

  getDeletionJobStartTime(): string;
  setDeletionJobStartTime(value: string): ConfigDataRetention;
  hasDeletionJobStartTime(): boolean;
  clearDeletionJobStartTime(): ConfigDataRetention;

  getBatchSize(): number;
  setBatchSize(value: number): ConfigDataRetention;
  hasBatchSize(): boolean;
  clearBatchSize(): ConfigDataRetention;

  getTimeBetweenBatchesMilliseconds(): number;
  setTimeBetweenBatchesMilliseconds(value: number): ConfigDataRetention;
  hasTimeBetweenBatchesMilliseconds(): boolean;
  clearTimeBetweenBatchesMilliseconds(): ConfigDataRetention;

  getRetentionIdsBatchSize(): number;
  setRetentionIdsBatchSize(value: number): ConfigDataRetention;
  hasRetentionIdsBatchSize(): boolean;
  clearRetentionIdsBatchSize(): ConfigDataRetention;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigDataRetention.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigDataRetention): ConfigDataRetention.AsObject;
  static serializeBinaryToWriter(message: ConfigDataRetention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigDataRetention;
  static deserializeBinaryFromReader(message: ConfigDataRetention, reader: jspb.BinaryReader): ConfigDataRetention;
}

export namespace ConfigDataRetention {
  export type AsObject = {
    enableMessageDeletion?: boolean,
    enableFileDeletion?: boolean,
    enableBoardsDeletion?: boolean,
    messageRetentionHours?: number,
    fileRetentionHours?: number,
    boardsRetentionDays?: number,
    deletionJobStartTime?: string,
    batchSize?: number,
    timeBetweenBatchesMilliseconds?: number,
    retentionIdsBatchSize?: number,
  }

  export enum EnableMessageDeletionCase { 
    _ENABLE_MESSAGE_DELETION_NOT_SET = 0,
    ENABLE_MESSAGE_DELETION = 1,
  }

  export enum EnableFileDeletionCase { 
    _ENABLE_FILE_DELETION_NOT_SET = 0,
    ENABLE_FILE_DELETION = 2,
  }

  export enum EnableBoardsDeletionCase { 
    _ENABLE_BOARDS_DELETION_NOT_SET = 0,
    ENABLE_BOARDS_DELETION = 3,
  }

  export enum MessageRetentionHoursCase { 
    _MESSAGE_RETENTION_HOURS_NOT_SET = 0,
    MESSAGE_RETENTION_HOURS = 4,
  }

  export enum FileRetentionHoursCase { 
    _FILE_RETENTION_HOURS_NOT_SET = 0,
    FILE_RETENTION_HOURS = 5,
  }

  export enum BoardsRetentionDaysCase { 
    _BOARDS_RETENTION_DAYS_NOT_SET = 0,
    BOARDS_RETENTION_DAYS = 6,
  }

  export enum DeletionJobStartTimeCase { 
    _DELETION_JOB_START_TIME_NOT_SET = 0,
    DELETION_JOB_START_TIME = 7,
  }

  export enum BatchSizeCase { 
    _BATCH_SIZE_NOT_SET = 0,
    BATCH_SIZE = 8,
  }

  export enum TimeBetweenBatchesMillisecondsCase { 
    _TIME_BETWEEN_BATCHES_MILLISECONDS_NOT_SET = 0,
    TIME_BETWEEN_BATCHES_MILLISECONDS = 9,
  }

  export enum RetentionIdsBatchSizeCase { 
    _RETENTION_IDS_BATCH_SIZE_NOT_SET = 0,
    RETENTION_IDS_BATCH_SIZE = 10,
  }
}

export class ConfigImageProxy extends jspb.Message {
  getEnable(): boolean;
  setEnable(value: boolean): ConfigImageProxy;
  hasEnable(): boolean;
  clearEnable(): ConfigImageProxy;

  getImageProxyType(): string;
  setImageProxyType(value: string): ConfigImageProxy;
  hasImageProxyType(): boolean;
  clearImageProxyType(): ConfigImageProxy;

  getRemoteImageProxyUrl(): string;
  setRemoteImageProxyUrl(value: string): ConfigImageProxy;
  hasRemoteImageProxyUrl(): boolean;
  clearRemoteImageProxyUrl(): ConfigImageProxy;

  getRemoteImageProxyOptions(): string;
  setRemoteImageProxyOptions(value: string): ConfigImageProxy;
  hasRemoteImageProxyOptions(): boolean;
  clearRemoteImageProxyOptions(): ConfigImageProxy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigImageProxy.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigImageProxy): ConfigImageProxy.AsObject;
  static serializeBinaryToWriter(message: ConfigImageProxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigImageProxy;
  static deserializeBinaryFromReader(message: ConfigImageProxy, reader: jspb.BinaryReader): ConfigImageProxy;
}

export namespace ConfigImageProxy {
  export type AsObject = {
    enable?: boolean,
    imageProxyType?: string,
    remoteImageProxyUrl?: string,
    remoteImageProxyOptions?: string,
  }

  export enum EnableCase { 
    _ENABLE_NOT_SET = 0,
    ENABLE = 1,
  }

  export enum ImageProxyTypeCase { 
    _IMAGE_PROXY_TYPE_NOT_SET = 0,
    IMAGE_PROXY_TYPE = 2,
  }

  export enum RemoteImageProxyUrlCase { 
    _REMOTE_IMAGE_PROXY_URL_NOT_SET = 0,
    REMOTE_IMAGE_PROXY_URL = 3,
  }

  export enum RemoteImageProxyOptionsCase { 
    _REMOTE_IMAGE_PROXY_OPTIONS_NOT_SET = 0,
    REMOTE_IMAGE_PROXY_OPTIONS = 4,
  }
}

export class Config extends jspb.Message {
  getMain(): ConfigMain | undefined;
  setMain(value?: ConfigMain): Config;
  hasMain(): boolean;
  clearMain(): Config;

  getSecurity(): ConfigSecurity | undefined;
  setSecurity(value?: ConfigSecurity): Config;
  hasSecurity(): boolean;
  clearSecurity(): Config;

  getCache(): CacheConfig | undefined;
  setCache(value?: CacheConfig): Config;
  hasCache(): boolean;
  clearCache(): Config;

  getMetrics(): ConfigMetrics | undefined;
  setMetrics(value?: ConfigMetrics): Config;
  hasMetrics(): boolean;
  clearMetrics(): Config;

  getSso(): ConfigSSO | undefined;
  setSso(value?: ConfigSSO): Config;
  hasSso(): boolean;
  clearSso(): Config;

  getSql(): ConfigSql | undefined;
  setSql(value?: ConfigSql): Config;
  hasSql(): boolean;
  clearSql(): Config;

  getPassword(): ConfigPassword | undefined;
  setPassword(value?: ConfigPassword): Config;
  hasPassword(): boolean;
  clearPassword(): Config;

  getFile(): ConfigFile | undefined;
  setFile(value?: ConfigFile): Config;
  hasFile(): boolean;
  clearFile(): Config;

  getEmail(): ConfigFile | undefined;
  setEmail(value?: ConfigFile): Config;
  hasEmail(): boolean;
  clearEmail(): Config;

  getRateLimit(): ConfigRateLimit | undefined;
  setRateLimit(value?: ConfigRateLimit): Config;
  hasRateLimit(): boolean;
  clearRateLimit(): Config;

  getPrivacy(): ConfigPrivacy | undefined;
  setPrivacy(value?: ConfigPrivacy): Config;
  hasPrivacy(): boolean;
  clearPrivacy(): Config;

  getSupport(): ConfigSupport | undefined;
  setSupport(value?: ConfigSupport): Config;
  hasSupport(): boolean;
  clearSupport(): Config;

  getLocalization(): ConfigLocalization | undefined;
  setLocalization(value?: ConfigLocalization): Config;
  hasLocalization(): boolean;
  clearLocalization(): Config;

  getLdap(): ConfigLdap | undefined;
  setLdap(value?: ConfigLdap): Config;
  hasLdap(): boolean;
  clearLdap(): Config;

  getSaml(): ConfigSaml | undefined;
  setSaml(value?: ConfigSaml): Config;
  hasSaml(): boolean;
  clearSaml(): Config;

  getNativeApp(): ConfigNativeApp | undefined;
  setNativeApp(value?: ConfigNativeApp): Config;
  hasNativeApp(): boolean;
  clearNativeApp(): Config;

  getMeilisearch(): ConfigMeilisearch | undefined;
  setMeilisearch(value?: ConfigMeilisearch): Config;
  hasMeilisearch(): boolean;
  clearMeilisearch(): Config;

  getBleve(): ConfigBleve | undefined;
  setBleve(value?: ConfigBleve): Config;
  hasBleve(): boolean;
  clearBleve(): Config;

  getDataRetention(): ConfigDataRetention | undefined;
  setDataRetention(value?: ConfigDataRetention): Config;
  hasDataRetention(): boolean;
  clearDataRetention(): Config;

  getImageProxy(): ConfigImageProxy | undefined;
  setImageProxy(value?: ConfigImageProxy): Config;
  hasImageProxy(): boolean;
  clearImageProxy(): Config;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    main?: ConfigMain.AsObject,
    security?: ConfigSecurity.AsObject,
    cache?: CacheConfig.AsObject,
    metrics?: ConfigMetrics.AsObject,
    sso?: ConfigSSO.AsObject,
    sql?: ConfigSql.AsObject,
    password?: ConfigPassword.AsObject,
    file?: ConfigFile.AsObject,
    email?: ConfigFile.AsObject,
    rateLimit?: ConfigRateLimit.AsObject,
    privacy?: ConfigPrivacy.AsObject,
    support?: ConfigSupport.AsObject,
    localization?: ConfigLocalization.AsObject,
    ldap?: ConfigLdap.AsObject,
    saml?: ConfigSaml.AsObject,
    nativeApp?: ConfigNativeApp.AsObject,
    meilisearch?: ConfigMeilisearch.AsObject,
    bleve?: ConfigBleve.AsObject,
    dataRetention?: ConfigDataRetention.AsObject,
    imageProxy?: ConfigImageProxy.AsObject,
  }
}

