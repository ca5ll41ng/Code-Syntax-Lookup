---
id: "python-en-function-binascii-a2b_base64"
language: "python"
lang: "en"
category: "function"
name: "a2b_base64"
signature: "a2b_base64(string, /, *, padded=True, alphabet=BASE64_ALPHABET, strict_mode=False, canonical=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.a2b_base64"
license: "PSF"
updated: "2026-10-01"
---

# a2b_base64

Convert a block of base64 data back to binary and return the binary data. More
than one line may be passed at a time.

Optional *alphabet* must be a `bytes` object of length 64 which
specifies an alternative alphabet.

If *padded* is true, the last group of 4 base 64 alphabet characters must
be padded with the '=' character.
If *padded* is false, padding is neither required nor recognized:
the '=' character is not treated as padding but as a non-alphabet
character, which means it is silently discarded when *strict_mode* is false,
or causes an `~binascii.Error` when *strict_mode* is true unless
b'=' is included in *ignorechars*.

If *ignorechars* is specified, it should be a `bytes-like object`
containing characters to ignore from the input when *strict_mode* is true.
If *ignorechars* contains the pad character `'='`,  the pad characters
presented before the end of the encoded data and the excess pad characters
will be ignored.
The default value of *strict_mode* is `True` if *ignorechars* is specified,
`False` otherwise.

If *strict_mode* is true, only valid base64 data will be converted. Invalid base64
data will raise `binascii.Error`.

Valid base64:

* Conforms to RFC 4648.
* Contains only characters from the base64 alphabet.
* Contains no excess data after padding (including excess padding, newlines, etc.).
* Does not start with a padding.

If *canonical* is true, non-zero padding bits in the last group are rejected
with `binascii.Error`, enforcing canonical encoding as defined in
RFC 4648 section 3.5.  This check is independent of *strict_mode*.

> *Changed in 3.11*: Added the *strict_mode* parameter.

> *Changed in 3.15*: Added the *alphabet*, *canonical*, *ignorechars*, and *padded* parameters.
