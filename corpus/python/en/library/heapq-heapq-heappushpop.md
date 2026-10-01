---
id: "python-en-function-heapq-heappushpop"
language: "python"
lang: "en"
category: "function"
name: "heappushpop"
signature: "heappushpop(heap, item)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.heappushpop"
license: "PSF"
updated: "2026-10-01"
---

# heappushpop

Push *item* on the heap, then pop and return the smallest item from the
*heap*.  The combined action runs more efficiently than `heappush`
followed by a separate call to `heappop`.
