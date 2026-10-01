---
id: "python-en-function-xml-etree-elementtree-qname"
language: "python"
lang: "en"
category: "function"
name: "QName"
signature: "QName(text_or_uri, tag=None)"
directive: "class"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.QName"
license: "PSF"
updated: "2026-10-01"
---

# QName

QName wrapper.  This can be used to wrap a QName attribute value, in order
to get proper namespace handling on output.  *text_or_uri* is a string
containing the QName value, in the form {uri}local, or, if the tag argument
is given, the URI part of a QName.  If *tag* is given, the first argument is
interpreted as a URI, and this argument is interpreted as a local name.
`QName` instances are opaque.
