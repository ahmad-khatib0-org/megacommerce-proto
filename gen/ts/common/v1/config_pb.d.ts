// package: common.v1
// file: common/v1/config.proto

import * as jspb from "google-protobuf";
import * as common_v1_error_pb from "../../common/v1/error_pb";

export class ConfigMain extends jspb.Message {
  hasReadTimeout(): boolean;
  clearReadTimeout(): void;
  getReadTimeout(): number;
  setReadTimeout(value: number): void;

  hasWriteTimeout(): boolean;
  clearWriteTimeout(): void;
  getWriteTimeout(): number;
  setWriteTimeout(value: number): void;

  hasIdleTimeout(): boolean;
  clearIdleTimeout(): void;
  getIdleTimeout(): number;
  setIdleTimeout(value: number): void;

  hasEnableLinkPreviews(): boolean;
  clearEnableLinkPreviews(): void;
  getEnableLinkPreviews(): boolean;
  setEnableLinkPreviews(value: boolean): void;

  hasRestrictLinkPreviews(): boolean;
  clearRestrictLinkPreviews(): void;
  getRestrictLinkPreviews(): string;
  setRestrictLinkPreviews(value: string): void;

  hasEnableClientPerformanceDebugging(): boolean;
  clearEnableClientPerformanceDebugging(): void;
  getEnableClientPerformanceDebugging(): boolean;
  setEnableClientPerformanceDebugging(value: boolean): void;

  hasEnableGifPicker(): boolean;
  clearEnableGifPicker(): void;
  getEnableGifPicker(): boolean;
  setEnableGifPicker(value: boolean): void;

  hasEnableCustomEmoji(): boolean;
  clearEnableCustomEmoji(): void;
  getEnableCustomEmoji(): boolean;
  setEnableCustomEmoji(value: boolean): void;

  hasEnableEmojiPicker(): boolean;
  clearEnableEmojiPicker(): void;
  getEnableEmojiPicker(): boolean;
  setEnableEmojiPicker(value: boolean): void;

  hasTimeBetweenUserTypingUpdatesMilliseconds(): boolean;
  clearTimeBetweenUserTypingUpdatesMilliseconds(): void;
  getTimeBetweenUserTypingUpdatesMilliseconds(): number;
  setTimeBetweenUserTypingUpdatesMilliseconds(value: number): void;

  hasEnableFileSearch(): boolean;
  clearEnableFileSearch(): void;
  getEnableFileSearch(): boolean;
  setEnableFileSearch(value: boolean): void;

  hasEnableUserTypingMessages(): boolean;
  clearEnableUserTypingMessages(): void;
  getEnableUserTypingMessages(): boolean;
  setEnableUserTypingMessages(value: boolean): void;

  hasEnableUserStatuses(): boolean;
  clearEnableUserStatuses(): void;
  getEnableUserStatuses(): boolean;
  setEnableUserStatuses(value: boolean): void;

  hasEnableEmailInvitations(): boolean;
  clearEnableEmailInvitations(): void;
  getEnableEmailInvitations(): boolean;
  setEnableEmailInvitations(value: boolean): void;

  hasEnableSvgs(): boolean;
  clearEnableSvgs(): void;
  getEnableSvgs(): boolean;
  setEnableSvgs(value: boolean): void;

  hasAllowPersistentNotifications(): boolean;
  clearAllowPersistentNotifications(): void;
  getAllowPersistentNotifications(): boolean;
  setAllowPersistentNotifications(value: boolean): void;

  hasPersistentNotificationIntervalMinutes(): boolean;
  clearPersistentNotificationIntervalMinutes(): void;
  getPersistentNotificationIntervalMinutes(): number;
  setPersistentNotificationIntervalMinutes(value: number): void;

  hasPersistentNotificationMaxCount(): boolean;
  clearPersistentNotificationMaxCount(): void;
  getPersistentNotificationMaxCount(): number;
  setPersistentNotificationMaxCount(value: number): void;

  hasPersistentNotificationMaxRecipients(): boolean;
  clearPersistentNotificationMaxRecipients(): void;
  getPersistentNotificationMaxRecipients(): number;
  setPersistentNotificationMaxRecipients(value: number): void;

  hasFeatureFlagSyncIntervalSeconds(): boolean;
  clearFeatureFlagSyncIntervalSeconds(): void;
  getFeatureFlagSyncIntervalSeconds(): number;
  setFeatureFlagSyncIntervalSeconds(value: number): void;

  hasAllowSyncedDrafts(): boolean;
  clearAllowSyncedDrafts(): void;
  getAllowSyncedDrafts(): boolean;
  setAllowSyncedDrafts(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMain.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMain): ConfigMain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigMain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMain;
  static deserializeBinaryFromReader(message: ConfigMain, reader: jspb.BinaryReader): ConfigMain;
}

export namespace ConfigMain {
  export type AsObject = {
    readTimeout: number,
    writeTimeout: number,
    idleTimeout: number,
    enableLinkPreviews: boolean,
    restrictLinkPreviews: string,
    enableClientPerformanceDebugging: boolean,
    enableGifPicker: boolean,
    enableCustomEmoji: boolean,
    enableEmojiPicker: boolean,
    timeBetweenUserTypingUpdatesMilliseconds: number,
    enableFileSearch: boolean,
    enableUserTypingMessages: boolean,
    enableUserStatuses: boolean,
    enableEmailInvitations: boolean,
    enableSvgs: boolean,
    allowPersistentNotifications: boolean,
    persistentNotificationIntervalMinutes: number,
    persistentNotificationMaxCount: number,
    persistentNotificationMaxRecipients: number,
    featureFlagSyncIntervalSeconds: number,
    allowSyncedDrafts: boolean,
  }
}

export class ConfigServices extends jspb.Message {
  hasCommonServiceGrpcHost(): boolean;
  clearCommonServiceGrpcHost(): void;
  getCommonServiceGrpcHost(): string;
  setCommonServiceGrpcHost(value: string): void;

  hasCommonServiceGrpcPort(): boolean;
  clearCommonServiceGrpcPort(): void;
  getCommonServiceGrpcPort(): number;
  setCommonServiceGrpcPort(value: number): void;

  hasUserServiceGrpcHost(): boolean;
  clearUserServiceGrpcHost(): void;
  getUserServiceGrpcHost(): string;
  setUserServiceGrpcHost(value: string): void;

  hasUserServiceGrpcPort(): boolean;
  clearUserServiceGrpcPort(): void;
  getUserServiceGrpcPort(): number;
  setUserServiceGrpcPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigServices.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigServices): ConfigServices.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigServices, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigServices;
  static deserializeBinaryFromReader(message: ConfigServices, reader: jspb.BinaryReader): ConfigServices;
}

export namespace ConfigServices {
  export type AsObject = {
    commonServiceGrpcHost: string,
    commonServiceGrpcPort: number,
    userServiceGrpcHost: string,
    userServiceGrpcPort: number,
  }
}

export class ConfigSecurity extends jspb.Message {
  hasMaximumLoginAttempts(): boolean;
  clearMaximumLoginAttempts(): void;
  getMaximumLoginAttempts(): number;
  setMaximumLoginAttempts(value: number): void;

  hasEnableInsecureOutgoingConnections(): boolean;
  clearEnableInsecureOutgoingConnections(): void;
  getEnableInsecureOutgoingConnections(): boolean;
  setEnableInsecureOutgoingConnections(value: boolean): void;

  hasEnableMultifactorAuthentication(): boolean;
  clearEnableMultifactorAuthentication(): void;
  getEnableMultifactorAuthentication(): boolean;
  setEnableMultifactorAuthentication(value: boolean): void;

  hasEnforceMultifactorAuthentication(): boolean;
  clearEnforceMultifactorAuthentication(): void;
  getEnforceMultifactorAuthentication(): boolean;
  setEnforceMultifactorAuthentication(value: boolean): void;

  hasEnableOauthServiceProvider(): boolean;
  clearEnableOauthServiceProvider(): void;
  getEnableOauthServiceProvider(): boolean;
  setEnableOauthServiceProvider(value: boolean): void;

