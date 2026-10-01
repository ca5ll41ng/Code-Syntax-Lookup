---
id: "python-en-function-hmac-compare_digest"
language: "python"
lang: "en"
category: "function"
name: "compare_digest"
signature: "compare_digest(a, b)"
directive: "function"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.compare_digest"
license: "PSF"
updated: "2026-10-01"
---

# compare_digest

Return `a == b`.  This function uses an approach designed to prevent
timing analysis by avoiding content-based short circuiting behaviour,
making it appropriate for cryptography.  *a* and *b* must both be of the
same type: either `str` (ASCII only, as e.g. returned by
`HMAC.hexdigest`), or a `bytes-like object`.

> **Note**
>
> If *a* and *b* are of different lengths, or if an error occurs,
> a timing attack could theoretically reveal information about the
> types and lengths of *a* and *b*—but not their values.
>

> *Added in 3.3*

> *Changed in 3.10*: The function uses OpenSSL's ``CRYPTO_memcmp()`` internally when available.
