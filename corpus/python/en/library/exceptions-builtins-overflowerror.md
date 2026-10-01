---
id: "python-en-function-builtins-overflowerror"
language: "python"
lang: "en"
category: "function"
name: "OverflowError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#OverflowError"
license: "PSF"
updated: "2026-10-01"
---

# OverflowError

Raised when the result of an arithmetic operation is too large to be
represented.  This cannot occur for integers (which would rather raise
`MemoryError` than give up).  However, for historical reasons,
OverflowError is sometimes raised for integers that are outside a required
range.   Because of the lack of standardization of floating-point exception
handling in C, most floating-point operations are not checked.
