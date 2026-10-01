---
id: "python-en-function-asyncio-sync-boundedsemaphore"
language: "python"
lang: "en"
category: "function"
name: "BoundedSemaphore"
signature: "BoundedSemaphore(value=1)"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/3/library/asyncio-sync.html#asyncio-sync.BoundedSemaphore"
license: "PSF"
updated: "2026-10-01"
---

# BoundedSemaphore

A bounded semaphore object.  Not thread-safe.

Bounded Semaphore is a version of `Semaphore` that raises
a `ValueError` in `~Semaphore.release` if it
increases the internal counter above the initial *value*.

> *Changed in 3.10*: Removed the *loop* parameter.
