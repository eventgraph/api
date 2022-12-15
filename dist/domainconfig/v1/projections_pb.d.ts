import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
import { ArchetypeDefinition } from "./archetypes_pb.js";
/**
 * @generated from message domainconfig.v1.ProjectionDefinition
 */
export declare class ProjectionDefinition extends Message<ProjectionDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: domainconfig.v1.ArchetypeDefinition archetype = 2;
     */
    archetype?: ArchetypeDefinition;
    constructor(data?: PartialMessage<ProjectionDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ProjectionDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectionDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectionDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectionDefinition;
    static equals(a: ProjectionDefinition | PlainMessage<ProjectionDefinition> | undefined, b: ProjectionDefinition | PlainMessage<ProjectionDefinition> | undefined): boolean;
}
