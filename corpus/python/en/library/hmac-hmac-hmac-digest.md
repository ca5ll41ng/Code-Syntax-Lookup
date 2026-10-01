---
id: "python-en-function-hmac-hmac-digest"
language: "python"
lang: "en"
category: "function"
name: "HMAC.digest"
signature: "HMAC.digest()"
directive: "method"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.HMAC.digest"
license: "PSF"
updated: "2026-10-01"
---

# HMAC.digest

Return the digest of the bytes passed to the `update` method so far.
This bytes object will be the same length as the *digest_size* of the digest
given to the constructor.  It may contain non-ASCII bytes, including NUL
bytes.

> **Warning**
>
> When comparing the output of `digest` to an externally supplied
> digest during a verification routine, it is recommended to use the
> `compare_digest` function instead of the `==` operator
> to reduce the vulnerability to timing attacks.
>
