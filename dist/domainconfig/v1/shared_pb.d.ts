import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message domainconfig.v1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * @generated from field: int64 entity = 1;
     */
    entity: bigint;
    /**
     * @generated from field: string label = 2;
     */
    label: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
