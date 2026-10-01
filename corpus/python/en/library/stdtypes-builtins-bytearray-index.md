---
id: "python-en-function-builtins-bytearray-index"
language: "python"
lang: "en"
category: "function"
name: "bytearray.index"
signature: "bytearray.index(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.index"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.index

Like `~bytes.find`, but raise `ValueError` when the
subsequence is not found.

The subsequence to search for may be any `bytes-like object` or an
integer in the range 0 to 255.

> *Changed in 3.3*: Also accept an integer in the range 0 to 255 as the subsequence.
