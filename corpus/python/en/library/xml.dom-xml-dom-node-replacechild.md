---
id: "python-en-function-xml-dom-node-replacechild"
language: "python"
lang: "en"
category: "function"
name: "Node.replaceChild"
signature: "Node.replaceChild(newChild, oldChild)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.replaceChild"
license: "PSF"
updated: "2026-10-01"
---

# Node.replaceChild

Replace an existing node with a new node. It must be the case that  *oldChild*
is a child of this node; if not, `NotFoundErr` is raised.

Raise `WrongDocumentErr` if *newChild* was created by another
document, and `HierarchyRequestErr` if it is this node itself or
its ancestor.
