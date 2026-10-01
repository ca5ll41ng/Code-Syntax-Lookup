---
id: "python-en-function-asyncio-eventloop-loop-add_signal_handler"
language: "python"
lang: "en"
category: "function"
name: "loop.add_signal_handler"
signature: "loop.add_signal_handler(signum, callback, *args)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.add_signal_handler"
license: "PSF"
updated: "2026-10-01"
---

# loop.add_signal_handler

Set *callback* as the handler for the *signum* signal,
passing *args* as positional arguments.

The callback will be invoked by *loop*, along with other queued callbacks
and runnable coroutines of that event loop. Unlike signal handlers
registered using `signal.signal`, a callback registered with this
function is allowed to interact with the event loop.

Raise `ValueError` if the signal number is invalid or uncatchable.
Raise `RuntimeError` if there is a problem setting up the handler.

Use `functools.partial` `to pass keyword arguments` to *callback*.

Like `signal.signal`, this function must be invoked in the main
thread.
