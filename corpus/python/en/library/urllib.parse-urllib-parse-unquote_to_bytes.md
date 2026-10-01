---
id: "python-en-function-urllib-parse-unquote_to_bytes"
language: "python"
lang: "en"
category: "function"
name: "unquote_to_bytes"
signature: "unquote_to_bytes(string)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/3/library/urllib.parse.html#urllib.parse.unquote_to_bytes"
license: "PSF"
updated: "2026-10-01"
---

# unquote_to_bytes

Replace `%{xx}` escapes with their single-octet equivalent, and return a
`bytes` object.

*string* may be either a `str` or a `bytes` object.

If it is a `str`, unescaped non-ASCII characters in *string*
are encoded into UTF-8 bytes.

Example: `unquote_to_bytes('a%26%EF')` yields `b'a&\xef'`.
