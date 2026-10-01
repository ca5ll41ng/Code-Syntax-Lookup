---
id: "python-en-function-queue-queue-empty"
language: "python"
lang: "en"
category: "function"
name: "Queue.empty"
signature: "Queue.empty()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Queue.empty"
license: "PSF"
updated: "2026-10-01"
---

# Queue.empty

Return `True` if the queue is empty, `False` otherwise.  If empty()
returns `True` it doesn't guarantee that a subsequent call to put()
will not block.  Similarly, if empty() returns `False` it doesn't
guarantee that a subsequent call to get() will not block.
