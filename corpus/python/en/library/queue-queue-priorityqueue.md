---
id: "python-en-function-queue-priorityqueue"
language: "python"
lang: "en"
category: "function"
name: "PriorityQueue"
signature: "PriorityQueue(maxsize=0)"
directive: "class"
module: "queue"
source_url: "https://docs.python.org/3/library/queue.html#queue.PriorityQueue"
license: "PSF"
updated: "2026-10-01"
---

# PriorityQueue

Constructor for a priority queue.  *maxsize* is an integer that sets the upperbound
limit on the number of items that can be placed in the queue.  Insertion will
block once this size has been reached, until queue items are consumed.  If
*maxsize* is less than or equal to zero, the queue size is infinite.

The lowest valued entries are retrieved first (the lowest valued entry is the
one that would be returned by `min(entries)`).  A typical pattern for
entries is a tuple in the form: `(priority_number, data)`.

If the *data* elements are not comparable, the data can be wrapped in a class
that ignores the data item and only compares the priority number::

     from dataclasses import dataclass, field
     from typing import Any

     @dataclass(order=True)
     class PrioritizedItem:
         priority: int
         item: Any=field(compare=False)
