---
id: "python-en-function-heapq-heapreplace_max"
language: "python"
lang: "en"
category: "function"
name: "heapreplace_max"
signature: "heapreplace_max(heap, item)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.heapreplace_max"
license: "PSF"
updated: "2026-10-01"
---

# heapreplace_max

Pop and return the largest item from the max-heap *heap* and also push the
new *item*.
The max-heap size doesn't change. If the max-heap is empty,
`IndexError` is raised.

The value returned may be smaller than the *item* added.  Refer to the
analogous function `heapreplace` for detailed usage notes.

> *Added in 3.14*
