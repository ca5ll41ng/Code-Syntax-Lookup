---
id: "python-en-function-decimal-extendedcontext"
language: "python"
lang: "en"
category: "function"
name: "ExtendedContext"
directive: "data"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.ExtendedContext"
license: "PSF"
updated: "2026-10-01"
---

# ExtendedContext

This is a standard context defined by the General Decimal Arithmetic
Specification.  Precision is set to nine.  Rounding is set to
`ROUND_HALF_EVEN`.  All flags are cleared.  No traps are enabled (so that
exceptions are not raised during computations).

Because the traps are disabled, this context is useful for applications that
prefer to have result value of `NaN` or `Infinity` instead of
raising exceptions.  This allows an application to complete a run in the
presence of conditions that would otherwise halt the program.
