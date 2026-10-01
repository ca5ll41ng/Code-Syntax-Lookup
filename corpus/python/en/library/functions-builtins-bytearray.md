---
id: "python-en-function-builtins-bytearray"
language: "python"
lang: "en"
category: "function"
name: "bytearray"
signature: "bytearray(source=b'')"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#bytearray"
license: "PSF"
updated: "2026-10-01"
---

# bytearray

Return a new array of bytes.  The `bytearray` class is a mutable
sequence of integers in the range 0 <= x < 256.  It has most of the usual
methods of mutable sequences, described in `typesseq-mutable`, as well
as most methods that the `bytes` type has, see `bytes-methods`.

The optional *source* parameter can be used to initialize the array in a few
different ways:

* If it is a *string*, you must also give the *encoding* (and optionally,
  *errors*) parameters; `bytearray` then converts the string to
  bytes using `str.encode`.

* If it is an *integer*, the array will have that size and will be
  initialized with null bytes.

* If it is an object conforming to the `buffer interface`,
  a read-only buffer of the object will be used to initialize the bytes array.

* If it is an *iterable*, it must be an iterable of integers in the range
  `0 <= x < 256`, which are used as the initial contents of the array.

Without an argument, an array of size 0 is created.

See also `binaryseq` and `typebytearray`.
