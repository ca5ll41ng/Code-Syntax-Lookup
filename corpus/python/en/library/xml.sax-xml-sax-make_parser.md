---
id: "python-en-function-xml-sax-make_parser"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B317"],"cwe":["CWE-20"]}
name: "make_parser"
signature: "make_parser(parser_list=())"
directive: "function"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.make_parser"
license: "PSF"
updated: "2026-10-01"
---

# make_parser

Create and return a SAX `~xml.sax.xmlreader.XMLReader` object.  The
first parser found will
be used.  If *parser_list* is provided, it must be an iterable of strings which
name modules that have a function named `create_parser`.  Modules listed
in *parser_list* will be used before modules in the default list of parsers.

> *Changed in 3.8*: The *parser_list* argument can be any iterable, not just a list.
