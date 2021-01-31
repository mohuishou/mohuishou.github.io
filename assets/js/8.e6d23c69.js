(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{394:function(t,n,s){"use strict";s.r(n);var a=s(22),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序"}},[t._v("#")]),t._v(" 序")]),t._v(" "),s("ul",[s("li",[t._v("Go 设计模式实现，包含常见的设计模式实现，同时这也是 "),s("a",{attrs:{href:"https://time.geekbang.org/column/intro/250",target:"_blank",rel:"noopener noreferrer"}},[t._v("极客时间-设计模式之美"),s("OutboundLink")],1),t._v(" 的笔记，源课程采用 Java 实现，本系列会采用 Go 实现")]),t._v(" "),s("li",[s("strong",[t._v("课程:")]),t._v(" "),s("a",{attrs:{href:"https://time.geekbang.org/column/article/205912",target:"_blank",rel:"noopener noreferrer"}},[t._v("51 | 适配器模式：代理、适配器、桥接、装饰，这四个模式有何区别？"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("**本文代码仓库: "),s("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mohuishou/go-design-pattern"),s("OutboundLink")],1),t._v(" **🌟🌟🌟🌟🌟")]),t._v(" "),s("li",[t._v("**RoadMap: 09/22 **持续更新中，预计一周更新 2 ~ 3 种设计模式，预计到 202010 月底前更新完成")]),t._v(" "),s("li",[s("strong",[t._v("获取更新: "),s("strong",[s("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("Github")]),s("OutboundLink")],1)]),t._v("、")]),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/mohuishou",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("知乎")]),s("OutboundLink")],1),s("strong",[t._v("、")]),s("a",{attrs:{href:"https://lailin.xyz/atom.xml",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("RSS")]),s("OutboundLink")],1),s("strong",[t._v("、")]),s("a",{attrs:{href:"https://toutiao.io/subjects/387401?f=new",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("开发者头条")]),s("OutboundLink")],1),t._v("**")])]),t._v(" "),s("h2",{attrs:{id:"笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#笔记"}},[t._v("#")]),t._v(" 笔记")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://lailin.xyz/images/1600352298306-7105ca29-089d-4f54-bb65-82d3c0c3b31c.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("p",[t._v("假设我现在有一个运维系统，需要分别调用阿里云和 AWS 的 SDK 创建主机，两个 SDK 提供的创建主机的接口不一致，此时就可以通过适配器模式，将两个接口统一。\n"),s("strong",[t._v("PS：AWS 和 阿里云的接口纯属虚构，没有直接用原始的 SDK，只是举个例子")])]),t._v(" "),s("h3",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" adapter\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fmt"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ICreateServer 创建云主机")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ICreateServer "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AWSClient aws sdk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AWSClient "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// RunInstance 启动实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AWSClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RunInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws client run success, cpu： %f, mem: %f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AwsClientAdapter 适配器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AwsClientAdapter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tClient AWSClient\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CreateServer 启动实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AwsClientAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RunInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AliyunClient aliyun sdk")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AliyunClient "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CreateServer 启动实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AliyunClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws client run success, cpu： %d, mem: %d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AliyunClientAdapter 适配器")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AliyunClientAdapter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tClient AliyunClient\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CreateServer 启动实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AliyunClientAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mem "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("float64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cpu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" adapter\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"testing"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAliyunClientAdapter_CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保 adapter 实现了目标接口")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a ICreateServer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("AliyunClientAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AliyunClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestAwsClientAdapter_CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 确保 adapter 实现了目标接口")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a ICreateServer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("AwsClientAdapter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AWSClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\ta"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);