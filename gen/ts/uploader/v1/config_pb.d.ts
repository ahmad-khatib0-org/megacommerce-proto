// package: uploader.v1
// file: uploader/v1/config.proto

import * as jspb from "google-protobuf";

export class ExtraKafkaOptions extends jspb.Message {
  getOptsMap(): jspb.Map<string, string>;
  clearOptsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraKafkaOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraKafkaOptions): ExtraKafkaOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtraKafkaOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtraKafkaOptions;
  static deserializeBinaryFromReader(message: ExtraKafkaOptions, reader: jspb.BinaryReader): ExtraKafkaOptions;
}

export namespace ExtraKafkaOptions {
  export type AsObject = {
    optsMap: Array<[string, string]>,
  }
}

export class DataStorageOptions extends jspb.Message {
  getStorage(): AvailableDataStoragesMap[keyof AvailableDataStoragesMap];
  setStorage(value: AvailableDataStoragesMap[keyof AvailableDataStoragesMap]): void;

  getDataDir(): string;
  setDataDir(value: string): void;

  getDirStructure(): string;
  setDirStructure(value: string): void;

  getForceFsync(): boolean;
  setForceFsync(value: boolean): void;

  hasS3Bucket(): boolean;
  clearS3Bucket(): void;
  getS3Bucket(): string;
  setS3Bucket(value: string): void;

  hasS3Region(): boolean;
  clearS3Region(): void;
  getS3Region(): string;
  setS3Region(value: string): void;

  hasS3AccessKey(): boolean;
  clearS3AccessKey(): void;
  getS3AccessKey(): string;
  setS3AccessKey(value: string): void;

  hasS3AccessKeyPath(): boolean;
  clearS3AccessKeyPath(): void;
  getS3AccessKeyPath(): string;
  setS3AccessKeyPath(value: string): void;

  hasS3SecretKey(): boolean;
  clearS3SecretKey(): void;
  getS3SecretKey(): string;
  setS3SecretKey(value: string): void;

  hasS3SecretKeyPath(): boolean;
  clearS3SecretKeyPath(): void;
  getS3SecretKeyPath(): string;
  setS3SecretKeyPath(value: string): void;

  hasS3Url(): boolean;
  clearS3Url(): void;
  getS3Url(): string;
  setS3Url(value: string): void;

  getS3ForcePathStyle(): boolean;
  setS3ForcePathStyle(value: boolean): void;

  hasS3SecurityToken(): boolean;
  clearS3SecurityToken(): void;
  getS3SecurityToken(): string;
  setS3SecurityToken(value: string): void;

  hasS3SessionToken(): boolean;
  clearS3SessionToken(): void;
  getS3SessionToken(): string;
  setS3SessionToken(value: string): void;

  hasS3Profile(): boolean;
  clearS3Profile(): void;
  getS3Profile(): string;
  setS3Profile(value: string): void;

  hasS3Headers(): boolean;
  clearS3Headers(): void;
  getS3Headers(): string;
  setS3Headers(value: string): void;

  getS3ConcatConcurrentDownloads(): number;
  setS3ConcatConcurrentDownloads(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataStorageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DataStorageOptions): DataStorageOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataStorageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataStorageOptions;
  static deserializeBinaryFromReader(message: DataStorageOptions, reader: jspb.BinaryReader): DataStorageOptions;
}

export namespace DataStorageOptions {
  export type AsObject = {
    storage: AvailableDataStoragesMap[keyof AvailableDataStoragesMap],
    dataDir: string,
    dirStructure: string,
    forceFsync: boolean,
    s3Bucket: string,
    s3Region: string,
    s3AccessKey: string,
    s3AccessKeyPath: string,
    s3SecretKey: string,
    s3SecretKeyPath: string,
    s3Url: string,
    s3ForcePathStyle: boolean,
    s3SecurityToken: string,
    s3SessionToken: string,
    s3Profile: string,
    s3Headers: string,
    s3ConcatConcurrentDownloads: number,
  }
}

export class InfoStoreOptions extends jspb.Message {
  getInfoStorage(): AvailableInfoStoragesMap[keyof AvailableInfoStoragesMap];
  setInfoStorage(value: AvailableInfoStoragesMap[keyof AvailableInfoStoragesMap]): void;

  getInfoDir(): string;
  setInfoDir(value: string): void;

  hasInfoDbDsn(): boolean;
  clearInfoDbDsn(): void;
  getInfoDbDsn(): string;
  setInfoDbDsn(value: string): void;

