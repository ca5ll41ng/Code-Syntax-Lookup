---
id: "python-en-function-base64-b16decode"
language: "python"
lang: "en"
category: "function"
name: "b16decode"
signature: "b16decode(s, casefold=False, *, ignorechars=b'')"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b16decode"
license: "PSF"
updated: "2026-10-01"
---

# b16decode

Decode the Base16 encoded `bytes-like object` or ASCII string *s* and
return the decoded `bytes`.

Optional *casefold* is a flag specifying whether a
lowercase alphabet is acceptable as input.  For security purposes, the default
is `False`.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

A `binascii.Error` is raised if *s* is
incorrectly padded or if there are non-alphabet characters present in the
input.

> *Changed in 3.15*: Added the *ignorechars* parameter.
