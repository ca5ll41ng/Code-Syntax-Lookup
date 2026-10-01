---
id: "python-en-function-xml-dom-minidom-node-unlink"
language: "python"
lang: "en"
category: "function"
name: "Node.unlink"
signature: "Node.unlink()"
directive: "method"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/3/library/xml.dom.minidom.html#xml.dom.minidom.Node.unlink"
license: "PSF"
updated: "2026-10-01"
---

# Node.unlink

Break internal references within the DOM so that it will be garbage collected on
versions of Python without cyclic GC.  Even when cyclic GC is available, using
this can make large amounts of memory available sooner, so calling this on DOM
objects as soon as they are no longer needed is good practice.  This only needs
to be called on the `Document` object, but may be called on child nodes
to discard children of that node.

You can avoid calling this method explicitly by using the `with`
statement. The following code will automatically unlink *dom* when the
`with` block is exited::

   with xml.dom.minidom.parse(datasource) as dom:
       ... # Work with dom.
