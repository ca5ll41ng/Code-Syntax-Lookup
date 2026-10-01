---
id: "python-en-function-xml-sax-saxnotsupportedexception"
language: "python"
lang: "en"
category: "function"
name: "SAXNotSupportedException"
signature: "SAXNotSupportedException(msg, exception=None)"
directive: "exception"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.SAXNotSupportedException"
license: "PSF"
updated: "2026-10-01"
---

# SAXNotSupportedException

Subclass of `SAXException` raised when a SAX
`~xml.sax.xmlreader.XMLReader` is asked to
enable a feature that is not supported, or to set a property to a value that the
implementation does not support.  SAX applications and extensions may use this
class for similar purposes.
