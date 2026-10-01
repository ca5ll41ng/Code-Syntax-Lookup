---
id: "python-en-function-math-fmin"
language: "python"
lang: "en"
category: "function"
name: "fmin"
signature: "fmin(x, y)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.fmin"
license: "PSF"
updated: "2026-10-01"
---

# fmin

Get the smaller of two floating-point values, treating NaNs as missing data.

When both operands are (signed) NaNs or zeroes, return `nan` and `0`
respectively and the sign of the result is implementation-defined, that
is, `fmin` is not required to be sensitive to the sign of such
operands (see Annex F of the C11 standard, §F.10.0.3 and §F.10.9.3).

> *Added in 3.15*
