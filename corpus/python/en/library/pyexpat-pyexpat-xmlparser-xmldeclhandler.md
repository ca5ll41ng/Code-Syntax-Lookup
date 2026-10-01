---
id: "python-en-function-pyexpat-xmlparser-xmldeclhandler"
language: "python"
lang: "en"
category: "function"
name: "xmlparser.XmlDeclHandler"
signature: "xmlparser.XmlDeclHandler(version, encoding, standalone)"
directive: "method"
module: "pyexpat"
source_url: "https://docs.python.org/3/library/pyexpat.html#pyexpat.xmlparser.XmlDeclHandler"
license: "PSF"
updated: "2026-10-01"
---

# xmlparser.XmlDeclHandler

Called when the XML declaration is parsed.  The XML declaration is the
(optional) declaration of the applicable version of the XML recommendation, the
encoding of the document text, and an optional "standalone" declaration.
*version* and *encoding* will be strings, and *standalone* will be `1` if the
document is declared standalone, `0` if it is declared not to be standalone,
or `-1` if the standalone clause was omitted.
