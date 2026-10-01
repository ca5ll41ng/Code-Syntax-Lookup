---
id: "python-en-function-xml-sax-handler-feature_external_pes"
language: "python"
lang: "en"
category: "function"
name: "feature_external_pes"
directive: "data"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.feature_external_pes"
license: "PSF"
updated: "2026-10-01"
---

# feature_external_pes

value: `"http://xml.org/sax/features/external-parameter-entities"`
 true: Include all external parameter entities, including the external DTD
  subset.
 false: Do not include any external parameter entities, even the external
  DTD subset.
 access: (parsing) read-only; (not parsing) read/write

The parser based on `xml.parsers.expat` does not support this feature.
