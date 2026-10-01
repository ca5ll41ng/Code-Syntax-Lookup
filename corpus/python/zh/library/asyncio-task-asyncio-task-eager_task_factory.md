---
id: "python-zh-function-asyncio-task-eager_task_factory"
language: "python"
lang: "zh"
category: "function"
name: "eager_task_factory"
signature: "eager_task_factory(loop, coro, *, name=None, context=None)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.eager_task_factory"
license: "PSF"
updated: "2026-10-01"
---

# eager_task_factory

用于主动任务执行的任务工厂

When using this factory (via `loop.set_task_factory(asyncio.eager_task_factory)`),
coroutines begin execution synchronously during `Task` construction.
Tasks are only scheduled on the event loop if they block.
This can be a performance improvement as the overhead of loop scheduling
is avoided for coroutines that complete synchronously.

A common example where this is beneficial is coroutines which employ
caching or memoization to avoid actual I/O when possible.

> **Note**
>
> Immediate execution of the coroutine is a semantic change.
> If the coroutine returns or raises, the task is never scheduled
> to the event loop. If the coroutine execution blocks, the task is
> scheduled to the event loop. This change may introduce behavior
> changes to existing applications. For example,
> the application's task execution order is likely to change.
>

> *Added in 3.12*
