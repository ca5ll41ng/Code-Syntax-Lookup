---
id: "python-en-function-xml-etree-elementtree-fromstring"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B314"],"cwe":["CWE-20"]}
name: "fromstring"
signature: "fromstring(text, parser=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.fromstring"
license: "PSF"
updated: "2026-10-01"
---

# fromstring

Parses an XML section from a string constant.  Same as `XML`.  *text*
is a string containing XML data.  *parser* is an optional parser instance.
If not given, the standard `XMLParser` parser is used.
Returns an `Element` instance.
