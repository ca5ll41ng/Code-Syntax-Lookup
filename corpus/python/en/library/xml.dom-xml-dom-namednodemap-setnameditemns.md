---
id: "python-en-function-xml-dom-namednodemap-setnameditemns"
language: "python"
lang: "en"
category: "function"
name: "NamedNodeMap.setNamedItemNS"
signature: "NamedNodeMap.setNamedItemNS(node)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.NamedNodeMap.setNamedItemNS"
license: "PSF"
updated: "2026-10-01"
---

# NamedNodeMap.setNamedItemNS

Add *node* to the map,
using its namespace URI and local name as the key.
Return the node which it replaces, or `None` if it replaces no node.

Raise `WrongDocumentErr` if *node* was created by another document,
and `InuseAttributeErr` if it belongs to another element.
