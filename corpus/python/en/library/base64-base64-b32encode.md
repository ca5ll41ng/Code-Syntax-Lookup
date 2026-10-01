---
id: "python-en-function-base64-b32encode"
language: "python"
lang: "en"
category: "function"
name: "b32encode"
signature: "b32encode(s, *, padded=True, wrapcol=0)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b32encode"
license: "PSF"
updated: "2026-10-01"
---

# b32encode

Encode the `bytes-like object` *s* using Base32 and return the
encoded `bytes`.

If *padded* is true (default), pad the encoded data with the '='
character to a size multiple of 8.
If *padded* is false, do not add the pad characters.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not add any newlines.

> *Changed in 3.15*: Added the *padded* and *wrapcol* parameters.
