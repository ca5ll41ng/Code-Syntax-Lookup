---
id: "python-zh-function-types-coroutine"
language: "python"
lang: "zh"
category: "function"
name: "coroutine"
signature: "coroutine(gen_func)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.coroutine"
license: "PSF"
updated: "2026-10-01"
---

# coroutine

This function transforms a `generator` function into a
`coroutine function` which returns a generator-based coroutine.
The generator-based coroutine is still a `generator iterator`,
but is also considered to be a `coroutine` object and is
`awaitable`.  However, it may not necessarily implement
the `~object.__await__` method.

如果 *gen_func* 是一个生成器函数，它将被原地修改。

If *gen_func* is not a generator function, it will be wrapped. If it
returns an instance of `collections.abc.Generator`, the instance
will be wrapped in an *awaitable* proxy object.  All other types
of objects will be returned as is.

> *Added in 3.5*
