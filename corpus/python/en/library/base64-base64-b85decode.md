---
id: "python-en-function-base64-b85decode"
language: "python"
lang: "en"
category: "function"
name: "b85decode"
signature: "b85decode(b, *, ignorechars=b'', canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b85decode"
license: "PSF"
updated: "2026-10-01"
---

# b85decode

Decode the base85-encoded `bytes-like object` or ASCII string *b* and
return the decoded `bytes`.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

If *canonical* is true, non-canonical encodings are rejected.
See `binascii.a2b_base85` for details.

> *Added in 3.4*

> *Changed in 3.15*: Added the *canonical* and *ignorechars* parameters. Single-character final groups are now always rejected as encoding violations.
