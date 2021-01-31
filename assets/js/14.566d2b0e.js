(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{392:function(t,s,a){"use strict";a.r(s);var n=a(22),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序"}},[t._v("#")]),t._v(" 序")]),t._v(" "),a("ul",[a("li",[t._v("Go 设计模式实现，包含常见的设计模式实现，同时这也是 "),a("a",{attrs:{href:"https://time.geekbang.org/column/intro/250",target:"_blank",rel:"noopener noreferrer"}},[t._v("极客时间-设计模式之美"),a("OutboundLink")],1),t._v(" 的笔记，源课程采用 Java 实现，本系列会采用 Go 实现")]),t._v(" "),a("li",[a("strong",[t._v("课程:")]),t._v(" "),a("a",{attrs:{href:"https://time.geekbang.org/column/article/204845",target:"_blank",rel:"noopener noreferrer"}},[t._v("50 | 装饰器模式：通过剖析 Java IO 类库源码学习装饰器模式"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("**本文代码仓库: "),a("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mohuishou/go-design-pattern"),a("OutboundLink")],1),t._v(" **🌟🌟🌟🌟🌟")]),t._v(" "),a("li",[t._v("**RoadMap: 08/22 **持续更新中，预计一周更新 2 ~ 3 种设计模式，预计到 202010 月底前更新完成")]),t._v(" "),a("li",[a("strong",[t._v("获取更新: "),a("strong",[a("a",{attrs:{href:"https://github.com/mohuishou/go-design-pattern",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Github")]),a("OutboundLink")],1)]),t._v("、")]),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/mohuishou",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("知乎")]),a("OutboundLink")],1),a("strong",[t._v("、")]),a("a",{attrs:{href:"https://lailin.xyz/atom.xml",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("RSS")]),a("OutboundLink")],1),a("strong",[t._v("、")]),a("a",{attrs:{href:"https://toutiao.io/subjects/387401?f=new",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("开发者头条")]),a("OutboundLink")],1),t._v("**")])]),t._v(" "),a("h2",{attrs:{id:"笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#笔记"}},[t._v("#")]),t._v(" 笔记")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://lailin.xyz/images/1599665456992-83f8ee96-e608-492d-9390-c08cab4fa0cb.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("p",[t._v("下面是一个简单的画画的例子，默认的 "),a("code",[t._v("Square")]),t._v("  只有基础的画画功能， "),a("code",[t._v("ColorSquare")]),t._v("  为他加上了颜色")]),t._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" decorator\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// IDraw IDraw")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" IDraw "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Square 正方形")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Square "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Draw Draw")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s Square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a square"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ColorSquare 有颜色的正方形")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" ColorSquare "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsquare IDraw\n\tcolor  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NewColorSquare NewColorSquare")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewColorSquare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("square IDraw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ColorSquare "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ColorSquare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Draw Draw")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c ColorSquare"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('", color is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestColorSquare_Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("testing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tsq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" Square"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tcsq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewColorSquare")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tgot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" csq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Draw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tassert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Equal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a square, color is red"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" got"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);