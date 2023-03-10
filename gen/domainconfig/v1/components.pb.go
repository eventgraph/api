// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: domainconfig/v1/components.proto

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

type FieldDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata          *Metadata   `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	PropertyEntity    int64       `protobuf:"varint,2,opt,name=property_entity,json=propertyEntity,proto3" json:"property_entity,omitempty"`
	PropertyOverrides []*DataType `protobuf:"bytes,3,rep,name=property_overrides,json=propertyOverrides,proto3" json:"property_overrides,omitempty"`
}

func (x *FieldDefinition) Reset() {
	*x = FieldDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_components_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FieldDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FieldDefinition) ProtoMessage() {}

func (x *FieldDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_components_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FieldDefinition.ProtoReflect.Descriptor instead.
func (*FieldDefinition) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_components_proto_rawDescGZIP(), []int{0}
}

func (x *FieldDefinition) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *FieldDefinition) GetPropertyEntity() int64 {
	if x != nil {
		return x.PropertyEntity
	}
	return 0
}

func (x *FieldDefinition) GetPropertyOverrides() []*DataType {
	if x != nil {
		return x.PropertyOverrides
	}
	return nil
}

type ComponentDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata       *Metadata                    `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Fields         []*FieldDefinition           `protobuf:"bytes,2,rep,name=fields,proto3" json:"fields,omitempty"`
	Indices        []*ComponentDefinition_Index `protobuf:"bytes,3,rep,name=indices,proto3" json:"indices,omitempty"`
	DisableHistory bool                         `protobuf:"varint,4,opt,name=disable_history,json=disableHistory,proto3" json:"disable_history,omitempty"`
}

func (x *ComponentDefinition) Reset() {
	*x = ComponentDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_components_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ComponentDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ComponentDefinition) ProtoMessage() {}

func (x *ComponentDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_components_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ComponentDefinition.ProtoReflect.Descriptor instead.
func (*ComponentDefinition) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_components_proto_rawDescGZIP(), []int{1}
}

func (x *ComponentDefinition) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *ComponentDefinition) GetFields() []*FieldDefinition {
	if x != nil {
		return x.Fields
	}
	return nil
}

func (x *ComponentDefinition) GetIndices() []*ComponentDefinition_Index {
	if x != nil {
		return x.Indices
	}
	return nil
}

func (x *ComponentDefinition) GetDisableHistory() bool {
	if x != nil {
		return x.DisableHistory
	}
	return false
}

type ComponentDefinition_IndexEntry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ValueIndex   int64 `protobuf:"varint,1,opt,name=value_index,json=valueIndex,proto3" json:"value_index,omitempty"`
	IsDescending bool  `protobuf:"varint,2,opt,name=is_descending,json=isDescending,proto3" json:"is_descending,omitempty"`
}

func (x *ComponentDefinition_IndexEntry) Reset() {
	*x = ComponentDefinition_IndexEntry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_components_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ComponentDefinition_IndexEntry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ComponentDefinition_IndexEntry) ProtoMessage() {}

func (x *ComponentDefinition_IndexEntry) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_components_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ComponentDefinition_IndexEntry.ProtoReflect.Descriptor instead.
func (*ComponentDefinition_IndexEntry) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_components_proto_rawDescGZIP(), []int{1, 0}
}

func (x *ComponentDefinition_IndexEntry) GetValueIndex() int64 {
	if x != nil {
		return x.ValueIndex
	}
	return 0
}

func (x *ComponentDefinition_IndexEntry) GetIsDescending() bool {
	if x != nil {
		return x.IsDescending
	}
	return false
}

type ComponentDefinition_Index struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Entries []*ComponentDefinition_IndexEntry `protobuf:"bytes,1,rep,name=entries,proto3" json:"entries,omitempty"`
}

func (x *ComponentDefinition_Index) Reset() {
	*x = ComponentDefinition_Index{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_components_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ComponentDefinition_Index) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ComponentDefinition_Index) ProtoMessage() {}

func (x *ComponentDefinition_Index) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_components_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ComponentDefinition_Index.ProtoReflect.Descriptor instead.
func (*ComponentDefinition_Index) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_components_proto_rawDescGZIP(), []int{1, 1}
}

func (x *ComponentDefinition_Index) GetEntries() []*ComponentDefinition_IndexEntry {
	if x != nil {
		return x.Entries
	}
	return nil
}

var File_domainconfig_v1_components_proto protoreflect.FileDescriptor

