---
id: "python-zh-function-asyncio-task-timeout"
language: "python"
lang: "zh"
category: "function"
name: "timeout"
signature: "timeout(delay)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.timeout"
license: "PSF"
updated: "2026-10-01"
---

# timeout

Return an `asynchronous context manager`
that can be used to limit the amount of time spent waiting on
something.

*delay* can either be `None`, or a float/int number of
seconds to wait. If *delay* is `None`, no time limit will
be applied; this can be useful if the delay is unknown when
the context manager is created.

In either case, the context manager can be rescheduled after
creation using `Timeout.reschedule`.

示例::

    async def main():
        async with asyncio.timeout(10):
            await long_running_task()

If `long_running_task` takes more than 10 seconds to complete,
the context manager will cancel the current task and handle
the resulting `asyncio.CancelledError` internally, transforming it
into a `TimeoutError` which can be caught and handled.

> **Note**
>
> The `asyncio.timeout` context manager is what transforms
> the `asyncio.CancelledError` into a `TimeoutError`,
> which means the `TimeoutError` can only be caught
> *outside* of the context manager.
>

捕获 :exc:`TimeoutError` 的示例::

    async def main():
        try:
            async with asyncio.timeout(10):
                await long_running_task()
        except TimeoutError:
            print("The long operation timed out, but we've handled it.")

        print("This statement will run regardless.")

The context manager produced by `asyncio.timeout` can be
rescheduled to a different deadline and inspected.

class:: Timeout(when)

示例::

    async def main():
        try:
            # We do not know the timeout when starting, so we pass `None`.
            async with asyncio.timeout(None) as cm:
                # We know the timeout now, so we reschedule it.
                new_deadline = get_running_loop().time() + 10
                cm.reschedule(new_deadline)

                await long_running_task()
        except TimeoutError:
            pass

        if cm.expired():
            print("Looks like we haven't finished on time.")

超时上下文管理器可以被安全地嵌套。

> *Added in 3.11*
