---
id: "python-zh-function-decimal-clamped"
language: "python"
lang: "zh"
category: "function"
name: "Clamped"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.Clamped"
license: "PSF"
updated: "2026-10-01"
---

# Clamped

修改一个指数以符合表示限制。

Typically, clamping occurs when an exponent falls outside the context's
`~Context.Emin` and `~Context.Emax` limits.  If possible, the exponent is reduced to
fit by adding zeros to the coefficient.
