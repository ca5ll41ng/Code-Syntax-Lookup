---
id: "python-zh-function-asyncio-task-wait"
language: "python"
lang: "zh"
category: "function"
name: "wait"
signature: "wait(fs, *, timeout=None, return_when=ALL_COMPLETED)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.wait"
license: "PSF"
updated: "2026-10-01"
---

# wait

Run `~asyncio.Future` and `~asyncio.Task` instances in the *fs*
iterable concurrently and block until the condition specified
by *return_when*.

The *fs* iterable must not be empty.

返回两个 Task/Future 集合: ``(done, pending)``。

用法::

     done, pending = await asyncio.wait(fs)

*timeout* (a float or int), if specified, can be used to control
the maximum number of seconds to wait before returning.

Note that this function does not raise `TimeoutError`.
Futures or Tasks that aren't done when the timeout occurs are simply
returned in the second set.

*return_when* indicates when this function should return.  It must
be one of the following constants:

list-table::

Unlike `~asyncio.wait_for`, `wait()` does not cancel the
futures when a timeout occurs.

If `wait()` is cancelled, the futures in *fs* are not cancelled
and continue to run.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Passing coroutine objects to ``wait()`` directly is forbidden.

> *Changed in 3.12*: Added support for generators yielding tasks.
