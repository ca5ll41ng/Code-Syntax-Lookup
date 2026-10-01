---
id: "python-en-function-base64-z85decode"
language: "python"
lang: "en"
category: "function"
name: "z85decode"
signature: "z85decode(s, *, ignorechars=b'', canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.z85decode"
license: "PSF"
updated: "2026-10-01"
---

# z85decode

Decode the Z85-encoded `bytes-like object` or ASCII string *s* and
return the decoded `bytes`.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

If *canonical* is true, non-canonical encodings are rejected.
See `binascii.a2b_base85` for details.

> *Added in 3.13*

> *Changed in 3.15*: Added the *canonical* and *ignorechars* parameters. Single-character final groups are now always rejected as encoding violations.
