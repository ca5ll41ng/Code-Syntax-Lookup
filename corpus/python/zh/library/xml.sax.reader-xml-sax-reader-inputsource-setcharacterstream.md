---
id: "python-zh-function-xml-sax-reader-inputsource-setcharacterstream"
language: "python"
lang: "zh"
category: "function"
name: "InputSource.setCharacterStream"
signature: "InputSource.setCharacterStream(charfile)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.reader.html#xml.sax.reader.InputSource.setCharacterStream"
license: "PSF"
updated: "2026-10-01"
---

# InputSource.setCharacterStream

设置此输入源的字符流 (为 :term:`text file` 对象)。

If there is a character stream specified, the SAX parser will ignore any byte
stream and will not attempt to open a URI connection to the system identifier.
