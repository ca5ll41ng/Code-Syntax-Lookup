---
id: "python-zh-function-queue-queue-put"
language: "python"
lang: "zh"
category: "function"
name: "Queue.put"
signature: "Queue.put(item, block=True, timeout=None)"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/zh-cn/3/library/queue.html#queue.Queue.put"
license: "PSF"
updated: "2026-10-01"
---

# Queue.put

Put *item* into the queue.  If optional args *block* is true and *timeout* is
`None` (the default), block if necessary until a free slot is available.  If
*timeout* is a positive number, it blocks at most *timeout* seconds and raises
the `Full` exception if no free slot was available within that time.
Otherwise (*block* is false), put an item on the queue if a free slot is
immediately available, else raise the `Full` exception (*timeout* is
ignored in that case).

如果队列已被关闭则会引发 :exc:`ShutDown`。
