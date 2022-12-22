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
 * @generated from message eventsourcing.v1.ComponentTransaction
 */
export declare class ComponentTransaction extends Message<ComponentTransaction> {
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
     * @generated from field: map<int64, eventsourcing.v1.ComponentTransaction.Patch> component_patches = 5;
     */
    componentPatches: {
        [key: string]: ComponentTransaction_Patch;
    };
    constructor(data?: PartialMessage<ComponentTransaction>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction;
    static equals(a: ComponentTransaction | PlainMessage<ComponentTransaction> | undefined, b: ComponentTransaction | PlainMessage<ComponentTransaction> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentTransaction.ColumnIndex
 */
export declare class ComponentTransaction_ColumnIndex extends Message<ComponentTransaction_ColumnIndex> {
    /**
     * @generated from field: uint32 table_index = 1;
     */
    tableIndex: number;
    /**
     * @generated from field: uint32 patch_field_index = 2;
     */
    patchFieldIndex: number;
    constructor(data?: PartialMessage<ComponentTransaction_ColumnIndex>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction.ColumnIndex";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction_ColumnIndex;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction_ColumnIndex;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction_ColumnIndex;
    static equals(a: ComponentTransaction_ColumnIndex | PlainMessage<ComponentTransaction_ColumnIndex> | undefined, b: ComponentTransaction_ColumnIndex | PlainMessage<ComponentTransaction_ColumnIndex> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentTransaction.IDPairPatch
 */
export declare class ComponentTransaction_IDPairPatch extends Message<ComponentTransaction_IDPairPatch> {
    /**
     * @generated from field: eventsourcing.v1.IDPair pair = 1;
     */
    pair?: IDPair;
    /**
     * @generated from field: bytes integrity_hash = 2;
     */
    integrityHash: Uint8Array;
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentTransaction.ColumnIndex column_indices = 3;
     */
    columnIndices: ComponentTransaction_ColumnIndex[];
    constructor(data?: PartialMessage<ComponentTransaction_IDPairPatch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction.IDPairPatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction_IDPairPatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction_IDPairPatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction_IDPairPatch;
    static equals(a: ComponentTransaction_IDPairPatch | PlainMessage<ComponentTransaction_IDPairPatch> | undefined, b: ComponentTransaction_IDPairPatch | PlainMessage<ComponentTransaction_IDPairPatch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentTransaction.Patch
 */
export declare class ComponentTransaction_Patch extends Message<ComponentTransaction_Patch> {
    /**
     * @generated from field: repeated eventsourcing.v1.IDPair added_pairs = 1;
     */
    addedPairs: IDPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.IDPair removed_pairs = 2;
     */
    removedPairs: IDPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentTransaction.IDPairPatch updated_pair_patches = 3;
     */
    updatedPairPatches: ComponentTransaction_IDPairPatch[];
    constructor(data?: PartialMessage<ComponentTransaction_Patch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction.Patch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction_Patch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction_Patch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction_Patch;
    static equals(a: ComponentTransaction_Patch | PlainMessage<ComponentTransaction_Patch> | undefined, b: ComponentTransaction_Patch | PlainMessage<ComponentTransaction_Patch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.AppendRequest
 */
export declare class AppendRequest extends Message<AppendRequest> {
    /**
     * @generated from field: eventsourcing.v1.ComponentTransaction transaction = 1;
     */
    transaction?: ComponentTransaction;
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
     * @generated from field: repeated eventsourcing.v1.AppendResponse.IDPairIntegrity updated_pairs = 1;
     */
    updatedPairs: AppendResponse_IDPairIntegrity[];
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
 * @generated from message eventsourcing.v1.AppendResponse.IDPairIntegrity
 */
export declare class AppendResponse_IDPairIntegrity extends Message<AppendResponse_IDPairIntegrity> {
    /**
     * @generated from field: int64 component_id = 1;
     */
    componentId: bigint;
    /**
     * @generated from field: eventsourcing.v1.IDPair pair = 2;
     */
    pair?: IDPair;
    /**
     * @generated from field: bytes integrity_hash = 3;
     */
    integrityHash: Uint8Array;
    constructor(data?: PartialMessage<AppendResponse_IDPairIntegrity>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.AppendResponse.IDPairIntegrity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendResponse_IDPairIntegrity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendResponse_IDPairIntegrity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendResponse_IDPairIntegrity;
    static equals(a: AppendResponse_IDPairIntegrity | PlainMessage<AppendResponse_IDPairIntegrity> | undefined, b: AppendResponse_IDPairIntegrity | PlainMessage<AppendResponse_IDPairIntegrity> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.EventsRequest
 */
export declare class EventsRequest extends Message<EventsRequest> {
    /**
     * @generated from field: uint32 last_transaction_id = 1;
     */
    lastTransactionId: number;
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
     * @generated from field: uint32 transaction_id = 1;
     */
    transactionId: number;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 2;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: eventsourcing.v1.ComponentTransaction component_transaction = 3;
     */
    componentTransaction?: ComponentTransaction;
    constructor(data?: PartialMessage<EventsResponse_Event>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EventsResponse.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse_Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static equals(a: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined, b: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined): boolean;
}
