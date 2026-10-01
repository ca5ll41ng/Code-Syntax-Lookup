---
id: "python-en-function-asyncio-eventloop-loop-set_exception_handler"
language: "python"
lang: "en"
category: "function"
name: "loop.set_exception_handler"
signature: "loop.set_exception_handler(handler)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.set_exception_handler"
license: "PSF"
updated: "2026-10-01"
---

# loop.set_exception_handler

Set *handler* as the new event loop exception handler.

If *handler* is `None`, the default exception handler will
be set.  Otherwise, *handler* must be a callable with the signature
matching `(loop, context)`, where `loop`
is a reference to the active event loop, and `context`
is a `dict` object containing the details of the exception
(see `call_exception_handler` documentation for details
about context).

If the handler is called on behalf of a `~asyncio.Task` or
`~asyncio.Handle`, it is run in the
`contextvars.Context` of that task or callback handle.

> *Changed in 3.12*: The handler may be called in the :class:`~contextvars.Context` of the task or handle where the exception originated.
