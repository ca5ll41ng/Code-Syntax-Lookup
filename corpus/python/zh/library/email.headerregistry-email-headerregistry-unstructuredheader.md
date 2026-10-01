---
id: "python-zh-function-email-headerregistry-unstructuredheader"
language: "python"
lang: "zh"
category: "function"
name: "UnstructuredHeader"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/zh-cn/3/library/email.headerregistry.html#email.headerregistry.UnstructuredHeader"
license: "PSF"
updated: "2026-10-01"
---

# UnstructuredHeader

An "unstructured" header is the default type of header in RFC 5322.
Any header that does not have a specified syntax is treated as
unstructured.  The classic example of an unstructured header is the
`Subject` header.

In RFC 5322, an unstructured header is a run of arbitrary text in the
ASCII character set.  RFC 2047, however, has an RFC 5322 compatible
mechanism for encoding non-ASCII text as ASCII characters within a header
value.  When a *value* containing encoded words is passed to the
constructor, the `UnstructuredHeader` parser converts such encoded words
into a string, following the RFC 2047 rules for unstructured text.  The
parser uses heuristics to attempt to decode certain non-compliant encoded
words.  Defects are registered in such cases, as well as defects for issues
such as invalid characters within the encoded words or the non-encoded text.

此标头类型未提供附加属性。
