---
id: "python-en-function-xml-dom-domimplementation-createdocument"
language: "python"
lang: "en"
category: "function"
name: "DOMImplementation.createDocument"
signature: "DOMImplementation.createDocument(namespaceUri, qualifiedName, doctype)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.DOMImplementation.createDocument"
license: "PSF"
updated: "2026-10-01"
---

# DOMImplementation.createDocument

Return a new `Document` object (the root of the DOM), with a child
`Element` object having the given *namespaceUri* and *qualifiedName*. The
*doctype* must be a `DocumentType` object created by
`createDocumentType`, or `None`. In the Python DOM API, the first two
arguments can also be `None` in order to indicate that no `Element`
child is to be created.
