---
id: "python-en-function-builtins-complex-from_number"
language: "python"
lang: "en"
category: "function"
name: "complex.from_number"
signature: "complex.from_number(x)"
directive: "classmethod"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#complex.from_number"
license: "PSF"
updated: "2026-10-01"
---

# complex.from_number

Class method to convert a number to a complex number.

For a general Python object `x`, `complex.from_number(x)` delegates to
`x.__complex__()`.  If `~object.__complex__` is not defined then it falls back
to `~object.__float__`.  If `__float__` is not defined then it falls back
to `~object.__index__`.

> *Added in 3.14*
