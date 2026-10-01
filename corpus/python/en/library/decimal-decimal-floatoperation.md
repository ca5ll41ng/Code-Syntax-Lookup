---
id: "python-en-function-decimal-floatoperation"
language: "python"
lang: "en"
category: "function"
name: "FloatOperation"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.FloatOperation"
license: "PSF"
updated: "2026-10-01"
---

# FloatOperation

Enable stricter semantics for mixing floats and Decimals.

If the signal is not trapped (default), mixing floats and Decimals is
permitted in the `~decimal.Decimal` constructor,
`~decimal.Context.create_decimal` and all comparison operators.
Both conversion and comparisons are exact. Any occurrence of a mixed
operation is silently recorded by setting `FloatOperation` in the
context flags. Explicit conversions with `~decimal.Decimal.from_float`
or `~decimal.Context.create_decimal_from_float` do not set the flag.

Otherwise (the signal is trapped), only equality comparisons and explicit
conversions are silent. All other mixed operations raise `FloatOperation`.
