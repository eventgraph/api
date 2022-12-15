// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: domainconfig/v1/properties.proto

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

type DataType struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Types that are assignable to Value:
	//
	//	*DataType_NoValue
	//	*DataType_I64
	//	*DataType_F64
	//	*DataType_Text
	//	*DataType_Binary
	Value isDataType_Value `protobuf_oneof:"value"`
}

func (x *DataType) Reset() {
	*x = DataType{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_properties_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DataType) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DataType) ProtoMessage() {}

func (x *DataType) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_properties_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DataType.ProtoReflect.Descriptor instead.
func (*DataType) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_properties_proto_rawDescGZIP(), []int{0}
}

func (m *DataType) GetValue() isDataType_Value {
	if m != nil {
		return m.Value
	}
	return nil
}

func (x *DataType) GetNoValue() bool {
	if x, ok := x.GetValue().(*DataType_NoValue); ok {
		return x.NoValue
	}
	return false
}

func (x *DataType) GetI64() int64 {
	if x, ok := x.GetValue().(*DataType_I64); ok {
		return x.I64
	}
	return 0
}

func (x *DataType) GetF64() float64 {
	if x, ok := x.GetValue().(*DataType_F64); ok {
		return x.F64
	}
	return 0
}

func (x *DataType) GetText() string {
	if x, ok := x.GetValue().(*DataType_Text); ok {
		return x.Text
	}
	return ""
}

func (x *DataType) GetBinary() []byte {
	if x, ok := x.GetValue().(*DataType_Binary); ok {
		return x.Binary
	}
	return nil
}

type isDataType_Value interface {
	isDataType_Value()
}

type DataType_NoValue struct {
	NoValue bool `protobuf:"varint,1,opt,name=no_value,json=noValue,proto3,oneof"`
}

type DataType_I64 struct {
	I64 int64 `protobuf:"varint,2,opt,name=i64,proto3,oneof"`
}

type DataType_F64 struct {
	F64 float64 `protobuf:"fixed64,3,opt,name=f64,proto3,oneof"`
}

type DataType_Text struct {
	Text string `protobuf:"bytes,4,opt,name=text,proto3,oneof"`
}

type DataType_Binary struct {
	Binary []byte `protobuf:"bytes,5,opt,name=binary,proto3,oneof"`
}

func (*DataType_NoValue) isDataType_Value() {}

func (*DataType_I64) isDataType_Value() {}

func (*DataType_F64) isDataType_Value() {}

func (*DataType_Text) isDataType_Value() {}

func (*DataType_Binary) isDataType_Value() {}

type ValueDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	DataType *DataType `protobuf:"bytes,2,opt,name=data_type,json=dataType,proto3" json:"data_type,omitempty"`
}

func (x *ValueDefinition) Reset() {
	*x = ValueDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_properties_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ValueDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ValueDefinition) ProtoMessage() {}

func (x *ValueDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_properties_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ValueDefinition.ProtoReflect.Descriptor instead.
func (*ValueDefinition) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_properties_proto_rawDescGZIP(), []int{1}
}

func (x *ValueDefinition) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *ValueDefinition) GetDataType() *DataType {
	if x != nil {
		return x.DataType
	}
	return nil
}

type PropertyDefinition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	// Version version = 2;
	Values []*ValueDefinition `protobuf:"bytes,3,rep,name=values,proto3" json:"values,omitempty"`
}

func (x *PropertyDefinition) Reset() {
	*x = PropertyDefinition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_domainconfig_v1_properties_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PropertyDefinition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PropertyDefinition) ProtoMessage() {}

func (x *PropertyDefinition) ProtoReflect() protoreflect.Message {
	mi := &file_domainconfig_v1_properties_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PropertyDefinition.ProtoReflect.Descriptor instead.
func (*PropertyDefinition) Descriptor() ([]byte, []int) {
	return file_domainconfig_v1_properties_proto_rawDescGZIP(), []int{2}
}

func (x *PropertyDefinition) GetMetadata() *Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *PropertyDefinition) GetValues() []*ValueDefinition {
	if x != nil {
		return x.Values
	}
	return nil
}

var File_domainconfig_v1_properties_proto protoreflect.FileDescriptor

