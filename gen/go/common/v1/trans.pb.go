// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: common/v1/trans.proto

package v1

import (
	v1 "github.com/ahmad-khatib0-org/megacommerce-proto/gen/go/shared/v1"
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

type TranslationsGetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationsGetRequest) Reset() {
	*x = TranslationsGetRequest{}
	mi := &file_common_v1_trans_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationsGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationsGetRequest) ProtoMessage() {}

func (x *TranslationsGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationsGetRequest.ProtoReflect.Descriptor instead.
func (*TranslationsGetRequest) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{0}
}

type TranslationsGetResponse struct {
	state         protoimpl.MessageState          `protogen:"open.v1"`
	Data          map[string]*TranslationElements `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key" protobuf_val:"bytes,2,opt,name=value"`
	Error         *v1.AppError                    `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationsGetResponse) Reset() {
	*x = TranslationsGetResponse{}
	mi := &file_common_v1_trans_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationsGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationsGetResponse) ProtoMessage() {}

func (x *TranslationsGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationsGetResponse.ProtoReflect.Descriptor instead.
func (*TranslationsGetResponse) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{1}
}

func (x *TranslationsGetResponse) GetData() map[string]*TranslationElements {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *TranslationsGetResponse) GetError() *v1.AppError {
	if x != nil {
		return x.Error
	}
	return nil
}

type TranslationsForLangGetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Lang          string                 `protobuf:"bytes,1,opt,name=lang,proto3" json:"lang,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationsForLangGetRequest) Reset() {
	*x = TranslationsForLangGetRequest{}
	mi := &file_common_v1_trans_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationsForLangGetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationsForLangGetRequest) ProtoMessage() {}

func (x *TranslationsForLangGetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationsForLangGetRequest.ProtoReflect.Descriptor instead.
func (*TranslationsForLangGetRequest) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{2}
}

func (x *TranslationsForLangGetRequest) GetLang() string {
	if x != nil {
		return x.Lang
	}
	return ""
}

type TranslationsForLangGetResponse struct {
	state protoimpl.MessageState `protogen:"open.v1"`
	// Types that are valid to be assigned to Response:
	//
	//	*TranslationsForLangGetResponse_Data
	//	*TranslationsForLangGetResponse_Error
	Response      isTranslationsForLangGetResponse_Response `protobuf_oneof:"response"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationsForLangGetResponse) Reset() {
	*x = TranslationsForLangGetResponse{}
	mi := &file_common_v1_trans_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationsForLangGetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationsForLangGetResponse) ProtoMessage() {}

func (x *TranslationsForLangGetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationsForLangGetResponse.ProtoReflect.Descriptor instead.
func (*TranslationsForLangGetResponse) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{3}
}

func (x *TranslationsForLangGetResponse) GetResponse() isTranslationsForLangGetResponse_Response {
	if x != nil {
		return x.Response
	}
	return nil
}

func (x *TranslationsForLangGetResponse) GetData() *TranslationElements {
	if x != nil {
		if x, ok := x.Response.(*TranslationsForLangGetResponse_Data); ok {
			return x.Data
		}
	}
	return nil
}

func (x *TranslationsForLangGetResponse) GetError() *v1.AppError {
	if x != nil {
		if x, ok := x.Response.(*TranslationsForLangGetResponse_Error); ok {
			return x.Error
		}
	}
	return nil
}

type isTranslationsForLangGetResponse_Response interface {
	isTranslationsForLangGetResponse_Response()
}

type TranslationsForLangGetResponse_Data struct {
	Data *TranslationElements `protobuf:"bytes,1,opt,name=data,proto3,oneof"`
}

type TranslationsForLangGetResponse_Error struct {
	Error *v1.AppError `protobuf:"bytes,2,opt,name=error,proto3,oneof"`
}

func (*TranslationsForLangGetResponse_Data) isTranslationsForLangGetResponse_Response() {}

func (*TranslationsForLangGetResponse_Error) isTranslationsForLangGetResponse_Response() {}

type TranslationElement struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Tr            string                 `protobuf:"bytes,2,opt,name=tr,proto3" json:"tr,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationElement) Reset() {
	*x = TranslationElement{}
	mi := &file_common_v1_trans_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationElement) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationElement) ProtoMessage() {}

func (x *TranslationElement) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationElement.ProtoReflect.Descriptor instead.
func (*TranslationElement) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{4}
}

func (x *TranslationElement) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *TranslationElement) GetTr() string {
	if x != nil {
		return x.Tr
	}
	return ""
}

