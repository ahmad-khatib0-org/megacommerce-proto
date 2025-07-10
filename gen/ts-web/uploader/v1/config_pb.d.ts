import * as jspb from 'google-protobuf'



export class ExtraKafkaOptions extends jspb.Message {
  getOptsMap(): jspb.Map<string, string>;
  clearOptsMap(): ExtraKafkaOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtraKafkaOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ExtraKafkaOptions): ExtraKafkaOptions.AsObject;
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
  getStorage(): AvailableDataStorages;
  setStorage(value: AvailableDataStorages): DataStorageOptions;

  getDataDir(): string;
  setDataDir(value: string): DataStorageOptions;

  getDirStructure(): string;
  setDirStructure(value: string): DataStorageOptions;

  getForceFsync(): boolean;
  setForceFsync(value: boolean): DataStorageOptions;

  getS3Bucket(): string;
  setS3Bucket(value: string): DataStorageOptions;
  hasS3Bucket(): boolean;
  clearS3Bucket(): DataStorageOptions;

  getS3Region(): string;
  setS3Region(value: string): DataStorageOptions;
  hasS3Region(): boolean;
  clearS3Region(): DataStorageOptions;

  getS3AccessKey(): string;
  setS3AccessKey(value: string): DataStorageOptions;
  hasS3AccessKey(): boolean;
  clearS3AccessKey(): DataStorageOptions;

  getS3AccessKeyPath(): string;
  setS3AccessKeyPath(value: string): DataStorageOptions;
  hasS3AccessKeyPath(): boolean;
  clearS3AccessKeyPath(): DataStorageOptions;

  getS3SecretKey(): string;
  setS3SecretKey(value: string): DataStorageOptions;
  hasS3SecretKey(): boolean;
  clearS3SecretKey(): DataStorageOptions;

  getS3SecretKeyPath(): string;
  setS3SecretKeyPath(value: string): DataStorageOptions;
  hasS3SecretKeyPath(): boolean;
  clearS3SecretKeyPath(): DataStorageOptions;

  getS3Url(): string;
  setS3Url(value: string): DataStorageOptions;
  hasS3Url(): boolean;
  clearS3Url(): DataStorageOptions;

  getS3ForcePathStyle(): boolean;
  setS3ForcePathStyle(value: boolean): DataStorageOptions;

  getS3SecurityToken(): string;
  setS3SecurityToken(value: string): DataStorageOptions;
  hasS3SecurityToken(): boolean;
  clearS3SecurityToken(): DataStorageOptions;

  getS3SessionToken(): string;
  setS3SessionToken(value: string): DataStorageOptions;
  hasS3SessionToken(): boolean;
  clearS3SessionToken(): DataStorageOptions;

  getS3Profile(): string;
  setS3Profile(value: string): DataStorageOptions;
  hasS3Profile(): boolean;
  clearS3Profile(): DataStorageOptions;

  getS3Headers(): string;
  setS3Headers(value: string): DataStorageOptions;
  hasS3Headers(): boolean;
  clearS3Headers(): DataStorageOptions;

  getS3ConcatConcurrentDownloads(): number;
  setS3ConcatConcurrentDownloads(value: number): DataStorageOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataStorageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: DataStorageOptions): DataStorageOptions.AsObject;
  static serializeBinaryToWriter(message: DataStorageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataStorageOptions;
  static deserializeBinaryFromReader(message: DataStorageOptions, reader: jspb.BinaryReader): DataStorageOptions;
}

export namespace DataStorageOptions {
  export type AsObject = {
    storage: AvailableDataStorages,
    dataDir: string,
    dirStructure: string,
    forceFsync: boolean,
    s3Bucket?: string,
    s3Region?: string,
    s3AccessKey?: string,
    s3AccessKeyPath?: string,
    s3SecretKey?: string,
    s3SecretKeyPath?: string,
    s3Url?: string,
    s3ForcePathStyle: boolean,
    s3SecurityToken?: string,
    s3SessionToken?: string,
    s3Profile?: string,
    s3Headers?: string,
    s3ConcatConcurrentDownloads: number,
  }

  export enum S3BucketCase { 
    _S3_BUCKET_NOT_SET = 0,
    S3_BUCKET = 5,
  }

