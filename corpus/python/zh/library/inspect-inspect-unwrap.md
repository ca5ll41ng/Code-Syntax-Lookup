---
id: "python-zh-function-inspect-unwrap"
language: "python"
lang: "zh"
category: "function"
name: "unwrap"
signature: "unwrap(func, *, stop=None)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.unwrap"
license: "PSF"
updated: "2026-10-01"
---

# unwrap

Get the object wrapped by *func*. It follows the chain of `__wrapped__`
attributes returning the last object in the chain.

*stop* is an optional callback accepting an object in the wrapper chain
as its sole argument that allows the unwrapping to be terminated early if
the callback returns a true value. If the callback never returns a true
value, the last object in the chain is returned as usual. For example,
`signature` uses this to stop unwrapping if any object in the
chain has a `__signature__` attribute defined.

如果遇到循环，则引发 :exc:`ValueError`。

> *Added in 3.4*
