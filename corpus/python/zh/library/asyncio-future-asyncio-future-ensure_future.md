---
id: "python-zh-function-asyncio-future-ensure_future"
language: "python"
lang: "zh"
category: "function"
name: "ensure_future"
signature: "ensure_future(obj, *, loop=None)"
directive: "function"
module: "asyncio-future"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-future.html#asyncio-future.ensure_future"
license: "PSF"
updated: "2026-10-01"
---

# ensure_future

返回：

* *obj* argument as is, if *obj* is a `Future`,
  a `Task`, or a Future-like object (`isfuture`
  is used for the test.)

* a `Task` object wrapping *obj*, if *obj* is a
  coroutine (`iscoroutine` is used for the test);
  in this case the coroutine will be scheduled by
  `ensure_future()`.

* a `Task` object that would await on *obj*, if *obj* is an
  awaitable (`inspect.isawaitable` is used for the test.)

如果 *obj* 不是上述对象会引发一个 :exc:`TypeError` 异常。

> **Important**
>
> Save a reference to the result of this function, to avoid
> a task disappearing mid-execution.
>
> See also the `create_task` function which is the
> preferred way for creating new tasks or use `asyncio.TaskGroup`
> which keeps reference to the task internally.
>

> *Changed in 3.5.1*: The function accepts any :term:`awaitable` object.

> *Deprecated since 3.10*: Deprecation warning is emitted if *obj* is not a Future-like object and *loop* is not specified and there is no running event loop.
