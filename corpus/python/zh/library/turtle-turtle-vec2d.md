---
id: "python-zh-function-turtle-vec2d"
language: "python"
lang: "zh"
category: "function"
name: "Vec2D"
signature: "Vec2D(x, y)"
directive: "class"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#turtle.Vec2D"
license: "PSF"
updated: "2026-10-01"
---

# Vec2D

A two-dimensional vector class, used as a helper class for implementing
turtle graphics.  May be useful for turtle graphics programs too.  Derived
from tuple, so a vector is a tuple!

提供的运算 (*a*, *b* 为矢量, *k* 为数值):

* `a + b` vector addition
* `a - b` vector subtraction
* `a * b` inner product
* `k * a` and `a * k` multiplication with scalar
* `abs(a)` absolute value of a
* `a.rotate(angle)` rotation
