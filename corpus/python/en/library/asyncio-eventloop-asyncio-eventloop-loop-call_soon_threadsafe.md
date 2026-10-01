---
id: "python-en-function-asyncio-eventloop-loop-call_soon_threadsafe"
language: "python"
lang: "en"
category: "function"
name: "loop.call_soon_threadsafe"
signature: "loop.call_soon_threadsafe(callback, *args, context=None)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.call_soon_threadsafe"
license: "PSF"
updated: "2026-10-01"
---

# loop.call_soon_threadsafe

A thread-safe variant of `call_soon`. When scheduling callbacks from
another thread, this function *must* be used, since `call_soon` is not
thread-safe.

This function is safe to be called from a reentrant context or signal handler,
however, it is not safe or fruitful to use the returned handle in such contexts.

Raises `RuntimeError` if called on a loop that's been closed.
This can happen on a secondary thread when the main application is
shutting down.

See the `concurrency and multithreading`
section of the documentation.

> *Changed in 3.7*: The *context* keyword-only parameter was added. See :pep:`567` for more details.
