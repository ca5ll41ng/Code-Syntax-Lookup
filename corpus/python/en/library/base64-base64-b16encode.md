---
id: "python-en-function-base64-b16encode"
language: "python"
lang: "en"
category: "function"
name: "b16encode"
signature: "b16encode(s, *, wrapcol=0)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b16encode"
license: "PSF"
updated: "2026-10-01"
---

# b16encode

Encode the `bytes-like object` *s* using Base16 and return the
encoded `bytes`.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not add any newlines.

> *Changed in 3.15*: Added the *wrapcol* parameter.
