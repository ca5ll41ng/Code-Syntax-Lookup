---
id: "python-zh-function-asyncio-graph-future_discard_from_awaited_by"
language: "python"
lang: "zh"
category: "function"
name: "future_discard_from_awaited_by"
signature: "future_discard_from_awaited_by(future, waiter, /)"
directive: "function"
module: "asyncio-graph"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-graph.html#asyncio-graph.future_discard_from_awaited_by"
license: "PSF"
updated: "2026-10-01"
---

# future_discard_from_awaited_by

记录 *future* 不再被 *waiter* 等待。

Both *future* and *waiter* must be instances of
`Future` or `Task` or their subclasses, otherwise
the call would have no effect.
