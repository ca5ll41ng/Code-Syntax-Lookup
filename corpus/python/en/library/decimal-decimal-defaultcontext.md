---
id: "python-en-function-decimal-defaultcontext"
language: "python"
lang: "en"
category: "function"
name: "DefaultContext"
directive: "data"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.DefaultContext"
license: "PSF"
updated: "2026-10-01"
---

# DefaultContext

This context is used by the `Context` constructor as a prototype for new
contexts.  Changing a field (such a precision) has the effect of changing the
default for new contexts created by the `Context` constructor.

This context is most useful in multi-threaded environments.  Changing one of the
fields before threads are started has the effect of setting system-wide
defaults.  Changing the fields after threads have started is not recommended as
it would require thread synchronization to prevent race conditions.

In single threaded environments, it is preferable to not use this context at
all.  Instead, simply create contexts explicitly as described below.

The default values are `Context.prec`\ =\ `28`,
`Context.rounding`\ =\ `ROUND_HALF_EVEN`,
and enabled traps for `Overflow`, `InvalidOperation`, and
`DivisionByZero`.
