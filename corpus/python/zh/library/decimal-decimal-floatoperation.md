---
id: "python-zh-function-decimal-floatoperation"
language: "python"
lang: "zh"
category: "function"
name: "FloatOperation"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.FloatOperation"
license: "PSF"
updated: "2026-10-01"
---

# FloatOperation

为 float 和 Decimal 的混合启用更严格的语义。

If the signal is not trapped (default), mixing floats and Decimals is
permitted in the `~decimal.Decimal` constructor,
`~decimal.Context.create_decimal` and all comparison operators.
Both conversion and comparisons are exact. Any occurrence of a mixed
operation is silently recorded by setting `FloatOperation` in the
context flags. Explicit conversions with `~decimal.Decimal.from_float`
or `~decimal.Context.create_decimal_from_float` do not set the flag.

Otherwise (the signal is trapped), only equality comparisons and explicit
conversions are silent. All other mixed operations raise `FloatOperation`.
