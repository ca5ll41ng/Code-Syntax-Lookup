---
id: "python-en-function-binascii-b2a_base85"
language: "python"
lang: "en"
category: "function"
name: "b2a_base85"
signature: "b2a_base85(data, /, *, alphabet=BASE85_ALPHABET, wrapcol=0, pad=False)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.b2a_base85"
license: "PSF"
updated: "2026-10-01"
---

# b2a_base85

Convert binary data to a line of ASCII characters in Base85 coding.
The return value is the converted line.

Optional *alphabet* must be a `bytes-like object` of length 85 which
specifies an alternative alphabet.

If *wrapcol* is non-zero, insert a newline (`b'\n'`) character
after at most every *wrapcol* characters.
If *wrapcol* is zero (default), do not insert any newlines.

If *pad* is true, the zero-padding applied to the end of the input
is retained in the output, which will always be a multiple of 5
bytes, and thus the length of the data may not be preserved on
decoding.

> *Added in 3.15*
