---
id: "python-en-function-inspect-getouterframes"
language: "python"
lang: "en"
category: "function"
name: "getouterframes"
signature: "getouterframes(frame, context=1)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getouterframes"
license: "PSF"
updated: "2026-10-01"
---

# getouterframes

Get a list of `FrameInfo` objects for a frame and all outer frames.
These frames represent the calls that lead to the creation of *frame*. The
first entry in the returned list represents *frame*; the last entry
represents the outermost call on *frame*'s stack.

> *Changed in 3.5*: A list of :term:`named tuples <named tuple>` ``FrameInfo(frame, filename, lineno, function, code_context, index)`` is returned.

> *Changed in 3.11*: A list of :class:`FrameInfo` objects is returned.
