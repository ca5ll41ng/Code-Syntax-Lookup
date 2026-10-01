---
id: "python-en-function-builtins-bytes-center"
language: "python"
lang: "en"
category: "function"
name: "bytes.center"
signature: "bytes.center(width, fillbyte=b' ', /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.center"
license: "PSF"
updated: "2026-10-01"
---

# bytes.center

Return a copy of the object centered in a sequence of length *width*.
Padding is done using the specified *fillbyte* (default is an ASCII
space). For `bytes` objects, the original sequence is returned if
*width* is less than or equal to `len(s)`.

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>