  hasEnableOutgoingOauthConnections(): boolean;
  clearEnableOutgoingOauthConnections(): void;
  getEnableOutgoingOauthConnections(): boolean;
  setEnableOutgoingOauthConnections(value: boolean): void;

  hasTerminateSessionsOnPasswordChange(): boolean;
  clearTerminateSessionsOnPasswordChange(): void;
  getTerminateSessionsOnPasswordChange(): boolean;
  setTerminateSessionsOnPasswordChange(value: boolean): void;

  hasSessionLengthWebInHours(): boolean;
  clearSessionLengthWebInHours(): void;
  getSessionLengthWebInHours(): number;
  setSessionLengthWebInHours(value: number): void;

  hasSessionLengthMobileInHours(): boolean;
  clearSessionLengthMobileInHours(): void;
  getSessionLengthMobileInHours(): number;
  setSessionLengthMobileInHours(value: number): void;

  hasSessionLengthSsoInHours(): boolean;
  clearSessionLengthSsoInHours(): void;
  getSessionLengthSsoInHours(): number;
  setSessionLengthSsoInHours(value: number): void;

  hasAllowCorsFrom(): boolean;
  clearAllowCorsFrom(): void;
  getAllowCorsFrom(): string;
  setAllowCorsFrom(value: string): void;

  hasCorsExposedHeaders(): boolean;
  clearCorsExposedHeaders(): void;
  getCorsExposedHeaders(): string;
  setCorsExposedHeaders(value: string): void;

  hasCorsAllowCredentials(): boolean;
  clearCorsAllowCredentials(): void;
  getCorsAllowCredentials(): boolean;
  setCorsAllowCredentials(value: boolean): void;

  hasCorsDebug(): boolean;
  clearCorsDebug(): void;
  getCorsDebug(): boolean;
  setCorsDebug(value: boolean): void;

  hasAllowCookiesForSubdomains(): boolean;
  clearAllowCookiesForSubdomains(): void;
  getAllowCookiesForSubdomains(): boolean;
  setAllowCookiesForSubdomains(value: boolean): void;

  hasSessionCacheInMinutes(): boolean;
  clearSessionCacheInMinutes(): void;
  getSessionCacheInMinutes(): number;
  setSessionCacheInMinutes(value: number): void;

  hasWebsocketSecurePort(): boolean;
  clearWebsocketSecurePort(): void;
  getWebsocketSecurePort(): number;
  setWebsocketSecurePort(value: number): void;

  hasWebsocketPort(): boolean;
  clearWebsocketPort(): void;
  getWebsocketPort(): number;
  setWebsocketPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSecurity.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSecurity): ConfigSecurity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigSecurity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSecurity;
  static deserializeBinaryFromReader(message: ConfigSecurity, reader: jspb.BinaryReader): ConfigSecurity;
}

export namespace ConfigSecurity {
  export type AsObject = {
    maximumLoginAttempts: number,
    enableInsecureOutgoingConnections: boolean,
    enableMultifactorAuthentication: boolean,
    enforceMultifactorAuthentication: boolean,
    enableOauthServiceProvider: boolean,
    enableOutgoingOauthConnections: boolean,
    terminateSessionsOnPasswordChange: boolean,
    sessionLengthWebInHours: number,
    sessionLengthMobileInHours: number,
    sessionLengthSsoInHours: number,
    allowCorsFrom: string,
    corsExposedHeaders: string,
    corsAllowCredentials: boolean,
    corsDebug: boolean,
    allowCookiesForSubdomains: boolean,
    sessionCacheInMinutes: number,
    websocketSecurePort: number,
    websocketPort: number,
  }
}

export class CacheConfig extends jspb.Message {
  hasCacheType(): boolean;
  clearCacheType(): void;
  getCacheType(): string;
  setCacheType(value: string): void;

  hasRedisAddress(): boolean;
  clearRedisAddress(): void;
  getRedisAddress(): string;
  setRedisAddress(value: string): void;

  hasRedisPassword(): boolean;
  clearRedisPassword(): void;
  getRedisPassword(): string;
  setRedisPassword(value: string): void;

  hasRedisDb(): boolean;
  clearRedisDb(): void;
  getRedisDb(): number;
  setRedisDb(value: number): void;

  hasRedisCachePrefix(): boolean;
  clearRedisCachePrefix(): void;
  getRedisCachePrefix(): string;
  setRedisCachePrefix(value: string): void;

  hasDisableClientCache(): boolean;
  clearDisableClientCache(): void;
  getDisableClientCache(): boolean;
  setDisableClientCache(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CacheConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CacheConfig): CacheConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CacheConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CacheConfig;
  static deserializeBinaryFromReader(message: CacheConfig, reader: jspb.BinaryReader): CacheConfig;
}

export namespace CacheConfig {
  export type AsObject = {
    cacheType: string,
    redisAddress: string,
    redisPassword: string,
    redisDb: number,
    redisCachePrefix: string,
    disableClientCache: boolean,
  }
}

export class ConfigMetrics extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasBlockProfileRate(): boolean;
  clearBlockProfileRate(): void;
  getBlockProfileRate(): number;
  setBlockProfileRate(value: number): void;

  hasListenAddress(): boolean;
  clearListenAddress(): void;
  getListenAddress(): string;
  setListenAddress(value: string): void;

  hasEnableClientMetrics(): boolean;
  clearEnableClientMetrics(): void;
  getEnableClientMetrics(): boolean;
  setEnableClientMetrics(value: boolean): void;

  hasEnableNotificationMetrics(): boolean;
  clearEnableNotificationMetrics(): void;
  getEnableNotificationMetrics(): boolean;
  setEnableNotificationMetrics(value: boolean): void;

  clearClientSideUserIdsList(): void;
  getClientSideUserIdsList(): Array<string>;
  setClientSideUserIdsList(value: Array<string>): void;
  addClientSideUserIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMetrics.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMetrics): ConfigMetrics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigMetrics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMetrics;
  static deserializeBinaryFromReader(message: ConfigMetrics, reader: jspb.BinaryReader): ConfigMetrics;
}

export namespace ConfigMetrics {
  export type AsObject = {
    enable: boolean,
    blockProfileRate: number,
    listenAddress: string,
    enableClientMetrics: boolean,
    enableNotificationMetrics: boolean,
    clientSideUserIdsList: Array<string>,
  }
}

export class ConfigSSO extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasSecret(): boolean;
  clearSecret(): void;
  getSecret(): string;
  setSecret(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasScope(): boolean;
  clearScope(): void;
  getScope(): string;
  setScope(value: string): void;

  hasAuthEndpoint(): boolean;
  clearAuthEndpoint(): void;
  getAuthEndpoint(): string;
  setAuthEndpoint(value: string): void;

  hasTokenEndpoint(): boolean;
  clearTokenEndpoint(): void;
  getTokenEndpoint(): string;
  setTokenEndpoint(value: string): void;

  hasUserApiEndpoint(): boolean;
  clearUserApiEndpoint(): void;
  getUserApiEndpoint(): string;
  setUserApiEndpoint(value: string): void;

  hasDiscoveryEndpoint(): boolean;
  clearDiscoveryEndpoint(): void;
  getDiscoveryEndpoint(): string;
  setDiscoveryEndpoint(value: string): void;

  hasButtonText(): boolean;
  clearButtonText(): void;
  getButtonText(): string;
  setButtonText(value: string): void;

  hasButtonColor(): boolean;
  clearButtonColor(): void;
  getButtonColor(): string;
  setButtonColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSSO.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSSO): ConfigSSO.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigSSO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSSO;
  static deserializeBinaryFromReader(message: ConfigSSO, reader: jspb.BinaryReader): ConfigSSO;
}

export namespace ConfigSSO {
  export type AsObject = {
    enable: boolean,
    secret: string,
    id: string,
    scope: string,
    authEndpoint: string,
    tokenEndpoint: string,
    userApiEndpoint: string,
    discoveryEndpoint: string,
    buttonText: string,
    buttonColor: string,
  }
}

