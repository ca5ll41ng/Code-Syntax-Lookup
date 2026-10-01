---
id: "python-en-function-decimal-basiccontext"
language: "python"
lang: "en"
category: "function"
name: "BasicContext"
directive: "data"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.BasicContext"
license: "PSF"
updated: "2026-10-01"
---

# BasicContext

This is a standard context defined by the General Decimal Arithmetic
Specification.  Precision is set to nine.  Rounding is set to
`ROUND_HALF_UP`.  All flags are cleared.  All traps are enabled (treated
as exceptions) except `Inexact`, `Rounded`, and
`Subnormal`.

Because many of the traps are enabled, this context is useful for debugging.
