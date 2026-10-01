---
id: "python-en-function-math-modf"
language: "python"
lang: "en"
category: "function"
name: "modf"
signature: "modf(x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.modf"
license: "PSF"
updated: "2026-10-01"
---

# modf

Return the fractional and integer parts of *x*.  Both results carry the sign
of *x* and are floats.

Note that `modf` has a different call/return pattern
than its C equivalents: it takes a single argument and return a pair of
values, rather than returning its second return value through an 'output
parameter' (there is no such thing in Python).