  export enum S3RegionCase { 
    _S3_REGION_NOT_SET = 0,
    S3_REGION = 6,
  }

  export enum S3AccessKeyCase { 
    _S3_ACCESS_KEY_NOT_SET = 0,
    S3_ACCESS_KEY = 7,
  }

  export enum S3AccessKeyPathCase { 
    _S3_ACCESS_KEY_PATH_NOT_SET = 0,
    S3_ACCESS_KEY_PATH = 8,
  }

  export enum S3SecretKeyCase { 
    _S3_SECRET_KEY_NOT_SET = 0,
    S3_SECRET_KEY = 9,
  }

  export enum S3SecretKeyPathCase { 
    _S3_SECRET_KEY_PATH_NOT_SET = 0,
    S3_SECRET_KEY_PATH = 10,
  }

  export enum S3UrlCase { 
    _S3_URL_NOT_SET = 0,
    S3_URL = 11,
  }

  export enum S3SecurityTokenCase { 
    _S3_SECURITY_TOKEN_NOT_SET = 0,
    S3_SECURITY_TOKEN = 13,
  }

  export enum S3SessionTokenCase { 
    _S3_SESSION_TOKEN_NOT_SET = 0,
    S3_SESSION_TOKEN = 14,
  }

  export enum S3ProfileCase { 
    _S3_PROFILE_NOT_SET = 0,
    S3_PROFILE = 15,
  }

  export enum S3HeadersCase { 
    _S3_HEADERS_NOT_SET = 0,
    S3_HEADERS = 16,
  }
}

export class InfoStoreOptions extends jspb.Message {
  getInfoStorage(): AvailableInfoStorages;
  setInfoStorage(value: AvailableInfoStorages): InfoStoreOptions;

  getInfoDir(): string;
  setInfoDir(value: string): InfoStoreOptions;

  getInfoDbDsn(): string;
  setInfoDbDsn(value: string): InfoStoreOptions;
  hasInfoDbDsn(): boolean;
  clearInfoDbDsn(): InfoStoreOptions;

  getRedisInfoExpiration(): number;
  setRedisInfoExpiration(value: number): InfoStoreOptions;
  hasRedisInfoExpiration(): boolean;
  clearRedisInfoExpiration(): InfoStoreOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfoStoreOptions.AsObject;
  static toObject(includeInstance: boolean, msg: InfoStoreOptions): InfoStoreOptions.AsObject;
  static serializeBinaryToWriter(message: InfoStoreOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfoStoreOptions;
  static deserializeBinaryFromReader(message: InfoStoreOptions, reader: jspb.BinaryReader): InfoStoreOptions;
}

export namespace InfoStoreOptions {
  export type AsObject = {
    infoStorage: AvailableInfoStorages,
    infoDir: string,
    infoDbDsn?: string,
    redisInfoExpiration?: number,
  }

  export enum InfoDbDsnCase { 
    _INFO_DB_DSN_NOT_SET = 0,
    INFO_DB_DSN = 3,
  }

  export enum RedisInfoExpirationCase { 
    _REDIS_INFO_EXPIRATION_NOT_SET = 0,
    REDIS_INFO_EXPIRATION = 4,
  }
}

export class AMQPHooksOptions extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): AMQPHooksOptions;
  hasUrl(): boolean;
  clearUrl(): AMQPHooksOptions;

  getDeclareExchange(): boolean;
  setDeclareExchange(value: boolean): AMQPHooksOptions;

  getDeclareQueues(): boolean;
  setDeclareQueues(value: boolean): AMQPHooksOptions;

  getDurableExchange(): boolean;
  setDurableExchange(value: boolean): AMQPHooksOptions;

  getDurableQueues(): boolean;
  setDurableQueues(value: boolean): AMQPHooksOptions;

  getCelery(): boolean;
  setCelery(value: boolean): AMQPHooksOptions;

  getExchange(): string;
  setExchange(value: string): AMQPHooksOptions;

  getExchangeKind(): string;
  setExchangeKind(value: string): AMQPHooksOptions;

  getRoutingKey(): string;
  setRoutingKey(value: string): AMQPHooksOptions;
  hasRoutingKey(): boolean;
  clearRoutingKey(): AMQPHooksOptions;

  getQueuesPrefix(): string;
  setQueuesPrefix(value: string): AMQPHooksOptions;

  getConnectionPoolSize(): number;
  setConnectionPoolSize(value: number): AMQPHooksOptions;

  getChannelPoolSize(): number;
  setChannelPoolSize(value: number): AMQPHooksOptions;

  getIdleConnectionTimeout(): number;
  setIdleConnectionTimeout(value: number): AMQPHooksOptions;
  hasIdleConnectionTimeout(): boolean;
  clearIdleConnectionTimeout(): AMQPHooksOptions;

  getIdleChannelsTimeout(): number;
  setIdleChannelsTimeout(value: number): AMQPHooksOptions;
  hasIdleChannelsTimeout(): boolean;
  clearIdleChannelsTimeout(): AMQPHooksOptions;

  getAutoDelete(): boolean;
  setAutoDelete(value: boolean): AMQPHooksOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AMQPHooksOptions.AsObject;
  static toObject(includeInstance: boolean, msg: AMQPHooksOptions): AMQPHooksOptions.AsObject;
  static serializeBinaryToWriter(message: AMQPHooksOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AMQPHooksOptions;
  static deserializeBinaryFromReader(message: AMQPHooksOptions, reader: jspb.BinaryReader): AMQPHooksOptions;
}

