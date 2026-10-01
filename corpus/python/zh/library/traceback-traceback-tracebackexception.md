---
id: "python-zh-function-traceback-tracebackexception"
language: "python"
lang: "zh"
category: "function"
name: "TracebackException"
signature: "TracebackException(exc_type, exc_value, exc_traceback, *, limit=None, lookup_lines=True, capture_locals=False, compact=False, max_group_width=15, max_group_depth=10)"
directive: "class"
module: "traceback"
source_url: "https://docs.python.org/zh-cn/3/library/traceback.html#traceback.TracebackException"
license: "PSF"
updated: "2026-10-01"
---

# TracebackException

Capture an exception for later rendering. The meaning of *limit*,
*lookup_lines* and *capture_locals* are as for the `StackSummary`
class.

If *compact* is true, only data that is required by
`TracebackException`'s `format` method
is saved in the class attributes. In particular, the
`__context__` field is calculated only if `__cause__` is
`None` and `__suppress_context__` is false.

请注意当局部变量被捕获时，它们也会被显示在回溯中。

*max_group_width* and *max_group_depth* control the formatting of exception
groups (see `BaseExceptionGroup`). The depth refers to the nesting
level of the group, and the width refers to the size of a single exception
group's exceptions array. The formatted output is truncated when either
limit is exceeded.

> *Changed in 3.10*: Added the *compact* parameter.

> *Changed in 3.11*: Added the *max_group_width* and *max_group_depth* parameters.

attribute:: __cause__

attribute:: __context__

attribute:: exceptions

attribute:: __suppress_context__

attribute:: __notes__

attribute:: stack

attribute:: exc_type

attribute:: exc_type_str

attribute:: filename

attribute:: lineno

attribute:: end_lineno

attribute:: text

attribute:: offset

attribute:: end_offset

attribute:: msg

classmethod:: from_exception(exc, *, limit=None, lookup_lines=True, capture_locals=False, compact=False, max_group_width=15, max_group_depth=10)

method::  print(*, file=None, chain=True)

method:: format(*, chain=True)

method::  format_exception_only(*, show_group=False)
