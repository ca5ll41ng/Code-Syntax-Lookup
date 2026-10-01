---
id: "python-en-function-xml-dom-document-createattribute"
language: "python"
lang: "en"
category: "function"
name: "Document.createAttribute"
signature: "Document.createAttribute(name)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.createAttribute"
license: "PSF"
updated: "2026-10-01"
---

# Document.createAttribute

Create and return an attribute node.  This method does not associate the
attribute node with any particular element.  You must use
`~Element.setAttributeNode` on the appropriate `Element` object
to use the newly created attribute instance.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
