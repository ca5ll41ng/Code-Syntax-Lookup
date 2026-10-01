---
id: "python-zh-function-decimal-overflow"
language: "python"
lang: "zh"
category: "function"
name: "Overflow"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.Overflow"
license: "PSF"
updated: "2026-10-01"
---

# Overflow

数值的溢出。

Indicates the exponent is larger than `Context.Emax` after rounding has
occurred.  If not trapped, the result depends on the rounding mode, either
pulling inward to the largest representable finite number or rounding outward
to `Infinity`.  In either case, `Inexact` and `Rounded`
are also signaled.
