---
id: "python-en-function-xml-etree-elementtree-register_namespace"
language: "python"
lang: "en"
category: "function"
name: "register_namespace"
signature: "register_namespace(prefix, uri)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.register_namespace"
license: "PSF"
updated: "2026-10-01"
---

# register_namespace

Registers a namespace prefix.  The registry is global, and any existing
mapping for either the given prefix or the namespace URI will be removed.
*prefix* is a namespace prefix.  *uri* is a namespace uri.  Tags and
attributes in this namespace will be serialized with the given prefix, if at
all possible.

> *Added in 3.2*
