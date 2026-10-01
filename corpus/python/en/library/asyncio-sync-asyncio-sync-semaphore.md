---
id: "python-en-function-asyncio-sync-semaphore"
language: "python"
lang: "en"
category: "function"
name: "Semaphore"
signature: "Semaphore(value=1)"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/3/library/asyncio-sync.html#asyncio-sync.Semaphore"
license: "PSF"
updated: "2026-10-01"
---

# Semaphore

A Semaphore object.  Not thread-safe.

A semaphore manages an internal counter which is decremented by each
`acquire` call and incremented by each `release` call.
The counter can never go below zero; when `acquire` finds
that it is zero, it blocks, waiting until some task calls
`release`.

The optional *value* argument gives the initial value for the
internal counter (`1` by default). If the given value is
less than `0` a `ValueError` is raised.

> *Changed in 3.10*: Removed the *loop* parameter.

The preferred way to use a Semaphore is an `async with`
statement::

    sem = asyncio.Semaphore(10)

    # ... later
    async with sem:
        # work with shared resource

which is equivalent to::

    sem = asyncio.Semaphore(10)

    # ... later
    await sem.acquire()
    try:
        # work with shared resource
    finally:
        sem.release()

method:: acquire()

method:: locked()

method:: release()
