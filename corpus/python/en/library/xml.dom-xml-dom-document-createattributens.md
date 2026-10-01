---
id: "python-en-function-xml-dom-document-createattributens"
language: "python"
lang: "en"
category: "function"
name: "Document.createAttributeNS"
signature: "Document.createAttributeNS(namespaceURI, qualifiedName)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.createAttributeNS"
license: "PSF"
updated: "2026-10-01"
---

# Document.createAttributeNS

Create and return an attribute node with a namespace.  The *tagName* may have a
prefix.  This method does not associate the attribute node with any particular
element.  You must use `~Element.setAttributeNode` on the appropriate
`Element` object to use the newly created attribute instance.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
Raise `NamespaceErr` if the qualified name is malformed,
if it has a prefix and the namespace URI is empty,
if the prefix is `'xml'` and the namespace URI is not the XML namespace,
or if the name or the prefix is `'xmlns'`
and the namespace URI is not the XMLNS namespace, or vice versa.
