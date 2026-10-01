---
id: "python-en-function-xml-dom-document-renamenode"
language: "python"
lang: "en"
category: "function"
name: "Document.renameNode"
signature: "Document.renameNode(n, namespaceURI, name)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.renameNode"
license: "PSF"
updated: "2026-10-01"
---

# Document.renameNode

Rename the element or attribute node *n*
and return it.
*namespaceURI* is the new namespace URI, or
`~xml.dom.EMPTY_NAMESPACE` if the node does not belong to a namespace.
*name* is the new qualified name.

Raise `WrongDocumentErr` if *n* was created by another document,
and `NotSupportedErr` if it is neither an element nor an attribute.
