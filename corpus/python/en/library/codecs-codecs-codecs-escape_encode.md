---
id: "python-en-function-codecs-codecs-escape_encode"
language: "python"
lang: "en"
category: "function"
name: "codecs.escape_encode"
signature: "codecs.escape_encode(input, errors=None)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.escape_encode"
license: "PSF"
updated: "2026-10-01"
---

# codecs.escape_encode

Encode *input* using escape sequences. Similar to how `repr` on bytes
produces escaped byte values.

*input* must be a `bytes` object.

Returns a tuple `(output, length)` where *output* is a `bytes`
object and *length* is the number of bytes consumed.
