---
id: "python-en-function-math-frexp"
language: "python"
lang: "en"
category: "function"
name: "frexp"
signature: "frexp(x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.frexp"
license: "PSF"
updated: "2026-10-01"
---

# frexp

Return the mantissa and exponent of *x* as the pair `(m, e)`.
If *x* is a finite nonzero number, then *m* is a float with
`0.5 <= abs(m) < 1.0` and an integer *e* is such that
`x == m * 2**e` exactly.  Else, return `(x, 0)`.
This is used to "pick apart" the internal representation of
a float in a portable way.

Note that `frexp` has a different call/return pattern
than its C equivalents: it takes a single argument and return a pair of
values, rather than returning its second return value through an 'output
parameter' (there is no such thing in Python).
