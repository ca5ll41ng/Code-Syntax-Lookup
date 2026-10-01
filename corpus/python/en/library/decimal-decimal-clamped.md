---
id: "python-en-function-decimal-clamped"
language: "python"
lang: "en"
category: "function"
name: "Clamped"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.Clamped"
license: "PSF"
updated: "2026-10-01"
---

# Clamped

Altered an exponent to fit representation constraints.

Typically, clamping occurs when an exponent falls outside the context's
`~Context.Emin` and `~Context.Emax` limits.  If possible, the exponent is reduced to
fit by adding zeros to the coefficient.