  hasRedisInfoExpiration(): boolean;
  clearRedisInfoExpiration(): void;
  getRedisInfoExpiration(): number;
  setRedisInfoExpiration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoStoreOptions.AsObject;
  static toObject(includeInstance: boolean, msg: InfoStoreOptions): InfoStoreOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfoStoreOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoStoreOptions;
  static deserializeBinaryFromReader(message: InfoStoreOptions, reader: jspb.BinaryReader): InfoStoreOptions;
}

export namespace InfoStoreOptions {
  export type AsObject = {
    infoStorage: AvailableInfoStoragesMap[keyof AvailableInfoStoragesMap],
    infoDir: string,
    infoDbDsn: string,
    redisInfoExpiration: number,
  }
}

export class AMQPHooksOptions extends jspb.Message {
  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): string;
  setUrl(value: string): void;

  getDeclareExchange(): boolean;
  setDeclareExchange(value: boolean): void;

  getDeclareQueues(): boolean;
  setDeclareQueues(value: boolean): void;

  getDurableExchange(): boolean;
  setDurableExchange(value: boolean): void;

  getDurableQueues(): boolean;
  setDurableQueues(value: boolean): void;

  getCelery(): boolean;
  setCelery(value: boolean): void;

  getExchange(): string;
  setExchange(value: string): void;

  getExchangeKind(): string;
  setExchangeKind(value: string): void;

  hasRoutingKey(): boolean;
  clearRoutingKey(): void;
  getRoutingKey(): string;
  setRoutingKey(value: string): void;

  getQueuesPrefix(): string;
  setQueuesPrefix(value: string): void;

  getConnectionPoolSize(): number;
  setConnectionPoolSize(value: number): void;

  getChannelPoolSize(): number;
  setChannelPoolSize(value: number): void;

  hasIdleConnectionTimeout(): boolean;
  clearIdleConnectionTimeout(): void;
  getIdleConnectionTimeout(): number;
  setIdleConnectionTimeout(value: number): void;

  hasIdleChannelsTimeout(): boolean;
  clearIdleChannelsTimeout(): void;
  getIdleChannelsTimeout(): number;
  setIdleChannelsTimeout(value: number): void;

  getAutoDelete(): boolean;
  setAutoDelete(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AMQPHooksOptions.AsObject;
  static toObject(includeInstance: boolean, msg: AMQPHooksOptions): AMQPHooksOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AMQPHooksOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AMQPHooksOptions;
  static deserializeBinaryFromReader(message: AMQPHooksOptions, reader: jspb.BinaryReader): AMQPHooksOptions;
}

export namespace AMQPHooksOptions {
  export type AsObject = {
    url: string,
    declareExchange: boolean,
    declareQueues: boolean,
    durableExchange: boolean,
    durableQueues: boolean,
    celery: boolean,
    exchange: string,
    exchangeKind: string,
    routingKey: string,
    queuesPrefix: string,
    connectionPoolSize: number,
    channelPoolSize: number,
    idleConnectionTimeout: number,
    idleChannelsTimeout: number,
    autoDelete: boolean,
  }
}

export class KafkaHookOptions extends jspb.Message {
  hasUrls(): boolean;
  clearUrls(): void;
  getUrls(): string;
  setUrls(value: string): void;

  hasClientId(): boolean;
  clearClientId(): void;
  getClientId(): string;
  setClientId(value: string): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): string;
  setTopic(value: string): void;

  hasPrefix(): boolean;
  clearPrefix(): void;
  getPrefix(): string;
  setPrefix(value: string): void;

  hasRequiredAcks(): boolean;
  clearRequiredAcks(): void;
  getRequiredAcks(): string;
  setRequiredAcks(value: string): void;

  hasCompression(): boolean;
  clearCompression(): void;
  getCompression(): string;
  setCompression(value: string): void;

  hasIdleTimeout(): boolean;
  clearIdleTimeout(): void;
  getIdleTimeout(): number;
  setIdleTimeout(value: number): void;

  hasSendTimeout(): boolean;
  clearSendTimeout(): void;
  getSendTimeout(): number;
  setSendTimeout(value: number): void;

  hasExtraKafkaOpts(): boolean;
  clearExtraKafkaOpts(): void;
  getExtraKafkaOpts(): ExtraKafkaOptions | undefined;
  setExtraKafkaOpts(value?: ExtraKafkaOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KafkaHookOptions.AsObject;
  static toObject(includeInstance: boolean, msg: KafkaHookOptions): KafkaHookOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KafkaHookOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KafkaHookOptions;
  static deserializeBinaryFromReader(message: KafkaHookOptions, reader: jspb.BinaryReader): KafkaHookOptions;
}