export class ConfigSql extends jspb.Message {
  hasDriverName(): boolean;
  clearDriverName(): void;
  getDriverName(): string;
  setDriverName(value: string): void;

  hasDataSource(): boolean;
  clearDataSource(): void;
  getDataSource(): string;
  setDataSource(value: string): void;

  hasMaxIdleConns(): boolean;
  clearMaxIdleConns(): void;
  getMaxIdleConns(): number;
  setMaxIdleConns(value: number): void;

  hasConnMaxLifetimeMilliseconds(): boolean;
  clearConnMaxLifetimeMilliseconds(): void;
  getConnMaxLifetimeMilliseconds(): number;
  setConnMaxLifetimeMilliseconds(value: number): void;

  hasConnMaxIdleTimeMilliseconds(): boolean;
  clearConnMaxIdleTimeMilliseconds(): void;
  getConnMaxIdleTimeMilliseconds(): number;
  setConnMaxIdleTimeMilliseconds(value: number): void;

  hasMaxOpenConns(): boolean;
  clearMaxOpenConns(): void;
  getMaxOpenConns(): number;
  setMaxOpenConns(value: number): void;

  hasTrace(): boolean;
  clearTrace(): void;
  getTrace(): boolean;
  setTrace(value: boolean): void;

  hasAtRestEncryptKey(): boolean;
  clearAtRestEncryptKey(): void;
  getAtRestEncryptKey(): string;
  setAtRestEncryptKey(value: string): void;

  hasQueryTimeout(): boolean;
  clearQueryTimeout(): void;
  getQueryTimeout(): number;
  setQueryTimeout(value: number): void;

  hasDisableDatabaseSearch(): boolean;
  clearDisableDatabaseSearch(): void;
  getDisableDatabaseSearch(): boolean;
  setDisableDatabaseSearch(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSql.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSql): ConfigSql.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigSql, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSql;
  static deserializeBinaryFromReader(message: ConfigSql, reader: jspb.BinaryReader): ConfigSql;
}

export namespace ConfigSql {
  export type AsObject = {
    driverName: string,
    dataSource: string,
    maxIdleConns: number,
    connMaxLifetimeMilliseconds: number,
    connMaxIdleTimeMilliseconds: number,
    maxOpenConns: number,
    trace: boolean,
    atRestEncryptKey: string,
    queryTimeout: number,
    disableDatabaseSearch: boolean,
  }
}

export class ConfigPassword extends jspb.Message {
  hasMinimumLength(): boolean;
  clearMinimumLength(): void;
  getMinimumLength(): number;
  setMinimumLength(value: number): void;

  hasLowercase(): boolean;
  clearLowercase(): void;
  getLowercase(): boolean;
  setLowercase(value: boolean): void;

  hasNumber(): boolean;
  clearNumber(): void;
  getNumber(): boolean;
  setNumber(value: boolean): void;

  hasUppercase(): boolean;
  clearUppercase(): void;
  getUppercase(): boolean;
  setUppercase(value: boolean): void;

  hasSymbol(): boolean;
  clearSymbol(): void;
  getSymbol(): boolean;
  setSymbol(value: boolean): void;

  hasEnableForgotLink(): boolean;
  clearEnableForgotLink(): void;
  getEnableForgotLink(): boolean;
  setEnableForgotLink(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigPassword.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigPassword): ConfigPassword.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigPassword;
  static deserializeBinaryFromReader(message: ConfigPassword, reader: jspb.BinaryReader): ConfigPassword;
}

export namespace ConfigPassword {
  export type AsObject = {
    minimumLength: number,
    lowercase: boolean,
    number: boolean,
    uppercase: boolean,
    symbol: boolean,
    enableForgotLink: boolean,
  }
}

export class ConfigFile extends jspb.Message {
  hasEnableFileAttachments(): boolean;
  clearEnableFileAttachments(): void;
  getEnableFileAttachments(): boolean;
  setEnableFileAttachments(value: boolean): void;

  hasEnableMobileUpload(): boolean;
  clearEnableMobileUpload(): void;
  getEnableMobileUpload(): boolean;
  setEnableMobileUpload(value: boolean): void;

  hasEnableMobileDownload(): boolean;
  clearEnableMobileDownload(): void;
  getEnableMobileDownload(): boolean;
  setEnableMobileDownload(value: boolean): void;

  hasMaxFileSize(): boolean;
  clearMaxFileSize(): void;
  getMaxFileSize(): number;
  setMaxFileSize(value: number): void;

  hasMaxImageResolution(): boolean;
  clearMaxImageResolution(): void;
  getMaxImageResolution(): number;
  setMaxImageResolution(value: number): void;

  hasMaxImageDecoderConcurrency(): boolean;
  clearMaxImageDecoderConcurrency(): void;
  getMaxImageDecoderConcurrency(): number;
  setMaxImageDecoderConcurrency(value: number): void;

  hasDriverName(): boolean;
  clearDriverName(): void;
  getDriverName(): string;
  setDriverName(value: string): void;

  hasDirectory(): boolean;
  clearDirectory(): void;
  getDirectory(): string;
  setDirectory(value: string): void;

  hasEnablePublicLink(): boolean;
  clearEnablePublicLink(): void;
  getEnablePublicLink(): boolean;
  setEnablePublicLink(value: boolean): void;

  hasExtractContent(): boolean;
  clearExtractContent(): void;
  getExtractContent(): boolean;
  setExtractContent(value: boolean): void;

  hasArchiveRecursion(): boolean;
  clearArchiveRecursion(): void;
  getArchiveRecursion(): boolean;
  setArchiveRecursion(value: boolean): void;

  hasPublicLinkSalt(): boolean;
  clearPublicLinkSalt(): void;
  getPublicLinkSalt(): string;
  setPublicLinkSalt(value: string): void;

  hasInitialFont(): boolean;
  clearInitialFont(): void;
  getInitialFont(): string;
  setInitialFont(value: string): void;

  hasAmazonS3AccessKeyId(): boolean;
  clearAmazonS3AccessKeyId(): void;
  getAmazonS3AccessKeyId(): string;
  setAmazonS3AccessKeyId(value: string): void;

  hasAmazonS3SecretAccessKey(): boolean;
  clearAmazonS3SecretAccessKey(): void;
  getAmazonS3SecretAccessKey(): string;
  setAmazonS3SecretAccessKey(value: string): void;

  hasAmazonS3Bucket(): boolean;
  clearAmazonS3Bucket(): void;
  getAmazonS3Bucket(): string;
  setAmazonS3Bucket(value: string): void;

  hasAmazonS3PathPrefix(): boolean;
  clearAmazonS3PathPrefix(): void;
  getAmazonS3PathPrefix(): string;
  setAmazonS3PathPrefix(value: string): void;

  hasAmazonS3Region(): boolean;
  clearAmazonS3Region(): void;
  getAmazonS3Region(): string;
  setAmazonS3Region(value: string): void;

  hasAmazonS3Endpoint(): boolean;
  clearAmazonS3Endpoint(): void;
  getAmazonS3Endpoint(): string;
  setAmazonS3Endpoint(value: string): void;

  hasAmazonS3Ssl(): boolean;
  clearAmazonS3Ssl(): void;
  getAmazonS3Ssl(): boolean;
  setAmazonS3Ssl(value: boolean): void;

  hasAmazonS3SignV2(): boolean;
  clearAmazonS3SignV2(): void;
  getAmazonS3SignV2(): boolean;
  setAmazonS3SignV2(value: boolean): void;

  hasAmazonS3Sse(): boolean;
  clearAmazonS3Sse(): void;
  getAmazonS3Sse(): boolean;
  setAmazonS3Sse(value: boolean): void;

  hasAmazonS3Trace(): boolean;
  clearAmazonS3Trace(): void;
  getAmazonS3Trace(): boolean;
  setAmazonS3Trace(value: boolean): void;

  hasAmazonS3RequestTimeoutMilliseconds(): boolean;
  clearAmazonS3RequestTimeoutMilliseconds(): void;
  getAmazonS3RequestTimeoutMilliseconds(): number;
  setAmazonS3RequestTimeoutMilliseconds(value: number): void;

