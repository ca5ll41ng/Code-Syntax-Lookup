---
id: "python-en-function-heapq-heappushpop_max"
language: "python"
lang: "en"
category: "function"
name: "heappushpop_max"
signature: "heappushpop_max(heap, item)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.heappushpop_max"
license: "PSF"
updated: "2026-10-01"
---

# heappushpop_max

Push *item* on the max-heap *heap*, then pop and return the largest item
from *heap*.
The combined action runs more efficiently than `heappush_max`
followed by a separate call to `heappop_max`.

> *Added in 3.14*
