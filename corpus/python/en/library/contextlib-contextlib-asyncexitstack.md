---
id: "python-en-function-contextlib-asyncexitstack"
language: "python"
lang: "en"
category: "function"
name: "AsyncExitStack"
signature: "AsyncExitStack()"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.AsyncExitStack"
license: "PSF"
updated: "2026-10-01"
---

# AsyncExitStack

An `asynchronous context manager`, similar
to `ExitStack`, that supports combining both synchronous and
asynchronous context managers, as well as having coroutines for
cleanup logic.

The `~ExitStack.close` method is not implemented; `aclose` must be used
instead.

method:: enter_async_context(cm)

method:: push_async_exit(exit)

method:: push_async_callback(callback, /, *args, **kwds)

method:: aclose()

Continuing the example for `asynccontextmanager`::

   async with AsyncExitStack() as stack:
       connections = [await stack.enter_async_context(get_connection())
           for i in range(5)]
       # All opened connections will automatically be released at the end of
       # the async with statement, even if attempts to open a connection
       # later in the list raise an exception.

> *Added in 3.7*
