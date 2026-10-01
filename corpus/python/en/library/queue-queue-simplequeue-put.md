---
id: "python-en-function-queue-simplequeue-put"
language: "python"
lang: "en"
category: "function"
name: "SimpleQueue.put"
signature: "SimpleQueue.put(item, block=True, timeout=None)"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.SimpleQueue.put"
license: "PSF"
updated: "2026-10-01"
---

# SimpleQueue.put

Put *item* into the queue.  The method never blocks and always succeeds
(except for potential low-level errors such as failure to allocate memory).
The optional args *block* and *timeout* are ignored and only provided
for compatibility with `Queue.put`.

impl-detail::
