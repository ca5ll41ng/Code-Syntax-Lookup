---
id: "python-en-function-queue-queue-full"
language: "python"
lang: "en"
category: "function"
name: "Queue.full"
signature: "Queue.full()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Queue.full"
license: "PSF"
updated: "2026-10-01"
---

# Queue.full

Return `True` if the queue is full, `False` otherwise.  If full()
returns `True` it doesn't guarantee that a subsequent call to get()
will not block.  Similarly, if full() returns `False` it doesn't
guarantee that a subsequent call to put() will not block.
