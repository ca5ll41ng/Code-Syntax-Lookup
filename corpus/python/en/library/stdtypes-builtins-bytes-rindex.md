---
id: "python-en-function-builtins-bytes-rindex"
language: "python"
lang: "en"
category: "function"
name: "bytes.rindex"
signature: "bytes.rindex(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.rindex"
license: "PSF"
updated: "2026-10-01"
---

# bytes.rindex

Like `~bytes.rfind` but raises `ValueError` when the
subsequence *sub* is not found.

The subsequence to search for may be any `bytes-like object` or an
integer in the range 0 to 255.

> *Changed in 3.3*: Also accept an integer in the range 0 to 255 as the subsequence.
