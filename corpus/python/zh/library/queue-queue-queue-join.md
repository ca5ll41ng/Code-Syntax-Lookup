---
id: "python-zh-function-queue-queue-join"
language: "python"
lang: "zh"
category: "function"
name: "Queue.join"
signature: "Queue.join()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/zh-cn/3/library/queue.html#queue.Queue.join"
license: "PSF"
updated: "2026-10-01"
---

# Queue.join

阻塞至队列中所有的元素都被接收和处理完毕。

The count of unfinished tasks goes up whenever an item is added to the queue.
The count goes down whenever a consumer thread calls `task_done` to
indicate that the item was retrieved and all work on it is complete.  When the
count of unfinished tasks drops to zero, `join` unblocks.
