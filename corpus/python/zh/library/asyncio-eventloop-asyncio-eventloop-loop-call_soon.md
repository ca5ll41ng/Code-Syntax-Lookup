---
id: "python-zh-function-asyncio-eventloop-loop-call_soon"
language: "python"
lang: "zh"
category: "function"
name: "loop.call_soon"
signature: "loop.call_soon(callback, *args, context=None)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.call_soon"
license: "PSF"
updated: "2026-10-01"
---

# loop.call_soon

Schedule the *callback* `callback` to be called with
*args* arguments at the next iteration of the event loop.

Return an instance of `asyncio.Handle`,
which can be used later to cancel the callback.

Callbacks are called in the order in which they are registered.
Each callback will be called exactly once.

The optional keyword-only *context* argument specifies a
custom `contextvars.Context` for the *callback* to run in.
Callbacks use the current context when no *context* is provided.

与 :meth:`call_soon_threadsafe` 不同，此方法不是线程安全的。
