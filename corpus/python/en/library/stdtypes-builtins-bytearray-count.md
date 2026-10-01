---
id: "python-en-function-builtins-bytearray-count"
language: "python"
lang: "en"
category: "function"
name: "bytearray.count"
signature: "bytearray.count(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.count"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.count

Return the number of non-overlapping occurrences of subsequence *sub* in
the range [*start*, *end*].  Optional arguments *start* and *end* are
interpreted as in slice notation.

The subsequence to search for may be any `bytes-like object` or an
integer in the range 0 to 255.

If *sub* is empty, returns the number of empty slices between characters
which is the length of the bytes object plus one.

> *Changed in 3.3*: Also accept an integer in the range 0 to 255 as the subsequence.
