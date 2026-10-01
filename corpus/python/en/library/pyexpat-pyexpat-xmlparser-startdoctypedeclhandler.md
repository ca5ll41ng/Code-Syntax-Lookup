---
id: "python-en-function-pyexpat-xmlparser-startdoctypedeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.StartDoctypeDeclHandler"
signature: "xmlparser.StartDoctypeDeclHandler(doctypeName, systemId, publicId, has_internal_subset)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.StartDoctypeDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.StartDoctypeDeclHandler

Called when Expat begins parsing the document type declaration (`<!DOCTYPE
...`).  The *doctypeName* is provided exactly as presented.  The *systemId* and
*publicId* parameters give the system and public identifiers if specified, or
`None` if omitted.  *has_internal_subset* will be true if the document
contains an internal document declaration subset.