  hasAmazonS3UploadPartSizeBytes(): boolean;
  clearAmazonS3UploadPartSizeBytes(): void;
  getAmazonS3UploadPartSizeBytes(): number;
  setAmazonS3UploadPartSizeBytes(value: number): void;

  hasAmazonS3StorageClass(): boolean;
  clearAmazonS3StorageClass(): void;
  getAmazonS3StorageClass(): string;
  setAmazonS3StorageClass(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigFile.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigFile): ConfigFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigFile;
  static deserializeBinaryFromReader(message: ConfigFile, reader: jspb.BinaryReader): ConfigFile;
}

export namespace ConfigFile {
  export type AsObject = {
    enableFileAttachments: boolean,
    enableMobileUpload: boolean,
    enableMobileDownload: boolean,
    maxFileSize: number,
    maxImageResolution: number,
    maxImageDecoderConcurrency: number,
    driverName: string,
    directory: string,
    enablePublicLink: boolean,
    extractContent: boolean,
    archiveRecursion: boolean,
    publicLinkSalt: string,
    initialFont: string,
    amazonS3AccessKeyId: string,
    amazonS3SecretAccessKey: string,
    amazonS3Bucket: string,
    amazonS3PathPrefix: string,
    amazonS3Region: string,
    amazonS3Endpoint: string,
    amazonS3Ssl: boolean,
    amazonS3SignV2: boolean,
    amazonS3Sse: boolean,
    amazonS3Trace: boolean,
    amazonS3RequestTimeoutMilliseconds: number,
    amazonS3UploadPartSizeBytes: number,
    amazonS3StorageClass: string,
  }
}

export class ConfigEmail extends jspb.Message {
  hasSendEmailNotifications(): boolean;
  clearSendEmailNotifications(): void;
  getSendEmailNotifications(): boolean;
  setSendEmailNotifications(value: boolean): void;

  hasRequireEmailVerification(): boolean;
  clearRequireEmailVerification(): void;
  getRequireEmailVerification(): boolean;
  setRequireEmailVerification(value: boolean): void;

  hasFeedbackEmail(): boolean;
  clearFeedbackEmail(): void;
  getFeedbackEmail(): string;
  setFeedbackEmail(value: string): void;

  hasReplyToAddress(): boolean;
  clearReplyToAddress(): void;
  getReplyToAddress(): string;
  setReplyToAddress(value: string): void;

  hasEnableSmtpAuth(): boolean;
  clearEnableSmtpAuth(): void;
  getEnableSmtpAuth(): boolean;
  setEnableSmtpAuth(value: boolean): void;

  hasSmtpUsername(): boolean;
  clearSmtpUsername(): void;
  getSmtpUsername(): string;
  setSmtpUsername(value: string): void;

  hasSmtpPassword(): boolean;
  clearSmtpPassword(): void;
  getSmtpPassword(): string;
  setSmtpPassword(value: string): void;

  hasSmtpServer(): boolean;
  clearSmtpServer(): void;
  getSmtpServer(): string;
  setSmtpServer(value: string): void;

  hasSmtpPort(): boolean;
  clearSmtpPort(): void;
  getSmtpPort(): string;
  setSmtpPort(value: string): void;

  hasSmtpServerTimeout(): boolean;
  clearSmtpServerTimeout(): void;
  getSmtpServerTimeout(): number;
  setSmtpServerTimeout(value: number): void;

  hasConnectionSecurity(): boolean;
  clearConnectionSecurity(): void;
  getConnectionSecurity(): string;
  setConnectionSecurity(value: string): void;

  hasSendPushNotifications(): boolean;
  clearSendPushNotifications(): void;
  getSendPushNotifications(): boolean;
  setSendPushNotifications(value: boolean): void;

  hasPushNotificationServer(): boolean;
  clearPushNotificationServer(): void;
  getPushNotificationServer(): string;
  setPushNotificationServer(value: string): void;

  hasPushNotificationContents(): boolean;
  clearPushNotificationContents(): void;
  getPushNotificationContents(): string;
  setPushNotificationContents(value: string): void;

  hasPushNotificationBuffer(): boolean;
  clearPushNotificationBuffer(): void;
  getPushNotificationBuffer(): number;
  setPushNotificationBuffer(value: number): void;

  hasEnableEmailBatching(): boolean;
  clearEnableEmailBatching(): void;
  getEnableEmailBatching(): boolean;
  setEnableEmailBatching(value: boolean): void;

  hasEmailBatchingBufferSize(): boolean;
  clearEmailBatchingBufferSize(): void;
  getEmailBatchingBufferSize(): number;
  setEmailBatchingBufferSize(value: number): void;

  hasEmailBatchingInterval(): boolean;
  clearEmailBatchingInterval(): void;
  getEmailBatchingInterval(): number;
  setEmailBatchingInterval(value: number): void;

  hasSkipServerCertificateVerification(): boolean;
  clearSkipServerCertificateVerification(): void;
  getSkipServerCertificateVerification(): boolean;
  setSkipServerCertificateVerification(value: boolean): void;

  hasEmailNotificationContentsType(): boolean;
  clearEmailNotificationContentsType(): void;
  getEmailNotificationContentsType(): string;
  setEmailNotificationContentsType(value: string): void;

  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): void;
  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): void;

  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): void;
  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): void;

  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): void;
  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigEmail.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigEmail): ConfigEmail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigEmail;
  static deserializeBinaryFromReader(message: ConfigEmail, reader: jspb.BinaryReader): ConfigEmail;
}

export namespace ConfigEmail {
  export type AsObject = {
    sendEmailNotifications: boolean,
    requireEmailVerification: boolean,
    feedbackEmail: string,
    replyToAddress: string,
    enableSmtpAuth: boolean,
    smtpUsername: string,
    smtpPassword: string,
    smtpServer: string,
    smtpPort: string,
    smtpServerTimeout: number,
    connectionSecurity: string,
    sendPushNotifications: boolean,
    pushNotificationServer: string,
    pushNotificationContents: string,
    pushNotificationBuffer: number,
    enableEmailBatching: boolean,
    emailBatchingBufferSize: number,
    emailBatchingInterval: number,
    skipServerCertificateVerification: boolean,
    emailNotificationContentsType: string,
    loginButtonColor: string,
    loginButtonBorderColor: string,
    loginButtonTextColor: string,
  }
}

export class ConfigRateLimit extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasPerSec(): boolean;
  clearPerSec(): void;
  getPerSec(): number;
  setPerSec(value: number): void;

  hasMaxBurst(): boolean;
  clearMaxBurst(): void;
  getMaxBurst(): number;
  setMaxBurst(value: number): void;

  hasMemoryStoreSize(): boolean;
  clearMemoryStoreSize(): void;
  getMemoryStoreSize(): number;
  setMemoryStoreSize(value: number): void;

  hasVaryByRemoteAddr(): boolean;
  clearVaryByRemoteAddr(): void;
  getVaryByRemoteAddr(): boolean;
  setVaryByRemoteAddr(value: boolean): void;

  hasVaryByUser(): boolean;
  clearVaryByUser(): void;
  getVaryByUser(): boolean;
  setVaryByUser(value: boolean): void;

  getVaryByHeader(): string;
  setVaryByHeader(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigRateLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigRateLimit): ConfigRateLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigRateLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigRateLimit;
  static deserializeBinaryFromReader(message: ConfigRateLimit, reader: jspb.BinaryReader): ConfigRateLimit;
}

export namespace ConfigRateLimit {
  export type AsObject = {
    enable: boolean,
    perSec: number,
    maxBurst: number,
    memoryStoreSize: number,
    varyByRemoteAddr: boolean,
    varyByUser: boolean,
    varyByHeader: string,
  }
}

export class ConfigPrivacy extends jspb.Message {
  hasShowEmailAddress(): boolean;
  clearShowEmailAddress(): void;
  getShowEmailAddress(): boolean;
  setShowEmailAddress(value: boolean): void;

