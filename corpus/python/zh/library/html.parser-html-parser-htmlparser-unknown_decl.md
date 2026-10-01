---
id: "python-zh-function-html-parser-htmlparser-unknown_decl"
language: "python"
lang: "zh"
category: "function"
name: "HTMLParser.unknown_decl"
signature: "HTMLParser.unknown_decl(data)"
directive: "method"
module: "html.parser"
source_url: "https://docs.python.org/zh-cn/3/library/html.parser.html#html.parser.HTMLParser.unknown_decl"
license: "PSF"
updated: "2026-10-01"
---

# HTMLParser.unknown_decl

当解析器读到无法识别的声明时，此方法被调用。

The *data* parameter will be the entire contents of the declaration inside
the `<![...]>` markup.  It is sometimes useful to be overridden by a
derived class.  The base class implementation does nothing.
