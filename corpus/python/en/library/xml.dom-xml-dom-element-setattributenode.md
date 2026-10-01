---
id: "python-en-function-xml-dom-element-setattributenode"
language: "python"
lang: "en"
category: "function"
name: "Element.setAttributeNode"
signature: "Element.setAttributeNode(newAttr)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Element.setAttributeNode"
license: "PSF"
updated: "2026-10-01"
---

# Element.setAttributeNode

Add a new attribute node to the element, replacing an existing attribute if
necessary if the `~Attr.name` attribute matches.  If a replacement
occurs, the old attribute node will be returned.  If *newAttr* is already in use,
`InuseAttributeErr` will be raised.

Raise `WrongDocumentErr` if *newAttr* was created by another document.
