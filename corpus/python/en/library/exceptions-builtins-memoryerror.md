---
id: "python-en-function-builtins-memoryerror"
language: "python"
lang: "en"
category: "function"
name: "MemoryError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#MemoryError"
license: "PSF"
updated: "2026-10-01"
---

# MemoryError

Raised when an operation runs out of memory but the situation may still be
rescued (by deleting some objects).  The associated value is a string indicating
what kind of (internal) operation ran out of memory. Note that because of the
underlying memory management architecture (C's :c`malloc` function), the
interpreter may not always be able to completely recover from this situation; it
nevertheless raises an exception so that a stack traceback can be printed, in
case a run-away program was the cause.
