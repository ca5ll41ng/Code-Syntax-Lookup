---
id: "python-en-function-asyncio-eventloop-get_running_loop"
language: "python"
lang: "en"
category: "function"
name: "get_running_loop"
signature: "get_running_loop()"
directive: "function"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.get_running_loop"
license: "PSF"
updated: "2026-10-01"
---

# get_running_loop

Return the running event loop in the current OS thread.

Raise a `RuntimeError` if there is no running event loop.

This function can only be called from a coroutine or a callback.

> *Added in 3.7*