  hasShowFullName(): boolean;
  clearShowFullName(): void;
  getShowFullName(): boolean;
  setShowFullName(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigPrivacy.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigPrivacy): ConfigPrivacy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigPrivacy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigPrivacy;
  static deserializeBinaryFromReader(message: ConfigPrivacy, reader: jspb.BinaryReader): ConfigPrivacy;
}

export namespace ConfigPrivacy {
  export type AsObject = {
    showEmailAddress: boolean,
    showFullName: boolean,
  }
}

export class ConfigSupport extends jspb.Message {
  hasTermsOfServiceLink(): boolean;
  clearTermsOfServiceLink(): void;
  getTermsOfServiceLink(): string;
  setTermsOfServiceLink(value: string): void;

  hasPrivacyPolicyLink(): boolean;
  clearPrivacyPolicyLink(): void;
  getPrivacyPolicyLink(): string;
  setPrivacyPolicyLink(value: string): void;

  hasAboutLink(): boolean;
  clearAboutLink(): void;
  getAboutLink(): string;
  setAboutLink(value: string): void;

  hasHelpLink(): boolean;
  clearHelpLink(): void;
  getHelpLink(): string;
  setHelpLink(value: string): void;

  hasReportAProblemLink(): boolean;
  clearReportAProblemLink(): void;
  getReportAProblemLink(): string;
  setReportAProblemLink(value: string): void;

  hasForgotPasswordLink(): boolean;
  clearForgotPasswordLink(): void;
  getForgotPasswordLink(): string;
  setForgotPasswordLink(value: string): void;

  hasSupportEmail(): boolean;
  clearSupportEmail(): void;
  getSupportEmail(): string;
  setSupportEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSupport.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSupport): ConfigSupport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigSupport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSupport;
  static deserializeBinaryFromReader(message: ConfigSupport, reader: jspb.BinaryReader): ConfigSupport;
}

export namespace ConfigSupport {
  export type AsObject = {
    termsOfServiceLink: string,
    privacyPolicyLink: string,
    aboutLink: string,
    helpLink: string,
    reportAProblemLink: string,
    forgotPasswordLink: string,
    supportEmail: string,
  }
}

export class ConfigLocalization extends jspb.Message {
  hasDefaultServerLocale(): boolean;
  clearDefaultServerLocale(): void;
  getDefaultServerLocale(): string;
  setDefaultServerLocale(value: string): void;

  hasDefaultClientLocale(): boolean;
  clearDefaultClientLocale(): void;
  getDefaultClientLocale(): string;
  setDefaultClientLocale(value: string): void;

  hasAvailableLocales(): boolean;
  clearAvailableLocales(): void;
  getAvailableLocales(): string;
  setAvailableLocales(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigLocalization.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigLocalization): ConfigLocalization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigLocalization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigLocalization;
  static deserializeBinaryFromReader(message: ConfigLocalization, reader: jspb.BinaryReader): ConfigLocalization;
}

export namespace ConfigLocalization {
  export type AsObject = {
    defaultServerLocale: string,
    defaultClientLocale: string,
    availableLocales: string,
  }
}

export class ConfigLdap extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasEnableSync(): boolean;
  clearEnableSync(): void;
  getEnableSync(): boolean;
  setEnableSync(value: boolean): void;

  hasLdapServer(): boolean;
  clearLdapServer(): void;
  getLdapServer(): string;
  setLdapServer(value: string): void;

  hasLdapPort(): boolean;
  clearLdapPort(): void;
  getLdapPort(): number;
  setLdapPort(value: number): void;

  hasConnectionSecurity(): boolean;
  clearConnectionSecurity(): void;
  getConnectionSecurity(): string;
  setConnectionSecurity(value: string): void;

  hasBaseDn(): boolean;
  clearBaseDn(): void;
  getBaseDn(): string;
  setBaseDn(value: string): void;

  hasBindUsername(): boolean;
  clearBindUsername(): void;
  getBindUsername(): string;
  setBindUsername(value: string): void;

  hasBindPassword(): boolean;
  clearBindPassword(): void;
  getBindPassword(): string;
  setBindPassword(value: string): void;

  hasMaximumLoginAttempts(): boolean;
  clearMaximumLoginAttempts(): void;
  getMaximumLoginAttempts(): number;
  setMaximumLoginAttempts(value: number): void;

  hasUserFilter(): boolean;
  clearUserFilter(): void;
  getUserFilter(): string;
  setUserFilter(value: string): void;

  hasGroupFilter(): boolean;
  clearGroupFilter(): void;
  getGroupFilter(): string;
  setGroupFilter(value: string): void;

  hasEnableAdminFilter(): boolean;
  clearEnableAdminFilter(): void;
  getEnableAdminFilter(): boolean;
  setEnableAdminFilter(value: boolean): void;

  hasAdminFilter(): boolean;
  clearAdminFilter(): void;
  getAdminFilter(): string;
  setAdminFilter(value: string): void;

  hasGroupDisplayNameAttribute(): boolean;
  clearGroupDisplayNameAttribute(): void;
  getGroupDisplayNameAttribute(): string;
  setGroupDisplayNameAttribute(value: string): void;

  hasGroupIdAttribute(): boolean;
  clearGroupIdAttribute(): void;
  getGroupIdAttribute(): string;
  setGroupIdAttribute(value: string): void;

  hasFirstNameAttribute(): boolean;
  clearFirstNameAttribute(): void;
  getFirstNameAttribute(): string;
  setFirstNameAttribute(value: string): void;

  hasLastNameAttribute(): boolean;
  clearLastNameAttribute(): void;
  getLastNameAttribute(): string;
  setLastNameAttribute(value: string): void;

  hasEmailAttribute(): boolean;
  clearEmailAttribute(): void;
  getEmailAttribute(): string;
  setEmailAttribute(value: string): void;

  hasUsernameAttribute(): boolean;
  clearUsernameAttribute(): void;
  getUsernameAttribute(): string;
  setUsernameAttribute(value: string): void;

  hasNicknameAttribute(): boolean;
  clearNicknameAttribute(): void;
  getNicknameAttribute(): string;
  setNicknameAttribute(value: string): void;

  hasIdAttribute(): boolean;
  clearIdAttribute(): void;
  getIdAttribute(): string;
  setIdAttribute(value: string): void;

  hasPositionAttribute(): boolean;
  clearPositionAttribute(): void;
  getPositionAttribute(): string;
  setPositionAttribute(value: string): void;

  hasLoginIdAttribute(): boolean;
  clearLoginIdAttribute(): void;
  getLoginIdAttribute(): string;
  setLoginIdAttribute(value: string): void;

  hasPictureAttribute(): boolean;
  clearPictureAttribute(): void;
  getPictureAttribute(): string;
  setPictureAttribute(value: string): void;

  hasSyncIntervalMinutes(): boolean;
  clearSyncIntervalMinutes(): void;
  getSyncIntervalMinutes(): number;
  setSyncIntervalMinutes(value: number): void;

  hasQueryTimeout(): boolean;
  clearQueryTimeout(): void;
  getQueryTimeout(): number;
  setQueryTimeout(value: number): void;

  hasMaxPageSize(): boolean;
  clearMaxPageSize(): void;
  getMaxPageSize(): number;
  setMaxPageSize(value: number): void;

  hasLoginFieldName(): boolean;
  clearLoginFieldName(): void;
  getLoginFieldName(): string;
  setLoginFieldName(value: string): void;

  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): void;
  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): void;

  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): void;
  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): void;

  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): void;
  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigLdap.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigLdap): ConfigLdap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigLdap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigLdap;
  static deserializeBinaryFromReader(message: ConfigLdap, reader: jspb.BinaryReader): ConfigLdap;
}

