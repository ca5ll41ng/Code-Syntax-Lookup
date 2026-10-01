---
id: "python-en-function-xml-sax-handler-feature_validation"
language: "python"
lang: "en"
category: "function"
name: "feature_validation"
directive: "data"
module: "xml.sax.handler"
source_url: "https://docs.python.org/3/library/xml.sax.handler.html#xml.sax.handler.feature_validation"
license: "PSF"
updated: "2026-10-01"
---

# feature_validation

value: `"http://xml.org/sax/features/validation"`
 true: Report all validation errors (implies external-general-entities and
  external-parameter-entities).
 false: Do not report validation errors.
 access: (parsing) read-only; (not parsing) read/write

The parser based on `xml.parsers.expat` does not support this feature,
because Expat is a non-validating parser.
