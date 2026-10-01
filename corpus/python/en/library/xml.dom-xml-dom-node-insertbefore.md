---
id: "python-en-function-xml-dom-node-insertbefore"
language: "python"
lang: "en"
category: "function"
name: "Node.insertBefore"
signature: "Node.insertBefore(newChild, refChild)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.insertBefore"
license: "PSF"
updated: "2026-10-01"
---

# Node.insertBefore

Insert a new child node before an existing child.  It must be the case that
*refChild* is a child of this node; if not, `NotFoundErr` is raised.
*newChild* is returned. If *refChild* is `None`, it inserts *newChild* at the
end of the children's list.

Raise `WrongDocumentErr` if *newChild* was created by another
document, and `HierarchyRequestErr` if it is this node itself or
its ancestor.
