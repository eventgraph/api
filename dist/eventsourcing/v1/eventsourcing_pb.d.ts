import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { ComponentQuery } from "../../domainconfig/v1/archetypes_pb.js";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
     * @generated from field: int64 integrity = 1;
     */
    integrity: bigint;
    /**
     * @generated from field: repeated eventsourcing.v1.ComponentTransaction.ColumnIndex column_indices = 2;
     */
    columnIndices: ComponentTransaction_ColumnIndex[];
    constructor(data?: PartialMessage<ComponentTransaction_EntityPairPatch>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.ComponentTransaction.Patch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentTransaction_Patch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentTransaction_Patch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentTransaction_Patch;
    static equals(a: ComponentTransaction_Patch | PlainMessage<ComponentTransaction_Patch> | undefined, b: ComponentTransaction_Patch | PlainMessage<ComponentTransaction_Patch> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.UniqueEntityRequest
 */
export declare class UniqueEntityRequest extends Message<UniqueEntityRequest> {
    /**
     * @generated from field: uint32 count = 1;
     */
    count: number;
    constructor(data?: PartialMessage<UniqueEntityRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.UniqueEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniqueEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniqueEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniqueEntityRequest;
    static equals(a: UniqueEntityRequest | PlainMessage<UniqueEntityRequest> | undefined, b: UniqueEntityRequest | PlainMessage<UniqueEntityRequest> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.UniqueEntityResponse
 */
export declare class UniqueEntityResponse extends Message<UniqueEntityResponse> {
    /**
     * @generated from field: repeated int64 entities = 1;
     */
    entities: bigint[];
    constructor(data?: PartialMessage<UniqueEntityResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.UniqueEntityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniqueEntityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniqueEntityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniqueEntityResponse;
    static equals(a: UniqueEntityResponse | PlainMessage<UniqueEntityResponse> | undefined, b: UniqueEntityResponse | PlainMessage<UniqueEntityResponse> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.PatchRequest
 */
export declare class PatchRequest extends Message<PatchRequest> {
    /**
     * @generated from field: eventsourcing.v1.ComponentTransaction transaction = 1;
     */
    transaction?: ComponentTransaction;
    constructor(data?: PartialMessage<PatchRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.PatchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PatchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PatchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PatchRequest;
    static equals(a: PatchRequest | PlainMessage<PatchRequest> | undefined, b: PatchRequest | PlainMessage<PatchRequest> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.PatchResponse
 */
export declare class PatchResponse extends Message<PatchResponse> {
    /**
     * @generated from field: repeated eventsourcing.v1.PatchResponse.EntityPairIntegrityHash updated_entity_pairs = 1;
     */
    updatedEntityPairs: PatchResponse_EntityPairIntegrityHash[];
    constructor(data?: PartialMessage<PatchResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.PatchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PatchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PatchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PatchResponse;
    static equals(a: PatchResponse | PlainMessage<PatchResponse> | undefined, b: PatchResponse | PlainMessage<PatchResponse> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.PatchResponse.EntityPairIntegrityHash
 */
export declare class PatchResponse_EntityPairIntegrityHash extends Message<PatchResponse_EntityPairIntegrityHash> {
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
    constructor(data?: PartialMessage<PatchResponse_EntityPairIntegrityHash>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.PatchResponse.EntityPairIntegrityHash";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PatchResponse_EntityPairIntegrityHash;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PatchResponse_EntityPairIntegrityHash;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PatchResponse_EntityPairIntegrityHash;
    static equals(a: PatchResponse_EntityPairIntegrityHash | PlainMessage<PatchResponse_EntityPairIntegrityHash> | undefined, b: PatchResponse_EntityPairIntegrityHash | PlainMessage<PatchResponse_EntityPairIntegrityHash> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.QueryRequest
 */
export declare class QueryRequest extends Message<QueryRequest> {
    /**
     * @generated from field: domainconfig.v1.ComponentQuery query = 1;
     */
    query?: ComponentQuery;
    /**
     * @generated from field: uint32 limit = 2;
     */
    limit: number;
    constructor(data?: PartialMessage<QueryRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.QueryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest;
    static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean;
}
/**
 * @generated from message eventsourcing.v1.QueryResponse
 */
export declare class QueryResponse extends Message<QueryResponse> {
    /**
     * @generated from field: eventsourcing.v1.ComponentTransaction transaction = 1;
     */
    transaction?: ComponentTransaction;
    constructor(data?: PartialMessage<QueryResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "eventsourcing.v1.QueryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryResponse;
    static equals(a: QueryResponse | PlainMessage<QueryResponse> | undefined, b: QueryResponse | PlainMessage<QueryResponse> | undefined): boolean;
}
