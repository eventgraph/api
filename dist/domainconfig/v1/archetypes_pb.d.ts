import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
/**
 * @generated from message domainconfig.v1.ComponentQuery
 */
export declare class ComponentQuery extends Message<ComponentQuery> {
    /**
     * @generated from field: domainconfig.v1.ComponentQuery.Filter filter = 1;
     */
    filter?: ComponentQuery_Filter;
    constructor(data?: PartialMessage<ComponentQuery>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentQuery";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentQuery;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentQuery;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentQuery;
    static equals(a: ComponentQuery | PlainMessage<ComponentQuery> | undefined, b: ComponentQuery | PlainMessage<ComponentQuery> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ComponentQuery.Connection
 */
export declare class ComponentQuery_Connection extends Message<ComponentQuery_Connection> {
    /**
     * @generated from oneof domainconfig.v1.ComponentQuery.Connection.connection
     */
    connection: {
        /**
         * @generated from field: string variable = 1;
         */
        value: string;
        case: "variable";
    } | {
        /**
         * @generated from field: int64 entity = 2;
         */
        value: bigint;
        case: "entity";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ComponentQuery_Connection>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentQuery.Connection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentQuery_Connection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentQuery_Connection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentQuery_Connection;
    static equals(a: ComponentQuery_Connection | PlainMessage<ComponentQuery_Connection> | undefined, b: ComponentQuery_Connection | PlainMessage<ComponentQuery_Connection> | undefined): boolean;
}
/**
 * @generated from enum domainconfig.v1.ComponentQuery.Connection.Mode
 */
export declare enum ComponentQuery_Connection_Mode {
    /**
     * @generated from enum value: MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MODE_MANDATORY = 1;
     */
    MANDATORY = 1,
    /**
     * @generated from enum value: MODE_OPTIONAL = 2;
     */
    OPTIONAL = 2,
    /**
     * @generated from enum value: MODE_EXCLUDED = 3;
     */
    EXCLUDED = 3
}
/**
 * @generated from message domainconfig.v1.ComponentQuery.Filter
 */
export declare class ComponentQuery_Filter extends Message<ComponentQuery_Filter> {
    /**
     * @generated from field: domainconfig.v1.ComponentQuery.Filter.Mode mode = 1;
     */
    mode: ComponentQuery_Filter_Mode;
    /**
     * @generated from field: repeated domainconfig.v1.ComponentQuery.Filter.Term terms = 2;
     */
    terms: ComponentQuery_Filter_Term[];
    /**
     * @generated from field: repeated domainconfig.v1.ComponentQuery.Filter nested = 3;
     */
    nested: ComponentQuery_Filter[];
    constructor(data?: PartialMessage<ComponentQuery_Filter>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentQuery.Filter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentQuery_Filter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentQuery_Filter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentQuery_Filter;
    static equals(a: ComponentQuery_Filter | PlainMessage<ComponentQuery_Filter> | undefined, b: ComponentQuery_Filter | PlainMessage<ComponentQuery_Filter> | undefined): boolean;
}
/**
 * @generated from enum domainconfig.v1.ComponentQuery.Filter.Mode
 */
export declare enum ComponentQuery_Filter_Mode {
    /**
     * @generated from enum value: MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MODE_AND = 1;
     */
    AND = 1,
    /**
     * @generated from enum value: MODE_OR = 2;
     */
    OR = 2
}
/**
 * @generated from message domainconfig.v1.ComponentQuery.Filter.Term
 */
export declare class ComponentQuery_Filter_Term extends Message<ComponentQuery_Filter_Term> {
    /**
     * @generated from field: int64 component_id = 1;
     */
    componentId: bigint;
    /**
     * @generated from field: domainconfig.v1.ComponentQuery.Connection from = 2;
     */
    from?: ComponentQuery_Connection;
    /**
     * @generated from field: domainconfig.v1.ComponentQuery.Connection to = 3;
     */
    to?: ComponentQuery_Connection;
    constructor(data?: PartialMessage<ComponentQuery_Filter_Term>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentQuery.Filter.Term";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentQuery_Filter_Term;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentQuery_Filter_Term;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentQuery_Filter_Term;
    static equals(a: ComponentQuery_Filter_Term | PlainMessage<ComponentQuery_Filter_Term> | undefined, b: ComponentQuery_Filter_Term | PlainMessage<ComponentQuery_Filter_Term> | undefined): boolean;
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
     * @generated from field: domainconfig.v1.ComponentQuery root = 2;
     */
    root?: ComponentQuery;
    constructor(data?: PartialMessage<ArchetypeDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ArchetypeDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ArchetypeDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ArchetypeDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ArchetypeDefinition;
    static equals(a: ArchetypeDefinition | PlainMessage<ArchetypeDefinition> | undefined, b: ArchetypeDefinition | PlainMessage<ArchetypeDefinition> | undefined): boolean;
}
