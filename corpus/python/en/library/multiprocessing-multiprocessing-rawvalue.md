---
id: "python-en-function-multiprocessing-rawvalue"
language: "python"
lang: "en"
category: "function"
name: "RawValue"
signature: "RawValue(typecode_or_type, *args)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.RawValue"
license: "PSF"
updated: "2026-10-01"
---

# RawValue

Return a ctypes object allocated from shared memory.

*typecode_or_type* determines the type of the returned object: it is either a
ctypes type or a one character typecode of the kind used by the `array`
module.  *\*args* is passed on to the constructor for the type.

Note that setting and getting the value is potentially non-atomic -- use
`Value` instead to make sure that access is automatically synchronized
using a lock.

Note that an array of `ctypes.c_char` has `value` and `raw`
attributes which allow one to use it to store and retrieve strings -- see
documentation for `ctypes`.
