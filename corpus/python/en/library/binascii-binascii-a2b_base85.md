---
id: "python-en-function-binascii-a2b_base85"
language: "python"
lang: "en"
category: "function"
name: "a2b_base85"
signature: "a2b_base85(string, /, *, alphabet=BASE85_ALPHABET, ignorechars=b'', canonical=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.a2b_base85"
license: "PSF"
updated: "2026-10-01"
---

# a2b_base85

Convert Base85 data back to binary and return the binary data.
More than one line may be passed at a time.

Valid Base85 data contains characters from the Base85 alphabet in groups
of five (except for the final group, which may have from two to five
characters). Each group encodes 32 bits of binary data in the range from
`0` to `2 ** 32 - 1`, inclusive. A single-character final group is
always rejected as an encoding violation.

Optional *alphabet* must be a `bytes` object of length 85 which
specifies an alternative alphabet.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

If *canonical* is true, non-canonical encodings are rejected with
`binascii.Error`.  Here "canonical" means the encoding that
`b2a_base85` would produce: partial final groups must use the
same padding digits as the encoder.

Invalid Base85 data will raise `binascii.Error`.

> *Added in 3.15*
