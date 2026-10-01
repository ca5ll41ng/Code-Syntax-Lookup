---
id: "python-zh-function-xml-sax-reader-xmlreader-setlocale"
language: "python"
lang: "zh"
category: "function"
name: "XMLReader.setLocale"
signature: "XMLReader.setLocale(locale)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.reader.html#xml.sax.reader.XMLReader.setLocale"
license: "PSF"
updated: "2026-10-01"
---

# XMLReader.setLocale

允许应用程序为错误和警告设置语言区域。

SAX parsers are not required to provide localization for errors and warnings; if
they cannot support the requested locale, however, they must raise a SAX
exception.  Applications may request a locale change in the middle of a parse.
