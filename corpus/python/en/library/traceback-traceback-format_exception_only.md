---
id: "python-en-function-traceback-format_exception_only"
language: "python"
lang: "en"
category: "function"
name: "format_exception_only"
signature: "format_exception_only(exc, /[, value], *, show_group=False)"
directive: "function"
module: "traceback"
source_url: "https://docs.python.org/3/library/traceback.html#traceback.format_exception_only"
license: "PSF"
updated: "2026-10-01"
---

# format_exception_only

Format the exception part of a traceback using an exception value such as
given by `sys.last_exc`.  The return value is a list of strings, each
ending in a newline.  The list contains the exception's message, which is
normally a single string; however, for `SyntaxError` exceptions, it
contains several lines that (when printed) display detailed information
about where the syntax error occurred. Following the message, the list
contains the exception's `notes`.

Since Python 3.10, instead of passing *value*, an exception object
can be passed as the first argument.  If *value* is provided, the first
argument is ignored in order to provide backwards compatibility.

When *show_group* is `True`, and the exception is an instance of
`BaseExceptionGroup`, the nested exceptions are included as
well, recursively, with indentation relative to their nesting depth.

> *Changed in 3.10*: The *etype* parameter has been renamed to *exc* and is now positional-only.

> *Changed in 3.11*: The returned list now includes any :attr:`notes <BaseException.__notes__>` attached to the exception.

> *Changed in 3.13*: *show_group* parameter was added.
