---
id: "python-en-function-base64-b64encode"
language: "python"
lang: "en"
category: "function"
name: "b64encode"
signature: "b64encode(s, altchars=None, *, padded=True, wrapcol=0)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b64encode"
license: "PSF"
updated: "2026-10-01"
---

# b64encode

Encode the `bytes-like object` *s* using Base64 and return the encoded
`bytes`.

Optional *altchars* must be a `bytes-like object` of length 2 which
specifies an alternative alphabet for the `+` and `/` characters.
This allows an application to e.g. generate URL or filesystem safe Base64
strings.  The default is `None`, for which the standard Base64 alphabet is used.

If *padded* is true (default), pad the encoded data with the '='
character to a size multiple of 4.
If *padded* is false, do not add the pad characters.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not insert any newlines.

> *Changed in 3.15*: Added the *padded* and *wrapcol* parameters.
