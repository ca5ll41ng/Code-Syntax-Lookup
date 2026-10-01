---
id: "python-en-function-builtins-bytearray-find"
language: "python"
lang: "en"
category: "function"
name: "bytearray.find"
signature: "bytearray.find(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.find"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.find

Return the lowest index in the data where the subsequence *sub* is found,
such that *sub* is contained in the slice `s[start:end]`.  Optional
arguments *start* and *end* are interpreted as in slice notation.  Return
`-1` if *sub* is not found.

The subsequence to search for may be any `bytes-like object` or an
integer in the range 0 to 255.

> **Note**
>
> The `~bytes.find` method should be used only if you need to know the
> position of *sub*.  To check if *sub* is a substring or not, use the
> `in` operator::
>
>    >>> b'Py' in b'Python'
>    True
>

> *Changed in 3.3*: Also accept an integer in the range 0 to 255 as the subsequence.
