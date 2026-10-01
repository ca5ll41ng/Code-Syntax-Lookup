---
id: "python-en-function-xml-dom-documenttype-notations"
language: "python"
lang: "en"
category: "function"
name: "DocumentType.notations"
directive: "attribute"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.DocumentType.notations"
license: "PSF"
updated: "2026-10-01"
---

# DocumentType.notations

This is a `NamedNodeMap` of `Notation` nodes
giving the definitions of notations. For
notation names defined more than once, only the first definition is provided
(others are ignored as required by the XML recommendation).  This may be
`None` if the information is not provided by the parser, or if no notations
are defined.