export namespace KafkaHookOptions {
  export type AsObject = {
    urls: string,
    clientId: string,
    topic: string,
    prefix: string,
    requiredAcks: string,
    compression: string,
    idleTimeout: number,
    sendTimeout: number,
    extraKafkaOpts?: ExtraKafkaOptions.AsObject,
  }
}

export class NatsHookOptions extends jspb.Message {
  clearUrlsList(): void;
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): void;
  addUrls(value: string, index?: number): string;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): string;
  setSubject(value: string): void;

  hasPrefix(): boolean;
  clearPrefix(): void;
  getPrefix(): string;
  setPrefix(value: string): void;

  getWaitForReplies(): boolean;
  setWaitForReplies(value: boolean): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string;
  setUsername(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string;
  setPassword(value: string): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NatsHookOptions.AsObject;
  static toObject(includeInstance: boolean, msg: NatsHookOptions): NatsHookOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NatsHookOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NatsHookOptions;
  static deserializeBinaryFromReader(message: NatsHookOptions, reader: jspb.BinaryReader): NatsHookOptions;
}

export namespace NatsHookOptions {
  export type AsObject = {
    urlsList: Array<string>,
    subject: string,
    prefix: string,
    waitForReplies: boolean,
    username: string,
    password: string,
    token: string,
  }
}

export class NotificationsOptions extends jspb.Message {
  getHooksFormat(): FormatMap[keyof FormatMap];
  setHooksFormat(value: FormatMap[keyof FormatMap]): void;

  clearHooksList(): void;
  getHooksList(): Array<HookMap[keyof HookMap]>;
  setHooksList(value: Array<HookMap[keyof HookMap]>): void;
  addHooks(value: HookMap[keyof HookMap], index?: number): HookMap[keyof HookMap];

  getBehindProxy(): boolean;
  setBehindProxy(value: boolean): void;

  clearHooksHttpUrlsList(): void;
  getHooksHttpUrlsList(): Array<string>;
  setHooksHttpUrlsList(value: Array<string>): void;
  addHooksHttpUrls(value: string, index?: number): string;

  hasHttpHookTimeout(): boolean;
  clearHttpHookTimeout(): void;
  getHttpHookTimeout(): number;
  setHttpHookTimeout(value: number): void;

  clearHooksHttpProxyHeadersList(): void;
  getHooksHttpProxyHeadersList(): Array<string>;
  setHooksHttpProxyHeadersList(value: Array<string>): void;
  addHooksHttpProxyHeaders(value: string, index?: number): string;

  hasHooksDir(): boolean;
  clearHooksDir(): void;
  getHooksDir(): string;
  setHooksDir(value: string): void;

  hasHooksFile(): boolean;
  clearHooksFile(): void;
  getHooksFile(): string;
  setHooksFile(value: string): void;

  hasAmqpHookOpts(): boolean;
  clearAmqpHookOpts(): void;
  getAmqpHookOpts(): AMQPHooksOptions | undefined;
  setAmqpHookOpts(value?: AMQPHooksOptions): void;

  hasKafkaHookOpts(): boolean;
  clearKafkaHookOpts(): void;
  getKafkaHookOpts(): KafkaHookOptions | undefined;
  setKafkaHookOpts(value?: KafkaHookOptions): void;

  hasNatsHookOpts(): boolean;
  clearNatsHookOpts(): void;
  getNatsHookOpts(): NatsHookOptions | undefined;
  setNatsHookOpts(value?: NatsHookOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationsOptions.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationsOptions): NotificationsOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NotificationsOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationsOptions;
  static deserializeBinaryFromReader(message: NotificationsOptions, reader: jspb.BinaryReader): NotificationsOptions;
}

export namespace NotificationsOptions {
  export type AsObject = {
    hooksFormat: FormatMap[keyof FormatMap],
    hooksList: Array<HookMap[keyof HookMap]>,
    behindProxy: boolean,
    hooksHttpUrlsList: Array<string>,
    httpHookTimeout: number,
    hooksHttpProxyHeadersList: Array<string>,
    hooksDir: string,
    hooksFile: string,
    amqpHookOpts?: AMQPHooksOptions.AsObject,
    kafkaHookOpts?: KafkaHookOptions.AsObject,
    natsHookOpts?: NatsHookOptions.AsObject,
  }
}

export class SentryOptions extends jspb.Message {
  hasDsn(): boolean;
  clearDsn(): void;
  getDsn(): string;
  setDsn(value: string): void;