export namespace AMQPHooksOptions {
  export type AsObject = {
    url?: string,
    declareExchange: boolean,
    declareQueues: boolean,
    durableExchange: boolean,
    durableQueues: boolean,
    celery: boolean,
    exchange: string,
    exchangeKind: string,
    routingKey?: string,
    queuesPrefix: string,
    connectionPoolSize: number,
    channelPoolSize: number,
    idleConnectionTimeout?: number,
    idleChannelsTimeout?: number,
    autoDelete: boolean,
  }

  export enum UrlCase { 
    _URL_NOT_SET = 0,
    URL = 1,
  }

  export enum RoutingKeyCase { 
    _ROUTING_KEY_NOT_SET = 0,
    ROUTING_KEY = 9,
  }

  export enum IdleConnectionTimeoutCase { 
    _IDLE_CONNECTION_TIMEOUT_NOT_SET = 0,
    IDLE_CONNECTION_TIMEOUT = 13,
  }

  export enum IdleChannelsTimeoutCase { 
    _IDLE_CHANNELS_TIMEOUT_NOT_SET = 0,
    IDLE_CHANNELS_TIMEOUT = 14,
  }
}

export class KafkaHookOptions extends jspb.Message {
  getUrls(): string;
  setUrls(value: string): KafkaHookOptions;
  hasUrls(): boolean;
  clearUrls(): KafkaHookOptions;

  getClientId(): string;
  setClientId(value: string): KafkaHookOptions;
  hasClientId(): boolean;
  clearClientId(): KafkaHookOptions;

  getTopic(): string;
  setTopic(value: string): KafkaHookOptions;
  hasTopic(): boolean;
  clearTopic(): KafkaHookOptions;

  getPrefix(): string;
  setPrefix(value: string): KafkaHookOptions;
  hasPrefix(): boolean;
  clearPrefix(): KafkaHookOptions;

  getRequiredAcks(): string;
  setRequiredAcks(value: string): KafkaHookOptions;
  hasRequiredAcks(): boolean;
  clearRequiredAcks(): KafkaHookOptions;

  getCompression(): string;
  setCompression(value: string): KafkaHookOptions;
  hasCompression(): boolean;
  clearCompression(): KafkaHookOptions;

  getIdleTimeout(): number;
  setIdleTimeout(value: number): KafkaHookOptions;
  hasIdleTimeout(): boolean;
  clearIdleTimeout(): KafkaHookOptions;

  getSendTimeout(): number;
  setSendTimeout(value: number): KafkaHookOptions;
  hasSendTimeout(): boolean;
  clearSendTimeout(): KafkaHookOptions;

