---
id: "python-zh-function-random-randrange"
language: "python"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "randrange"
signature: "randrange(stop)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/zh-cn/3/library/random.html#random.randrange"
license: "PSF"
updated: "2026-10-01"
---

# randrange

返回从 ``range(start, stop, step)`` 随机选择的一个元素。

This is roughly equivalent to `choice(range(start, stop, step))` but
supports arbitrarily large ranges and is optimized for common cases.

该位置参数的模式与 :func:`range` 函数相匹配。

Keyword arguments should not be used because they can be interpreted
in unexpected ways. For example `randrange(start=100)` is interpreted
as `randrange(0, 100, 1)`.

> *Changed in 3.2*: :meth:`randrange` is more sophisticated about producing equally distributed values.  Formerly it used a style like ``int(random()*n)`` which could produce slightly uneven distributions.

> *Changed in 3.12*: Automatic conversion of non-integer types is no longer supported. Calls such as ``randrange(10.0)`` and ``randrange(Fraction(10, 1))`` now raise a :exc:`TypeError`.
