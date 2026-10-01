---
id: "python-en-function-xml-sax-reader-xmlreader-parse"
language: "python"
lang: "en"
category: "function"
name: "XMLReader.parse"
signature: "XMLReader.parse(source)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.XMLReader.parse"
license: "PSF"
updated: "2026-10-01"
---

# XMLReader.parse

Process an input source, producing SAX events. The *source* object can be a
system identifier (a string identifying the input source -- typically a file
name or a URL), a `pathlib.Path` or `path-like`
object, or an `InputSource` object. When
`parse` returns, the input is completely processed, and the parser object
can be discarded or reset.

> *Changed in 3.5*: Added support of character streams.

> *Changed in 3.8*: Added support of path-like objects.
