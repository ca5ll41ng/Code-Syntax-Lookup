---
id: "python-zh-function-xml-sax-handler-contenthandler-startelementns"
language: "python"
lang: "zh"
category: "function"
name: "ContentHandler.startElementNS"
signature: "ContentHandler.startElementNS(name, qname, attrs)"
directive: "method"
module: "xml.sax.handler"
source_url: "https://docs.python.org/zh-cn/3/library/xml.sax.handler.html#xml.sax.handler.ContentHandler.startElementNS"
license: "PSF"
updated: "2026-10-01"
---

# ContentHandler.startElementNS

在命名空间模式下指示一个元素的开始。

The *name* parameter contains the name of the element type as a `(uri,
localname)` tuple, the *qname* parameter contains the raw XML 1.0 name used in
the source document, and the *attrs* parameter holds an instance of the
`AttributesNS` interface
containing the attributes of the element.  If no namespace is associated with
the element, the *uri* component of *name* will be `None`.  The object passed
as *attrs* may be re-used by the parser; holding on to a reference to it is not
a reliable way to keep a copy of the attributes.  To keep a copy of the
attributes, use the `copy` method of the *attrs* object.

Parsers may set the *qname* parameter to `None`, unless the
`feature_namespace_prefixes` feature is activated.
