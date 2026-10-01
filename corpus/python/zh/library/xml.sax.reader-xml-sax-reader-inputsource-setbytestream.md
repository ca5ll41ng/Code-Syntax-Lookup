---
id: "python-zh-function-xml-sax-reader-inputsource-setbytestream"
language: "python"
lang: "zh"
category: "function"
name: "InputSource.setByteStream"
signature: "InputSource.setByteStream(bytefile)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.reader.html#xml.sax.reader.InputSource.setByteStream"
license: "PSF"
updated: "2026-10-01"
---

# InputSource.setByteStream

设置此输入源的字节流（为 :term:`binary file` 对象）。

The SAX parser will ignore this if there is also a character stream specified,
but it will use a byte stream in preference to opening a URI connection itself.

If the application knows the character encoding of the byte stream, it should
set it with the setEncoding method.
