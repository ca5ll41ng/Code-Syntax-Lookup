---
id: "python-zh-function-xml-sax-handler-contenthandler-startprefixmapping"
language: "python"
lang: "zh"
category: "function"
name: "ContentHandler.startPrefixMapping"
signature: "ContentHandler.startPrefixMapping(prefix, uri)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.startPrefixMapping"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.startPrefixMapping

开始一个前缀 URI 命名空间映射的范围。

The information from this event is not necessary for normal Namespace
processing: the SAX XML reader will automatically replace prefixes for element
and attribute names when the `feature_namespaces` feature is enabled (the
default).

There are cases, however, when applications need to use prefixes in character
data or in attribute values, where they cannot safely be expanded automatically;
the `startPrefixMapping` and `endPrefixMapping` events supply the
information to the application to expand prefixes in those contexts itself, if
necessary.

.. XXX This is not really the default, is it? MvL

Note that `startPrefixMapping` and `endPrefixMapping` events are not
guaranteed to be properly nested relative to each-other: all
`startPrefixMapping` events will occur before the corresponding
`startElement` event, and all `endPrefixMapping` events will occur
after the corresponding `endElement` event, but their order is not
guaranteed.
