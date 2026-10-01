---
id: "python-en-function-xml-sax-handler-feature_string_interning"
language: "python"
lang: "en"
category: "function"
name: "feature_string_interning"
directive: "data"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.feature_string_interning"
license: "PSF"
updated: "2026-10-01"
---

# feature_string_interning

value: `"http://xml.org/sax/features/string-interning"`
 true: All element names, prefixes, attribute names, Namespace URIs, and
  local names are interned in a dictionary
  (see `property_interning_dict`).
 false: Names are not necessarily interned, although they may be (default).
 access: (parsing) read-only; (not parsing) read/write
