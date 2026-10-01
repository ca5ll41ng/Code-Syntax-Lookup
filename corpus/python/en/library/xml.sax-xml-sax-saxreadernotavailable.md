---
id: "python-en-function-xml-sax-saxreadernotavailable"
language: "python"
lang: "en"
category: "function"
name: "SAXReaderNotAvailable"
signature: "SAXReaderNotAvailable(msg, exception=None)"
directive: "exception"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.SAXReaderNotAvailable"
license: "PSF"
updated: "2026-10-01"
---

# SAXReaderNotAvailable

Subclass of `SAXNotSupportedException` raised when no parser is
available.  A parser module raises it when it is imported or during
parsing if the parser it provides cannot be used, and `make_parser`
raises it if no module from the tried ones provides a usable parser.