  getSampleRate(): number;
  setSampleRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SentryOptions): SentryOptions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SentryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentryOptions;
  static deserializeBinaryFromReader(message: SentryOptions, reader: jspb.BinaryReader): SentryOptions;
}

export namespace SentryOptions {
  export type AsObject = {
    dsn: string,
    sampleRate: number,
  }
}

export class RustusConf extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getDisableHealthAccessLog(): boolean;
  setDisableHealthAccessLog(value: boolean): void;

  getUrl(): string;
  setUrl(value: string): void;

  clearCorsList(): void;
  getCorsList(): Array<string>;
  setCorsList(value: Array<string>): void;
  addCors(value: string, index?: number): string;

  getMaxBodySize(): number;
  setMaxBodySize(value: number): void;

  getLogLevel(): string;
  setLogLevel(value: string): void;

  hasWorkers(): boolean;
  clearWorkers(): void;
  getWorkers(): number;
  setWorkers(value: number): void;

  clearTusExtensionsList(): void;
  getTusExtensionsList(): Array<ExtensionsMap[keyof ExtensionsMap]>;
  setTusExtensionsList(value: Array<ExtensionsMap[keyof ExtensionsMap]>): void;
  addTusExtensions(value: ExtensionsMap[keyof ExtensionsMap], index?: number): ExtensionsMap[keyof ExtensionsMap];

  getAllowEmpty(): boolean;
  setAllowEmpty(value: boolean): void;

  getRemoveParts(): boolean;
  setRemoveParts(value: boolean): void;

  hasMaxFileSize(): boolean;
  clearMaxFileSize(): void;
  getMaxFileSize(): number;
  setMaxFileSize(value: number): void;

  hasStorageOpts(): boolean;
  clearStorageOpts(): void;
  getStorageOpts(): DataStorageOptions | undefined;
  setStorageOpts(value?: DataStorageOptions): void;

  hasInfoStorageOpts(): boolean;
  clearInfoStorageOpts(): void;
  getInfoStorageOpts(): InfoStoreOptions | undefined;
  setInfoStorageOpts(value?: InfoStoreOptions): void;

  hasNotificationOpts(): boolean;
  clearNotificationOpts(): void;
  getNotificationOpts(): NotificationsOptions | undefined;
  setNotificationOpts(value?: NotificationsOptions): void;

  hasSentryOpts(): boolean;
  clearSentryOpts(): void;
  getSentryOpts(): SentryOptions | undefined;
  setSentryOpts(value?: SentryOptions): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RustusConf.AsObject;
  static toObject(includeInstance: boolean, msg: RustusConf): RustusConf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RustusConf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RustusConf;
  static deserializeBinaryFromReader(message: RustusConf, reader: jspb.BinaryReader): RustusConf;
}

export namespace RustusConf {
  export type AsObject = {
    host: string,
    port: number,
    disableHealthAccessLog: boolean,
    url: string,
    corsList: Array<string>,
    maxBodySize: number,
    logLevel: string,
    workers: number,
    tusExtensionsList: Array<ExtensionsMap[keyof ExtensionsMap]>,
    allowEmpty: boolean,
    removeParts: boolean,
    maxFileSize: number,
    storageOpts?: DataStorageOptions.AsObject,
    infoStorageOpts?: InfoStoreOptions.AsObject,
    notificationOpts?: NotificationsOptions.AsObject,
    sentryOpts?: SentryOptions.AsObject,
  }
}

export interface AvailableDataStoragesMap {
  FILE_STORAGE: 0;
  HYBRID_S3: 1;
  S3: 2;
}

export const AvailableDataStorages: AvailableDataStoragesMap;

export interface AvailableInfoStoragesMap {
  FILES: 0;
  REDIS: 1;
}

export const AvailableInfoStorages: AvailableInfoStoragesMap;

export interface FormatMap {
  DEFAULT: 0;
  TUSD: 1;
  V2: 2;
}

export const Format: FormatMap;

export interface HookMap {
  PRE_CREATE: 0;
  POST_CREATE: 1;
  POST_RECEIVE: 2;
  PRE_TERMINATE: 3;
  POST_TERMINATE: 4;
  POST_FINISH: 5;
}

export const Hook: HookMap;

export interface ExtensionsMap {
  GETTING: 0;
  CREATION: 1;
  TERMINATION: 2;
  CREATION_WITH_UPLOAD: 3;
  CREATION_DEFER_LENGTH: 4;
  CONCATENATION: 5;
  CHECKSUM: 6;
}

export const Extensions: ExtensionsMap;

