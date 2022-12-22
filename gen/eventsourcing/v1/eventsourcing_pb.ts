// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file eventsourcing/v1/eventsourcing.proto (package eventsourcing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from message eventsourcing.v1.IDPair
 */
export class IDPair extends Message<IDPair> {
  /**
   * @generated from field: int64 from_id = 1;
   */
  fromId = protoInt64.zero;

  /**
   * @generated from field: int64 to_id = 2;
   */
  toId = protoInt64.zero;

  constructor(data?: PartialMessage<IDPair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.IDPair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "from_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "to_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPair {
    return new IDPair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPair {
    return new IDPair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPair {
    return new IDPair().fromJsonString(jsonString, options);
  }

  static equals(a: IDPair | PlainMessage<IDPair> | undefined, b: IDPair | PlainMessage<IDPair> | undefined): boolean {
    return proto3.util.equals(IDPair, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.DataTableTransaction
 */
export class DataTableTransaction extends Message<DataTableTransaction> {
  /**
   * @generated from field: repeated int64 i64s = 1;
   */
  i64s: bigint[] = [];

  /**
   * @generated from field: repeated double f64s = 2;
   */
  f64s: number[] = [];

  /**
   * @generated from field: repeated string texts = 3;
   */
  texts: string[] = [];

  /**
   * @generated from field: repeated bytes binaries = 4;
   */
  binaries: Uint8Array[] = [];

  /**
   * @generated from field: map<int64, eventsourcing.v1.DataTableTransaction.Patch> patches = 5;
   */
  patches: { [key: string]: DataTableTransaction_Patch } = {};

  constructor(data?: PartialMessage<DataTableTransaction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.DataTableTransaction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "i64s", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "f64s", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 3, name: "texts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "binaries", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 5, name: "patches", kind: "map", K: 3 /* ScalarType.INT64 */, V: {kind: "message", T: DataTableTransaction_Patch} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction {
    return new DataTableTransaction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction {
    return new DataTableTransaction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction {
    return new DataTableTransaction().fromJsonString(jsonString, options);
  }

  static equals(a: DataTableTransaction | PlainMessage<DataTableTransaction> | undefined, b: DataTableTransaction | PlainMessage<DataTableTransaction> | undefined): boolean {
    return proto3.util.equals(DataTableTransaction, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.DataTableTransaction.ColumnIndex
 */
export class DataTableTransaction_ColumnIndex extends Message<DataTableTransaction_ColumnIndex> {
  /**
   * @generated from field: uint32 table_index = 1;
   */
  tableIndex = 0;

  /**
   * @generated from field: uint32 patch_field_index = 2;
   */
  patchFieldIndex = 0;

  constructor(data?: PartialMessage<DataTableTransaction_ColumnIndex>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.DataTableTransaction.ColumnIndex";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "table_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "patch_field_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_ColumnIndex {
    return new DataTableTransaction_ColumnIndex().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_ColumnIndex {
    return new DataTableTransaction_ColumnIndex().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_ColumnIndex {
    return new DataTableTransaction_ColumnIndex().fromJsonString(jsonString, options);
  }

  static equals(a: DataTableTransaction_ColumnIndex | PlainMessage<DataTableTransaction_ColumnIndex> | undefined, b: DataTableTransaction_ColumnIndex | PlainMessage<DataTableTransaction_ColumnIndex> | undefined): boolean {
    return proto3.util.equals(DataTableTransaction_ColumnIndex, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairLastEvent
 */
export class DataTableTransaction_PairLastEvent extends Message<DataTableTransaction_PairLastEvent> {
  /**
   * @generated from field: eventsourcing.v1.IDPair pair = 1;
   */
  pair?: IDPair;

  /**
   * @generated from field: int64 last_event_ledger_id = 2;
   */
  lastEventLedgerId = protoInt64.zero;

  constructor(data?: PartialMessage<DataTableTransaction_PairLastEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.DataTableTransaction.PairLastEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pair", kind: "message", T: IDPair },
    { no: 2, name: "last_event_ledger_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_PairLastEvent {
    return new DataTableTransaction_PairLastEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_PairLastEvent {
    return new DataTableTransaction_PairLastEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_PairLastEvent {
    return new DataTableTransaction_PairLastEvent().fromJsonString(jsonString, options);
  }

  static equals(a: DataTableTransaction_PairLastEvent | PlainMessage<DataTableTransaction_PairLastEvent> | undefined, b: DataTableTransaction_PairLastEvent | PlainMessage<DataTableTransaction_PairLastEvent> | undefined): boolean {
    return proto3.util.equals(DataTableTransaction_PairLastEvent, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairPatch
 */
export class DataTableTransaction_PairPatch extends Message<DataTableTransaction_PairPatch> {
  /**
   * @generated from field: eventsourcing.v1.DataTableTransaction.PairLastEvent pair_last_event = 1;
   */
  pairLastEvent?: DataTableTransaction_PairLastEvent;

  /**
   * @generated from field: repeated eventsourcing.v1.DataTableTransaction.ColumnIndex column_indices = 2;
   */
  columnIndices: DataTableTransaction_ColumnIndex[] = [];

  constructor(data?: PartialMessage<DataTableTransaction_PairPatch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.DataTableTransaction.PairPatch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pair_last_event", kind: "message", T: DataTableTransaction_PairLastEvent },
    { no: 2, name: "column_indices", kind: "message", T: DataTableTransaction_ColumnIndex, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_PairPatch {
    return new DataTableTransaction_PairPatch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_PairPatch {
    return new DataTableTransaction_PairPatch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_PairPatch {
    return new DataTableTransaction_PairPatch().fromJsonString(jsonString, options);
  }

  static equals(a: DataTableTransaction_PairPatch | PlainMessage<DataTableTransaction_PairPatch> | undefined, b: DataTableTransaction_PairPatch | PlainMessage<DataTableTransaction_PairPatch> | undefined): boolean {
    return proto3.util.equals(DataTableTransaction_PairPatch, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.DataTableTransaction.Patch
 */
export class DataTableTransaction_Patch extends Message<DataTableTransaction_Patch> {
  /**
   * @generated from field: repeated eventsourcing.v1.IDPair added_pairs = 1;
   */
  addedPairs: IDPair[] = [];

  /**
   * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairLastEvent removed_pairs = 2;
   */
  removedPairs: DataTableTransaction_PairLastEvent[] = [];

  /**
   * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairPatch updated_pair_patches = 3;
   */
  updatedPairPatches: DataTableTransaction_PairPatch[] = [];

  constructor(data?: PartialMessage<DataTableTransaction_Patch>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.DataTableTransaction.Patch";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "added_pairs", kind: "message", T: IDPair, repeated: true },
    { no: 2, name: "removed_pairs", kind: "message", T: DataTableTransaction_PairLastEvent, repeated: true },
    { no: 3, name: "updated_pair_patches", kind: "message", T: DataTableTransaction_PairPatch, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_Patch {
    return new DataTableTransaction_Patch().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_Patch {
    return new DataTableTransaction_Patch().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_Patch {
    return new DataTableTransaction_Patch().fromJsonString(jsonString, options);
  }

  static equals(a: DataTableTransaction_Patch | PlainMessage<DataTableTransaction_Patch> | undefined, b: DataTableTransaction_Patch | PlainMessage<DataTableTransaction_Patch> | undefined): boolean {
    return proto3.util.equals(DataTableTransaction_Patch, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.AppendRequest
 */
export class AppendRequest extends Message<AppendRequest> {
  /**
   * @generated from field: eventsourcing.v1.DataTableTransaction transaction = 1;
   */
  transaction?: DataTableTransaction;

  constructor(data?: PartialMessage<AppendRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.AppendRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "transaction", kind: "message", T: DataTableTransaction },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendRequest {
    return new AppendRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendRequest {
    return new AppendRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendRequest {
    return new AppendRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AppendRequest | PlainMessage<AppendRequest> | undefined, b: AppendRequest | PlainMessage<AppendRequest> | undefined): boolean {
    return proto3.util.equals(AppendRequest, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.AppendResponse
 */
export class AppendResponse extends Message<AppendResponse> {
  /**
   * @generated from field: int64 last_event_ledger_id = 1;
   */
  lastEventLedgerId = protoInt64.zero;

  /**
   * @generated from field: bytes integrity = 2;
   */
  integrity = new Uint8Array(0);

  constructor(data?: PartialMessage<AppendResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.AppendResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "last_event_ledger_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "integrity", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendResponse {
    return new AppendResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendResponse {
    return new AppendResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendResponse {
    return new AppendResponse().fromJsonString(jsonString, options);
  }

  static equals(a: AppendResponse | PlainMessage<AppendResponse> | undefined, b: AppendResponse | PlainMessage<AppendResponse> | undefined): boolean {
    return proto3.util.equals(AppendResponse, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.EventsRequest
 */
export class EventsRequest extends Message<EventsRequest> {
  /**
   * @generated from field: uint32 last_transaction_id = 1;
   */
  lastTransactionId = 0;

  /**
   * @generated from field: uint32 limit = 2;
   */
  limit = 0;

  constructor(data?: PartialMessage<EventsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.EventsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "last_transaction_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsRequest {
    return new EventsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsRequest {
    return new EventsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsRequest {
    return new EventsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: EventsRequest | PlainMessage<EventsRequest> | undefined, b: EventsRequest | PlainMessage<EventsRequest> | undefined): boolean {
    return proto3.util.equals(EventsRequest, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.EventsResponse
 */
export class EventsResponse extends Message<EventsResponse> {
  /**
   * @generated from field: repeated eventsourcing.v1.EventsResponse.Event events = 1;
   */
  events: EventsResponse_Event[] = [];

  constructor(data?: PartialMessage<EventsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.EventsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "events", kind: "message", T: EventsResponse_Event, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse {
    return new EventsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse {
    return new EventsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse {
    return new EventsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: EventsResponse | PlainMessage<EventsResponse> | undefined, b: EventsResponse | PlainMessage<EventsResponse> | undefined): boolean {
    return proto3.util.equals(EventsResponse, a, b);
  }
}

/**
 * @generated from message eventsourcing.v1.EventsResponse.Event
 */
export class EventsResponse_Event extends Message<EventsResponse_Event> {
  /**
   * @generated from field: uint32 transaction_id = 1;
   */
  transactionId = 0;

  /**
   * @generated from field: bytes integrity = 2;
   */
  integrity = new Uint8Array(0);

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: eventsourcing.v1.DataTableTransaction data_table_transaction = 4;
   */
  dataTableTransaction?: DataTableTransaction;

  constructor(data?: PartialMessage<EventsResponse_Event>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "eventsourcing.v1.EventsResponse.Event";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "transaction_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "integrity", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
    { no: 4, name: "data_table_transaction", kind: "message", T: DataTableTransaction },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse_Event {
    return new EventsResponse_Event().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse_Event {
    return new EventsResponse_Event().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse_Event {
    return new EventsResponse_Event().fromJsonString(jsonString, options);
  }

  static equals(a: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined, b: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined): boolean {
    return proto3.util.equals(EventsResponse_Event, a, b);
  }
}

