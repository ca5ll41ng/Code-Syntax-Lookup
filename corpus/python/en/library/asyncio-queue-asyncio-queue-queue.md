---
id: "python-en-function-asyncio-queue-queue"
language: "python"
lang: "en"
category: "function"
name: "Queue"
signature: "Queue(maxsize=0)"
directive: "class"
module: "asyncio-queue"
source_url: "https://docs.python.org/3/library/asyncio-queue.html#asyncio-queue.Queue"
license: "PSF"
updated: "2026-10-01"
---

# Queue

A first in, first out (FIFO) queue.

If *maxsize* is less than or equal to zero, the queue size is
infinite.  If it is an integer greater than `0`, then
`await put()` blocks when the queue reaches *maxsize*
until an item is removed by `get`.

Unlike the standard library threading `queue`, the size of
the queue is always known and can be returned by calling the
`qsize` method.

> *Changed in 3.10*: Removed the *loop* parameter.

This class is `not thread safe`.

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
