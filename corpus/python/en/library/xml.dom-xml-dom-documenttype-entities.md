---
id: "python-en-function-xml-dom-documenttype-entities"
language: "python"
lang: "en"
category: "function"
name: "DocumentType.entities"
directive: "attribute"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.DocumentType.entities"
license: "PSF"
updated: "2026-10-01"
---

# DocumentType.entities

This is a `NamedNodeMap` of `Entity` nodes
giving the definitions of external entities.
For entity names defined more than once, only the first definition is provided
(others are ignored as required by the XML recommendation).  This may be
`None` if the information is not provided by the parser, or if no entities are
defined.
