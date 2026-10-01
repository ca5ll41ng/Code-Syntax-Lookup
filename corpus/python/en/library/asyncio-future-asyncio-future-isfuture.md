---
id: "python-en-function-asyncio-future-isfuture"
language: "python"
lang: "en"
category: "function"
name: "isfuture"
signature: "isfuture(obj)"
directive: "function"
module: "asyncio-future"
source_url: "https://docs.python.org/3/library/asyncio-future.html#asyncio-future.isfuture"
license: "PSF"
updated: "2026-10-01"
---

# isfuture

Return `True` if *obj* is either of:

* an instance of `asyncio.Future`,
* an instance of `asyncio.Task`,
* a Future-like object with a `_asyncio_future_blocking`
  attribute.

> *Added in 3.5*
