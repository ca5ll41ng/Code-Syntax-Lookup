---
id: "python-en-function-xml-dom-node-setuserdata"
language: "python"
lang: "en"
category: "function"
name: "Node.setUserData"
signature: "Node.setUserData(key, data, handler)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.setUserData"
license: "PSF"
updated: "2026-10-01"
---

# Node.setUserData

Associate *data* with *key* on this node and return the data previously
associated with *key*, or `None`.
If *data* is `None`, the association is removed.
*handler* is called when the node is cloned, imported, renamed or deleted;
pass `None` if no notification is needed.
