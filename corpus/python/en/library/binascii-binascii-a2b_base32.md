---
id: "python-en-function-binascii-a2b_base32"
language: "python"
lang: "en"
category: "function"
name: "a2b_base32"
signature: "a2b_base32(string, /, *, padded=True, alphabet=BASE32_ALPHABET, ignorechars=b'', canonical=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.a2b_base32"
license: "PSF"
updated: "2026-10-01"
---

# a2b_base32

Convert base32 data back to binary and return the binary data.

Valid base32 data contains characters from the base32 alphabet specified
in RFC 4648 in groups of eight (if necessary, the final group is padded
to eight characters with `=`). Each group encodes 40 bits of binary data
in the range from `0` to `2 ** 40 - 1`, inclusive.

> **Note**
>
> This function does not map lowercase characters (which are invalid in
> standard base32) to their uppercase counterparts, nor does it
> contextually map `0` to `O` and `1` to `I`/`L` as RFC 4648
> allows.
>

Optional *alphabet* must be a `bytes` object of length 32 which
specifies an alternative alphabet.

If *padded* is true, the last group of 8 base 32 alphabet characters must
be padded with the '=' character.
If *padded* is false, the '=' character is treated as other non-alphabet
characters (depending on the value of *ignorechars*).

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.
If *ignorechars* contains the pad character `'='`,  the pad characters
presented before the end of the encoded data and the excess pad characters
will be ignored.

If *canonical* is true, non-zero padding bits in the last group are rejected
with `binascii.Error`, enforcing canonical encoding as defined in
RFC 4648 section 3.5.

Invalid base32 data will raise `binascii.Error`.

> *Added in 3.15*
