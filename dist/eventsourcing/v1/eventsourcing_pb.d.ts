import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message eventsourcing.v1.EntityPair
 */
export declare class EntityPair extends Message<EntityPair> {
    /**
     * @generated from field: int64 from_entity = 1;
     */
    fromEntity: bigint;
    /**
     * @generated from field: int64 to_entity = 2;
     */
    toEntity: bigint;
    constructor(data?: PartialMessage<EntityPair>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EntityPair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityPair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityPair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityPair;
    static equals(a: EntityPair | PlainMessage<EntityPair> | undefined, b: EntityPair | PlainMessage<EntityPair> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentsTransaction
 */
export declare class ComponentsTransaction extends Message<ComponentsTransaction> {
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
     * @generated from field: map<int64, eventsourcing.v1.ComponentsTransaction.Patch> patches = 5;
     */
    patches: {
        [key: string]: ComponentsTransaction_Patch;
    };
    constructor(data?: PartialMessage<ComponentsTransaction>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentsTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentsTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentsTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentsTransaction;
    static equals(a: ComponentsTransaction | PlainMessage<ComponentsTransaction> | undefined, b: ComponentsTransaction | PlainMessage<ComponentsTransaction> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentsTransaction.ColumnIndex
 */
export declare class ComponentsTransaction_ColumnIndex extends Message<ComponentsTransaction_ColumnIndex> {
    /**
     * @generated from field: uint32 table_index = 1;
     */
    tableIndex: number;
    /**
     * @generated from field: uint32 patch_field_index = 2;
     */
    patchFieldIndex: number;
    constructor(data?: PartialMessage<ComponentsTransaction_ColumnIndex>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentsTransaction.ColumnIndex";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentsTransaction_ColumnIndex;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentsTransaction_ColumnIndex;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentsTransaction_ColumnIndex;
    static equals(a: ComponentsTransaction_ColumnIndex | PlainMessage<ComponentsTransaction_ColumnIndex> | undefined, b: ComponentsTransaction_ColumnIndex | PlainMessage<ComponentsTransaction_ColumnIndex> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentsTransaction.PairLastEvent
 */
export declare class ComponentsTransaction_PairLastEvent extends Message<ComponentsTransaction_PairLastEvent> {
    /**
     * @generated from field: eventsourcing.v1.EntityPair pair = 1;
     */
    pair?: EntityPair;
    /**
     * @generated from field: int64 last_event_ledger_id = 2;
     */
    lastEventLedgerId: bigint;
    constructor(data?: PartialMessage<ComponentsTransaction_PairLastEvent>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentsTransaction.PairLastEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentsTransaction_PairLastEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentsTransaction_PairLastEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentsTransaction_PairLastEvent;
    static equals(a: ComponentsTransaction_PairLastEvent | PlainMessage<ComponentsTransaction_PairLastEvent> | undefined, b: ComponentsTransaction_PairLastEvent | PlainMessage<ComponentsTransaction_PairLastEvent> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentsTransaction.PairPatch
 */
export declare class ComponentsTransaction_PairPatch extends Message<ComponentsTransaction_PairPatch> {
    /**
     * @generated from field: eventsourcing.v1.ComponentsTransaction.PairLastEvent pair_last_event = 1;
     */
    pairLastEvent?: ComponentsTransaction_PairLastEvent;
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentsTransaction.ColumnIndex column_indices = 2;
     */
    columnIndices: ComponentsTransaction_ColumnIndex[];
    constructor(data?: PartialMessage<ComponentsTransaction_PairPatch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentsTransaction.PairPatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentsTransaction_PairPatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentsTransaction_PairPatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentsTransaction_PairPatch;
    static equals(a: ComponentsTransaction_PairPatch | PlainMessage<ComponentsTransaction_PairPatch> | undefined, b: ComponentsTransaction_PairPatch | PlainMessage<ComponentsTransaction_PairPatch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentsTransaction.Patch
 */
export declare class ComponentsTransaction_Patch extends Message<ComponentsTransaction_Patch> {
    /**
     * @generated from field: repeated eventsourcing.v1.EntityPair added_pairs = 1;
     */
    addedPairs: EntityPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentsTransaction.PairLastEvent removed_pairs = 2;
     */
    removedPairs: ComponentsTransaction_PairLastEvent[];
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentsTransaction.PairPatch updated_pair_patches = 3;
     */
    updatedPairPatches: ComponentsTransaction_PairPatch[];
    constructor(data?: PartialMessage<ComponentsTransaction_Patch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentsTransaction.Patch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentsTransaction_Patch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentsTransaction_Patch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentsTransaction_Patch;
    static equals(a: ComponentsTransaction_Patch | PlainMessage<ComponentsTransaction_Patch> | undefined, b: ComponentsTransaction_Patch | PlainMessage<ComponentsTransaction_Patch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.AppendRequest
 */
export declare class AppendRequest extends Message<AppendRequest> {
    /**
     * @generated from field: eventsourcing.v1.ComponentsTransaction transaction = 1;
     */
    transaction?: ComponentsTransaction;
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
    /**
     * @generated from field: repeated int64 effected_component_ids = 3;
     */
    effectedComponentIds: bigint[];
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
     * @generated from field: eventsourcing.v1.ComponentsTransaction transaction = 4;
     */
    transaction?: ComponentsTransaction;
    constructor(data?: PartialMessage<EventsResponse_Event>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.EventsResponse.Event";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventsResponse_Event;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventsResponse_Event;
    static equals(a: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined, b: EventsResponse_Event | PlainMessage<EventsResponse_Event> | undefined): boolean;
}
