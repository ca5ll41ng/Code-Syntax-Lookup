---
id: "python-en-function-queue-queue-join"
language: "python"
lang: "en"
category: "function"
name: "Queue.join"
signature: "Queue.join()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Queue.join"
license: "PSF"
updated: "2026-10-01"
---

# Queue.join

Blocks until all items in the queue have been gotten and processed.

The count of unfinished tasks goes up whenever an item is added to the queue.
The count goes down whenever a consumer thread calls `task_done` to
indicate that the item was retrieved and all work on it is complete.  When the
count of unfinished tasks drops to zero, `join` unblocks.
