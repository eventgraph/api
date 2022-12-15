// @generated by protoc-gen-connect-web v0.4.0
// @generated from file eventsourcing/v1/eventsourcing.proto (package eventsourcing.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PatchRequest, PatchResponse, QueryRequest, QueryResponse, UniqueEntityRequest, UniqueEntityResponse } from "./eventsourcing_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service eventsourcing.v1.EventStoreService
 */
export const EventStoreService = {
  typeName: "eventsourcing.v1.EventStoreService",
  methods: {
    /**
     * @generated from rpc eventsourcing.v1.EventStoreService.UniqueEntity
     */
    uniqueEntity: {
      name: "UniqueEntity",
      I: UniqueEntityRequest,
      O: UniqueEntityResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc eventsourcing.v1.EventStoreService.Patch
     */
    patch: {
      name: "Patch",
      I: PatchRequest,
      O: PatchResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc eventsourcing.v1.EventStoreService.Query
     */
    query: {
      name: "Query",
      I: QueryRequest,
      O: QueryResponse,
      kind: MethodKind.Unary,
    },
  }
};

