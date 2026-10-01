---
id: "python-en-function-xml-dom-document-createelementns"
language: "python"
lang: "en"
category: "function"
name: "Document.createElementNS"
signature: "Document.createElementNS(namespaceURI, tagName)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.createElementNS"
license: "PSF"
updated: "2026-10-01"
---

# Document.createElementNS

Create and return a new element with a namespace.  The *tagName* may have a
prefix.  The element is not inserted into the document when it is created.  You
need to explicitly insert it with one of the other methods such as
`~Node.insertBefore` or `~Node.appendChild`.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
Raise `NamespaceErr` if the qualified name is malformed,
if it has a prefix and the namespace URI is empty,
or if the prefix is `'xml'`
and the namespace URI is not the XML namespace.
