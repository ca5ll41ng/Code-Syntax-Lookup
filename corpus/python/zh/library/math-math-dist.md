---
id: "python-zh-function-math-dist"
language: "python"
lang: "zh"
category: "function"
name: "dist"
signature: "dist(p, q)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/zh-cn/3/library/math.html#math.dist"
license: "PSF"
updated: "2026-10-01"
---

# dist

Return the Euclidean distance between two points *p* and *q*, each
given as a sequence (or iterable) of coordinates.  The two points
must have the same dimension.

大致相当于::

    sqrt(sum((px - qx) ** 2.0 for px, qx in zip(p, q, strict=True)))

> *Added in 3.8*
