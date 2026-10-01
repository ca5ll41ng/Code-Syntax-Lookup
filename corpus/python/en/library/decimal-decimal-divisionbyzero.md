---
id: "python-en-function-decimal-divisionbyzero"
language: "python"
lang: "en"
category: "function"
name: "DivisionByZero"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.DivisionByZero"
license: "PSF"
updated: "2026-10-01"
---

# DivisionByZero

Signals the division of a non-infinite number by zero.

Can occur with division, modulo division, or when raising a number to a negative
power.  If this signal is not trapped, returns `Infinity` or
`-Infinity` with the sign determined by the inputs to the calculation.
