import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
/**
 * @generated from message domainconfig.v1.DataType
 */
export declare class DataType extends Message<DataType> {
    /**
     * @generated from oneof domainconfig.v1.DataType.value
     */
    value: {
        /**
         * @generated from field: bool no_value = 1;
         */
        value: boolean;
        case: "noValue";
    } | {
        /**
         * @generated from field: int64 i64 = 2;
         */
        value: bigint;
        case: "i64";
    } | {
        /**
         * @generated from field: double f64 = 3;
         */
        value: number;
        case: "f64";
    } | {
        /**
         * @generated from field: string text = 4;
         */
        value: string;
        case: "text";
    } | {
        /**
         * @generated from field: bytes binary = 5;
         */
        value: Uint8Array;
        case: "binary";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<DataType>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.DataType";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DataType;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DataType;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DataType;
    static equals(a: DataType | PlainMessage<DataType> | undefined, b: DataType | PlainMessage<DataType> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.ValueDefinition
 */
export declare class ValueDefinition extends Message<ValueDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: domainconfig.v1.DataType data_type = 2;
     */
    dataType?: DataType;
    constructor(data?: PartialMessage<ValueDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ValueDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValueDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValueDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValueDefinition;
    static equals(a: ValueDefinition | PlainMessage<ValueDefinition> | undefined, b: ValueDefinition | PlainMessage<ValueDefinition> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.PropertyDefinition
 */
export declare class PropertyDefinition extends Message<PropertyDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * Version version = 2;
     *
     * @generated from field: repeated domainconfig.v1.ValueDefinition values = 3;
     */
    values: ValueDefinition[];
    constructor(data?: PartialMessage<PropertyDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.PropertyDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PropertyDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PropertyDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PropertyDefinition;
    static equals(a: PropertyDefinition | PlainMessage<PropertyDefinition> | undefined, b: PropertyDefinition | PlainMessage<PropertyDefinition> | undefined): boolean;
}
