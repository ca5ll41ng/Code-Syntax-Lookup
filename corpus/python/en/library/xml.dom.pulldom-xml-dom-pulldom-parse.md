---
id: "python-en-function-xml-dom-pulldom-parse"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B319"],"cwe":["CWE-20"]}
name: "parse"
signature: "parse(stream_or_string, parser=None, bufsize=None)"
directive: "function"
module: "xml.dom.pulldom"
source_url: "https://docs.python.org/3/library/xml.dom.pulldom.html#xml.dom.pulldom.parse"
license: "PSF"
updated: "2026-10-01"
---

# parse

Return a `DOMEventStream` from the given input. *stream_or_string* may be
either a file name, or a file-like object. *parser*, if given, must be an
`~xml.sax.xmlreader.XMLReader` object. This function will change the
document handler of the
parser and activate namespace support; other parser configuration (like
setting an entity resolver) must have been done in advance.
