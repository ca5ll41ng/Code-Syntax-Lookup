---
id: "python-en-function-pyexpat-xmlparser-startelementhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.StartElementHandler"
signature: "xmlparser.StartElementHandler(name, attributes)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.StartElementHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.StartElementHandler

Called for the start of every element.  *name* is a string containing the
element name, and *attributes* is the element attributes. If
`ordered_attributes` is true, this is a list (see
`ordered_attributes` for a full description). Otherwise it's a
dictionary mapping names to values.
