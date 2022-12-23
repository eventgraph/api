import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message eventsourcing.v1.IDPair
 */
export declare class IDPair extends Message<IDPair> {
    /**
     * @generated from field: int64 from_id = 1;
     */
    fromId: bigint;
    /**
     * @generated from field: int64 to_id = 2;
     */
    toId: bigint;
    constructor(data?: PartialMessage<IDPair>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.IDPair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPair;
    static equals(a: IDPair | PlainMessage<IDPair> | undefined, b: IDPair | PlainMessage<IDPair> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.DataTableTransaction
 */
export declare class DataTableTransaction extends Message<DataTableTransaction> {
    /**
     * @generated from field: repeated int64 i64s = 1;
     */
    i64s: bigint[];
    /**
     * @generated from field: repeated double f64s = 2;
     */
    f64s: number[];
    /**
     * @generated from field: repeated string texts = 3;
     */
    texts: string[];
    /**
     * @generated from field: repeated bytes binaries = 4;
     */
    binaries: Uint8Array[];
    /**
     * @generated from field: map<int64, eventsourcing.v1.DataTableTransaction.Patch> patches = 5;
     */
    patches: {
        [key: string]: DataTableTransaction_Patch;
    };
    constructor(data?: PartialMessage<DataTableTransaction>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.DataTableTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction;
    static equals(a: DataTableTransaction | PlainMessage<DataTableTransaction> | undefined, b: DataTableTransaction | PlainMessage<DataTableTransaction> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.ColumnIndex
 */
export declare class DataTableTransaction_ColumnIndex extends Message<DataTableTransaction_ColumnIndex> {
    /**
     * @generated from field: uint32 table_index = 1;
     */
    tableIndex: number;
    /**
     * @generated from field: uint32 patch_field_index = 2;
     */
    patchFieldIndex: number;
    constructor(data?: PartialMessage<DataTableTransaction_ColumnIndex>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.DataTableTransaction.ColumnIndex";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_ColumnIndex;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_ColumnIndex;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_ColumnIndex;
    static equals(a: DataTableTransaction_ColumnIndex | PlainMessage<DataTableTransaction_ColumnIndex> | undefined, b: DataTableTransaction_ColumnIndex | PlainMessage<DataTableTransaction_ColumnIndex> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairLastEvent
 */
export declare class DataTableTransaction_PairLastEvent extends Message<DataTableTransaction_PairLastEvent> {
    /**
     * @generated from field: eventsourcing.v1.IDPair pair = 1;
     */
    pair?: IDPair;
    /**
     * @generated from field: int64 last_event_ledger_id = 2;
     */
    lastEventLedgerId: bigint;
    constructor(data?: PartialMessage<DataTableTransaction_PairLastEvent>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.DataTableTransaction.PairLastEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_PairLastEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_PairLastEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_PairLastEvent;
    static equals(a: DataTableTransaction_PairLastEvent | PlainMessage<DataTableTransaction_PairLastEvent> | undefined, b: DataTableTransaction_PairLastEvent | PlainMessage<DataTableTransaction_PairLastEvent> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairPatch
 */
export declare class DataTableTransaction_PairPatch extends Message<DataTableTransaction_PairPatch> {
    /**
     * @generated from field: eventsourcing.v1.DataTableTransaction.PairLastEvent pair_last_event = 1;
     */
    pairLastEvent?: DataTableTransaction_PairLastEvent;
    /**
     * @generated from field: repeated eventsourcing.v1.DataTableTransaction.ColumnIndex column_indices = 2;
     */
    columnIndices: DataTableTransaction_ColumnIndex[];
    constructor(data?: PartialMessage<DataTableTransaction_PairPatch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.DataTableTransaction.PairPatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_PairPatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_PairPatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_PairPatch;
    static equals(a: DataTableTransaction_PairPatch | PlainMessage<DataTableTransaction_PairPatch> | undefined, b: DataTableTransaction_PairPatch | PlainMessage<DataTableTransaction_PairPatch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.Patch
 */
export declare class DataTableTransaction_Patch extends Message<DataTableTransaction_Patch> {
    /**
     * @generated from field: repeated eventsourcing.v1.IDPair added_pairs = 1;
     */
    addedPairs: IDPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairLastEvent removed_pairs = 2;
     */
    removedPairs: DataTableTransaction_PairLastEvent[];
    /**
     * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairPatch updated_pair_patches = 3;
     */
    updatedPairPatches: DataTableTransaction_PairPatch[];
    constructor(data?: PartialMessage<DataTableTransaction_Patch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.DataTableTransaction.Patch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataTableTransaction_Patch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataTableTransaction_Patch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataTableTransaction_Patch;
    static equals(a: DataTableTransaction_Patch | PlainMessage<DataTableTransaction_Patch> | undefined, b: DataTableTransaction_Patch | PlainMessage<DataTableTransaction_Patch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.AppendRequest
 */
export declare class AppendRequest extends Message<AppendRequest> {
    /**
     * @generated from field: eventsourcing.v1.DataTableTransaction transaction = 1;
     */
    transaction?: DataTableTransaction;
    constructor(data?: PartialMessage<AppendRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.AppendRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendRequest;
    static equals(a: AppendRequest | PlainMessage<AppendRequest> | undefined, b: AppendRequest | PlainMessage<AppendRequest> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.AppendResponse
 */
export declare class AppendResponse extends Message<AppendResponse> {
    /**
     * @generated from field: int64 event_id = 1;
     */
    eventId: bigint;
    /**
     * @generated from field: bytes integrity = 2;
     */
    integrity: Uint8Array;
    constructor(data?: PartialMessage<AppendResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.AppendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendResponse;
    static equals(a: AppendResponse | PlainMessage<AppendResponse> | undefined, b: AppendResponse | PlainMessage<AppendResponse> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.EventsRequest
 */
export declare class EventsRequest extends Message<EventsRequest> {
    /**
     * @generated from field: int64 last_event_id = 1;
     */
    lastEventId: bigint;
    /**
     * @generated from field: uint32 limit = 2;
     */
    limit: number;
    constructor(data?: PartialMessage<EventsRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EventsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsRequest;
    static equals(a: EventsRequest | PlainMessage<EventsRequest> | undefined, b: EventsRequest | PlainMessage<EventsRequest> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.EventsResponse
 */
export declare class EventsResponse extends Message<EventsResponse> {
    /**
     * @generated from field: repeated eventsourcing.v1.EventsResponse.Event events = 1;
     */
    events: EventsResponse_Event[];
    /**
     * @generated from field: bool has_more = 2;
     */
    hasMore: boolean;
    /**
     * @generated from field: int64 count = 3;
     */
    count: bigint;
    constructor(data?: PartialMessage<EventsResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EventsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse;
    static equals(a: EventsResponse | PlainMessage<EventsResponse> | undefined, b: EventsResponse | PlainMessage<EventsResponse> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.EventsResponse.Event
 */
export declare class EventsResponse_Event extends Message<EventsResponse_Event> {
    /**
     * @generated from field: int64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: bytes integrity = 2;
     */
    integrity: Uint8Array;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: eventsourcing.v1.DataTableTransaction data_table_transaction = 4;
     */
    dataTableTransaction?: DataTableTransaction;
    constructor(data?: PartialMessage<EventsResponse_Event>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EventsResponse.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse_Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static equals(a: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined, b: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined): boolean;
}
