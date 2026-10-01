---
id: "python-en-function-xml-etree-elementtree-parse"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B314"],"cwe":["CWE-20"]}
name: "parse"
signature: "parse(source, parser=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.parse"
license: "PSF"
updated: "2026-10-01"
---

# parse

Parses an XML section into an element tree.  *source* is a filename or file
object containing XML data.  *parser* is an optional parser instance.  If
not given, the standard `XMLParser` parser is used.  Returns an
`ElementTree` instance.
