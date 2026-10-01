---
id: "python-en-function-base64-b32decode"
language: "python"
lang: "en"
category: "function"
name: "b32decode"
signature: "b32decode(s, casefold=False, map01=None, *, padded=True, ignorechars=b'', canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b32decode"
license: "PSF"
updated: "2026-10-01"
---

# b32decode

Decode the Base32 encoded `bytes-like object` or ASCII string *s* and
return the decoded `bytes`.

Optional *casefold* is a flag specifying
whether a lowercase alphabet is acceptable as input.  For security purposes,
the default is `False`.

RFC 4648 allows for optional mapping of the digit 0 (zero) to the letter O
(oh), and for optional mapping of the digit 1 (one) to either the letter I (eye)
or letter L (el).  The optional argument *map01* when not `None`, specifies
which letter the digit 1 should be mapped to (when *map01* is not `None`, the
digit 0 is always mapped to the letter O).  For security purposes the default is
`None`, so that 0 and 1 are not allowed in the input.

If *padded* is true, the last group of 8 base 32 alphabet characters must
be padded with the '=' character.
If *padded* is false, padding is neither required nor recognized:
the '=' character is not treated as padding but as a non-alphabet
character, which means it raises an `~binascii.Error` unless
b'=' is included in *ignorechars*.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

If *canonical* is true, non-zero padding bits are rejected.
See `binascii.a2b_base32` for details.

A `binascii.Error` is raised if *s* is
incorrectly padded or if there are non-alphabet characters present in the
input.

> *Changed in 3.15*: Added the *canonical*, *ignorechars*, and *padded* parameters.
