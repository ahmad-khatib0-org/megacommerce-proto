// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: user/v1/supplier.proto

package v1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SupplierCreateRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Username      string                 `protobuf:"bytes,1,opt,name=username,proto3" json:"username,omitempty"`
	Email         string                 `protobuf:"bytes,2,opt,name=email,proto3" json:"email,omitempty"`
	FirstName     string                 `protobuf:"bytes,3,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	LastName      string                 `protobuf:"bytes,4,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	Password      string                 `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
	Membership    string                 `protobuf:"bytes,6,opt,name=membership,proto3" json:"membership,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SupplierCreateRequest) Reset() {
	*x = SupplierCreateRequest{}
	mi := &file_user_v1_supplier_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SupplierCreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SupplierCreateRequest) ProtoMessage() {}

func (x *SupplierCreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_user_v1_supplier_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SupplierCreateRequest.ProtoReflect.Descriptor instead.
func (*SupplierCreateRequest) Descriptor() ([]byte, []int) {
	return file_user_v1_supplier_proto_rawDescGZIP(), []int{0}
}

func (x *SupplierCreateRequest) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *SupplierCreateRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *SupplierCreateRequest) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *SupplierCreateRequest) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *SupplierCreateRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *SupplierCreateRequest) GetMembership() string {
	if x != nil {
		return x.Membership
	}
	return ""
}

type SupplierCreateResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *SupplierCreateResponse) Reset() {
	*x = SupplierCreateResponse{}
	mi := &file_user_v1_supplier_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SupplierCreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SupplierCreateResponse) ProtoMessage() {}

func (x *SupplierCreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_user_v1_supplier_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SupplierCreateResponse.ProtoReflect.Descriptor instead.
func (*SupplierCreateResponse) Descriptor() ([]byte, []int) {
	return file_user_v1_supplier_proto_rawDescGZIP(), []int{1}
}

var File_user_v1_supplier_proto protoreflect.FileDescriptor

const file_user_v1_supplier_proto_rawDesc = "" +
	"\n" +
	"\x16user/v1/supplier.proto\x12\auser.v1\"\xc1\x01\n" +
	"\x15SupplierCreateRequest\x12\x1a\n" +
	"\busername\x18\x01 \x01(\tR\busername\x12\x14\n" +
	"\x05email\x18\x02 \x01(\tR\x05email\x12\x1d\n" +
	"\n" +
	"first_name\x18\x03 \x01(\tR\tfirstName\x12\x1b\n" +
	"\tlast_name\x18\x04 \x01(\tR\blastName\x12\x1a\n" +
	"\bpassword\x18\x05 \x01(\tR\bpassword\x12\x1e\n" +
	"\n" +
	"membership\x18\x06 \x01(\tR\n" +
	"membership\"\x18\n" +
	"\x16SupplierCreateResponseB8\n" +
	"\x18org.megacommerce.user.v1B\rSupplierProtoZ\n" +
	"user/v1;v1\xf8\x01\x01b\x06proto3"

var (
	file_user_v1_supplier_proto_rawDescOnce sync.Once
	file_user_v1_supplier_proto_rawDescData []byte
)

func file_user_v1_supplier_proto_rawDescGZIP() []byte {
	file_user_v1_supplier_proto_rawDescOnce.Do(func() {
		file_user_v1_supplier_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_user_v1_supplier_proto_rawDesc), len(file_user_v1_supplier_proto_rawDesc)))
	})
	return file_user_v1_supplier_proto_rawDescData
}

var file_user_v1_supplier_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_user_v1_supplier_proto_goTypes = []any{
	(*SupplierCreateRequest)(nil),  // 0: user.v1.SupplierCreateRequest
	(*SupplierCreateResponse)(nil), // 1: user.v1.SupplierCreateResponse
}
var file_user_v1_supplier_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_user_v1_supplier_proto_init() }
func file_user_v1_supplier_proto_init() {
	if File_user_v1_supplier_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_user_v1_supplier_proto_rawDesc), len(file_user_v1_supplier_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_user_v1_supplier_proto_goTypes,
		DependencyIndexes: file_user_v1_supplier_proto_depIdxs,
		MessageInfos:      file_user_v1_supplier_proto_msgTypes,
	}.Build()
	File_user_v1_supplier_proto = out.File
	file_user_v1_supplier_proto_goTypes = nil
	file_user_v1_supplier_proto_depIdxs = nil
}
