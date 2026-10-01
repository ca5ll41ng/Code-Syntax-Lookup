---
id: "python-en-function-xml-sax-default_parser_list"
language: "python"
lang: "en"
category: "function"
name: "default_parser_list"
directive: "data"
module: "xml.sax"
source_url: "https://docs.python.org/3/library/xml.sax.html#xml.sax.default_parser_list"
license: "PSF"
updated: "2026-10-01"
---

# default_parser_list

The list of the names of modules which are tried by `make_parser`
after the modules named in its *parser_list* argument.
It contains `'xml.sax.expatreader'`, or, if the
`PY_SAX_PARSER` environment variable is set and the environment
is not ignored, the comma-separated list of module names taken from it.