  getExtraKafkaOpts(): ExtraKafkaOptions | undefined;
  setExtraKafkaOpts(value?: ExtraKafkaOptions): KafkaHookOptions;
  hasExtraKafkaOpts(): boolean;
  clearExtraKafkaOpts(): KafkaHookOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KafkaHookOptions.AsObject;
  static toObject(includeInstance: boolean, msg: KafkaHookOptions): KafkaHookOptions.AsObject;
  static serializeBinaryToWriter(message: KafkaHookOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KafkaHookOptions;
  static deserializeBinaryFromReader(message: KafkaHookOptions, reader: jspb.BinaryReader): KafkaHookOptions;
}

export namespace KafkaHookOptions {
  export type AsObject = {
    urls?: string,
    clientId?: string,
    topic?: string,
    prefix?: string,
    requiredAcks?: string,
    compression?: string,
    idleTimeout?: number,
    sendTimeout?: number,
    extraKafkaOpts?: ExtraKafkaOptions.AsObject,
  }

  export enum UrlsCase { 
    _URLS_NOT_SET = 0,
    URLS = 1,
  }

  export enum ClientIdCase { 
    _CLIENT_ID_NOT_SET = 0,
    CLIENT_ID = 2,
  }

  export enum TopicCase { 
    _TOPIC_NOT_SET = 0,
    TOPIC = 3,
  }

  export enum PrefixCase { 
    _PREFIX_NOT_SET = 0,
    PREFIX = 4,
  }

  export enum RequiredAcksCase { 
    _REQUIRED_ACKS_NOT_SET = 0,
    REQUIRED_ACKS = 5,
  }

  export enum CompressionCase { 
    _COMPRESSION_NOT_SET = 0,
    COMPRESSION = 6,
  }

  export enum IdleTimeoutCase { 
    _IDLE_TIMEOUT_NOT_SET = 0,
    IDLE_TIMEOUT = 7,
  }

  export enum SendTimeoutCase { 
    _SEND_TIMEOUT_NOT_SET = 0,
    SEND_TIMEOUT = 8,
  }

  export enum ExtraKafkaOptsCase { 
    _EXTRA_KAFKA_OPTS_NOT_SET = 0,
    EXTRA_KAFKA_OPTS = 9,
  }
}

export class NatsHookOptions extends jspb.Message {
  getUrlsList(): Array<string>;
  setUrlsList(value: Array<string>): NatsHookOptions;
  clearUrlsList(): NatsHookOptions;
  addUrls(value: string, index?: number): NatsHookOptions;

  getSubject(): string;
  setSubject(value: string): NatsHookOptions;
  hasSubject(): boolean;
  clearSubject(): NatsHookOptions;

  getPrefix(): string;
  setPrefix(value: string): NatsHookOptions;
  hasPrefix(): boolean;
  clearPrefix(): NatsHookOptions;

  getWaitForReplies(): boolean;
  setWaitForReplies(value: boolean): NatsHookOptions;

  getUsername(): string;
  setUsername(value: string): NatsHookOptions;
  hasUsername(): boolean;
  clearUsername(): NatsHookOptions;

  getPassword(): string;
  setPassword(value: string): NatsHookOptions;
  hasPassword(): boolean;
  clearPassword(): NatsHookOptions;

  getToken(): string;
  setToken(value: string): NatsHookOptions;
  hasToken(): boolean;
  clearToken(): NatsHookOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NatsHookOptions.AsObject;
  static toObject(includeInstance: boolean, msg: NatsHookOptions): NatsHookOptions.AsObject;
  static serializeBinaryToWriter(message: NatsHookOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NatsHookOptions;
  static deserializeBinaryFromReader(message: NatsHookOptions, reader: jspb.BinaryReader): NatsHookOptions;
}

export namespace NatsHookOptions {
  export type AsObject = {
    urlsList: Array<string>,
    subject?: string,
    prefix?: string,
    waitForReplies: boolean,
    username?: string,
    password?: string,
    token?: string,
  }

  export enum SubjectCase { 
    _SUBJECT_NOT_SET = 0,
    SUBJECT = 2,
  }

  export enum PrefixCase { 
    _PREFIX_NOT_SET = 0,
    PREFIX = 3,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 5,
  }

  export enum PasswordCase { 
    _PASSWORD_NOT_SET = 0,
    PASSWORD = 6,
  }

  export enum TokenCase { 
    _TOKEN_NOT_SET = 0,
    TOKEN = 7,
  }
}

export class NotificationsOptions extends jspb.Message {
  getHooksFormat(): Format;
  setHooksFormat(value: Format): NotificationsOptions;

