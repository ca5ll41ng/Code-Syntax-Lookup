---
id: "python-zh-function-decimal-invalidoperation"
language: "python"
lang: "zh"
category: "function"
name: "InvalidOperation"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/zh-cn/3/library/decimal.html#decimal.InvalidOperation"
license: "PSF"
updated: "2026-10-01"
---

# InvalidOperation

执行了一个无效的操作。

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
