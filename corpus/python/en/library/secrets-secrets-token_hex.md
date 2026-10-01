---
id: "python-en-function-secrets-token_hex"
language: "python"
lang: "en"
category: "function"
name: "token_hex"
signature: "token_hex(nbytes=None)"
directive: "function"
module: "secrets"
source_url: "https://docs.python.org/3/library/secrets.html#secrets.token_hex"
license: "PSF"
updated: "2026-10-01"
---

# token_hex

Return a random text string, in hexadecimal.  The string has *nbytes*
random bytes, each byte converted to two hex digits.

If *nbytes* is not specified or `None`, `DEFAULT_ENTROPY`
is used instead.

```python

>>> token_hex(16)  # doctest: +SKIP
'f9bf78b9a18ce6d46a0cd2b0b86df9da'
```
