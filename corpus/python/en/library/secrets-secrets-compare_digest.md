---
id: "python-en-function-secrets-compare_digest"
language: "python"
lang: "en"
category: "function"
name: "compare_digest"
signature: "compare_digest(a, b)"
directive: "function"
module: "secrets"
source_url: "https://docs.python.org/3/library/secrets.html#secrets.compare_digest"
license: "PSF"
updated: "2026-10-01"
---

# compare_digest

Return `True` if strings or
`bytes-like objects`
*a* and *b* are equal, otherwise `False`,
using a "constant-time compare" to reduce the risk of
[timing attacks](https://web.archive.org/web/20250815071532/https://codahale.com/a-lesson-in-timing-attacks/).
See `hmac.compare_digest` for additional details.
