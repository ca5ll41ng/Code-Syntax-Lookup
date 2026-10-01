---
id: "python-en-function-hmac-digest"
language: "python"
lang: "en"
category: "function"
name: "digest"
signature: "digest(key, msg, digest)"
directive: "function"
module: "hmac"
source_url: "https://docs.python.org/3/library/hmac.html#hmac.digest"
license: "PSF"
updated: "2026-10-01"
---

# digest

Return digest of *msg* for given secret *key* and *digest*. The
function is equivalent to `HMAC(key, msg, digest).digest()`, but
uses an optimized C or inline implementation, which is faster for messages
that fit into memory. The parameters *key*, *msg*, and *digest* have
the same meaning as in `~hmac.new`.

CPython implementation detail, the optimized C implementation is only used
when *digest* is a string and name of a digest algorithm, which is
supported by OpenSSL.

> *Added in 3.7*
