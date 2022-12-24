import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
/**
 * @generated from message domainconfig.v1.QueryTerm
 */
export declare class QueryTerm extends Message<QueryTerm> {
    /**
     * @generated from field: int64 component_id = 1;
     */
    componentId: bigint;
    /**
     * @generated from oneof domainconfig.v1.QueryTerm.connection
     */
    connection: {
        /**
         * @generated from field: domainconfig.v1.QueryTerm.EdgeConnection edge = 2;
         */
        value: QueryTerm_EdgeConnection;
        case: "edge";
    } | {
        /**
         * @generated from field: domainconfig.v1.QueryTerm.LeafConnection leaf = 3;
         */
        value: QueryTerm_LeafConnection;
        case: "leaf";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<QueryTerm>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.QueryTerm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerm;
    static equals(a: QueryTerm | PlainMessage<QueryTerm> | undefined, b: QueryTerm | PlainMessage<QueryTerm> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.QueryTerm.Connection
 */
export declare class QueryTerm_Connection extends Message<QueryTerm_Connection> {
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection.Mode mode = 1;
     */
    mode: QueryTerm_Connection_Mode;
    /**
     * @generated from field: int64 value = 2;
     */
    value: bigint;
    constructor(data?: PartialMessage<QueryTerm_Connection>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.QueryTerm.Connection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerm_Connection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerm_Connection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerm_Connection;
    static equals(a: QueryTerm_Connection | PlainMessage<QueryTerm_Connection> | undefined, b: QueryTerm_Connection | PlainMessage<QueryTerm_Connection> | undefined): boolean;
}
/**
 * @generated from enum domainconfig.v1.QueryTerm.Connection.Mode
 */
export declare enum QueryTerm_Connection_Mode {
    /**
     * @generated from enum value: MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MODE_INSTANCE = 1;
     */
    INSTANCE = 1,
    /**
     * @generated from enum value: MODE_INIT_VARIABLE = 2;
     */
    INIT_VARIABLE = 2,
    /**
     * @generated from enum value: MODE_VARIABLE = 3;
     */
    VARIABLE = 3
}
/**
 * @generated from message domainconfig.v1.QueryTerm.EdgeConnection
 */
export declare class QueryTerm_EdgeConnection extends Message<QueryTerm_EdgeConnection> {
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection from_id = 1;
     */
    fromId?: QueryTerm_Connection;
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection to_id = 2;
     */
    toId?: QueryTerm_Connection;
    constructor(data?: PartialMessage<QueryTerm_EdgeConnection>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.QueryTerm.EdgeConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerm_EdgeConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerm_EdgeConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerm_EdgeConnection;
    static equals(a: QueryTerm_EdgeConnection | PlainMessage<QueryTerm_EdgeConnection> | undefined, b: QueryTerm_EdgeConnection | PlainMessage<QueryTerm_EdgeConnection> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.QueryTerm.LeafConnection
 */
export declare class QueryTerm_LeafConnection extends Message<QueryTerm_LeafConnection> {
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection id = 1;
     */
    id?: QueryTerm_Connection;
    constructor(data?: PartialMessage<QueryTerm_LeafConnection>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.QueryTerm.LeafConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTerm_LeafConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTerm_LeafConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTerm_LeafConnection;
    static equals(a: QueryTerm_LeafConnection | PlainMessage<QueryTerm_LeafConnection> | undefined, b: QueryTerm_LeafConnection | PlainMessage<QueryTerm_LeafConnection> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ArchetypeDefinition
 */
export declare class ArchetypeDefinition extends Message<ArchetypeDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: repeated domainconfig.v1.QueryTerm query_terms = 2;
     */
    queryTerms: QueryTerm[];
    constructor(data?: PartialMessage<ArchetypeDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ArchetypeDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchetypeDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchetypeDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchetypeDefinition;
    static equals(a: ArchetypeDefinition | PlainMessage<ArchetypeDefinition> | undefined, b: ArchetypeDefinition | PlainMessage<ArchetypeDefinition> | undefined): boolean;
}
