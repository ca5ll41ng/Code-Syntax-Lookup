---
id: "python-en-function-base64-urlsafe_b64decode"
language: "python"
lang: "en"
category: "function"
name: "urlsafe_b64decode"
signature: "urlsafe_b64decode(s, *, padded=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.urlsafe_b64decode"
license: "PSF"
updated: "2026-10-01"
---

# urlsafe_b64decode

Decode `bytes-like object` or ASCII string *s*
using the URL- and filesystem-safe
alphabet, which substitutes `-` instead of `+` and `_` instead of
`/` in the standard Base64 alphabet, and return the decoded
`bytes`.

> *Changed in 3.15*: Added the *padded* parameter. Padding of input is no longer required by default.

> *Deprecated since 3.15*: Accepting the ``+`` and ``/`` characters is now deprecated.
