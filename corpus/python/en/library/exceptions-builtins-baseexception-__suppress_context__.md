---
id: "python-en-function-builtins-baseexception-__suppress_context__"
language: "python"
lang: "en"
category: "function"
name: "BaseException.__suppress_context__"
directive: "attribute"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#BaseException.__suppress_context__"
license: "PSF"
updated: "2026-10-01"
---

# BaseException.__suppress_context__

When raising a new exception while another exception
is already being handled, the new exception's
`__context__` attribute is automatically set to the handled
exception.  An exception may be handled when an `except` or
`finally` clause, or a `with` statement, is used.

This implicit exception context can be
supplemented with an explicit cause by using `from` with
`raise`::

   raise new_exc from original_exc

The expression following `from` must be an exception or `None`. It
will be set as `__cause__` on the raised exception. Setting
`__cause__` also implicitly sets the `__suppress_context__`
attribute to `True`, so that using `raise new_exc from None`
effectively replaces the old exception with the new one for display
purposes (e.g. converting `KeyError` to `AttributeError`), while
leaving the old exception available in `__context__` for introspection
when debugging.

The default traceback display code shows these chained exceptions in
addition to the traceback for the exception itself. An explicitly chained
exception in `__cause__` is always shown when present. An implicitly
chained exception in `__context__` is shown only if `__cause__`
is `None` and `__suppress_context__` is false.

In either case, the exception itself is always shown after any chained
exceptions so that the final line of the traceback always shows the last
exception that was raised.
