---
id: "python-zh-function-xml-dom-minidom-node-toprettyxml-indent-t-newl-n-encoding-none"
language: "python"
lang: "zh"
category: "function"
name: "Node.toprettyxml(indent=\"\\t\", newl=\"\\n\", encoding=None, \\"
directive: "method"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/zh-cn/3/library/xml.dom.minidom.html#xml.dom.minidom.Node.toprettyxml(indent=\"\\t\", newl=\"\\n\", encoding=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# Node.toprettyxml(indent="\t", newl="\n", encoding=None, \

Return a pretty-printed version of the document. *indent* specifies the
indentation string and defaults to a tabulator; *newl* specifies the string
emitted at the end of each line and defaults to `\n`.

The *encoding* argument behaves like the corresponding argument of
`toxml`.

*standalone* 参数的行为与 :meth:`writexml` 中的完全一致。

No indentation is added inside an element
which is marked with `xml:space="preserve"`,
which is declared in the DTD as not having element content,
or, in absence of such declaration, which contains text,
because this would change its content.

> *Changed in 3.8*: The :meth:`toprettyxml` method now preserves the attribute order specified by the user.

> *Changed in 3.9*: The *standalone* parameter was added.

> *Changed in next*: Whitespace is no longer added inside an element with mixed content or marked with ``xml:space="preserve"``. It now works for :class:`!DocumentFragment` nodes.
