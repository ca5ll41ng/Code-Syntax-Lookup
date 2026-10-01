---
id: "python-en-function-base64-b32hexdecode"
language: "python"
lang: "en"
category: "function"
name: "b32hexdecode"
signature: "b32hexdecode(s, casefold=False, *, padded=True, ignorechars=b'', canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b32hexdecode"
license: "PSF"
updated: "2026-10-01"
---

# b32hexdecode

Similar to `b32decode` but uses the Extended Hex Alphabet, as defined in
RFC 4648.

This version does not allow the digit 0 (zero) to the letter O (oh) and digit
1 (one) to either the letter I (eye) or letter L (el) mappings, all these
characters are included in the Extended Hex Alphabet and are not
interchangeable.

> *Added in 3.10*

> *Changed in 3.15*: Added the *canonical*, *ignorechars*, and *padded* parameters.
