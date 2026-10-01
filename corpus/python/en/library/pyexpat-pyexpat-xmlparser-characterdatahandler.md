---
id: "python-en-function-pyexpat-xmlparser-characterdatahandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.CharacterDataHandler"
signature: "xmlparser.CharacterDataHandler(data)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.CharacterDataHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.CharacterDataHandler

Called for character data.  This will be called for normal character data, CDATA
marked content, and ignorable whitespace.  Applications which must distinguish
these cases can use the `StartCdataSectionHandler`,
`EndCdataSectionHandler`, and `ElementDeclHandler` callbacks to
collect the required information. Note that the character data may be
chunked even if it is short and so you may receive more than one call to
`CharacterDataHandler`. Set the `buffer_text` instance attribute
to `True` to avoid that.
