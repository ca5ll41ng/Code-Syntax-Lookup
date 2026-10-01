---
id: "python-en-function-binascii-b2a_base64"
language: "python"
lang: "en"
category: "function"
name: "b2a_base64"
signature: "b2a_base64(data, *, padded=True, alphabet=BASE64_ALPHABET, wrapcol=0, newline=True)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.b2a_base64"
license: "PSF"
updated: "2026-10-01"
---

# b2a_base64

Convert binary data to a line(s) of ASCII characters in base64 coding,
as specified in RFC 4648.

If *padded* is true (default), pad the encoded data with the '='
character to a size multiple of 4.
If *padded* is false, do not add the pad characters.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not insert any newlines.

If *newline* is true (default), a newline character will be added
at the end of the output.

> *Changed in 3.6*: Added the *newline* parameter.

> *Changed in 3.15*: Added the *alphabet*, *padded* and *wrapcol* parameters.
