---
id: "python-en-function-asyncio-future-wrap_future"
language: "python"
lang: "en"
category: "function"
name: "wrap_future"
signature: "wrap_future(future, *, loop=None)"
directive: "function"
module: "asyncio-future"
source_url: "https://docs.python.org/3/library/asyncio-future.html#asyncio-future.wrap_future"
license: "PSF"
updated: "2026-10-01"
---

# wrap_future

Wrap a `concurrent.futures.Future` object in a
`asyncio.Future` object.

> *Deprecated since 3.10*: Deprecation warning is emitted if *future* is not a Future-like object and *loop* is not specified and there is no running event loop.
