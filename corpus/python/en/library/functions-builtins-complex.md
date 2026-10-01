---
id: "python-en-function-builtins-complex"
language: "python"
lang: "en"
category: "function"
name: "complex"
signature: "complex(number=0, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#complex"
license: "PSF"
updated: "2026-10-01"
---

# complex

Convert a single string or number to a complex number, or create a
complex number from real and imaginary parts.

Examples:

```python

>>> complex('+1.23')
(1.23+0j)
>>> complex('-4.5j')
-4.5j
>>> complex('-1.23+4.5j')
(-1.23+4.5j)
>>> complex('\t( -1.23+4.5J )\n')
(-1.23+4.5j)
>>> complex('-Infinity+NaNj')
(-inf+nanj)
>>> complex(1.23)
(1.23+0j)
>>> complex(imag=-4.5)
-4.5j
>>> complex(-1.23, 4.5)
(-1.23+4.5j)
```

If the argument is a string, it must contain either a real part (in the
same format as for `float`) or an imaginary part (in the same
format but with a `'j'` or `'J'` suffix), or both real and imaginary
parts (the sign of the imaginary part is mandatory in this case).
The string can optionally be surrounded by whitespaces and the round
parentheses `'('` and `')'`, which are ignored.
The string must not contain whitespace between `'+'`, `'-'`, the
`'j'` or `'J'` suffix, and the decimal number.
For example, `complex('1+2j')` is fine, but `complex('1 + 2j')` raises
`ValueError`.
More precisely, the input must conform to the `~float:complexvalue`
production rule in the following grammar, after parentheses and leading and
trailing whitespace characters are removed:

```text
complexvalue: `floatvalue` |
            : `floatvalue` ("j" | "J") |
            : `floatvalue` `sign` `absfloatvalue` ("j" | "J")
```

If the argument is a number, the constructor serves as a numeric
conversion like `int` and `float`.
For a general Python object `x`, `complex(x)` delegates to
`x.__complex__()`.
If `~object.__complex__` is not defined then it falls back
to `~object.__float__`.
If `__float__` is not defined then it falls back
to `~object.__index__`.

If two arguments are provided or keyword arguments are used, each argument
may be any numeric type (including complex).
If both arguments are real numbers, return a complex number with the real
component *real* and the imaginary component *imag*.
If both arguments are complex numbers, return a complex number with the real
component `real.real-imag.imag` and the imaginary component
`real.imag+imag.real`.
If one of arguments is a real number, only its real component is used in
the above expressions.

See also `complex.from_number` which only accepts a single numeric argument.

If all arguments are omitted, returns `0j`.

The complex type is described in `typesnumeric`.

> *Changed in 3.6*: Grouping digits with underscores as in code literals is allowed.

> *Changed in 3.8*: Falls back to :meth:`~object.__index__` if :meth:`~object.__complex__` and :meth:`~object.__float__` are not defined.

> *Deprecated since 3.14*: Passing a complex number as the *real* or *imag* argument is now deprecated; it should only be passed as a single positional argument.
