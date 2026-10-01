---
id: "python-en-function-heapq-heapreplace"
language: "python"
lang: "en"
category: "function"
name: "heapreplace"
signature: "heapreplace(heap, item)"
directive: "function"
module: "heapq"
source_url: "https://docs.python.org/3/library/heapq.html#heapq.heapreplace"
license: "PSF"
updated: "2026-10-01"
---

# heapreplace

Pop and return the smallest item from the *heap*, and also push the new *item*.
The heap size doesn't change. If the heap is empty, `IndexError` is raised.

This one step operation is more efficient than a `heappop` followed by
`heappush` and can be more appropriate when using a fixed-size heap.
The pop/push combination always returns an element from the heap and replaces
it with *item*.

The value returned may be larger than the *item* added.  If that isn't
desired, consider using `heappushpop` instead.  Its push/pop
combination returns the smaller of the two values, leaving the larger value
on the heap.
