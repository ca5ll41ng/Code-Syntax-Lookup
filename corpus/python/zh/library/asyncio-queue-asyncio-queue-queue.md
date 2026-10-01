---
id: "python-zh-function-asyncio-queue-queue"
language: "python"
lang: "zh"
category: "function"
name: "Queue"
signature: "Queue(maxsize=0)"
directive: "class"
module: "asyncio-queue"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-queue.html#asyncio-queue.Queue"
license: "PSF"
updated: "2026-10-01"
---

# Queue

先进，先出（FIFO）队列

If *maxsize* is less than or equal to zero, the queue size is
infinite.  If it is an integer greater than `0`, then
`await put()` blocks when the queue reaches *maxsize*
until an item is removed by `get`.

Unlike the standard library threading `queue`, the size of
the queue is always known and can be returned by calling the
`qsize` method.

> *Changed in 3.10*: Removed the *loop* parameter.

这个类 :ref:`不是线程安全的 <asyncio-multithreading>`。

attribute:: maxsize

method:: empty()

method:: full()

method:: get()

method:: get_nowait()

method:: join()

method:: put(item)

method:: put_nowait(item)

method:: qsize()

method:: shutdown(immediate=False)

method:: task_done()
