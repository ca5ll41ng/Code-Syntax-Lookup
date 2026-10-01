---
id: "python-en-function-xml-dom-node-issamenode"
language: "python"
lang: "en"
category: "function"
name: "Node.isSameNode"
signature: "Node.isSameNode(other)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Node.isSameNode"
license: "PSF"
updated: "2026-10-01"
---

# Node.isSameNode

Return `True` if *other* refers to the same node as this node. This is especially
useful for DOM implementations which use any sort of proxy architecture (because
more than one object can refer to the same node).

> **Note**
>
> This is based on a proposed DOM Level 3 API which is still in the "working
> draft" stage, but this particular interface appears uncontroversial.  Changes
> from the W3C will not necessarily affect this method in the Python DOM interface
> (though any new W3C API for this would also be supported).
>
