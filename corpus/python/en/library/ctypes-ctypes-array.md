---
id: "python-en-function-ctypes-array"
language: "python"
lang: "en"
category: "function"
name: "Array"
signature: "Array(*args)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.Array"
license: "PSF"
updated: "2026-10-01"
---

# Array

Abstract base class for arrays.

The recommended way to create concrete array types is by multiplying any
`ctypes` data type with a non-negative integer.  Alternatively, you can subclass
this type and define `_length_` and `_type_` class variables.
Array elements can be read and written using standard
subscript and slice accesses; for slice reads, the resulting object is
*not* itself an `Array`.

Arrays are `generic` over the type of their elements.

attribute:: _length_

attribute:: _type_

Array subclass constructors accept positional arguments, used to
initialize the elements in order.