var file_domainconfig_v1_properties_proto_rawDesc = []byte{
	0x0a, 0x20, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76,
	0x31, 0x2f, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x2e, 0x76, 0x31, 0x1a, 0x1c, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x64, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x22, 0x88, 0x01, 0x0a, 0x08, 0x44, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1b,
	0x0a, 0x08, 0x6e, 0x6f, 0x5f, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x48, 0x00, 0x52, 0x07, 0x6e, 0x6f, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x12, 0x12, 0x0a, 0x03, 0x69,
	0x36, 0x34, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x48, 0x00, 0x52, 0x03, 0x69, 0x36, 0x34, 0x12,
	0x12, 0x0a, 0x03, 0x66, 0x36, 0x34, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x48, 0x00, 0x52, 0x03,
	0x66, 0x36, 0x34, 0x12, 0x14, 0x0a, 0x04, 0x74, 0x65, 0x78, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x00, 0x52, 0x04, 0x74, 0x65, 0x78, 0x74, 0x12, 0x18, 0x0a, 0x06, 0x62, 0x69, 0x6e,
	0x61, 0x72, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0c, 0x48, 0x00, 0x52, 0x06, 0x62, 0x69, 0x6e,
	0x61, 0x72, 0x79, 0x42, 0x07, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x22, 0x80, 0x01, 0x0a,
	0x0f, 0x56, 0x61, 0x6c, 0x75, 0x65, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x35, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69,
	0x67, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x36, 0x0a, 0x09, 0x64, 0x61, 0x74, 0x61, 0x5f,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f, 0x6d,
	0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x44, 0x61, 0x74,
	0x61, 0x54, 0x79, 0x70, 0x65, 0x52, 0x08, 0x64, 0x61, 0x74, 0x61, 0x54, 0x79, 0x70, 0x65, 0x22,
	0x85, 0x01, 0x0a, 0x12, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x44, 0x65, 0x66, 0x69,
	0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x35, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64, 0x6f, 0x6d, 0x61, 0x69,
	0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x38, 0x0a,
	0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e,
	0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x2e,
	0x56, 0x61, 0x6c, 0x75, 0x65, 0x44, 0x65, 0x66, 0x69, 0x6e, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52,
	0x06, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x73, 0x42, 0xca, 0x01, 0x0a, 0x13, 0x63, 0x6f, 0x6d, 0x2e,
	0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x76, 0x31, 0x42,
	0x0f, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x45, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x65,
	0x76, 0x65, 0x6e, 0x74, 0x67, 0x72, 0x61, 0x70, 0x68, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x67, 0x65,
	0x6e, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x6f, 0x2f, 0x64, 0x6f, 0x6d, 0x61, 0x69,
	0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2f, 0x76, 0x31, 0x3b, 0x64, 0x6f, 0x6d, 0x61, 0x69,
	0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x44, 0x58, 0x58, 0xaa,
	0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x2e, 0x56,
	0x31, 0xca, 0x02, 0x0f, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x5c, 0x56, 0x31, 0xe2, 0x02, 0x1b, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x10, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67,
	0x3a, 0x3a, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_domainconfig_v1_properties_proto_rawDescOnce sync.Once
	file_domainconfig_v1_properties_proto_rawDescData = file_domainconfig_v1_properties_proto_rawDesc
)

func file_domainconfig_v1_properties_proto_rawDescGZIP() []byte {
	file_domainconfig_v1_properties_proto_rawDescOnce.Do(func() {
		file_domainconfig_v1_properties_proto_rawDescData = protoimpl.X.CompressGZIP(file_domainconfig_v1_properties_proto_rawDescData)
	})
	return file_domainconfig_v1_properties_proto_rawDescData
}

var file_domainconfig_v1_properties_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_domainconfig_v1_properties_proto_goTypes = []interface{}{
	(*DataType)(nil),           // 0: domainconfig.v1.DataType
	(*ValueDefinition)(nil),    // 1: domainconfig.v1.ValueDefinition
	(*PropertyDefinition)(nil), // 2: domainconfig.v1.PropertyDefinition
	(*Metadata)(nil),           // 3: domainconfig.v1.Metadata
}
var file_domainconfig_v1_properties_proto_depIdxs = []int32{
	3, // 0: domainconfig.v1.ValueDefinition.metadata:type_name -> domainconfig.v1.Metadata
	0, // 1: domainconfig.v1.ValueDefinition.data_type:type_name -> domainconfig.v1.DataType
	3, // 2: domainconfig.v1.PropertyDefinition.metadata:type_name -> domainconfig.v1.Metadata
	1, // 3: domainconfig.v1.PropertyDefinition.values:type_name -> domainconfig.v1.ValueDefinition
	4, // [4:4] is the sub-list for method output_type
	4, // [4:4] is the sub-list for method input_type
	4, // [4:4] is the sub-list for extension type_name
	4, // [4:4] is the sub-list for extension extendee
	0, // [0:4] is the sub-list for field type_name
}

func init() { file_domainconfig_v1_properties_proto_init() }
func file_domainconfig_v1_properties_proto_init() {
	if File_domainconfig_v1_properties_proto != nil {
		return
	}
	file_domainconfig_v1_shared_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_domainconfig_v1_properties_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DataType); i {
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
		file_domainconfig_v1_properties_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ValueDefinition); i {
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
		file_domainconfig_v1_properties_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PropertyDefinition); i {
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
	file_domainconfig_v1_properties_proto_msgTypes[0].OneofWrappers = []interface{}{
		(*DataType_NoValue)(nil),
		(*DataType_I64)(nil),
		(*DataType_F64)(nil),
		(*DataType_Text)(nil),
		(*DataType_Binary)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_domainconfig_v1_properties_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_domainconfig_v1_properties_proto_goTypes,
		DependencyIndexes: file_domainconfig_v1_properties_proto_depIdxs,
		MessageInfos:      file_domainconfig_v1_properties_proto_msgTypes,
	}.Build()
	File_domainconfig_v1_properties_proto = out.File
	file_domainconfig_v1_properties_proto_rawDesc = nil
	file_domainconfig_v1_properties_proto_goTypes = nil
	file_domainconfig_v1_properties_proto_depIdxs = nil
}
