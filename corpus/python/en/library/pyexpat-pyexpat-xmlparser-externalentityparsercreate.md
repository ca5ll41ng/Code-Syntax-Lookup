---
id: "python-en-function-pyexpat-xmlparser-externalentityparsercreate"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.ExternalEntityParserCreate"
signature: "xmlparser.ExternalEntityParserCreate(context[, encoding])"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.ExternalEntityParserCreate"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.ExternalEntityParserCreate

Create a "child" parser which can be used to parse an external parsed entity
referred to by content parsed by the parent parser.  The *context* parameter
should be the string passed to the `ExternalEntityRefHandler` handler
function, described below. The child parser is created with the
`ordered_attributes` and `specified_attributes` set to the values of
this parser.
