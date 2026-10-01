---
id: "python-en-function-pyexpat-xmlparser-notstandalonehandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.NotStandaloneHandler"
signature: "xmlparser.NotStandaloneHandler()"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.NotStandaloneHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.NotStandaloneHandler

Called if the XML document hasn't been declared as being a standalone document.
This happens when there is an external subset or a reference to a parameter
entity, but the XML declaration does not set standalone to `yes` in an XML
declaration.  If this handler returns `0`, then the parser will raise an
`XML_ERROR_NOT_STANDALONE` error.  If this handler is not set, no
exception is raised by the parser for this condition.
