---
id: "python-en-function-xml-sax-reader-attributesimpl"
language: "python"
lang: "en"
category: "function"
name: "AttributesImpl"
signature: "AttributesImpl(attrs)"
directive: "class"
module: "xml.sax.reader"
source_url: "https://docs.python.org/3/library/xml.sax.reader.html#xml.sax.reader.AttributesImpl"
license: "PSF"
updated: "2026-10-01"
---

# AttributesImpl

This is an implementation of the `Attributes` interface (see section
`attributes-objects`).  This is a dictionary-like object which
represents the element attributes in a `startElement` call. In addition
to the most useful dictionary operations, it supports a number of other
methods as described by the interface. Objects of this class should be
instantiated by readers; *attrs* must be a dictionary-like object containing
a mapping from attribute names to attribute values.
