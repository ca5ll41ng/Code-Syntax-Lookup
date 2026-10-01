---
id: "python-en-function-secrets-token_bytes"
language: "python"
lang: "en"
category: "function"
name: "token_bytes"
signature: "token_bytes(nbytes=None)"
directive: "function"
module: "secrets"
source_url: "https://docs.python.org/3/library/secrets.html#secrets.token_bytes"
license: "PSF"
updated: "2026-10-01"
---

# token_bytes

Return a random byte string containing *nbytes* number of bytes.

If *nbytes* is not specified or `None`, `DEFAULT_ENTROPY`
is used instead.

```python

>>> token_bytes(16)  # doctest: +SKIP
b'\xebr\x17D*t\xae\xd4\xe3S\xb6\xe2\xebP1\x8b'
```
