---
id: "python-zh-function-asyncio-sync-condition"
language: "python"
lang: "zh"
category: "function"
name: "Condition"
signature: "Condition(lock=None)"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-sync.html#asyncio-sync.Condition"
license: "PSF"
updated: "2026-10-01"
---

# Condition

条件对象。该对象不是线程安全的。

An asyncio condition primitive can be used by a task to wait for
some event to happen and then get exclusive access to a shared
resource.

In essence, a Condition object combines the functionality
of an `Event` and a `Lock`.  It is possible to have
multiple Condition objects share one Lock, which allows coordinating
exclusive access to a shared resource between different tasks
interested in particular states of that shared resource.

The optional *lock* argument must be a `Lock` object or
`None`.  In the latter case a new Lock object is created
automatically.

> *Changed in 3.10*: Removed the *loop* parameter.

The preferred way to use a Condition is an `async with`
statement::

    cond = asyncio.Condition()

    # ... later
    async with cond:
        await cond.wait()

这等价于::

    cond = asyncio.Condition()

    # ... later
    await cond.acquire()
    try:
        await cond.wait()
    finally:
        cond.release()

method:: acquire()

method:: notify(n=1)

method:: locked()

method:: notify_all()

method:: release()

method:: wait()

method:: wait_for(predicate)
