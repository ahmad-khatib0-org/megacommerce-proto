import * as jspb from 'google-protobuf'

import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb'; // proto import: "google/protobuf/any.proto"


export class AuditRecord extends jspb.Message {
  getEventName(): string;
  setEventName(value: string): AuditRecord;

  getStatus(): string;
  setStatus(value: string): AuditRecord;

  getEventData(): AuditEventData | undefined;
  setEventData(value?: AuditEventData): AuditRecord;
  hasEventData(): boolean;
  clearEventData(): AuditRecord;

  getActor(): AuditEventActor | undefined;
  setActor(value?: AuditEventActor): AuditRecord;
  hasActor(): boolean;
  clearActor(): AuditRecord;

  getMeta(): google_protobuf_any_pb.Any | undefined;
  setMeta(value?: google_protobuf_any_pb.Any): AuditRecord;
  hasMeta(): boolean;
  clearMeta(): AuditRecord;

  getError(): AuditEventError | undefined;
  setError(value?: AuditEventError): AuditRecord;
  hasError(): boolean;
  clearError(): AuditRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditRecord.AsObject;
  static toObject(includeInstance: boolean, msg: AuditRecord): AuditRecord.AsObject;
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
    meta?: google_protobuf_any_pb.Any.AsObject,
    error?: AuditEventError.AsObject,
  }
}

export class AuditEventData extends jspb.Message {
  getParameters(): google_protobuf_any_pb.Any | undefined;
  setParameters(value?: google_protobuf_any_pb.Any): AuditEventData;
  hasParameters(): boolean;
  clearParameters(): AuditEventData;

  getPriorState(): google_protobuf_any_pb.Any | undefined;
  setPriorState(value?: google_protobuf_any_pb.Any): AuditEventData;
  hasPriorState(): boolean;
  clearPriorState(): AuditEventData;

  getResultingState(): google_protobuf_any_pb.Any | undefined;
  setResultingState(value?: google_protobuf_any_pb.Any): AuditEventData;
  hasResultingState(): boolean;
  clearResultingState(): AuditEventData;

  getObjectType(): google_protobuf_any_pb.Any | undefined;
  setObjectType(value?: google_protobuf_any_pb.Any): AuditEventData;
  hasObjectType(): boolean;
  clearObjectType(): AuditEventData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventData): AuditEventData.AsObject;
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
  setUserId(value: string): AuditEventActor;

  getSessionId(): string;
  setSessionId(value: string): AuditEventActor;

  getClient(): string;
  setClient(value: string): AuditEventActor;

  getIpAddress(): string;
  setIpAddress(value: string): AuditEventActor;

  getXForwardedFor(): string;
  setXForwardedFor(value: string): AuditEventActor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventActor.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventActor): AuditEventActor.AsObject;
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
  setApiPath(value: string): AuditEventError;

  getClusterId(): string;
  setClusterId(value: string): AuditEventError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventError.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventError): AuditEventError.AsObject;
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

