---
id: "python-en-function-decimal-subnormal"
language: "python"
lang: "en"
category: "function"
name: "Subnormal"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.Subnormal"
license: "PSF"
updated: "2026-10-01"
---

# Subnormal

Exponent was lower than `~Context.Emin` prior to rounding.

Occurs when an operation result is subnormal (the exponent is too small). If
not trapped, returns the result unchanged.
