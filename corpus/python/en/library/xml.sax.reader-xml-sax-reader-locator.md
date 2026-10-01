---
id: "python-en-function-xml-sax-reader-locator"
language: "python"
lang: "en"
category: "function"
name: "Locator"
signature: "Locator()"
directive: "class"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.Locator"
license: "PSF"
updated: "2026-10-01"
---

# Locator

Interface for associating a SAX event with a document location. A locator object
will return valid results only during calls to DocumentHandler methods; at any
other time, the results are unpredictable. If information is not available,
methods may return `None`.
