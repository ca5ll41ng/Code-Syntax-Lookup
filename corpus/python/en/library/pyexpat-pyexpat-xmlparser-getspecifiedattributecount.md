---
id: "python-en-function-pyexpat-xmlparser-getspecifiedattributecount"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.GetSpecifiedAttributeCount"
signature: "xmlparser.GetSpecifiedAttributeCount()"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.GetSpecifiedAttributeCount"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.GetSpecifiedAttributeCount

Return the index just past the attributes given in the start tag.
Attributes defaulted from the DTD follow the specified ones,
so attributes at lower indices in the list
passed to `StartElementHandler` were given in the start tag.
Each attribute takes two items in that list,
its name and its value.
Only meaningful inside a `StartElementHandler` call,
and only if `ordered_attributes` is true.

> *Added in next*
