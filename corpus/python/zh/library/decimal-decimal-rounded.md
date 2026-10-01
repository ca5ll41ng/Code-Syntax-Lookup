---
id: "python-zh-function-decimal-rounded"
language: "python"
lang: "zh"
category: "function"
name: "Rounded"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.Rounded"
license: "PSF"
updated: "2026-10-01"
---

# Rounded

发生了舍入，但或许并没有信息丢失。

Signaled whenever rounding discards digits; even if those digits are zero
(such as rounding `5.00` to `5.0`).  If not trapped, returns
the result unchanged.  This signal is used to detect loss of significant
digits.
