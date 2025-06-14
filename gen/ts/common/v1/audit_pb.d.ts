// package: common.v1
// file: common/v1/audit.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class AuditRecord extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  hasEventData(): boolean;
  clearEventData(): void;
  getEventData(): AuditEventData | undefined;
  setEventData(value?: AuditEventData): void;

  hasActor(): boolean;
  clearActor(): void;
  getActor(): AuditEventActor | undefined;
  setActor(value?: AuditEventActor): void;

  getMetaMap(): jspb.Map<string, google_protobuf_any_pb.Any>;
  clearMetaMap(): void;
  hasError(): boolean;
  clearError(): void;
  getError(): AuditEventError | undefined;
  setError(value?: AuditEventError): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRecord.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRecord): AuditRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditRecord;
  static deserializeBinaryFromReader(message: AuditRecord, reader: jspb.BinaryReader): AuditRecord;
}

export namespace AuditRecord {
  export type AsObject = {
    eventName: string,
    status: string,
    eventData?: AuditEventData.AsObject,
    actor?: AuditEventActor.AsObject,
    metaMap: Array<[string, google_protobuf_any_pb.Any.AsObject]>,
    error?: AuditEventError.AsObject,
  }
}

export class AuditEventData extends jspb.Message {
  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): google_protobuf_any_pb.Any | undefined;
  setParameters(value?: google_protobuf_any_pb.Any): void;

  hasPriorState(): boolean;
  clearPriorState(): void;
  getPriorState(): google_protobuf_any_pb.Any | undefined;
  setPriorState(value?: google_protobuf_any_pb.Any): void;

  hasResultingState(): boolean;
  clearResultingState(): void;
  getResultingState(): google_protobuf_any_pb.Any | undefined;
  setResultingState(value?: google_protobuf_any_pb.Any): void;

  hasObjectType(): boolean;
  clearObjectType(): void;
  getObjectType(): google_protobuf_any_pb.Any | undefined;
  setObjectType(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventData): AuditEventData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventData;
  static deserializeBinaryFromReader(message: AuditEventData, reader: jspb.BinaryReader): AuditEventData;
}

export namespace AuditEventData {
  export type AsObject = {
    parameters?: google_protobuf_any_pb.Any.AsObject,
    priorState?: google_protobuf_any_pb.Any.AsObject,
    resultingState?: google_protobuf_any_pb.Any.AsObject,
    objectType?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class AuditEventActor extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  getClient(): string;
  setClient(value: string): void;

  getIpAddress(): string;
  setIpAddress(value: string): void;

  getXForwardedFor(): string;
  setXForwardedFor(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventActor.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventActor): AuditEventActor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventActor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventActor;
  static deserializeBinaryFromReader(message: AuditEventActor, reader: jspb.BinaryReader): AuditEventActor;
}

export namespace AuditEventActor {
  export type AsObject = {
    userId: string,
    sessionId: string,
    client: string,
    ipAddress: string,
    xForwardedFor: string,
  }
}

export class AuditEventError extends jspb.Message {
  getApiPath(): string;
  setApiPath(value: string): void;

  getClusterId(): string;
  setClusterId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventError.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventError): AuditEventError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventError;
  static deserializeBinaryFromReader(message: AuditEventError, reader: jspb.BinaryReader): AuditEventError;
}

export namespace AuditEventError {
  export type AsObject = {
    apiPath: string,
    clusterId: string,
  }
}

