---
id: "python-en-function-decimal-rounded"
language: "python"
lang: "en"
category: "function"
name: "Rounded"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.Rounded"
license: "PSF"
updated: "2026-10-01"
---

# Rounded

Rounding occurred though possibly no information was lost.

Signaled whenever rounding discards digits; even if those digits are zero
(such as rounding `5.00` to `5.0`).  If not trapped, returns
the result unchanged.  This signal is used to detect loss of significant
digits.
