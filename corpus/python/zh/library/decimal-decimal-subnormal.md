---
id: "python-zh-function-decimal-subnormal"
language: "python"
lang: "zh"
category: "function"
name: "Subnormal"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.Subnormal"
license: "PSF"
updated: "2026-10-01"
---

# Subnormal

在舍入之前指数值低于 :attr:`~Context.Emin`。

Occurs when an operation result is subnormal (the exponent is too small). If
not trapped, returns the result unchanged.
