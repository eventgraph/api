// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: domainconfig/v1/projections.proto

package domainconfigv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ProjectionDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata  *Metadata            `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Archetype *ArchetypeDefinition `protobuf:"bytes,2,opt,name=archetype,proto3" json:"archetype,omitempty"`
}

func (x *ProjectionDefinition) Reset() {
	*x = ProjectionDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_projections_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProjectionDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProjectionDefinition) ProtoMessage() {}

func (x *ProjectionDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_projections_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProjectionDefinition.ProtoReflect.Descriptor instead.
func (*ProjectionDefinition) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_projections_proto_rawDescGZIP(), []int{0}
}

func (x *ProjectionDefinition) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *ProjectionDefinition) GetArchetype() *ArchetypeDefinition {
	if x != nil {
		return x.Archetype
	}
	return nil
}

var File_domainconfig_v1_projections_proto protoreflect.FileDescriptor

var file_domainconfig_v1_projections_proto_rawDesc = []byte{
	0x0a, 0x21, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76,
	0x31, 0x2f, 0x70, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x0f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x2e, 0x76, 0x31, 0x1a, 0x20, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x72, 0x63, 0x68, 0x65, 0x74, 0x79, 0x70, 0x65, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x91, 0x01, 0x0a, 0x14, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a,
	0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x19, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76,
	0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x12, 0x42, 0x0a, 0x09, 0x61, 0x72, 0x63, 0x68, 0x65, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x24, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e,
	0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x41, 0x72, 0x63, 0x68, 0x65, 0x74,
	0x79, 0x70, 0x65, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x09, 0x61,
	0x72, 0x63, 0x68, 0x65, 0x74, 0x79, 0x70, 0x65, 0x42, 0xcb, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d,
	0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31,
	0x42, 0x10, 0x50, 0x72, 0x6f, 0x6a, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x45, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x67, 0x72, 0x61, 0x70, 0x68, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x67, 0x65, 0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x6f, 0x6d,
	0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x3b, 0x64, 0x6f, 0x6d,
	0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x44, 0x58,
	0x58, 0xaa, 0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x2e, 0x56, 0x31, 0xca, 0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1b, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f,
	0x6e, 0x66, 0x69, 0x67, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x10, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_domainconfig_v1_projections_proto_rawDescOnce sync.Once
	file_domainconfig_v1_projections_proto_rawDescData = file_domainconfig_v1_projections_proto_rawDesc
)

func file_domainconfig_v1_projections_proto_rawDescGZIP() []byte {
	file_domainconfig_v1_projections_proto_rawDescOnce.Do(func() {
		file_domainconfig_v1_projections_proto_rawDescData = protoimpl.X.CompressGZIP(file_domainconfig_v1_projections_proto_rawDescData)
	})
	return file_domainconfig_v1_projections_proto_rawDescData
}

var file_domainconfig_v1_projections_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_domainconfig_v1_projections_proto_goTypes = []interface{}{
	(*ProjectionDefinition)(nil), // 0: domainconfig.v1.ProjectionDefinition
	(*Metadata)(nil),             // 1: domainconfig.v1.Metadata
	(*ArchetypeDefinition)(nil),  // 2: domainconfig.v1.ArchetypeDefinition
}
var file_domainconfig_v1_projections_proto_depIdxs = []int32{
	1, // 0: domainconfig.v1.ProjectionDefinition.metadata:type_name -> domainconfig.v1.Metadata
	2, // 1: domainconfig.v1.ProjectionDefinition.archetype:type_name -> domainconfig.v1.ArchetypeDefinition
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_domainconfig_v1_projections_proto_init() }
func file_domainconfig_v1_projections_proto_init() {
	if File_domainconfig_v1_projections_proto != nil {
		return
	}
	file_domainconfig_v1_archetypes_proto_init()
	file_domainconfig_v1_shared_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_domainconfig_v1_projections_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProjectionDefinition); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_domainconfig_v1_projections_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_domainconfig_v1_projections_proto_goTypes,
		DependencyIndexes: file_domainconfig_v1_projections_proto_depIdxs,
		MessageInfos:      file_domainconfig_v1_projections_proto_msgTypes,
	}.Build()
	File_domainconfig_v1_projections_proto = out.File
	file_domainconfig_v1_projections_proto_rawDesc = nil
	file_domainconfig_v1_projections_proto_goTypes = nil
	file_domainconfig_v1_projections_proto_depIdxs = nil
}
