---
id: "python-zh-function-xml-sax-handler-contenthandler-enddocument"
language: "python"
lang: "zh"
category: "function"
name: "ContentHandler.endDocument"
signature: "ContentHandler.endDocument()"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.endDocument"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.endDocument

接收一个文档结束的通知。

The SAX parser will invoke this method only once, and it will be the last method
invoked during the parse. The parser shall not invoke this method until it has
either abandoned parsing (because of an unrecoverable error) or reached the end
of input.
