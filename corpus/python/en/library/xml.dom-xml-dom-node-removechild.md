---
id: "python-en-function-xml-dom-node-removechild"
language: "python"
lang: "en"
category: "function"
name: "Node.removeChild"
signature: "Node.removeChild(oldChild)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.removeChild"
license: "PSF"
updated: "2026-10-01"
---

# Node.removeChild

Remove a child node.  *oldChild* must be a child of this node; if not,
`NotFoundErr` is raised.  *oldChild* is returned on success.  If *oldChild*
will not be used further, its `~xml.dom.minidom.Node.unlink` method
should be called.
