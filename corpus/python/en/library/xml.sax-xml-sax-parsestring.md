---
id: "python-en-function-xml-sax-parsestring"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B317"],"cwe":["CWE-20"]}
name: "parseString"
signature: "parseString(string, handler, errorHandler=handler.ErrorHandler())"
directive: "function"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.parseString"
license: "PSF"
updated: "2026-10-01"
---

# parseString

Similar to `parse`, but parses from a buffer *string* received as a
parameter.  *string* must be a `str` instance or a
`bytes-like object`.

> *Changed in 3.5*: Added support of :class:`str` instances.
