---
id: "python-zh-function-asyncio-sync-barrier"
language: "python"
lang: "zh"
category: "function"
name: "Barrier"
signature: "Barrier(parties)"
directive: "class"
module: "asyncio-sync"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-sync.html#asyncio-sync.Barrier"
license: "PSF"
updated: "2026-10-01"
---

# Barrier

屏障对象。该对象不是线程安全的。

A barrier is a simple synchronization primitive that allows to block until
*parties* number of tasks are waiting on it.
Tasks can wait on the `~Barrier.wait` method and would be blocked until
the specified number of tasks end up waiting on `~Barrier.wait`.
At that point all of the waiting tasks would unblock simultaneously.

`async with` can be used as an alternative to awaiting on
`~Barrier.wait`.

屏障可被重复使用任意次数。

.. _asyncio_example_barrier:

示例::

   async def example_barrier():
      # barrier with 3 parties
      b = asyncio.Barrier(3)

      # create 2 new waiting tasks
      asyncio.create_task(b.wait())
      asyncio.create_task(b.wait())

      await asyncio.sleep(0)
      print(b)

      # The third .wait() call passes the barrier
      await b.wait()
      print(b)
      print("barrier passed")

      await asyncio.sleep(0)
      print(b)

   asyncio.run(example_barrier())

该示例的结果为::

   <asyncio.locks.Barrier object at 0x... [filling, waiters:2/3]>
   <asyncio.locks.Barrier object at 0x... [draining, waiters:0/3]>
   barrier passed
   <asyncio.locks.Barrier object at 0x... [filling, waiters:0/3]>

> *Added in 3.11*

method:: wait()

method:: reset()

method:: abort()

attribute:: parties

attribute:: n_waiting

attribute:: broken
