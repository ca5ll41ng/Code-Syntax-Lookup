---
id: "python-en-function-urllib-parse-quote_from_bytes"
language: "python"
lang: "en"
category: "function"
name: "quote_from_bytes"
signature: "quote_from_bytes(bytes, safe='/')"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.quote_from_bytes"
license: "PSF"
updated: "2026-10-01"
---

# quote_from_bytes

Like `quote`, but accepts a `bytes` object rather than a
`str`, and does not perform string-to-bytes encoding.

Example: `quote_from_bytes(b'a&\xef')` yields
`'a%26%EF'`.
