import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
/**
 * @generated from message domainconfig.v1.QueryTerm
 */
export declare class QueryTerm extends Message<QueryTerm> {
    /**
     * @generated from field: int64 component_entity = 1;
     */
    componentEntity: bigint;
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection from_entity = 2;
     */
    fromEntity?: QueryTerm_Connection;
    /**
     * @generated from field: domainconfig.v1.QueryTerm.Connection to_entity = 3;
     */
    toEntity?: QueryTerm_Connection;
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
     * @generated from oneof domainconfig.v1.QueryTerm.Connection.mode
     */
    mode: {
        /**
         * @generated from field: bool empty = 1;
         */
        value: boolean;
        case: "empty";
    } | {
        /**
         * @generated from field: int64 instance = 2;
         */
        value: bigint;
        case: "instance";
    } | {
        /**
         * @generated from field: string init_variable = 3;
         */
        value: string;
        case: "initVariable";
    } | {
        /**
         * @generated from field: string variable = 4;
         */
        value: string;
        case: "variable";
    } | {
        case: undefined;
        value?: undefined;
    };
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
