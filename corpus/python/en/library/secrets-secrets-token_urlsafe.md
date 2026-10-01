---
id: "python-en-function-secrets-token_urlsafe"
language: "python"
lang: "en"
category: "function"
name: "token_urlsafe"
signature: "token_urlsafe(nbytes=None)"
directive: "function"
module: "secrets"
source_url: "https://docs.python.org/3/library/secrets.html#secrets.token_urlsafe"
license: "PSF"
updated: "2026-10-01"
---

# token_urlsafe

Return a random URL-safe text string, containing *nbytes* random
bytes.  The text is Base64 encoded, so on average each byte results
in approximately 1.3 characters.

If *nbytes* is not specified or `None`, `DEFAULT_ENTROPY`
is used instead.

```python

>>> token_urlsafe(16)  # doctest: +SKIP
'Drmhze6EPcv0fN_81Bj-nA'
```
