---
id: "python-en-function-builtins-bytearray-replace"
language: "python"
lang: "en"
category: "function"
name: "bytearray.replace"
signature: "bytearray.replace(old, new, /, count=-1)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.replace"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.replace

Return a copy of the sequence with all occurrences of subsequence *old*
replaced by *new*.  If *count* is given, only the first *count* occurrences
are replaced.  If *count* is not specified or `-1`, then all occurrences
are replaced.

The subsequence to search for and its replacement may be any
`bytes-like object`.

> **Note**
>
> The bytearray version of this method does *not* operate in place - it
> always produces a new object, even if no changes were made.
>

> *Changed in 3.15*: *count* is now supported as a keyword argument.
