---
id: "python-zh-function-math-sumprod"
language: "python"
lang: "zh"
category: "function"
name: "sumprod"
signature: "sumprod(p, q)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/zh-cn/3/library/math.html#math.sumprod"
license: "PSF"
updated: "2026-10-01"
---

# sumprod

返回两个可迭代对象 *p* 和 *q* 中的值的乘积的总计值。

如果输入值的长度不相等则会引发 :exc:`ValueError`。

大致相当于::

    sum(map(operator.mul, p, q, strict=True))

For float and mixed int/float inputs, the intermediate products
and sums are computed with extended precision.

> *Added in 3.12*
