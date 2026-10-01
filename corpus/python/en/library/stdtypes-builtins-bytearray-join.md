---
id: "python-en-function-builtins-bytearray-join"
language: "python"
lang: "en"
category: "function"
name: "bytearray.join"
signature: "bytearray.join(iterable, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.join"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.join

Return a bytes or bytearray object which is the concatenation of the
binary data sequences in *iterable*.  A `TypeError` will be raised
if there are any values in *iterable* that are not `bytes-like
objects`, including `str` objects.  The
separator between elements is the contents of the bytes or
bytearray object providing this method.
