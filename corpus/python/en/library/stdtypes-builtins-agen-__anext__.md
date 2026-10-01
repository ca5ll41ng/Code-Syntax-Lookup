---
id: "python-en-function-builtins-agen-__anext__"
language: "python"
lang: "en"
category: "function"
name: "agen.__anext__"
signature: "agen.__anext__()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#agen.__anext__"
license: "PSF"
updated: "2026-10-01"
---

# agen.__anext__

Returns an `awaitable` which when run starts to execute the
asynchronous generator function or resumes it at the
`yield expression` where the function is currently suspended.
When an asynchronous generator function is resumed with an
`~agen.__anext__` method, the current yield expression always
evaluates to `None` in the returned awaitable, which when run will
continue to the next yield expression.
The value of the expression after the `yield` keyword is the value
of the `StopIteration` exception raised by the completing coroutine.
If the asynchronous generator exits without yielding another value, the
awaitable instead raises a `StopAsyncIteration` exception,
signalling that the asynchronous iteration has completed.

This method is normally called implicitly by an `async for` loop,
or by the built-in `anext` function.
