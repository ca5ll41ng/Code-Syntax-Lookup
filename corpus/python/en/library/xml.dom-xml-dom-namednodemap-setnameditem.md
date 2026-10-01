---
id: "python-en-function-xml-dom-namednodemap-setnameditem"
language: "python"
lang: "en"
category: "function"
name: "NamedNodeMap.setNamedItem"
signature: "NamedNodeMap.setNamedItem(node)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.NamedNodeMap.setNamedItem"
license: "PSF"
updated: "2026-10-01"
---

# NamedNodeMap.setNamedItem

Add *node* to the map, using its `~Attr.name` as the key.
Return the node which it replaces, or `None` if it replaces no node.

Raise `WrongDocumentErr` if *node* was created by another document,
and `InuseAttributeErr` if it belongs to another element.
