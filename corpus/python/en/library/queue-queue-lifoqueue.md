---
id: "python-en-function-queue-lifoqueue"
language: "python"
lang: "en"
category: "function"
name: "LifoQueue"
signature: "LifoQueue(maxsize=0)"
directive: "class"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.LifoQueue"
license: "PSF"
updated: "2026-10-01"
---

# LifoQueue

Constructor for a `LIFO (last-in, first-out)` queue.  *maxsize* is
an integer that sets the upperbound
limit on the number of items that can be placed in the queue.  Insertion will
block once this size has been reached, until queue items are consumed.  If
*maxsize* is less than or equal to zero, the queue size is infinite.
