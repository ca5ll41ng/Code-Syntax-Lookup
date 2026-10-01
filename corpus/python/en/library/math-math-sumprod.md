---
id: "python-en-function-math-sumprod"
language: "python"
lang: "en"
category: "function"
name: "sumprod"
signature: "sumprod(p, q)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.sumprod"
license: "PSF"
updated: "2026-10-01"
---

# sumprod

Return the sum of products of values from two iterables *p* and *q*.

Raises `ValueError` if the inputs do not have the same length.

Roughly equivalent to::

    sum(map(operator.mul, p, q, strict=True))

For float and mixed int/float inputs, the intermediate products
and sums are computed with extended precision.

> *Added in 3.12*
