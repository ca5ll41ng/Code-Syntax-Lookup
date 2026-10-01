---
id: "python-en-function-math-trunc"
language: "python"
lang: "en"
category: "function"
name: "trunc"
signature: "trunc(x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.trunc"
license: "PSF"
updated: "2026-10-01"
---

# trunc

Return *x* with the fractional part
removed, leaving the integer part.  This rounds toward 0: `trunc()` is
equivalent to `floor` for positive *x*, and equivalent to `ceil`
for negative *x*. If *x* is not a float, delegates to `x.__trunc__`, which should return an `~numbers.Integral` value.
