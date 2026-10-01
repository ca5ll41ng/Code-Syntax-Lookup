---
id: "python-en-function-xml-dom-node-parentnode"
language: "python"
lang: "en"
category: "function"
name: "Node.parentNode"
directive: "attribute"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.parentNode"
license: "PSF"
updated: "2026-10-01"
---

# Node.parentNode

The parent of the current node, or `None` for the document node. The value is
always a `Node` object or `None`.  For `Element` nodes, this
will be the parent element, except for the root element, in which case it will
be the `Document` object. For `Attr` nodes, this is always
`None`. This is a read-only attribute.
