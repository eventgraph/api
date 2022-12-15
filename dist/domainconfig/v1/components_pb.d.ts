import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
import { DataType } from "./properties_pb.js";
/**
 * @generated from message domainconfig.v1.FieldDefinition
 */
export declare class FieldDefinition extends Message<FieldDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: int64 property_id = 2;
     */
    propertyId: bigint;
    /**
     * @generated from field: repeated domainconfig.v1.DataType property_overrides = 3;
     */
    propertyOverrides: DataType[];
    constructor(data?: PartialMessage<FieldDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.FieldDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldDefinition;
    static equals(a: FieldDefinition | PlainMessage<FieldDefinition> | undefined, b: FieldDefinition | PlainMessage<FieldDefinition> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ComponentDefinition
 */
export declare class ComponentDefinition extends Message<ComponentDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: bool is_edge = 2;
     */
    isEdge: boolean;
    /**
     * @generated from field: repeated domainconfig.v1.FieldDefinition fields = 3;
     */
    fields: FieldDefinition[];
    /**
     * @generated from field: repeated domainconfig.v1.ComponentDefinition.Index indices = 4;
     */
    indices: ComponentDefinition_Index[];
    /**
     * @generated from field: bool disable_history = 5;
     */
    disableHistory: boolean;
    constructor(data?: PartialMessage<ComponentDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentDefinition;
    static equals(a: ComponentDefinition | PlainMessage<ComponentDefinition> | undefined, b: ComponentDefinition | PlainMessage<ComponentDefinition> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ComponentDefinition.IndexEntry
 */
export declare class ComponentDefinition_IndexEntry extends Message<ComponentDefinition_IndexEntry> {
    /**
     * @generated from field: int64 value_index = 1;
     */
    valueIndex: bigint;
    /**
     * @generated from field: bool is_descending = 2;
     */
    isDescending: boolean;
    constructor(data?: PartialMessage<ComponentDefinition_IndexEntry>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentDefinition.IndexEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentDefinition_IndexEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentDefinition_IndexEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentDefinition_IndexEntry;
    static equals(a: ComponentDefinition_IndexEntry | PlainMessage<ComponentDefinition_IndexEntry> | undefined, b: ComponentDefinition_IndexEntry | PlainMessage<ComponentDefinition_IndexEntry> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ComponentDefinition.Index
 */
export declare class ComponentDefinition_Index extends Message<ComponentDefinition_Index> {
    /**
     * @generated from field: repeated domainconfig.v1.ComponentDefinition.IndexEntry entries = 1;
     */
    entries: ComponentDefinition_IndexEntry[];
    constructor(data?: PartialMessage<ComponentDefinition_Index>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ComponentDefinition.Index";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ComponentDefinition_Index;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ComponentDefinition_Index;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ComponentDefinition_Index;
    static equals(a: ComponentDefinition_Index | PlainMessage<ComponentDefinition_Index> | undefined, b: ComponentDefinition_Index | PlainMessage<ComponentDefinition_Index> | undefined): boolean;
}
