---
id: "python-en-function-xml-dom-minidom-parse"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B318"],"cwe":["CWE-20"]}
name: "parse"
signature: "parse(filename_or_file, parser=None, bufsize=None)"
directive: "function"
module: "xml.dom.minidom"
source_url: "https://docs.python.org/3/library/xml.dom.minidom.html#xml.dom.minidom.parse"
license: "PSF"
updated: "2026-10-01"
---

# parse

Return a `Document` from the given input. *filename_or_file* may be
either a file name, or a file-like object. *parser*, if given, must be a SAX2
parser object. This function will change the document handler of the parser and
activate namespace support; other parser configuration (like setting an entity
resolver) must have been done in advance.
