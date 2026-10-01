---
id: "python-en-function-decimal-overflow"
language: "python"
lang: "en"
category: "function"
name: "Overflow"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.Overflow"
license: "PSF"
updated: "2026-10-01"
---

# Overflow

Numerical overflow.

Indicates the exponent is larger than `Context.Emax` after rounding has
occurred.  If not trapped, the result depends on the rounding mode, either
pulling inward to the largest representable finite number or rounding outward
to `Infinity`.  In either case, `Inexact` and `Rounded`
are also signaled.