export namespace ConfigLdap {
  export type AsObject = {
    enable: boolean,
    enableSync: boolean,
    ldapServer: string,
    ldapPort: number,
    connectionSecurity: string,
    baseDn: string,
    bindUsername: string,
    bindPassword: string,
    maximumLoginAttempts: number,
    userFilter: string,
    groupFilter: string,
    enableAdminFilter: boolean,
    adminFilter: string,
    groupDisplayNameAttribute: string,
    groupIdAttribute: string,
    firstNameAttribute: string,
    lastNameAttribute: string,
    emailAttribute: string,
    usernameAttribute: string,
    nicknameAttribute: string,
    idAttribute: string,
    positionAttribute: string,
    loginIdAttribute: string,
    pictureAttribute: string,
    syncIntervalMinutes: number,
    queryTimeout: number,
    maxPageSize: number,
    loginFieldName: string,
    loginButtonColor: string,
    loginButtonBorderColor: string,
    loginButtonTextColor: string,
  }
}

export class ConfigSaml extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasEnableSyncWithLdap(): boolean;
  clearEnableSyncWithLdap(): void;
  getEnableSyncWithLdap(): boolean;
  setEnableSyncWithLdap(value: boolean): void;

  hasEnableSyncWithLdapIncludeAuth(): boolean;
  clearEnableSyncWithLdapIncludeAuth(): void;
  getEnableSyncWithLdapIncludeAuth(): boolean;
  setEnableSyncWithLdapIncludeAuth(value: boolean): void;

  hasIgnoreGuestsLdapSync(): boolean;
  clearIgnoreGuestsLdapSync(): void;
  getIgnoreGuestsLdapSync(): boolean;
  setIgnoreGuestsLdapSync(value: boolean): void;

  hasVerify(): boolean;
  clearVerify(): void;
  getVerify(): boolean;
  setVerify(value: boolean): void;

  hasEncrypt(): boolean;
  clearEncrypt(): void;
  getEncrypt(): boolean;
  setEncrypt(value: boolean): void;

  hasSignRequest(): boolean;
  clearSignRequest(): void;
  getSignRequest(): boolean;
  setSignRequest(value: boolean): void;

  hasIdpUrl(): boolean;
  clearIdpUrl(): void;
  getIdpUrl(): string;
  setIdpUrl(value: string): void;

  hasIdpDescriptorUrl(): boolean;
  clearIdpDescriptorUrl(): void;
  getIdpDescriptorUrl(): string;
  setIdpDescriptorUrl(value: string): void;

  hasIdpMetadataUrl(): boolean;
  clearIdpMetadataUrl(): void;
  getIdpMetadataUrl(): string;
  setIdpMetadataUrl(value: string): void;

  hasServiceProviderIdentifier(): boolean;
  clearServiceProviderIdentifier(): void;
  getServiceProviderIdentifier(): string;
  setServiceProviderIdentifier(value: string): void;

  hasAssertionConsumerServiceUrl(): boolean;
  clearAssertionConsumerServiceUrl(): void;
  getAssertionConsumerServiceUrl(): string;
  setAssertionConsumerServiceUrl(value: string): void;

  hasSignatureAlgorithm(): boolean;
  clearSignatureAlgorithm(): void;
  getSignatureAlgorithm(): string;
  setSignatureAlgorithm(value: string): void;

  hasCanonicalAlgorithm(): boolean;
  clearCanonicalAlgorithm(): void;
  getCanonicalAlgorithm(): string;
  setCanonicalAlgorithm(value: string): void;

  hasScopingIdpProviderId(): boolean;
  clearScopingIdpProviderId(): void;
  getScopingIdpProviderId(): string;
  setScopingIdpProviderId(value: string): void;

  hasScopingIdpName(): boolean;
  clearScopingIdpName(): void;
  getScopingIdpName(): string;
  setScopingIdpName(value: string): void;

  hasIdpCertificateFile(): boolean;
  clearIdpCertificateFile(): void;
  getIdpCertificateFile(): string;
  setIdpCertificateFile(value: string): void;

  hasPublicCertificateFile(): boolean;
  clearPublicCertificateFile(): void;
  getPublicCertificateFile(): string;
  setPublicCertificateFile(value: string): void;

  hasPrivateKeyFile(): boolean;
  clearPrivateKeyFile(): void;
  getPrivateKeyFile(): string;
  setPrivateKeyFile(value: string): void;

  hasIdAttribute(): boolean;
  clearIdAttribute(): void;
  getIdAttribute(): string;
  setIdAttribute(value: string): void;

  hasEnableAdminAttribute(): boolean;
  clearEnableAdminAttribute(): void;
  getEnableAdminAttribute(): boolean;
  setEnableAdminAttribute(value: boolean): void;

  hasAdminAttribute(): boolean;
  clearAdminAttribute(): void;
  getAdminAttribute(): string;
  setAdminAttribute(value: string): void;

  hasFirstNameAttribute(): boolean;
  clearFirstNameAttribute(): void;
  getFirstNameAttribute(): string;
  setFirstNameAttribute(value: string): void;

  hasLastNameAttribute(): boolean;
  clearLastNameAttribute(): void;
  getLastNameAttribute(): string;
  setLastNameAttribute(value: string): void;

  hasEmailAttribute(): boolean;
  clearEmailAttribute(): void;
  getEmailAttribute(): string;
  setEmailAttribute(value: string): void;

  hasUsernameAttribute(): boolean;
  clearUsernameAttribute(): void;
  getUsernameAttribute(): string;
  setUsernameAttribute(value: string): void;

  hasNicknameAttribute(): boolean;
  clearNicknameAttribute(): void;
  getNicknameAttribute(): string;
  setNicknameAttribute(value: string): void;

  hasLocaleAttribute(): boolean;
  clearLocaleAttribute(): void;
  getLocaleAttribute(): string;
  setLocaleAttribute(value: string): void;

  hasPositionAttribute(): boolean;
  clearPositionAttribute(): void;
  getPositionAttribute(): string;
  setPositionAttribute(value: string): void;

  hasLoginButtonText(): boolean;
  clearLoginButtonText(): void;
  getLoginButtonText(): string;
  setLoginButtonText(value: string): void;

  hasLoginButtonColor(): boolean;
  clearLoginButtonColor(): void;
  getLoginButtonColor(): string;
  setLoginButtonColor(value: string): void;

  hasLoginButtonBorderColor(): boolean;
  clearLoginButtonBorderColor(): void;
  getLoginButtonBorderColor(): string;
  setLoginButtonBorderColor(value: string): void;

  hasLoginButtonTextColor(): boolean;
  clearLoginButtonTextColor(): void;
  getLoginButtonTextColor(): string;
  setLoginButtonTextColor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigSaml.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigSaml): ConfigSaml.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigSaml, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigSaml;
  static deserializeBinaryFromReader(message: ConfigSaml, reader: jspb.BinaryReader): ConfigSaml;
}

export namespace ConfigSaml {
  export type AsObject = {
    enable: boolean,
    enableSyncWithLdap: boolean,
    enableSyncWithLdapIncludeAuth: boolean,
    ignoreGuestsLdapSync: boolean,
    verify: boolean,
    encrypt: boolean,
    signRequest: boolean,
    idpUrl: string,
    idpDescriptorUrl: string,
    idpMetadataUrl: string,
    serviceProviderIdentifier: string,
    assertionConsumerServiceUrl: string,
    signatureAlgorithm: string,
    canonicalAlgorithm: string,
    scopingIdpProviderId: string,
    scopingIdpName: string,
    idpCertificateFile: string,
    publicCertificateFile: string,
    privateKeyFile: string,
    idAttribute: string,
    enableAdminAttribute: boolean,
    adminAttribute: string,
    firstNameAttribute: string,
    lastNameAttribute: string,
    emailAttribute: string,
    usernameAttribute: string,
    nicknameAttribute: string,
    localeAttribute: string,
    positionAttribute: string,
    loginButtonText: string,
    loginButtonColor: string,
    loginButtonBorderColor: string,
    loginButtonTextColor: string,
  }
}

export class ConfigNativeApp extends jspb.Message {
  clearAppCustomUrlSchemesList(): void;
  getAppCustomUrlSchemesList(): Array<string>;
  setAppCustomUrlSchemesList(value: Array<string>): void;
  addAppCustomUrlSchemes(value: string, index?: number): string;

