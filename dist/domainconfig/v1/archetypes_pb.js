"use strict";
// @generated by protoc-gen-es v0.5.0 with parameter "target=ts"
// @generated from file domainconfig/v1/archetypes.proto (package domainconfig.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchetypeDefinition = exports.ComponentQuery_Filter_Term = exports.ComponentQuery_Filter_Mode = exports.ComponentQuery_Filter = exports.ComponentQuery_Connection_Mode = exports.ComponentQuery_Connection = exports.ComponentQuery = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
const shared_pb_js_1 = require("./shared_pb.js");
/**
 * @generated from message domainconfig.v1.ComponentQuery
 */
class ComponentQuery extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ComponentQuery().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ComponentQuery().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ComponentQuery().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ComponentQuery, a, b);
    }
}
exports.ComponentQuery = ComponentQuery;
ComponentQuery.runtime = protobuf_1.proto3;
ComponentQuery.typeName = "domainconfig.v1.ComponentQuery";
ComponentQuery.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "filter", kind: "message", T: ComponentQuery_Filter },
]);
/**
 * @generated from message domainconfig.v1.ComponentQuery.Connection
 */
class ComponentQuery_Connection extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from oneof domainconfig.v1.ComponentQuery.Connection.connection
         */
        this.connection = { case: undefined };
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ComponentQuery_Connection().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ComponentQuery_Connection().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ComponentQuery_Connection().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ComponentQuery_Connection, a, b);
    }
}
exports.ComponentQuery_Connection = ComponentQuery_Connection;
ComponentQuery_Connection.runtime = protobuf_1.proto3;
ComponentQuery_Connection.typeName = "domainconfig.v1.ComponentQuery.Connection";
ComponentQuery_Connection.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "wildcard", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "connection" },
    { no: 2, name: "any", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "connection" },
    { no: 3, name: "variable", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "connection" },
    { no: 4, name: "entity", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "connection" },
]);
/**
 * @generated from enum domainconfig.v1.ComponentQuery.Connection.Mode
 */
var ComponentQuery_Connection_Mode;
(function (ComponentQuery_Connection_Mode) {
    /**
     * @generated from enum value: MODE_UNSPECIFIED = 0;
     */
    ComponentQuery_Connection_Mode[ComponentQuery_Connection_Mode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: MODE_MANDATORY = 1;
     */
    ComponentQuery_Connection_Mode[ComponentQuery_Connection_Mode["MANDATORY"] = 1] = "MANDATORY";
    /**
     * @generated from enum value: MODE_OPTIONAL = 2;
     */
    ComponentQuery_Connection_Mode[ComponentQuery_Connection_Mode["OPTIONAL"] = 2] = "OPTIONAL";
    /**
     * @generated from enum value: MODE_EXCLUDED = 3;
     */
    ComponentQuery_Connection_Mode[ComponentQuery_Connection_Mode["EXCLUDED"] = 3] = "EXCLUDED";
})(ComponentQuery_Connection_Mode = exports.ComponentQuery_Connection_Mode || (exports.ComponentQuery_Connection_Mode = {}));
// Retrieve enum metadata with: proto3.getEnumType(ComponentQuery_Connection_Mode)
protobuf_1.proto3.util.setEnumType(ComponentQuery_Connection_Mode, "domainconfig.v1.ComponentQuery.Connection.Mode", [
    { no: 0, name: "MODE_UNSPECIFIED" },
    { no: 1, name: "MODE_MANDATORY" },
    { no: 2, name: "MODE_OPTIONAL" },
    { no: 3, name: "MODE_EXCLUDED" },
]);
/**
 * @generated from message domainconfig.v1.ComponentQuery.Filter
 */
class ComponentQuery_Filter extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: domainconfig.v1.ComponentQuery.Filter.Mode mode = 1;
         */
        this.mode = ComponentQuery_Filter_Mode.UNSPECIFIED;
        /**
         * @generated from field: repeated domainconfig.v1.ComponentQuery.Filter.Term terms = 2;
         */
        this.terms = [];
        /**
         * @generated from field: repeated domainconfig.v1.ComponentQuery.Filter nested = 3;
         */
        this.nested = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ComponentQuery_Filter().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ComponentQuery_Filter().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ComponentQuery_Filter().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ComponentQuery_Filter, a, b);
    }
}
exports.ComponentQuery_Filter = ComponentQuery_Filter;
ComponentQuery_Filter.runtime = protobuf_1.proto3;
ComponentQuery_Filter.typeName = "domainconfig.v1.ComponentQuery.Filter";
ComponentQuery_Filter.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "mode", kind: "enum", T: protobuf_1.proto3.getEnumType(ComponentQuery_Filter_Mode) },
    { no: 2, name: "terms", kind: "message", T: ComponentQuery_Filter_Term, repeated: true },
    { no: 3, name: "nested", kind: "message", T: ComponentQuery_Filter, repeated: true },
]);
/**
 * @generated from enum domainconfig.v1.ComponentQuery.Filter.Mode
 */
var ComponentQuery_Filter_Mode;
(function (ComponentQuery_Filter_Mode) {
    /**
     * @generated from enum value: MODE_UNSPECIFIED = 0;
     */
    ComponentQuery_Filter_Mode[ComponentQuery_Filter_Mode["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from enum value: MODE_AND = 1;
     */
    ComponentQuery_Filter_Mode[ComponentQuery_Filter_Mode["AND"] = 1] = "AND";
    /**
     * @generated from enum value: MODE_OR = 2;
     */
    ComponentQuery_Filter_Mode[ComponentQuery_Filter_Mode["OR"] = 2] = "OR";
})(ComponentQuery_Filter_Mode = exports.ComponentQuery_Filter_Mode || (exports.ComponentQuery_Filter_Mode = {}));
// Retrieve enum metadata with: proto3.getEnumType(ComponentQuery_Filter_Mode)
protobuf_1.proto3.util.setEnumType(ComponentQuery_Filter_Mode, "domainconfig.v1.ComponentQuery.Filter.Mode", [
    { no: 0, name: "MODE_UNSPECIFIED" },
    { no: 1, name: "MODE_AND" },
    { no: 2, name: "MODE_OR" },
]);
/**
 * @generated from message domainconfig.v1.ComponentQuery.Filter.Term
 */
class ComponentQuery_Filter_Term extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ComponentQuery_Filter_Term().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ComponentQuery_Filter_Term().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ComponentQuery_Filter_Term().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ComponentQuery_Filter_Term, a, b);
    }
}
exports.ComponentQuery_Filter_Term = ComponentQuery_Filter_Term;
ComponentQuery_Filter_Term.runtime = protobuf_1.proto3;
ComponentQuery_Filter_Term.typeName = "domainconfig.v1.ComponentQuery.Filter.Term";
ComponentQuery_Filter_Term.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "from", kind: "message", T: ComponentQuery_Connection },
    { no: 2, name: "to", kind: "message", T: ComponentQuery_Connection },
]);
/**
 * @generated from message domainconfig.v1.ArchetypeDefinition
 */
class ArchetypeDefinition extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ArchetypeDefinition().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ArchetypeDefinition().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ArchetypeDefinition().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(ArchetypeDefinition, a, b);
    }
}
exports.ArchetypeDefinition = ArchetypeDefinition;
ArchetypeDefinition.runtime = protobuf_1.proto3;
ArchetypeDefinition.typeName = "domainconfig.v1.ArchetypeDefinition";
ArchetypeDefinition.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "message", T: shared_pb_js_1.Metadata },
    { no: 2, name: "root", kind: "message", T: ComponentQuery },
]);
