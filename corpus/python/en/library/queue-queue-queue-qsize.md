---
id: "python-en-function-queue-queue-qsize"
language: "python"
lang: "en"
category: "function"
name: "Queue.qsize"
signature: "Queue.qsize()"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.Queue.qsize"
license: "PSF"
updated: "2026-10-01"
---

# Queue.qsize

Return the approximate size of the queue.  Note, qsize() > 0 doesn't
guarantee that a subsequent get() will not block, nor will qsize() < maxsize
guarantee that put() will not block.
