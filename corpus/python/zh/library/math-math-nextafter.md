---
id: "python-zh-function-math-nextafter"
language: "python"
lang: "zh"
category: "function"
name: "nextafter"
signature: "nextafter(x, y, steps=1)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/zh-cn/3/library/math.html#math.nextafter"
license: "PSF"
updated: "2026-10-01"
---

# nextafter

返回从 *x* 朝向 *y* 的第 *steps* 步浮点值。

如果 *x* 等于 *y*，则返回 *y*，除非 *steps* 值为零。

示例：

* `math.nextafter(x, math.inf)` goes up: towards positive infinity.
* `math.nextafter(x, -math.inf)` goes down: towards minus infinity.
* `math.nextafter(x, 0.0)` goes towards zero.
* `math.nextafter(x, math.copysign(math.inf, x))` goes away from zero.

另请参阅 :func:`math.ulp`。

> *Added in 3.9*

> *Changed in 3.12*: Added the *steps* argument.
