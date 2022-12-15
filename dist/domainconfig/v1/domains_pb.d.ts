import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Metadata } from "./shared_pb.js";
import { ServiceDefinition } from "./services_pb.js";
/**
 * @generated from message domainconfig.v1.DomainDefinition
 */
export declare class DomainDefinition extends Message<DomainDefinition> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: repeated domainconfig.v1.ServiceDefinition services = 3;
     */
    services: ServiceDefinition[];
    constructor(data?: PartialMessage<DomainDefinition>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.DomainDefinition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainDefinition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainDefinition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainDefinition;
    static equals(a: DomainDefinition | PlainMessage<DomainDefinition> | undefined, b: DomainDefinition | PlainMessage<DomainDefinition> | undefined): boolean;
}
/**
 * @generated from message domainconfig.v1.DomainDefinitions
 */
export declare class DomainDefinitions extends Message<DomainDefinitions> {
    /**
     * @generated from field: domainconfig.v1.Metadata metadata = 1;
     */
    metadata?: Metadata;
    /**
     * @generated from field: repeated domainconfig.v1.DomainDefinition domains = 2;
     */
    domains: DomainDefinition[];
    constructor(data?: PartialMessage<DomainDefinitions>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "domainconfig.v1.DomainDefinitions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainDefinitions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainDefinitions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainDefinitions;
    static equals(a: DomainDefinitions | PlainMessage<DomainDefinitions> | undefined, b: DomainDefinitions | PlainMessage<DomainDefinitions> | undefined): boolean;
}