type TranslationElements struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Trans         []*TranslationElement  `protobuf:"bytes,1,rep,name=trans,proto3" json:"trans,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TranslationElements) Reset() {
	*x = TranslationElements{}
	mi := &file_common_v1_trans_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TranslationElements) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TranslationElements) ProtoMessage() {}

func (x *TranslationElements) ProtoReflect() protoreflect.Message {
	mi := &file_common_v1_trans_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TranslationElements.ProtoReflect.Descriptor instead.
func (*TranslationElements) Descriptor() ([]byte, []int) {
	return file_common_v1_trans_proto_rawDescGZIP(), []int{5}
}

func (x *TranslationElements) GetTrans() []*TranslationElement {
	if x != nil {
		return x.Trans
	}
	return nil
}

var File_common_v1_trans_proto protoreflect.FileDescriptor

const file_common_v1_trans_proto_rawDesc = "" +
	"\n" +
	"\x15common/v1/trans.proto\x12\tcommon.v1\x1a\x15shared/v1/error.proto\"\x18\n" +
	"\x16TranslationsGetRequest\"\xdf\x01\n" +
	"\x17TranslationsGetResponse\x12@\n" +
	"\x04data\x18\x01 \x03(\v2,.common.v1.TranslationsGetResponse.DataEntryR\x04data\x12)\n" +
	"\x05error\x18\x02 \x01(\v2\x13.shared.v1.AppErrorR\x05error\x1aW\n" +
	"\tDataEntry\x12\x10\n" +
	"\x03key\x18\x01 \x01(\tR\x03key\x124\n" +
	"\x05value\x18\x02 \x01(\v2\x1e.common.v1.TranslationElementsR\x05value:\x028\x01\"3\n" +
	"\x1dTranslationsForLangGetRequest\x12\x12\n" +
	"\x04lang\x18\x01 \x01(\tR\x04lang\"\x8f\x01\n" +
	"\x1eTranslationsForLangGetResponse\x124\n" +
	"\x04data\x18\x01 \x01(\v2\x1e.common.v1.TranslationElementsH\x00R\x04data\x12+\n" +
	"\x05error\x18\x02 \x01(\v2\x13.shared.v1.AppErrorH\x00R\x05errorB\n" +
	"\n" +
	"\bresponse\"4\n" +
	"\x12TranslationElement\x12\x0e\n" +
	"\x02id\x18\x01 \x01(\tR\x02id\x12\x0e\n" +
	"\x02tr\x18\x02 \x01(\tR\x02tr\"J\n" +
	"\x13TranslationElements\x123\n" +
	"\x05trans\x18\x01 \x03(\v2\x1d.common.v1.TranslationElementR\x05transBp\n" +
	"\x1aorg.megacommerce.common.v1B\n" +
	"TransProtoZCgithub.com/ahmad-khatib0-org/megacommerce-proto/gen/go/common/v1;v1\xf8\x01\x01b\x06proto3"

var (
	file_common_v1_trans_proto_rawDescOnce sync.Once
	file_common_v1_trans_proto_rawDescData []byte
)

func file_common_v1_trans_proto_rawDescGZIP() []byte {
	file_common_v1_trans_proto_rawDescOnce.Do(func() {
		file_common_v1_trans_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_common_v1_trans_proto_rawDesc), len(file_common_v1_trans_proto_rawDesc)))
	})
	return file_common_v1_trans_proto_rawDescData
}

var file_common_v1_trans_proto_msgTypes = make([]protoimpl.MessageInfo, 7)
var file_common_v1_trans_proto_goTypes = []any{
	(*TranslationsGetRequest)(nil),         // 0: common.v1.TranslationsGetRequest
	(*TranslationsGetResponse)(nil),        // 1: common.v1.TranslationsGetResponse
	(*TranslationsForLangGetRequest)(nil),  // 2: common.v1.TranslationsForLangGetRequest
	(*TranslationsForLangGetResponse)(nil), // 3: common.v1.TranslationsForLangGetResponse
	(*TranslationElement)(nil),             // 4: common.v1.TranslationElement
	(*TranslationElements)(nil),            // 5: common.v1.TranslationElements
	nil,                                    // 6: common.v1.TranslationsGetResponse.DataEntry
	(*v1.AppError)(nil),                    // 7: shared.v1.AppError
}
var file_common_v1_trans_proto_depIdxs = []int32{
	6, // 0: common.v1.TranslationsGetResponse.data:type_name -> common.v1.TranslationsGetResponse.DataEntry
	7, // 1: common.v1.TranslationsGetResponse.error:type_name -> shared.v1.AppError
	5, // 2: common.v1.TranslationsForLangGetResponse.data:type_name -> common.v1.TranslationElements
	7, // 3: common.v1.TranslationsForLangGetResponse.error:type_name -> shared.v1.AppError
	4, // 4: common.v1.TranslationElements.trans:type_name -> common.v1.TranslationElement
	5, // 5: common.v1.TranslationsGetResponse.DataEntry.value:type_name -> common.v1.TranslationElements
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_common_v1_trans_proto_init() }
func file_common_v1_trans_proto_init() {
	if File_common_v1_trans_proto != nil {
		return
	}
	file_common_v1_trans_proto_msgTypes[3].OneofWrappers = []any{
		(*TranslationsForLangGetResponse_Data)(nil),
		(*TranslationsForLangGetResponse_Error)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_common_v1_trans_proto_rawDesc), len(file_common_v1_trans_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   7,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_common_v1_trans_proto_goTypes,
		DependencyIndexes: file_common_v1_trans_proto_depIdxs,
		MessageInfos:      file_common_v1_trans_proto_msgTypes,
	}.Build()
	File_common_v1_trans_proto = out.File
	file_common_v1_trans_proto_goTypes = nil
	file_common_v1_trans_proto_depIdxs = nil
}
