---
id: "python-en-function-queue-queue-task_done"
language: "python"
lang: "en"
category: "function"
name: "Queue.task_done"
signature: "Queue.task_done()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Queue.task_done"
license: "PSF"
updated: "2026-10-01"
---

# Queue.task_done

Indicate that a formerly enqueued task is complete.  Used by queue consumer
threads.  For each `get` used to fetch a task, a subsequent call to
`task_done` tells the queue that the processing on the task is complete.

If a `join` is currently blocking, it will resume when all items have been
processed (meaning that a `task_done` call was received for every item
that had been `put` into the queue).

Raises a `ValueError` if called more times than there were items placed in
the queue.
