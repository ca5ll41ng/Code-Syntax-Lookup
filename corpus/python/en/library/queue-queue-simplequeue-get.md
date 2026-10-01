---
id: "python-en-function-queue-simplequeue-get"
language: "python"
lang: "en"
category: "function"
name: "SimpleQueue.get"
signature: "SimpleQueue.get(block=True, timeout=None)"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.SimpleQueue.get"
license: "PSF"
updated: "2026-10-01"
---

# SimpleQueue.get

Remove and return an item from the queue.  If optional args *block* is true and
*timeout* is `None` (the default), block if necessary until an item is available.
If *timeout* is a positive number, it blocks at most *timeout* seconds and
raises the `Empty` exception if no item was available within that time.
Otherwise (*block* is false), return an item if one is immediately available,
else raise the `Empty` exception (*timeout* is ignored in that case).
