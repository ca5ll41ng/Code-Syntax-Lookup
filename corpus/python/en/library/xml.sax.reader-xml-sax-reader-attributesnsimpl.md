---
id: "python-en-function-xml-sax-reader-attributesnsimpl"
language: "python"
lang: "en"
category: "function"
name: "AttributesNSImpl"
signature: "AttributesNSImpl(attrs, qnames)"
directive: "class"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.AttributesNSImpl"
license: "PSF"
updated: "2026-10-01"
---

# AttributesNSImpl

Namespace-aware variant of `AttributesImpl`, which will be passed to
`startElementNS`. It is derived from `AttributesImpl`, but
understands attribute names as two-tuples of *namespaceURI* and
*localname*. In addition, it provides a number of methods expecting qualified
names as they appear in the original document.  This class implements the
`AttributesNS` interface (see section `attributes-ns-objects`).
