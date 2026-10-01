---
id: "python-en-function-hashlib-hash-update"
language: "python"
lang: "en"
category: "function"
name: "hash.update"
signature: "hash.update(data)"
directive: "method"
module: "hashlib"
source_url: "https://docs.python.org/3/library/hashlib.html#hashlib.hash.update"
license: "PSF"
updated: "2026-10-01"
---

# hash.update

Update the hash object with the `bytes-like object`.
Repeated calls are equivalent to a single call with the
concatenation of all the arguments: `m.update(a); m.update(b)` is
equivalent to `m.update(a+b)`.
