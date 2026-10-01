---
id: "python-en-function-builtins-float"
language: "python"
lang: "en"
category: "function"
name: "float"
signature: "float(number=0.0, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#float"
license: "PSF"
updated: "2026-10-01"
---

# float

Return a floating-point number constructed from a number or a string.

Examples:

```python

>>> float('+1.23')
1.23
>>> float('   -12345\n')
-12345.0
>>> float('1e-003')
0.001
>>> float('+1E6')
1000000.0
>>> float('-Infinity')
-inf
```

If the argument is a string, it should contain a decimal number, optionally
preceded by a sign, and optionally embedded in whitespace.  The optional
sign may be `'+'` or `'-'`; a `'+'` sign has no effect on the value
produced.  The argument may also be a string representing a NaN
(not-a-number), or positive or negative infinity.
More precisely, the input must conform to the `~float:floatvalue`
production rule in the following grammar, after leading and trailing
whitespace characters are removed:

```text
sign: "+" | "-"
infinity: "Infinity" | "inf"
nan: "nan"
digit: <a Unicode decimal digit, i.e. characters in Unicode general category Nd>
digitpart: `digit` (["_"] `digit`)*
number: [`digitpart`] "." `digitpart` | `digitpart` ["."]
exponent: ("e" | "E") [`sign`] `digitpart`
floatnumber: `number` [`exponent`]
absfloatvalue: `floatnumber` | `infinity` | `nan`
floatvalue: [`sign`] `absfloatvalue`
```

Case is not significant, so, for example, "inf", "Inf", "INFINITY", and
"iNfINity" are all acceptable spellings for positive infinity.

Otherwise, if the argument is an integer or a floating-point number, a
floating-point number with the same value (within Python's floating-point
precision) is returned.  If the argument is outside the range of a Python
float, an `OverflowError` will be raised.

For a general Python object `x`, `float(x)` delegates to
`x.__float__()`.  If `~object.__float__` is not defined then it falls back
to `~object.__index__`.

See also `float.from_number` which only accepts a numeric argument.

If no argument is given, `0.0` is returned.

The float type is described in `typesnumeric`.

> *Changed in 3.6*: Grouping digits with underscores as in code literals is allowed.

> *Changed in 3.7*: The parameter is now positional-only.

> *Changed in 3.8*: Falls back to :meth:`~object.__index__` if :meth:`~object.__float__` is not defined.
