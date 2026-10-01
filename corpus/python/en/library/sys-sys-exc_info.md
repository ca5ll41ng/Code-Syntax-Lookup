---
id: "python-en-function-sys-exc_info"
language: "python"
lang: "en"
category: "function"
name: "exc_info"
signature: "exc_info()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.exc_info"
license: "PSF"
updated: "2026-10-01"
---

# exc_info

This function returns the old-style representation of the handled
exception. If an exception `e` is currently handled (so
`exception` would return `e`), `exc_info` returns the
tuple `(type(e), e, e.__traceback__)`.
That is, a tuple containing the type of the exception (a subclass of
`BaseException`), the exception itself, and a `traceback
object` which typically encapsulates the call
stack at the point where the exception last occurred.

If no exception is being handled anywhere on the stack, this function
return a tuple containing three `None` values.

> *Changed in 3.11*: The ``type`` and ``traceback`` fields are now derived from the ``value`` (the exception instance), so when an exception is modified while it is being handled, the changes are reflected in the results of subsequent calls to :func:`exc_info`.
