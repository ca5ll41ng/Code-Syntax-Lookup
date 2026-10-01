---
id: "python-en-function-xml-dom-invalidcharactererr"
language: "python"
lang: "en"
category: "function"
name: "InvalidCharacterErr"
directive: "exception"
module: "xml.dom"
source_url: "https://docs.python.org/3/library/xml.dom.html#xml.dom.InvalidCharacterErr"
license: "PSF"
updated: "2026-10-01"
---

# InvalidCharacterErr

This exception is raised when a string parameter contains a character that is
not permitted in the context it's being used in by the XML 1.0 recommendation.
For example, attempting to create an `Element` node with a space in the
element type name will cause this error to be raised.
