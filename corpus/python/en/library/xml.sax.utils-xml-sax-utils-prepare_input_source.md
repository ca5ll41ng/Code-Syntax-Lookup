---
id: "python-en-function-xml-sax-utils-prepare_input_source"
language: "python"
lang: "en"
category: "function"
name: "prepare_input_source"
signature: "prepare_input_source(source, base='')"
directive: "function"
module: "xml.sax.utils"
source_url: "https://docs.python.org/3/library/xml.sax.utils.html#xml.sax.utils.prepare_input_source"
license: "PSF"
updated: "2026-10-01"
---

# prepare_input_source

This function takes an input source and an optional base URL and returns a
fully resolved `~xml.sax.xmlreader.InputSource` object ready for
reading.  The input source can be given as a string, a file-like object, or
an `~xml.sax.xmlreader.InputSource` object; parsers will use this
function to implement the polymorphic *source* argument to their
`~xml.sax.xmlreader.XMLReader.parse` method.
