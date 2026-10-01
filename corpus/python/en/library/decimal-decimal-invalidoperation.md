---
id: "python-en-function-decimal-invalidoperation"
language: "python"
lang: "en"
category: "function"
name: "InvalidOperation"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.InvalidOperation"
license: "PSF"
updated: "2026-10-01"
---

# InvalidOperation

An invalid operation was performed.

Indicates that an operation was requested that does not make sense. If not
trapped, returns `NaN`.  Possible causes include::

   Infinity - Infinity
   0 * Infinity
   Infinity / Infinity
   x % 0
   Infinity % x
   sqrt(-x) and x > 0
   0 ** 0
   x ** (non-integer)
   x ** Infinity
