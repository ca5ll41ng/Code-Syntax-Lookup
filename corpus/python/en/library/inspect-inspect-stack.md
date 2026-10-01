---
id: "python-en-function-inspect-stack"
language: "python"
lang: "en"
category: "function"
name: "stack"
signature: "stack(context=1)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.stack"
license: "PSF"
updated: "2026-10-01"
---

# stack

Return a list of `FrameInfo` objects for the caller's stack.  The
first entry in the returned list represents the caller; the last entry
represents the outermost call on the stack.

> *Changed in 3.5*: A list of :term:`named tuples <named tuple>` ``FrameInfo(frame, filename, lineno, function, code_context, index)`` is returned.

> *Changed in 3.11*: A list of :class:`FrameInfo` objects is returned.
