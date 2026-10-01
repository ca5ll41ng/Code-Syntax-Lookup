---
id: "python-en-function-asyncio-eventloop-loop-call_at"
language: "python"
lang: "en"
category: "function"
name: "loop.call_at"
signature: "loop.call_at(when, callback, *args, context=None)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.call_at"
license: "PSF"
updated: "2026-10-01"
---

# loop.call_at

Schedule *callback* to be called at the given absolute timestamp
*when* (an int or a float), using the same time reference as
`loop.time`.

This method's behavior is the same as `call_later`.

An instance of `asyncio.TimerHandle` is returned which can
be used to cancel the callback.

> **Note**
>
> For performance, callbacks scheduled with `loop.call_at`
> may run up to one clock-resolution early (see
> `time.get_clock_info('monotonic').resolution`).
>

> *Changed in 3.7*: The *context* keyword-only parameter was added. See :pep:`567` for more details.

> *Changed in 3.8*: In Python 3.7 and earlier with the default event loop implementation, the difference between *when* and the current time could not exceed one day.  This has been fixed in Python 3.8.
