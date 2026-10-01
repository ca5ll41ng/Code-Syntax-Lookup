---
id: "python-en-function-xml-etree-elementtree-xmlid"
language: "python"
lang: "en"
category: "function"
name: "XMLID"
signature: "XMLID(text, parser=None)"
directive: "function"
module: "xml.etree.elementtree"
source_url: "https://docs.python.org/3/library/xml.etree.elementtree.html#xml.etree.elementtree.XMLID"
license: "PSF"
updated: "2026-10-01"
---

# XMLID

Parses an XML section from a string constant, and also returns a dictionary
which maps from element id:s to elements.  *text* is a string containing XML
data.  *parser* is an optional parser instance.  If not given, the standard
`XMLParser` parser is used.  Returns a tuple containing an
`Element` instance and a dictionary.
