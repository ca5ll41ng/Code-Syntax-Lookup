---
id: "python-en-function-binascii-b2a_base32"
language: "python"
lang: "en"
category: "function"
name: "b2a_base32"
signature: "b2a_base32(data, /, *, padded=True, alphabet=BASE32_ALPHABET, wrapcol=0)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.b2a_base32"
license: "PSF"
updated: "2026-10-01"
---

# b2a_base32

Convert binary data to a line of ASCII characters in base32 coding,
as specified in RFC 4648. The return value is the converted line.

Optional *alphabet* must be a `bytes-like object` of length 32 which
specifies an alternative alphabet.

If *padded* is true (default), pad the encoded data with the '='
character to a size multiple of 8.
If *padded* is false, do not add the pad characters.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not insert any newlines.

> *Added in 3.15*
