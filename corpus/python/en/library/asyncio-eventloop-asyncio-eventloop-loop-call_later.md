---
id: "python-en-function-asyncio-eventloop-loop-call_later"
language: "python"
lang: "en"
category: "function"
name: "loop.call_later"
signature: "loop.call_later(delay, callback, *args, context=None)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.call_later"
license: "PSF"
updated: "2026-10-01"
---

# loop.call_later

Schedule *callback* to be called after the given *delay*
number of seconds (can be either an int or a float).

An instance of `asyncio.TimerHandle` is returned which can
be used to cancel the callback.

*callback* will be called exactly once.  If two callbacks are
scheduled for exactly the same time, the order in which they
are called is undefined.

The optional positional *args* will be passed to the callback when
it is called. Use `functools.partial`
`to pass keyword arguments` to
*callback*.

An optional keyword-only *context* argument allows specifying a
custom `contextvars.Context` for the *callback* to run in.
The current context is used when no *context* is provided.

> **Note**
>
> For performance, callbacks scheduled with `loop.call_later`
> may run up to one clock-resolution early (see
> `time.get_clock_info('monotonic').resolution`).
>

> *Changed in 3.7*: The *context* keyword-only parameter was added. See :pep:`567` for more details.

> *Changed in 3.8*: In Python 3.7 and earlier with the default event loop implementation, the *delay* could not exceed one day. This has been fixed in Python 3.8.
