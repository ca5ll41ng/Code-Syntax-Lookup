---
id: "python-en-function-asyncio-graph-future_add_to_awaited_by"
language: "python"
lang: "en"
category: "function"
name: "future_add_to_awaited_by"
signature: "future_add_to_awaited_by(future, waiter, /)"
directive: "function"
module: "asyncio-graph"
source_url: "https://docs.python.org/3/library/asyncio-graph.html#asyncio-graph.future_add_to_awaited_by"
license: "PSF"
updated: "2026-10-01"
---

# future_add_to_awaited_by

Record that *future* is awaited on by *waiter*.

Both *future* and *waiter* must be instances of
`Future` or `Task` or their subclasses,
otherwise the call would have no effect.

A call to `future_add_to_awaited_by()` must be followed by an
eventual call to the `future_discard_from_awaited_by` function
with the same arguments.
