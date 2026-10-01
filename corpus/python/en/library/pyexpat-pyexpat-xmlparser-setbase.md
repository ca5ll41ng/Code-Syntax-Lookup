---
id: "python-en-function-pyexpat-xmlparser-setbase"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.SetBase"
signature: "xmlparser.SetBase(base)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.SetBase"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.SetBase

Sets the base to be used for resolving relative URIs in system identifiers in
declarations.  Resolving relative identifiers is left to the application: this
value will be passed through as the *base* argument to the
`ExternalEntityRefHandler`, `NotationDeclHandler`, and
`UnparsedEntityDeclHandler` functions.
