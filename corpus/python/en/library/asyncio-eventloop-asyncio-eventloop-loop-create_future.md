---
id: "python-en-function-asyncio-eventloop-loop-create_future"
language: "python"
lang: "en"
category: "function"
name: "loop.create_future"
signature: "loop.create_future()"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.create_future"
license: "PSF"
updated: "2026-10-01"
---

# loop.create_future

Create an `asyncio.Future` object attached to the event loop.

This is the preferred way to create Futures in asyncio. This lets
third-party event loops provide alternative implementations of
the Future object (with better performance or instrumentation).

> *Added in 3.5.2*
