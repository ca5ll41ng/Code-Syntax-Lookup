---
id: "python-en-function-traceback-file-none-chain-true"
language: "python"
lang: "en"
category: "function"
name: "file=None, chain=True)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.file=None, chain=True)"
license: "PSF"
updated: "2026-10-01"
---

# file=None, chain=True)

Print exception information and stack trace entries from
`traceback object`
*tb* to *file*. This differs from `print_tb` in the following
ways:

* if *tb* is not `None`, it prints a header `Traceback (most recent
  call last):`

* it prints the exception type and *value* after the stack trace

* if *type(value)* is `SyntaxError` and *value* has the appropriate
  format, it prints the line where the syntax error occurred with a caret
  indicating the approximate position of the error.

Since Python 3.10, instead of passing *value* and *tb*, an exception object
can be passed as the first argument. If *value* and *tb* are provided, the
first argument is ignored in order to provide backwards compatibility.

The optional *limit* argument has the same meaning as for `print_tb`.
If *chain* is true (the default), then chained exceptions (the
`~BaseException.__cause__` or `~BaseException.__context__`
attributes of the exception) will be
printed as well, like the interpreter itself does when printing an unhandled
exception.

> *Changed in 3.5*: The *etype* argument is ignored and inferred from the type of *value*.

> *Changed in 3.10*: The *etype* parameter has been renamed to *exc* and is now positional-only.
