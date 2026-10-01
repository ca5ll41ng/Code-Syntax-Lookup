---
id: "python-en-function-xml-sax-handler-feature_namespace_prefixes"
language: "python"
lang: "en"
category: "function"
name: "feature_namespace_prefixes"
directive: "data"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.feature_namespace_prefixes"
license: "PSF"
updated: "2026-10-01"
---

# feature_namespace_prefixes

value: `"http://xml.org/sax/features/namespace-prefixes"`
 true: Report the original prefixed names and attributes used for Namespace
  declarations.
 false: Do not report attributes used for Namespace declarations, and
  optionally do not report original prefixed names (default).
 access: (parsing) read-only; (not parsing) read/write

The parser based on `xml.parsers.expat` does not support this feature.
