---
id: "python-en-function-builtins-systemerror"
language: "python"
lang: "en"
category: "function"
name: "SystemError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#SystemError"
license: "PSF"
updated: "2026-10-01"
---

# SystemError

Raised when the interpreter finds an internal error, but the situation does not
look so serious to cause it to abandon all hope. The associated value is a
string indicating what went wrong (in low-level terms). In `CPython`,
this could be raised by incorrectly using Python's C API, such as returning
a `NULL` value without an exception set.

If you're confident that this exception wasn't your fault, or the fault of
a package you're using, you should report this to the author or maintainer
of your Python interpreter.
Be sure to report the version of the Python interpreter (`sys.version`; it is
also printed at the start of an interactive Python session), the exact error
message (the exception's associated value) and if possible the source of the
program that triggered the error.
