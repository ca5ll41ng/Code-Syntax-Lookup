---
id: "python-zh-function-asyncio-sync-boundedsemaphore"
language: "python"
lang: "zh"
category: "function"
name: "BoundedSemaphore"
signature: "BoundedSemaphore(value=1)"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-sync.html#asyncio-sync.BoundedSemaphore"
license: "PSF"
updated: "2026-10-01"
---

# BoundedSemaphore

有界信号量对象。该对象不是线程安全的。

Bounded Semaphore is a version of `Semaphore` that raises
a `ValueError` in `~Semaphore.release` if it
increases the internal counter above the initial *value*.

> *Changed in 3.10*: Removed the *loop* parameter.