  hasAppDownloadLink(): boolean;
  clearAppDownloadLink(): void;
  getAppDownloadLink(): string;
  setAppDownloadLink(value: string): void;

  hasAndroidAppDownloadLink(): boolean;
  clearAndroidAppDownloadLink(): void;
  getAndroidAppDownloadLink(): string;
  setAndroidAppDownloadLink(value: string): void;

  hasIosAppDownloadLink(): boolean;
  clearIosAppDownloadLink(): void;
  getIosAppDownloadLink(): string;
  setIosAppDownloadLink(value: string): void;

  hasMobileExternalBrowser(): boolean;
  clearMobileExternalBrowser(): void;
  getMobileExternalBrowser(): boolean;
  setMobileExternalBrowser(value: boolean): void;

  hasMobileEnableBiometrics(): boolean;
  clearMobileEnableBiometrics(): void;
  getMobileEnableBiometrics(): boolean;
  setMobileEnableBiometrics(value: boolean): void;

  hasMobilePreventScreenCapture(): boolean;
  clearMobilePreventScreenCapture(): void;
  getMobilePreventScreenCapture(): boolean;
  setMobilePreventScreenCapture(value: boolean): void;

  hasMobileJailbreakProtection(): boolean;
  clearMobileJailbreakProtection(): void;
  getMobileJailbreakProtection(): boolean;
  setMobileJailbreakProtection(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigNativeApp.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigNativeApp): ConfigNativeApp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigNativeApp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigNativeApp;
  static deserializeBinaryFromReader(message: ConfigNativeApp, reader: jspb.BinaryReader): ConfigNativeApp;
}

export namespace ConfigNativeApp {
  export type AsObject = {
    appCustomUrlSchemesList: Array<string>,
    appDownloadLink: string,
    androidAppDownloadLink: string,
    iosAppDownloadLink: string,
    mobileExternalBrowser: boolean,
    mobileEnableBiometrics: boolean,
    mobilePreventScreenCapture: boolean,
    mobileJailbreakProtection: boolean,
  }
}

export class ConfigMeilisearch extends jspb.Message {
  hasServerUrl(): boolean;
  clearServerUrl(): void;
  getServerUrl(): string;
  setServerUrl(value: string): void;

  hasMasterKey(): boolean;
  clearMasterKey(): void;
  getMasterKey(): string;
  setMasterKey(value: string): void;

  hasEnableIndexing(): boolean;
  clearEnableIndexing(): void;
  getEnableIndexing(): boolean;
  setEnableIndexing(value: boolean): void;

  hasEnableSearching(): boolean;
  clearEnableSearching(): void;
  getEnableSearching(): boolean;
  setEnableSearching(value: boolean): void;

  hasEnableAutocomplete(): boolean;
  clearEnableAutocomplete(): void;
  getEnableAutocomplete(): boolean;
  setEnableAutocomplete(value: boolean): void;

  hasBatchSize(): boolean;
  clearBatchSize(): void;
  getBatchSize(): number;
  setBatchSize(value: number): void;

  hasRequestTimeoutSeconds(): boolean;
  clearRequestTimeoutSeconds(): void;
  getRequestTimeoutSeconds(): number;
  setRequestTimeoutSeconds(value: number): void;

  hasIndexPrefix(): boolean;
  clearIndexPrefix(): void;
  getIndexPrefix(): string;
  setIndexPrefix(value: string): void;

  hasSearchCutoffMs(): boolean;
  clearSearchCutoffMs(): void;
  getSearchCutoffMs(): number;
  setSearchCutoffMs(value: number): void;

  hasEnableTypoTolerance(): boolean;
  clearEnableTypoTolerance(): void;
  getEnableTypoTolerance(): boolean;
  setEnableTypoTolerance(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigMeilisearch.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigMeilisearch): ConfigMeilisearch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigMeilisearch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigMeilisearch;
  static deserializeBinaryFromReader(message: ConfigMeilisearch, reader: jspb.BinaryReader): ConfigMeilisearch;
}

export namespace ConfigMeilisearch {
  export type AsObject = {
    serverUrl: string,
    masterKey: string,
    enableIndexing: boolean,
    enableSearching: boolean,
    enableAutocomplete: boolean,
    batchSize: number,
    requestTimeoutSeconds: number,
    indexPrefix: string,
    searchCutoffMs: number,
    enableTypoTolerance: boolean,
  }
}

export class ConfigBleve extends jspb.Message {
  hasIndexDir(): boolean;
  clearIndexDir(): void;
  getIndexDir(): string;
  setIndexDir(value: string): void;

  hasEnableIndexing(): boolean;
  clearEnableIndexing(): void;
  getEnableIndexing(): boolean;
  setEnableIndexing(value: boolean): void;

  hasEnableSearching(): boolean;
  clearEnableSearching(): void;
  getEnableSearching(): boolean;
  setEnableSearching(value: boolean): void;

  hasEnableAutocomplete(): boolean;
  clearEnableAutocomplete(): void;
  getEnableAutocomplete(): boolean;
  setEnableAutocomplete(value: boolean): void;

  hasBulkIndexingTimeWindowSeconds(): boolean;
  clearBulkIndexingTimeWindowSeconds(): void;
  getBulkIndexingTimeWindowSeconds(): number;
  setBulkIndexingTimeWindowSeconds(value: number): void;

  hasBatchSize(): boolean;
  clearBatchSize(): void;
  getBatchSize(): number;
  setBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigBleve.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigBleve): ConfigBleve.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigBleve, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigBleve;
  static deserializeBinaryFromReader(message: ConfigBleve, reader: jspb.BinaryReader): ConfigBleve;
}

export namespace ConfigBleve {
  export type AsObject = {
    indexDir: string,
    enableIndexing: boolean,
    enableSearching: boolean,
    enableAutocomplete: boolean,
    bulkIndexingTimeWindowSeconds: number,
    batchSize: number,
  }
}

export class ConfigDataRetention extends jspb.Message {
  hasEnableMessageDeletion(): boolean;
  clearEnableMessageDeletion(): void;
  getEnableMessageDeletion(): boolean;
  setEnableMessageDeletion(value: boolean): void;

  hasEnableFileDeletion(): boolean;
  clearEnableFileDeletion(): void;
  getEnableFileDeletion(): boolean;
  setEnableFileDeletion(value: boolean): void;

  hasEnableBoardsDeletion(): boolean;
  clearEnableBoardsDeletion(): void;
  getEnableBoardsDeletion(): boolean;
  setEnableBoardsDeletion(value: boolean): void;

  hasMessageRetentionHours(): boolean;
  clearMessageRetentionHours(): void;
  getMessageRetentionHours(): number;
  setMessageRetentionHours(value: number): void;

  hasFileRetentionHours(): boolean;
  clearFileRetentionHours(): void;
  getFileRetentionHours(): number;
  setFileRetentionHours(value: number): void;

  hasBoardsRetentionDays(): boolean;
  clearBoardsRetentionDays(): void;
  getBoardsRetentionDays(): number;
  setBoardsRetentionDays(value: number): void;

  hasDeletionJobStartTime(): boolean;
  clearDeletionJobStartTime(): void;
  getDeletionJobStartTime(): string;
  setDeletionJobStartTime(value: string): void;

  hasBatchSize(): boolean;
  clearBatchSize(): void;
  getBatchSize(): number;
  setBatchSize(value: number): void;

  hasTimeBetweenBatchesMilliseconds(): boolean;
  clearTimeBetweenBatchesMilliseconds(): void;
  getTimeBetweenBatchesMilliseconds(): number;
  setTimeBetweenBatchesMilliseconds(value: number): void;

  hasRetentionIdsBatchSize(): boolean;
  clearRetentionIdsBatchSize(): void;
  getRetentionIdsBatchSize(): number;
  setRetentionIdsBatchSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigDataRetention.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigDataRetention): ConfigDataRetention.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigDataRetention, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigDataRetention;
  static deserializeBinaryFromReader(message: ConfigDataRetention, reader: jspb.BinaryReader): ConfigDataRetention;
}

