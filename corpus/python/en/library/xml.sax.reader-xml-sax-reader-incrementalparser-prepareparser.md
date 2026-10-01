---
id: "python-en-function-xml-sax-reader-incrementalparser-prepareparser"
language: "python"
lang: "en"
category: "function"
name: "IncrementalParser.prepareParser"
signature: "IncrementalParser.prepareParser(source)"
directive: "method"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.IncrementalParser.prepareParser"
license: "PSF"
updated: "2026-10-01"
---

# IncrementalParser.prepareParser

Prepare the parser for parsing *source*, an
`InputSource` instance.
It is called by `~XMLReader.parse` before feeding the data.
The parser implementation must override this method;
the default implementation raises `NotImplementedError`.
