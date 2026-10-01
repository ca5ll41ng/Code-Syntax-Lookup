---
id: "python-en-function-builtins-bytes-rfind"
language: "python"
lang: "en"
category: "function"
name: "bytes.rfind"
signature: "bytes.rfind(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.rfind"
license: "PSF"
updated: "2026-10-01"
---

# bytes.rfind

Return the highest index in the sequence where the subsequence *sub* is
found, such that *sub* is contained within `s[start:end]`.  Optional
arguments *start* and *end* are interpreted as in slice notation. Return
`-1` on failure.

The subsequence to search for may be any `bytes-like object` or an
integer in the range 0 to 255.

> *Changed in 3.3*: Also accept an integer in the range 0 to 255 as the subsequence.
