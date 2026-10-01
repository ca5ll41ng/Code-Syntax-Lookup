---
id: "python-en-function-xml-dom-document-createprocessinginstruction"
language: "python"
lang: "en"
category: "function"
name: "Document.createProcessingInstruction"
signature: "Document.createProcessingInstruction(target, data)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.createProcessingInstruction"
license: "PSF"
updated: "2026-10-01"
---

# Document.createProcessingInstruction

Create and return a processing instruction node containing the *target* and
*data* passed as parameters.  As with the other creation methods, this one does
not insert the node into the tree.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
