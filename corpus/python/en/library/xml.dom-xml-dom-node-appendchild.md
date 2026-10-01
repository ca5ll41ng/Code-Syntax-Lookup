---
id: "python-en-function-xml-dom-node-appendchild"
language: "python"
lang: "en"
category: "function"
name: "Node.appendChild"
signature: "Node.appendChild(newChild)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.appendChild"
license: "PSF"
updated: "2026-10-01"
---

# Node.appendChild

Add a new child node to this node at the end of the list of
children, returning *newChild*. If the node was already in
the tree, it is removed first.

Raise `WrongDocumentErr` if *newChild* was created by another
document, and `HierarchyRequestErr` if it is this node itself or
its ancestor.
