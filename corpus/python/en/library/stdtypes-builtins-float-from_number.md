---
id: "python-en-function-builtins-float-from_number"
language: "python"
lang: "en"
category: "function"
name: "float.from_number"
signature: "float.from_number(x)"
directive: "classmethod"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#float.from_number"
license: "PSF"
updated: "2026-10-01"
---

# float.from_number

Class method to return a floating-point number constructed from a number *x*.

If the argument is an integer or a floating-point number, a
floating-point number with the same value (within Python's floating-point
precision) is returned.  If the argument is outside the range of a Python
float, an `OverflowError` will be raised.

For a general Python object `x`, `float.from_number(x)` delegates to
`x.__float__()`.
If `~object.__float__` is not defined then it falls back
to `~object.__index__`.

> *Added in 3.14*
