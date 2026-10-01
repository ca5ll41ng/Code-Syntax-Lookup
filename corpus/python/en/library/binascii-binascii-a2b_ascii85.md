---
id: "python-en-function-binascii-a2b_ascii85"
language: "python"
lang: "en"
category: "function"
name: "a2b_ascii85"
signature: "a2b_ascii85(string, /, *, foldspaces=False, adobe=False, ignorechars=b'', canonical=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.a2b_ascii85"
license: "PSF"
updated: "2026-10-01"
---

# a2b_ascii85

Convert Ascii85 data back to binary and return the binary data.

Valid Ascii85 data contains characters from the Ascii85 alphabet in groups
of five (except for the final group, which may have from two to five
characters). Each group encodes 32 bits of binary data in the range from
`0` to `2 ** 32 - 1`, inclusive. The special character `z` is
accepted as a short form of the group `!!!!!`, which encodes four
consecutive null bytes. A single-character final group is always rejected
as an encoding violation.

*foldspaces* is a flag that specifies whether the 'y' short sequence
should be accepted as shorthand for 4 consecutive spaces (ASCII 0x20).
This feature is not supported by the "standard" Ascii85 encoding.

*adobe* controls whether the encoded byte sequence is framed with
`<~` and `~>`, as in a PostScript base-85 string literal.  If
*adobe* is true, a leading `<~` is optionally accepted, while a
trailing `~>` is *required*, and `binascii.Error` is raised
if it is not found.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.
This should only contain whitespace characters.

If *canonical* is true, non-canonical encodings are rejected with
`binascii.Error`.  Here "canonical" means the encoding that
`b2a_ascii85` would produce: the `z` abbreviation must be used
for all-zero groups (rather than `!!!!!`), and partial final groups
must use the same padding digits as the encoder.

Invalid Ascii85 data will raise `binascii.Error`.

> *Added in 3.15*