export namespace ConfigDataRetention {
  export type AsObject = {
    enableMessageDeletion: boolean,
    enableFileDeletion: boolean,
    enableBoardsDeletion: boolean,
    messageRetentionHours: number,
    fileRetentionHours: number,
    boardsRetentionDays: number,
    deletionJobStartTime: string,
    batchSize: number,
    timeBetweenBatchesMilliseconds: number,
    retentionIdsBatchSize: number,
  }
}

export class ConfigImageProxy extends jspb.Message {
  hasEnable(): boolean;
  clearEnable(): void;
  getEnable(): boolean;
  setEnable(value: boolean): void;

  hasImageProxyType(): boolean;
  clearImageProxyType(): void;
  getImageProxyType(): string;
  setImageProxyType(value: string): void;

  hasRemoteImageProxyUrl(): boolean;
  clearRemoteImageProxyUrl(): void;
  getRemoteImageProxyUrl(): string;
  setRemoteImageProxyUrl(value: string): void;

  hasRemoteImageProxyOptions(): boolean;
  clearRemoteImageProxyOptions(): void;
  getRemoteImageProxyOptions(): string;
  setRemoteImageProxyOptions(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigImageProxy.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigImageProxy): ConfigImageProxy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigImageProxy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigImageProxy;
  static deserializeBinaryFromReader(message: ConfigImageProxy, reader: jspb.BinaryReader): ConfigImageProxy;
}

export namespace ConfigImageProxy {
  export type AsObject = {
    enable: boolean,
    imageProxyType: string,
    remoteImageProxyUrl: string,
    remoteImageProxyOptions: string,
  }
}

export class Config extends jspb.Message {
  hasMain(): boolean;
  clearMain(): void;
  getMain(): ConfigMain | undefined;
  setMain(value?: ConfigMain): void;

  hasServices(): boolean;
  clearServices(): void;
  getServices(): ConfigServices | undefined;
  setServices(value?: ConfigServices): void;

  hasSecurity(): boolean;
  clearSecurity(): void;
  getSecurity(): ConfigSecurity | undefined;
  setSecurity(value?: ConfigSecurity): void;

  hasCache(): boolean;
  clearCache(): void;
  getCache(): CacheConfig | undefined;
  setCache(value?: CacheConfig): void;

  hasMetrics(): boolean;
  clearMetrics(): void;
  getMetrics(): ConfigMetrics | undefined;
  setMetrics(value?: ConfigMetrics): void;

  hasSso(): boolean;
  clearSso(): void;
  getSso(): ConfigSSO | undefined;
  setSso(value?: ConfigSSO): void;

  hasSql(): boolean;
  clearSql(): void;
  getSql(): ConfigSql | undefined;
  setSql(value?: ConfigSql): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): ConfigPassword | undefined;
  setPassword(value?: ConfigPassword): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): ConfigFile | undefined;
  setFile(value?: ConfigFile): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): ConfigEmail | undefined;
  setEmail(value?: ConfigEmail): void;

  hasRateLimit(): boolean;
  clearRateLimit(): void;
  getRateLimit(): ConfigRateLimit | undefined;
  setRateLimit(value?: ConfigRateLimit): void;

  hasPrivacy(): boolean;
  clearPrivacy(): void;
  getPrivacy(): ConfigPrivacy | undefined;
  setPrivacy(value?: ConfigPrivacy): void;

  hasSupport(): boolean;
  clearSupport(): void;
  getSupport(): ConfigSupport | undefined;
  setSupport(value?: ConfigSupport): void;

  hasLocalization(): boolean;
  clearLocalization(): void;
  getLocalization(): ConfigLocalization | undefined;
  setLocalization(value?: ConfigLocalization): void;

  hasLdap(): boolean;
  clearLdap(): void;
  getLdap(): ConfigLdap | undefined;
  setLdap(value?: ConfigLdap): void;

  hasSaml(): boolean;
  clearSaml(): void;
  getSaml(): ConfigSaml | undefined;
  setSaml(value?: ConfigSaml): void;

  hasNativeApp(): boolean;
  clearNativeApp(): void;
  getNativeApp(): ConfigNativeApp | undefined;
  setNativeApp(value?: ConfigNativeApp): void;

  hasMeilisearch(): boolean;
  clearMeilisearch(): void;
  getMeilisearch(): ConfigMeilisearch | undefined;
  setMeilisearch(value?: ConfigMeilisearch): void;

  hasBleve(): boolean;
  clearBleve(): void;
  getBleve(): ConfigBleve | undefined;
  setBleve(value?: ConfigBleve): void;

  hasDataRetention(): boolean;
  clearDataRetention(): void;
  getDataRetention(): ConfigDataRetention | undefined;
  setDataRetention(value?: ConfigDataRetention): void;

  hasImageProxy(): boolean;
  clearImageProxy(): void;
  getImageProxy(): ConfigImageProxy | undefined;
  setImageProxy(value?: ConfigImageProxy): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Config.AsObject;
  static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Config;
  static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
  export type AsObject = {
    main?: ConfigMain.AsObject,
    services?: ConfigServices.AsObject,
    security?: ConfigSecurity.AsObject,
    cache?: CacheConfig.AsObject,
    metrics?: ConfigMetrics.AsObject,
    sso?: ConfigSSO.AsObject,
    sql?: ConfigSql.AsObject,
    password?: ConfigPassword.AsObject,
    file?: ConfigFile.AsObject,
    email?: ConfigEmail.AsObject,
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

export class ConfigGetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetRequest): ConfigGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetRequest;
  static deserializeBinaryFromReader(message: ConfigGetRequest, reader: jspb.BinaryReader): ConfigGetRequest;
}

export namespace ConfigGetRequest {
  export type AsObject = {
  }
}

export class ConfigGetResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Config | undefined;
  setData(value?: Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResponseCase(): ConfigGetResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigGetResponse): ConfigGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigGetResponse;
  static deserializeBinaryFromReader(message: ConfigGetResponse, reader: jspb.BinaryReader): ConfigGetResponse;
}

export namespace ConfigGetResponse {
  export type AsObject = {
    data?: Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigUpdateRequest extends jspb.Message {
  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): Config | undefined;
  setConfig(value?: Config): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateRequest): ConfigUpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigUpdateRequest;
  static deserializeBinaryFromReader(message: ConfigUpdateRequest, reader: jspb.BinaryReader): ConfigUpdateRequest;
}

export namespace ConfigUpdateRequest {
  export type AsObject = {
    config?: Config.AsObject,
  }
}

export class ConfigUpdateResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Config | undefined;
  setData(value?: Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResponseCase(): ConfigUpdateResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigUpdateResponse): ConfigUpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigUpdateResponse;
  static deserializeBinaryFromReader(message: ConfigUpdateResponse, reader: jspb.BinaryReader): ConfigUpdateResponse;
}

export namespace ConfigUpdateResponse {
  export type AsObject = {
    data?: Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigListenerResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): Config | undefined;
  setData(value?: Config): void;

  hasError(): boolean;
  clearError(): void;
  getError(): common_v1_error_pb.AppError | undefined;
  setError(value?: common_v1_error_pb.AppError): void;

  getResponseCase(): ConfigListenerResponse.ResponseCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerResponse): ConfigListenerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigListenerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigListenerResponse;
  static deserializeBinaryFromReader(message: ConfigListenerResponse, reader: jspb.BinaryReader): ConfigListenerResponse;
}

export namespace ConfigListenerResponse {
  export type AsObject = {
    data?: Config.AsObject,
    error?: common_v1_error_pb.AppError.AsObject,
  }

  export enum ResponseCase {
    RESPONSE_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class ConfigListenerRequest extends jspb.Message {
  getClientId(): string;
  setClientId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfigListenerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfigListenerRequest): ConfigListenerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfigListenerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfigListenerRequest;
  static deserializeBinaryFromReader(message: ConfigListenerRequest, reader: jspb.BinaryReader): ConfigListenerRequest;
}

export namespace ConfigListenerRequest {
  export type AsObject = {
    clientId: string,
  }
}

