---
id: "python-en-function-builtins-bytearray-swapcase"
language: "python"
lang: "en"
category: "function"
name: "bytearray.swapcase"
signature: "bytearray.swapcase()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.swapcase"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.swapcase

Return a copy of the sequence with all the lowercase ASCII characters
converted to their corresponding uppercase counterpart and vice-versa.

For example::

   >>> b'Hello World'.swapcase()
   b'hELLO wORLD'

Lowercase ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyz'`. Uppercase ASCII characters
are those byte values in the sequence `b'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.

Unlike `str.swapcase`, it is always the case that
`bin.swapcase().swapcase() == bin` for the binary versions. Case
conversions are symmetrical in ASCII, even though that is not generally
true for arbitrary Unicode code points.

> **Note**
>
> The bytearray version of this method does *not* operate in place - it
> always produces a new object, even if no changes were made.
>
