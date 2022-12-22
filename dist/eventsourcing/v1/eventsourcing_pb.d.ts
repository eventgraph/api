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
 * @generated from message eventsourcing.v1.ComponentTransaction.EntityPairPatch
 */
export declare class ComponentTransaction_EntityPairPatch extends Message<ComponentTransaction_EntityPairPatch> {
    /**
     * @generated from field: eventsourcing.v1.EntityPair entity_pair = 1;
     */
    entityPair?: EntityPair;
    /**
     * @generated from field: int64 integrity_hash = 2;
     */
    integrityHash: bigint;
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentTransaction.ColumnIndex column_indices = 3;
     */
    columnIndices: ComponentTransaction_ColumnIndex[];
    constructor(data?: PartialMessage<ComponentTransaction_EntityPairPatch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction.EntityPairPatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction_EntityPairPatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction_EntityPairPatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction_EntityPairPatch;
    static equals(a: ComponentTransaction_EntityPairPatch | PlainMessage<ComponentTransaction_EntityPairPatch> | undefined, b: ComponentTransaction_EntityPairPatch | PlainMessage<ComponentTransaction_EntityPairPatch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.ComponentTransaction.Patch
 */
export declare class ComponentTransaction_Patch extends Message<ComponentTransaction_Patch> {
    /**
     * @generated from field: repeated eventsourcing.v1.EntityPair added_pairs = 1;
     */
    addedPairs: EntityPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.EntityPair removed_pairs = 2;
     */
    removedPairs: EntityPair[];
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentTransaction.EntityPairPatch updated_entity_patches = 3;
     */
    updatedEntityPatches: ComponentTransaction_EntityPairPatch[];
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
     * @generated from field: repeated eventsourcing.v1.AppendResponse.EntityPairIntegrityHash updated_entity_pairs = 1;
     */
    updatedEntityPairs: AppendResponse_EntityPairIntegrityHash[];
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
 * @generated from message eventsourcing.v1.AppendResponse.EntityPairIntegrityHash
 */
export declare class AppendResponse_EntityPairIntegrityHash extends Message<AppendResponse_EntityPairIntegrityHash> {
    /**
     * @generated from field: int64 component_entity = 1;
     */
    componentEntity: bigint;
    /**
     * @generated from field: eventsourcing.v1.EntityPair entity_pair = 2;
     */
    entityPair?: EntityPair;
    /**
     * @generated from field: int64 integrity_hash = 3;
     */
    integrityHash: bigint;
    constructor(data?: PartialMessage<AppendResponse_EntityPairIntegrityHash>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.AppendResponse.EntityPairIntegrityHash";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AppendResponse_EntityPairIntegrityHash;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AppendResponse_EntityPairIntegrityHash;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AppendResponse_EntityPairIntegrityHash;
    static equals(a: AppendResponse_EntityPairIntegrityHash | PlainMessage<AppendResponse_EntityPairIntegrityHash> | undefined, b: AppendResponse_EntityPairIntegrityHash | PlainMessage<AppendResponse_EntityPairIntegrityHash> | undefined): boolean;
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
