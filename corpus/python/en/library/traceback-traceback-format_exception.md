---
id: "python-en-function-traceback-format_exception"
language: "python"
lang: "en"
category: "function"
name: "format_exception"
signature: "format_exception(exc, /[, value, tb], limit=None, chain=True)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.format_exception"
license: "PSF"
updated: "2026-10-01"
---

# format_exception

Format a stack trace and the exception information.  The arguments  have the
same meaning as the corresponding arguments to `print_exception`.  The
return value is a list of strings, each ending in a newline and some
containing internal newlines.  When these lines are concatenated and printed,
exactly the same text is printed as does `print_exception`.

> *Changed in 3.5*: The *etype* argument is ignored and inferred from the type of *value*.

> *Changed in 3.10*: This function's behavior and signature were modified to match :func:`print_exception`.
