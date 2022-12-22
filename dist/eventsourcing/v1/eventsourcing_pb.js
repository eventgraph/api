"use strict";
// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file eventsourcing/v1/eventsourcing.proto (package eventsourcing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsResponse_Event = exports.EventsResponse = exports.EventsRequest = exports.AppendResponse = exports.AppendRequest = exports.DataTableTransaction_Patch = exports.DataTableTransaction_PairPatch = exports.DataTableTransaction_PairLastEvent = exports.DataTableTransaction_ColumnIndex = exports.DataTableTransaction = exports.IDPair = void 0;
const protobuf_1 = require("@bufbuild/protobuf");
/**
 * @generated from message eventsourcing.v1.IDPair
 */
class IDPair extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 from_id = 1;
         */
        this.fromId = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: int64 to_id = 2;
         */
        this.toId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IDPair().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IDPair().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IDPair().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(IDPair, a, b);
    }
}
exports.IDPair = IDPair;
IDPair.runtime = protobuf_1.proto3;
IDPair.typeName = "eventsourcing.v1.IDPair";
IDPair.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "from_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "to_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message eventsourcing.v1.DataTableTransaction
 */
class DataTableTransaction extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated int64 i64s = 1;
         */
        this.i64s = [];
        /**
         * @generated from field: repeated double f64s = 2;
         */
        this.f64s = [];
        /**
         * @generated from field: repeated string texts = 3;
         */
        this.texts = [];
        /**
         * @generated from field: repeated bytes binaries = 4;
         */
        this.binaries = [];
        /**
         * @generated from field: map<int64, eventsourcing.v1.DataTableTransaction.Patch> patches = 5;
         */
        this.patches = {};
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DataTableTransaction().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DataTableTransaction().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DataTableTransaction().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DataTableTransaction, a, b);
    }
}
exports.DataTableTransaction = DataTableTransaction;
DataTableTransaction.runtime = protobuf_1.proto3;
DataTableTransaction.typeName = "eventsourcing.v1.DataTableTransaction";
DataTableTransaction.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "i64s", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 2, name: "f64s", kind: "scalar", T: 1 /* ScalarType.DOUBLE */, repeated: true },
    { no: 3, name: "texts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "binaries", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 5, name: "patches", kind: "map", K: 3 /* ScalarType.INT64 */, V: { kind: "message", T: DataTableTransaction_Patch } },
]);
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.ColumnIndex
 */
class DataTableTransaction_ColumnIndex extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint32 table_index = 1;
         */
        this.tableIndex = 0;
        /**
         * @generated from field: uint32 patch_field_index = 2;
         */
        this.patchFieldIndex = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DataTableTransaction_ColumnIndex().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DataTableTransaction_ColumnIndex().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DataTableTransaction_ColumnIndex().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DataTableTransaction_ColumnIndex, a, b);
    }
}
exports.DataTableTransaction_ColumnIndex = DataTableTransaction_ColumnIndex;
DataTableTransaction_ColumnIndex.runtime = protobuf_1.proto3;
DataTableTransaction_ColumnIndex.typeName = "eventsourcing.v1.DataTableTransaction.ColumnIndex";
DataTableTransaction_ColumnIndex.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "table_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "patch_field_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairLastEvent
 */
class DataTableTransaction_PairLastEvent extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 last_event_ledger_id = 2;
         */
        this.lastEventLedgerId = protobuf_1.protoInt64.zero;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DataTableTransaction_PairLastEvent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DataTableTransaction_PairLastEvent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DataTableTransaction_PairLastEvent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DataTableTransaction_PairLastEvent, a, b);
    }
}
exports.DataTableTransaction_PairLastEvent = DataTableTransaction_PairLastEvent;
DataTableTransaction_PairLastEvent.runtime = protobuf_1.proto3;
DataTableTransaction_PairLastEvent.typeName = "eventsourcing.v1.DataTableTransaction.PairLastEvent";
DataTableTransaction_PairLastEvent.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "pair", kind: "message", T: IDPair },
    { no: 2, name: "last_event_ledger_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.PairPatch
 */
class DataTableTransaction_PairPatch extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated eventsourcing.v1.DataTableTransaction.ColumnIndex column_indices = 2;
         */
        this.columnIndices = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DataTableTransaction_PairPatch().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DataTableTransaction_PairPatch().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DataTableTransaction_PairPatch().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DataTableTransaction_PairPatch, a, b);
    }
}
exports.DataTableTransaction_PairPatch = DataTableTransaction_PairPatch;
DataTableTransaction_PairPatch.runtime = protobuf_1.proto3;
DataTableTransaction_PairPatch.typeName = "eventsourcing.v1.DataTableTransaction.PairPatch";
DataTableTransaction_PairPatch.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "pair_last_event", kind: "message", T: DataTableTransaction_PairLastEvent },
    { no: 2, name: "column_indices", kind: "message", T: DataTableTransaction_ColumnIndex, repeated: true },
]);
/**
 * @generated from message eventsourcing.v1.DataTableTransaction.Patch
 */
