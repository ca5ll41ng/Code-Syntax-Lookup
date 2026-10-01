---
id: "python-en-function-math-integer-isqrt"
language: "python"
lang: "en"
category: "function"
name: "isqrt"
signature: "isqrt(n, /)"
directive: "function"
module: "math.integer"
source_url: "https://docs.python.org/3/library/math.integer.html#math.integer.isqrt"
license: "PSF"
updated: "2026-10-01"
---

# isqrt

Return the integer square root of the nonnegative integer *n*. This is the
floor of the exact square root of *n*, or equivalently the greatest integer
*a* such that *a*\ ² nbsp ≤ nbsp *n*.

For some applications, it may be more convenient to have the least integer
*a* such that *n* nbsp ≤ nbsp *a*\ ², or in other words the ceiling of
the exact square root of *n*. For positive *n*, this can be computed using
`a = 1 + isqrt(n - 1)`.

.. nbsp unicode:: 0xA0
   :trim:
