---
id: "python-en-function-xml-dom-domimplementation-createdocumenttype"
language: "python"
lang: "en"
category: "function"
name: "DOMImplementation.createDocumentType"
signature: "DOMImplementation.createDocumentType(qualifiedName, publicId, systemId)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.DOMImplementation.createDocumentType"
license: "PSF"
updated: "2026-10-01"
---

# DOMImplementation.createDocumentType

Return a new `DocumentType` object that encapsulates the given
*qualifiedName*, *publicId*, and *systemId* strings, representing the
information contained in an XML document type declaration.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
