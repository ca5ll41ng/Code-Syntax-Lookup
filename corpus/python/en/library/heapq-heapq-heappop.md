---
id: "python-en-function-heapq-heappop"
language: "python"
lang: "en"
category: "function"
name: "heappop"
signature: "heappop(heap)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.heappop"
license: "PSF"
updated: "2026-10-01"
---

# heappop

Pop and return the smallest item from the *heap*, maintaining the min-heap
invariant.  If the heap is empty, `IndexError` is raised.  To access the
smallest item without popping it, use `heap[0]`.
