---
id: "python-en-function-pyexpat-xmlparser-unparsedentitydeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.UnparsedEntityDeclHandler"
signature: "xmlparser.UnparsedEntityDeclHandler(entityName, base, systemId, publicId, notationName)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.UnparsedEntityDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.UnparsedEntityDeclHandler

Called for unparsed (NDATA) entity declarations.
If this handler is not set, such declarations are reported by
`EntityDeclHandler`, which is preferred for new code.
(The underlying function in the Expat library has been declared obsolete.)