class DataTableTransaction_Patch extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated eventsourcing.v1.IDPair added_pairs = 1;
         */
        this.addedPairs = [];
        /**
         * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairLastEvent removed_pairs = 2;
         */
        this.removedPairs = [];
        /**
         * @generated from field: repeated eventsourcing.v1.DataTableTransaction.PairPatch updated_pair_patches = 3;
         */
        this.updatedPairPatches = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DataTableTransaction_Patch().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DataTableTransaction_Patch().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DataTableTransaction_Patch().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(DataTableTransaction_Patch, a, b);
    }
}
exports.DataTableTransaction_Patch = DataTableTransaction_Patch;
DataTableTransaction_Patch.runtime = protobuf_1.proto3;
DataTableTransaction_Patch.typeName = "eventsourcing.v1.DataTableTransaction.Patch";
DataTableTransaction_Patch.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "added_pairs", kind: "message", T: IDPair, repeated: true },
    { no: 2, name: "removed_pairs", kind: "message", T: DataTableTransaction_PairLastEvent, repeated: true },
    { no: 3, name: "updated_pair_patches", kind: "message", T: DataTableTransaction_PairPatch, repeated: true },
]);
/**
 * @generated from message eventsourcing.v1.AppendRequest
 */
class AppendRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AppendRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AppendRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AppendRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AppendRequest, a, b);
    }
}
exports.AppendRequest = AppendRequest;
AppendRequest.runtime = protobuf_1.proto3;
AppendRequest.typeName = "eventsourcing.v1.AppendRequest";
AppendRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "transaction", kind: "message", T: DataTableTransaction },
]);
/**
 * @generated from message eventsourcing.v1.AppendResponse
 */
class AppendResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 last_event_ledger_id = 1;
         */
        this.lastEventLedgerId = protobuf_1.protoInt64.zero;
        /**
         * @generated from field: bytes integrity = 2;
         */
        this.integrity = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AppendResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AppendResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AppendResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(AppendResponse, a, b);
    }
}
exports.AppendResponse = AppendResponse;
AppendResponse.runtime = protobuf_1.proto3;
AppendResponse.typeName = "eventsourcing.v1.AppendResponse";
AppendResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "last_event_ledger_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "integrity", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * @generated from message eventsourcing.v1.EventsRequest
 */
class EventsRequest extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint32 last_transaction_id = 1;
         */
        this.lastTransactionId = 0;
        /**
         * @generated from field: uint32 limit = 2;
         */
        this.limit = 0;
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventsRequest, a, b);
    }
}
exports.EventsRequest = EventsRequest;
EventsRequest.runtime = protobuf_1.proto3;
EventsRequest.typeName = "eventsourcing.v1.EventsRequest";
EventsRequest.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "last_transaction_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
]);
/**
 * @generated from message eventsourcing.v1.EventsResponse
 */
class EventsResponse extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated eventsourcing.v1.EventsResponse.Event events = 1;
         */
        this.events = [];
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventsResponse, a, b);
    }
}
exports.EventsResponse = EventsResponse;
EventsResponse.runtime = protobuf_1.proto3;
EventsResponse.typeName = "eventsourcing.v1.EventsResponse";
EventsResponse.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "events", kind: "message", T: EventsResponse_Event, repeated: true },
]);
/**
 * @generated from message eventsourcing.v1.EventsResponse.Event
 */
class EventsResponse_Event extends protobuf_1.Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint32 transaction_id = 1;
         */
        this.transactionId = 0;
        /**
         * @generated from field: bytes integrity = 2;
         */
        this.integrity = new Uint8Array(0);
        protobuf_1.proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventsResponse_Event().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventsResponse_Event().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventsResponse_Event().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return protobuf_1.proto3.util.equals(EventsResponse_Event, a, b);
    }
}
exports.EventsResponse_Event = EventsResponse_Event;
EventsResponse_Event.runtime = protobuf_1.proto3;
EventsResponse_Event.typeName = "eventsourcing.v1.EventsResponse.Event";
EventsResponse_Event.fields = protobuf_1.proto3.util.newFieldList(() => [
    { no: 1, name: "transaction_id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "integrity", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "created_at", kind: "message", T: protobuf_1.Timestamp },
    { no: 4, name: "data_table_transaction", kind: "message", T: DataTableTransaction },
]);