  getHooksList(): Array<Hook>;
  setHooksList(value: Array<Hook>): NotificationsOptions;
  clearHooksList(): NotificationsOptions;
  addHooks(value: Hook, index?: number): NotificationsOptions;

  getBehindProxy(): boolean;
  setBehindProxy(value: boolean): NotificationsOptions;

  getHooksHttpUrlsList(): Array<string>;
  setHooksHttpUrlsList(value: Array<string>): NotificationsOptions;
  clearHooksHttpUrlsList(): NotificationsOptions;
  addHooksHttpUrls(value: string, index?: number): NotificationsOptions;

  getHttpHookTimeout(): number;
  setHttpHookTimeout(value: number): NotificationsOptions;
  hasHttpHookTimeout(): boolean;
  clearHttpHookTimeout(): NotificationsOptions;

  getHooksHttpProxyHeadersList(): Array<string>;
  setHooksHttpProxyHeadersList(value: Array<string>): NotificationsOptions;
  clearHooksHttpProxyHeadersList(): NotificationsOptions;
  addHooksHttpProxyHeaders(value: string, index?: number): NotificationsOptions;

  getHooksDir(): string;
  setHooksDir(value: string): NotificationsOptions;
  hasHooksDir(): boolean;
  clearHooksDir(): NotificationsOptions;

  getHooksFile(): string;
  setHooksFile(value: string): NotificationsOptions;
  hasHooksFile(): boolean;
  clearHooksFile(): NotificationsOptions;

  getAmqpHookOpts(): AMQPHooksOptions | undefined;
  setAmqpHookOpts(value?: AMQPHooksOptions): NotificationsOptions;
  hasAmqpHookOpts(): boolean;
  clearAmqpHookOpts(): NotificationsOptions;

  getKafkaHookOpts(): KafkaHookOptions | undefined;
  setKafkaHookOpts(value?: KafkaHookOptions): NotificationsOptions;
  hasKafkaHookOpts(): boolean;
  clearKafkaHookOpts(): NotificationsOptions;

  getNatsHookOpts(): NatsHookOptions | undefined;
  setNatsHookOpts(value?: NatsHookOptions): NotificationsOptions;
  hasNatsHookOpts(): boolean;
  clearNatsHookOpts(): NotificationsOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotificationsOptions.AsObject;
  static toObject(includeInstance: boolean, msg: NotificationsOptions): NotificationsOptions.AsObject;
  static serializeBinaryToWriter(message: NotificationsOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotificationsOptions;
  static deserializeBinaryFromReader(message: NotificationsOptions, reader: jspb.BinaryReader): NotificationsOptions;
}

export namespace NotificationsOptions {
  export type AsObject = {
    hooksFormat: Format,
    hooksList: Array<Hook>,
    behindProxy: boolean,
    hooksHttpUrlsList: Array<string>,
    httpHookTimeout?: number,
    hooksHttpProxyHeadersList: Array<string>,
    hooksDir?: string,
    hooksFile?: string,
    amqpHookOpts?: AMQPHooksOptions.AsObject,
    kafkaHookOpts?: KafkaHookOptions.AsObject,
    natsHookOpts?: NatsHookOptions.AsObject,
  }

  export enum HttpHookTimeoutCase { 
    _HTTP_HOOK_TIMEOUT_NOT_SET = 0,
    HTTP_HOOK_TIMEOUT = 5,
  }

  export enum HooksDirCase { 
    _HOOKS_DIR_NOT_SET = 0,
    HOOKS_DIR = 7,
  }

  export enum HooksFileCase { 
    _HOOKS_FILE_NOT_SET = 0,
    HOOKS_FILE = 8,
  }
}

export class SentryOptions extends jspb.Message {
  getDsn(): string;
  setDsn(value: string): SentryOptions;
  hasDsn(): boolean;
  clearDsn(): SentryOptions;

  getSampleRate(): number;
  setSampleRate(value: number): SentryOptions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SentryOptions.AsObject;
  static toObject(includeInstance: boolean, msg: SentryOptions): SentryOptions.AsObject;
  static serializeBinaryToWriter(message: SentryOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SentryOptions;
  static deserializeBinaryFromReader(message: SentryOptions, reader: jspb.BinaryReader): SentryOptions;
}

export namespace SentryOptions {
  export type AsObject = {
    dsn?: string,
    sampleRate: number,
  }

