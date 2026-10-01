---
id: "python-en-function-xml-dom-document-createelement"
language: "python"
lang: "en"
category: "function"
name: "Document.createElement"
signature: "Document.createElement(tagName)"
directive: "method"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.Document.createElement"
license: "PSF"
updated: "2026-10-01"
---

# Document.createElement

Create and return a new element node.  The element is not inserted into the
document when it is created.  You need to explicitly insert it with one of the
other methods such as `~Node.insertBefore` or `~Node.appendChild`.

Raise `InvalidCharacterErr` if the name is not a valid XML name.
