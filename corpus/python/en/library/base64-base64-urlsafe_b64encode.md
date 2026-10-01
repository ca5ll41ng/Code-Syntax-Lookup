---
id: "python-en-function-base64-urlsafe_b64encode"
language: "python"
lang: "en"
category: "function"
name: "urlsafe_b64encode"
signature: "urlsafe_b64encode(s, *, padded=True)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.urlsafe_b64encode"
license: "PSF"
updated: "2026-10-01"
---

# urlsafe_b64encode

Encode `bytes-like object` *s* using the
URL- and filesystem-safe alphabet, which
substitutes `-` instead of `+` and `_` instead of `/` in the
standard Base64 alphabet, and return the encoded `bytes`.  The result
can still contain `=` if *padded* is true (default).

> *Changed in 3.15*: Added the *padded* parameter.
