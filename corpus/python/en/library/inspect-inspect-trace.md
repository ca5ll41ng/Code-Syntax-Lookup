---
id: "python-en-function-inspect-trace"
language: "python"
lang: "en"
category: "function"
name: "trace"
signature: "trace(context=1)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.trace"
license: "PSF"
updated: "2026-10-01"
---

# trace

Return a list of `FrameInfo` objects for the stack between the current
frame and the frame in which an exception currently being handled was raised
in.  The first entry in the list represents the caller; the last entry
represents where the exception was raised.

> *Changed in 3.5*: A list of :term:`named tuples <named tuple>` ``FrameInfo(frame, filename, lineno, function, code_context, index)`` is returned.

> *Changed in 3.11*: A list of :class:`FrameInfo` objects is returned.
