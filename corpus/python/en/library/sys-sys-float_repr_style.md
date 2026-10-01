---
id: "python-en-function-sys-float_repr_style"
language: "python"
lang: "en"
category: "function"
name: "float_repr_style"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.float_repr_style"
license: "PSF"
updated: "2026-10-01"
---

# float_repr_style

A string indicating how the `repr` function behaves for
floats.  If the string has value `'short'` then for a finite
float `x`, `repr(x)` aims to produce a short string with the
property that `float(repr(x)) == x`.  This is the usual behaviour
in Python 3.1 and later.  Otherwise, `float_repr_style` has value
`'legacy'` and `repr(x)` behaves in the same way as it did in
versions of Python prior to 3.1.

> *Added in 3.1*
