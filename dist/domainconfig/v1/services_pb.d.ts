import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
import { PropertyDefinition } from "./properties_pb.js";
import { ComponentDefinition } from "./components_pb.js";
import { ArchetypeDefinition } from "./archetypes_pb.js";
import { ProjectionDefinition } from "./projections_pb.js";
/**
 * @generated from message domainconfig.v1.ServiceDefinition
 */
export declare class ServiceDefinition extends Message<ServiceDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: repeated domainconfig.v1.PropertyDefinition properties = 3;
     */
    properties: PropertyDefinition[];
    /**
     * @generated from field: repeated domainconfig.v1.ComponentDefinition components = 4;
     */
    components: ComponentDefinition[];
    /**
     * @generated from field: repeated domainconfig.v1.ArchetypeDefinition archetypes = 5;
     */
    archetypes: ArchetypeDefinition[];
    /**
     * @generated from field: repeated domainconfig.v1.ProjectionDefinition projections = 6;
     */
    projections: ProjectionDefinition[];
    constructor(data?: PartialMessage<ServiceDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.ServiceDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceDefinition;
    static equals(a: ServiceDefinition | PlainMessage<ServiceDefinition> | undefined, b: ServiceDefinition | PlainMessage<ServiceDefinition> | undefined): boolean;
}
