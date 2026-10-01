---
id: "python-en-function-xml-sax-reader-xmlreader-setentityresolver"
language: "python"
lang: "en"
category: "function"
name: "XMLReader.setEntityResolver"
signature: "XMLReader.setEntityResolver(handler)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.XMLReader.setEntityResolver"
license: "PSF"
updated: "2026-10-01"
---

# XMLReader.setEntityResolver

Set the current `~xml.sax.handler.EntityResolver`.  If no
`~xml.sax.handler.EntityResolver` is set,
attempts to resolve an external entity will result in opening the system
identifier for the entity, and fail if it is not available.
