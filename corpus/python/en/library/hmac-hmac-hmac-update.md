---
id: "python-en-function-hmac-hmac-update"
language: "python"
lang: "en"
category: "function"
name: "HMAC.update"
signature: "HMAC.update(msg)"
directive: "method"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.HMAC.update"
license: "PSF"
updated: "2026-10-01"
---

# HMAC.update

Update the hmac object with *msg*.  Repeated calls are equivalent to a
single call with the concatenation of all the arguments:
`m.update(a); m.update(b)` is equivalent to `m.update(a + b)`.

> *Changed in 3.4*: Parameter *msg* can be of any type supported by :mod:`hashlib`.
