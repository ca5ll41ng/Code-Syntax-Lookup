---
id: "python-en-function-hmac-hmac-hexdigest"
language: "python"
lang: "en"
category: "function"
name: "HMAC.hexdigest"
signature: "HMAC.hexdigest()"
directive: "method"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.HMAC.hexdigest"
license: "PSF"
updated: "2026-10-01"
---

# HMAC.hexdigest

Like `digest` except the digest is returned as a string twice the
length containing only hexadecimal digits.  This may be used to exchange the
value safely in email or other non-binary environments.

> **Warning**
>
> When comparing the output of `hexdigest` to an externally supplied
> digest during a verification routine, it is recommended to use the
> `compare_digest` function instead of the `==` operator
> to reduce the vulnerability to timing attacks.
>
