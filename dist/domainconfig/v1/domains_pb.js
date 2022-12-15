"use strict";
// @generated by protoc-gen-es v0.5.0 with parameter "target=ts"
// @generated from file domainconfig/v1/domains.proto (package domainconfig.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainDefinitions = exports.DomainDefinition = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const shared_pb_js_1 = require("./shared_pb.js");
const services_pb_js_1 = require("./services_pb.js");
/**
 * @generated from message domainconfig.v1.DomainDefinition
 */
class DomainDefinition extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated domainconfig.v1.ServiceDefinition services = 3;
         */
        this.services = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DomainDefinition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DomainDefinition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DomainDefinition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DomainDefinition, a, b);
    }
}
exports.DomainDefinition = DomainDefinition;
DomainDefinition.runtime = protobuf_1.proto3;
DomainDefinition.typeName = "domainconfig.v1.DomainDefinition";
DomainDefinition.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: shared_pb_js_1.Metadata },
    { no: 3, name: "services", kind: "message", T: services_pb_js_1.ServiceDefinition, repeated: true },
]);
/**
 * @generated from message domainconfig.v1.DomainDefinitions
 */
class DomainDefinitions extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated domainconfig.v1.DomainDefinition domains = 2;
         */
        this.domains = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DomainDefinitions().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DomainDefinitions().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DomainDefinitions().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DomainDefinitions, a, b);
    }
}
exports.DomainDefinitions = DomainDefinitions;
DomainDefinitions.runtime = protobuf_1.proto3;
DomainDefinitions.typeName = "domainconfig.v1.DomainDefinitions";
DomainDefinitions.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: shared_pb_js_1.Metadata },
    { no: 2, name: "domains", kind: "message", T: DomainDefinition, repeated: true },
]);