  export enum DsnCase { 
    _DSN_NOT_SET = 0,
    DSN = 1,
  }
}

export class RustusConf extends jspb.Message {
  getHost(): string;
  setHost(value: string): RustusConf;

  getPort(): number;
  setPort(value: number): RustusConf;

  getDisableHealthAccessLog(): boolean;
  setDisableHealthAccessLog(value: boolean): RustusConf;

  getUrl(): string;
  setUrl(value: string): RustusConf;

  getCorsList(): Array<string>;
  setCorsList(value: Array<string>): RustusConf;
  clearCorsList(): RustusConf;
  addCors(value: string, index?: number): RustusConf;

  getMaxBodySize(): number;
  setMaxBodySize(value: number): RustusConf;

  getLogLevel(): string;
  setLogLevel(value: string): RustusConf;

  getWorkers(): number;
  setWorkers(value: number): RustusConf;
  hasWorkers(): boolean;
  clearWorkers(): RustusConf;

  getTusExtensionsList(): Array<Extensions>;
  setTusExtensionsList(value: Array<Extensions>): RustusConf;
  clearTusExtensionsList(): RustusConf;
  addTusExtensions(value: Extensions, index?: number): RustusConf;

  getAllowEmpty(): boolean;
  setAllowEmpty(value: boolean): RustusConf;

  getRemoveParts(): boolean;
  setRemoveParts(value: boolean): RustusConf;

  getMaxFileSize(): number;
  setMaxFileSize(value: number): RustusConf;
  hasMaxFileSize(): boolean;
  clearMaxFileSize(): RustusConf;

  getStorageOpts(): DataStorageOptions | undefined;
  setStorageOpts(value?: DataStorageOptions): RustusConf;
  hasStorageOpts(): boolean;
  clearStorageOpts(): RustusConf;

  getInfoStorageOpts(): InfoStoreOptions | undefined;
  setInfoStorageOpts(value?: InfoStoreOptions): RustusConf;
  hasInfoStorageOpts(): boolean;
  clearInfoStorageOpts(): RustusConf;

  getNotificationOpts(): NotificationsOptions | undefined;
  setNotificationOpts(value?: NotificationsOptions): RustusConf;
  hasNotificationOpts(): boolean;
  clearNotificationOpts(): RustusConf;

  getSentryOpts(): SentryOptions | undefined;
  setSentryOpts(value?: SentryOptions): RustusConf;
  hasSentryOpts(): boolean;
  clearSentryOpts(): RustusConf;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RustusConf.AsObject;
  static toObject(includeInstance: boolean, msg: RustusConf): RustusConf.AsObject;
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
    workers?: number,
    tusExtensionsList: Array<Extensions>,
    allowEmpty: boolean,
    removeParts: boolean,
    maxFileSize?: number,
    storageOpts?: DataStorageOptions.AsObject,
    infoStorageOpts?: InfoStoreOptions.AsObject,
    notificationOpts?: NotificationsOptions.AsObject,
    sentryOpts?: SentryOptions.AsObject,
  }

  export enum WorkersCase { 
    _WORKERS_NOT_SET = 0,
    WORKERS = 8,
  }

  export enum MaxFileSizeCase { 
    _MAX_FILE_SIZE_NOT_SET = 0,
    MAX_FILE_SIZE = 12,
  }
}

export enum AvailableDataStorages { 
  FILE_STORAGE = 0,
  HYBRID_S3 = 1,
  S3 = 2,
}
export enum AvailableInfoStorages { 
  FILES = 0,
  REDIS = 1,
}
export enum Format { 
  DEFAULT = 0,
  TUSD = 1,
  V2 = 2,
}
export enum Hook { 
  PRE_CREATE = 0,
  POST_CREATE = 1,
  POST_RECEIVE = 2,
  PRE_TERMINATE = 3,
  POST_TERMINATE = 4,
  POST_FINISH = 5,
}
export enum Extensions { 
  GETTING = 0,
  CREATION = 1,
  TERMINATION = 2,
  CREATION_WITH_UPLOAD = 3,
  CREATION_DEFER_LENGTH = 4,
  CONCATENATION = 5,
  CHECKSUM = 6,
}
