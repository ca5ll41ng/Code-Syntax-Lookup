---
id: "python-en-function-base64-b64decode"
language: "python"
lang: "en"
category: "function"
name: "b64decode"
signature: "b64decode(s, altchars=None, validate=False, *, padded=True, canonical=False)"
directive: "function"
module: "base64"
source_url: "https://docs.python.org/3/library/base64.html#base64.b64decode"
license: "PSF"
updated: "2026-10-01"
---

# b64decode

Decode the Base64 encoded `bytes-like object` or ASCII string
*s* and return the decoded `bytes`.

Optional *altchars* must be a `bytes-like object` or ASCII string
of length 2 which specifies the alternative alphabet used instead of the
`+` and `/` characters.

If *padded* is true, the last group of 4 base 64 alphabet characters must
be padded with the '=' character.
If *padded* is false, padding is neither required nor recognized:
the '=' character is not treated as padding but as a non-alphabet
character, which means it is silently discarded when *validate* is false,
or causes an `~binascii.Error` when *validate* is true unless
b'=' is included in *ignorechars*.

A `binascii.Error` exception is raised
if *s* is incorrectly padded.

If *ignorechars* is specified, it should be a `bytes-like object`
containing characters to ignore from the input when *validate* is true.
If *ignorechars* contains the pad character `'='`,  the pad characters
presented before the end of the encoded data and the excess pad characters
will be ignored.
The default value of *validate* is `True` if *ignorechars* is specified,
`False` otherwise.

If *validate* is false, characters that are neither
in the normal base-64 alphabet nor (if *ignorechars* is not specified)
the alternative alphabet are
discarded prior to the padding check, but the `+` and `/` characters
keep their meaning if they are not in *altchars* (they will be discarded
in future Python versions).

If *validate* is true, these non-alphabet characters in the input
result in a `binascii.Error`.

If *canonical* is true, non-zero padding bits are rejected.
See `binascii.a2b_base64` for details.

For more information about the strict base64 check, see `binascii.a2b_base64`

> *Changed in 3.15*: Added the *canonical*, *ignorechars*, and *padded* parameters.

> *Deprecated since 3.15*: Accepting the ``+`` and ``/`` characters with an alternative alphabet is now deprecated.
