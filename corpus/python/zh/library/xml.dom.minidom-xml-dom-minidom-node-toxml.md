---
id: "python-zh-function-xml-dom-minidom-node-toxml"
language: "python"
lang: "zh"
category: "function"
name: "Node.toxml"
signature: "Node.toxml(encoding=None, standalone=None)"
directive: "method"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/zh-cn/3/library/xml.dom.minidom.html#xml.dom.minidom.Node.toxml"
license: "PSF"
updated: "2026-10-01"
---

# Node.toxml

Return a string or byte string containing the XML represented by
the DOM node.

With an explicit *encoding* [1]_ argument, the result is a byte
string in the specified encoding.
With no *encoding* argument, the result is a Unicode string, and the
XML declaration in the resulting string does not specify an
encoding. Encoding this string in an encoding other than UTF-8 is
likely incorrect, since UTF-8 is the default encoding of XML.

*standalone* 参数的行为与 :meth:`writexml` 中的完全一致。

> *Changed in 3.8*: The :meth:`toxml` method now preserves the attribute order specified by the user.

> *Changed in 3.9*: The *standalone* parameter was added.

> *Changed in next*: It now works for :class:`!DocumentFragment` nodes.
