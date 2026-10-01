---
id: "python-en-function-asyncio-sync-lock"
language: "python"
lang: "en"
category: "function"
name: "Lock"
signature: "Lock()"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/3/library/asyncio-sync.html#asyncio-sync.Lock"
license: "PSF"
updated: "2026-10-01"
---

# Lock

Implements a mutex lock for asyncio tasks.  Not thread-safe.

An asyncio lock can be used to guarantee exclusive access to a
shared resource.

The preferred way to use a Lock is an `async with`
statement::

    lock = asyncio.Lock()

    # ... later
    async with lock:
        # access shared state

which is equivalent to::

    lock = asyncio.Lock()

    # ... later
    await lock.acquire()
    try:
        # access shared state
    finally:
        lock.release()

> *Changed in 3.10*: Removed the *loop* parameter.

method:: acquire()

method:: release()

method:: locked()
