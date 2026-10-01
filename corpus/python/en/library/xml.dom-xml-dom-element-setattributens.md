---
id: "python-en-function-xml-dom-element-setattributens"
language: "python"
lang: "en"
category: "function"
name: "Element.setAttributeNS"
signature: "Element.setAttributeNS(namespaceURI, qname, value)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Element.setAttributeNS"
license: "PSF"
updated: "2026-10-01"
---

# Element.setAttributeNS

Set an attribute value from a string, given a *namespaceURI* and a *qname*.
Note that a qname is the whole attribute name.  This is different than above.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
Raise `NamespaceErr` if the qualified name is malformed,
if it has a prefix and the namespace URI is empty,
if the prefix is `'xml'` and the namespace URI is not the XML namespace,
or if the name or the prefix is `'xmlns'`
and the namespace URI is not the XMLNS namespace, or vice versa.
