---
id: "python-en-function-inspect-getinnerframes"
language: "python"
lang: "en"
category: "function"
name: "getinnerframes"
signature: "getinnerframes(traceback, context=1)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getinnerframes"
license: "PSF"
updated: "2026-10-01"
---

# getinnerframes

Get a list of `FrameInfo` objects for a traceback's frame and all
inner frames.  These frames represent calls made as a consequence of *frame*.
The first entry in the list represents *traceback*; the last entry represents
where the exception was raised.

> *Changed in 3.5*: A list of :term:`named tuples <named tuple>` ``FrameInfo(frame, filename, lineno, function, code_context, index)`` is returned.

> *Changed in 3.11*: A list of :class:`FrameInfo` objects is returned.
