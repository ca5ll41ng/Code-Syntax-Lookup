---
id: "python-en-function-math-pow"
language: "python"
lang: "en"
category: "function"
name: "pow"
signature: "pow(x, y)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.pow"
license: "PSF"
updated: "2026-10-01"
---

# pow

Return *x* raised to the power *y*.  Exceptional cases follow
the IEEE 754 standard as far as possible.  In particular,
`pow(1.0, x)` and `pow(x, 0.0)` always return `1.0`, even
when *x* is a zero or a NaN.  If both *x* and *y* are finite,
*x* is negative, and *y* is not an integer then `pow(x, y)`
is undefined, and raises `ValueError`.

Unlike the built-in `**` operator, `math.pow` converts both
its arguments to type `float`.  Use `**` or the built-in
`pow` function for computing exact integer powers.

> *Changed in 3.11*: The special cases ``pow(0.0, -inf)`` and ``pow(-0.0, -inf)`` were changed to return ``inf`` instead of raising :exc:`ValueError`, for consistency with IEEE 754.