var file_domainconfig_v1_components_proto_rawDesc = []byte{
	0x0a, 0x20, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x2e, 0x76, 0x31, 0x1a, 0x20, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x2f, 0x76, 0x31, 0x2f, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1c, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x22, 0xbb, 0x01, 0x0a, 0x0f, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x44, 0x65, 0x66,
	0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f, 0x6d, 0x61,
	0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x27,
	0x0a, 0x0f, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x5f, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74,
	0x79, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x48, 0x0a, 0x12, 0x70, 0x72, 0x6f, 0x70, 0x65,
	0x72, 0x74, 0x79, 0x5f, 0x6f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64, 0x65, 0x73, 0x18, 0x03, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x52, 0x11,
	0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x4f, 0x76, 0x65, 0x72, 0x72, 0x69, 0x64, 0x65,
	0x73, 0x22, 0x9d, 0x03, 0x0a, 0x13, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x44,
	0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f,
	0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x12, 0x38, 0x0a, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x20, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e,
	0x76, 0x31, 0x2e, 0x46, 0x69, 0x65, 0x6c, 0x64, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69,
	0x6f, 0x6e, 0x52, 0x06, 0x66, 0x69, 0x65, 0x6c, 0x64, 0x73, 0x12, 0x44, 0x0a, 0x07, 0x69, 0x6e,
	0x64, 0x69, 0x63, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2a, 0x2e, 0x64, 0x6f,
	0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x2e, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x52, 0x07, 0x69, 0x6e, 0x64, 0x69, 0x63, 0x65, 0x73,
	0x12, 0x27, 0x0a, 0x0f, 0x64, 0x69, 0x73, 0x61, 0x62, 0x6c, 0x65, 0x5f, 0x68, 0x69, 0x73, 0x74,
	0x6f, 0x72, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0e, 0x64, 0x69, 0x73, 0x61, 0x62,
	0x6c, 0x65, 0x48, 0x69, 0x73, 0x74, 0x6f, 0x72, 0x79, 0x1a, 0x52, 0x0a, 0x0a, 0x49, 0x6e, 0x64,
	0x65, 0x78, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x76, 0x61, 0x6c, 0x75, 0x65,
	0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x76, 0x61,
	0x6c, 0x75, 0x65, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x23, 0x0a, 0x0d, 0x69, 0x73, 0x5f, 0x64,
	0x65, 0x73, 0x63, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x08, 0x52,
	0x0c, 0x69, 0x73, 0x44, 0x65, 0x73, 0x63, 0x65, 0x6e, 0x64, 0x69, 0x6e, 0x67, 0x1a, 0x52, 0x0a,
	0x05, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x49, 0x0a, 0x07, 0x65, 0x6e, 0x74, 0x72, 0x69, 0x65,
	0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x2f, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e,
	0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x6e,
	0x64, 0x65, 0x78, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x07, 0x65, 0x6e, 0x74, 0x72, 0x69, 0x65,
	0x73, 0x42, 0xc1, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e,
	0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x42, 0x0f, 0x43, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x3c, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x67, 0x72,
	0x61, 0x70, 0x68, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x64, 0x6f, 0x6d, 0x61,
	0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x3b, 0x64, 0x6f, 0x6d, 0x61,
	0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x44, 0x58, 0x58,
	0xaa, 0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e,
	0x56, 0x31, 0xca, 0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1b, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e,
	0x66, 0x69, 0x67, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0xea, 0x02, 0x10, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_domainconfig_v1_components_proto_rawDescOnce sync.Once
	file_domainconfig_v1_components_proto_rawDescData = file_domainconfig_v1_components_proto_rawDesc
)

func file_domainconfig_v1_components_proto_rawDescGZIP() []byte {
	file_domainconfig_v1_components_proto_rawDescOnce.Do(func() {
		file_domainconfig_v1_components_proto_rawDescData = protoimpl.X.CompressGZIP(file_domainconfig_v1_components_proto_rawDescData)
	})
	return file_domainconfig_v1_components_proto_rawDescData
}

var file_domainconfig_v1_components_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_domainconfig_v1_components_proto_goTypes = []interface{}{
	(*FieldDefinition)(nil),                // 0: domainconfig.v1.FieldDefinition
	(*ComponentDefinition)(nil),            // 1: domainconfig.v1.ComponentDefinition
	(*ComponentDefinition_IndexEntry)(nil), // 2: domainconfig.v1.ComponentDefinition.IndexEntry
	(*ComponentDefinition_Index)(nil),      // 3: domainconfig.v1.ComponentDefinition.Index
	(*Metadata)(nil),                       // 4: domainconfig.v1.Metadata
	(*DataType)(nil),                       // 5: domainconfig.v1.DataType
}
var file_domainconfig_v1_components_proto_depIdxs = []int32{
	4, // 0: domainconfig.v1.FieldDefinition.metadata:type_name -> domainconfig.v1.Metadata
	5, // 1: domainconfig.v1.FieldDefinition.property_overrides:type_name -> domainconfig.v1.DataType
	4, // 2: domainconfig.v1.ComponentDefinition.metadata:type_name -> domainconfig.v1.Metadata
	0, // 3: domainconfig.v1.ComponentDefinition.fields:type_name -> domainconfig.v1.FieldDefinition
	3, // 4: domainconfig.v1.ComponentDefinition.indices:type_name -> domainconfig.v1.ComponentDefinition.Index
	2, // 5: domainconfig.v1.ComponentDefinition.Index.entries:type_name -> domainconfig.v1.ComponentDefinition.IndexEntry
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_domainconfig_v1_components_proto_init() }
func file_domainconfig_v1_components_proto_init() {
	if File_domainconfig_v1_components_proto != nil {
		return
	}
	file_domainconfig_v1_properties_proto_init()
	file_domainconfig_v1_shared_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_domainconfig_v1_components_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FieldDefinition); i {
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
		file_domainconfig_v1_components_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ComponentDefinition); i {
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
		file_domainconfig_v1_components_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ComponentDefinition_IndexEntry); i {
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
		file_domainconfig_v1_components_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ComponentDefinition_Index); i {
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
			RawDescriptor: file_domainconfig_v1_components_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_domainconfig_v1_components_proto_goTypes,
		DependencyIndexes: file_domainconfig_v1_components_proto_depIdxs,
		MessageInfos:      file_domainconfig_v1_components_proto_msgTypes,
	}.Build()
	File_domainconfig_v1_components_proto = out.File
	file_domainconfig_v1_components_proto_rawDesc = nil
	file_domainconfig_v1_components_proto_goTypes = nil
	file_domainconfig_v1_components_proto_depIdxs = nil
}
