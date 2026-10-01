---
id: "python-en-function-base64-b85encode"
language: "python"
lang: "en"
category: "function"
name: "b85encode"
signature: "b85encode(b, pad=False, *, wrapcol=0)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b85encode"
license: "PSF"
updated: "2026-10-01"
---

# b85encode

Encode the `bytes-like object` *b* using base85 (as used in e.g.
git-style binary diffs) and return the encoded `bytes`.

The input is padded with `b'\0'` so its length is a multiple of 4
bytes before encoding.  If *pad* is true, all the resulting
characters are retained in the output, which will always be a
multiple of 5 bytes, and thus the length of the data may not be
preserved on decoding.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not add any newlines.

> *Added in 3.4*

> *Changed in 3.15*: Added the *wrapcol* parameter.
