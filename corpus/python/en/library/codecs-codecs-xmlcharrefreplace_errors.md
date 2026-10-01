---
id: "python-en-function-codecs-xmlcharrefreplace_errors"
language: "python"
lang: "en"
category: "function"
name: "xmlcharrefreplace_errors"
signature: "xmlcharrefreplace_errors(exception)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.xmlcharrefreplace_errors"
license: "PSF"
updated: "2026-10-01"
---

# xmlcharrefreplace_errors

Implements the `'xmlcharrefreplace'` error handling (for encoding within
`text encoding` only).

The unencodable character is replaced by an appropriate XML/HTML numeric
character reference, which is a decimal form of Unicode code point with
format `&#{num};` .
