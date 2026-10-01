---
id: "python-en-function-math-fma"
language: "python"
lang: "en"
category: "function"
name: "fma"
signature: "fma(x, y, z)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.fma"
license: "PSF"
updated: "2026-10-01"
---

# fma

Fused multiply-add operation. Return `(x * y) + z`, computed as though with
infinite precision and range followed by a single round to the `float`
format. This operation often provides better accuracy than the direct
expression `(x * y) + z`.

This function follows the specification of the fusedMultiplyAdd operation
described in the IEEE 754 standard. The standard leaves one case
implementation-defined, namely the result of `fma(0, inf, nan)`
and `fma(inf, 0, nan)`. In these cases, `math.fma` returns a NaN,
and does not raise any exception.

> *Added in 3.13*
