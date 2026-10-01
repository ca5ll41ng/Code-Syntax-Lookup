---
id: "python-zh-function-asyncio-task-to_thread"
language: "python"
lang: "zh"
category: "function"
name: "to_thread"
signature: "to_thread(func, /, *args, **kwargs)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.to_thread"
license: "PSF"
updated: "2026-10-01"
---

# to_thread

在不同的线程中异步地运行函数 *func*。

Any \*args and \*\*kwargs supplied for this function are directly passed
to *func*. Also, the current `contextvars.Context` is propagated,
allowing context variables from the event loop thread to be accessed in the
separate thread.

返回一个可被等待以获取 *func* 的最终结果的协程。

This coroutine function is primarily intended to be used for executing
IO-bound functions/methods that would otherwise block the event loop if
they were run in the main thread. For example::

    def blocking_io():
        print(f"start blocking_io at {time.strftime('%X')}")
        # Note that time.sleep() can be replaced with any blocking
        # IO-bound operation, such as file operations.
        time.sleep(1)
        print(f"blocking_io complete at {time.strftime('%X')}")

    async def main():
        print(f"started main at {time.strftime('%X')}")

        await asyncio.gather(
            asyncio.to_thread(blocking_io),
            asyncio.sleep(1))

        print(f"finished main at {time.strftime('%X')}")

    asyncio.run(main())

    # Expected output:
    #
    # started main at 19:50:53
    # start blocking_io at 19:50:53
    # blocking_io complete at 19:50:54
    # finished main at 19:50:54

Directly calling `blocking_io()` in any coroutine would block the event loop
for its duration, resulting in an additional 1 second of run time. Instead,
by using `asyncio.to_thread()`, we can run it in a separate thread without
blocking the event loop.

> **Note**
>
> Due to the `GIL`, `asyncio.to_thread()` can typically only be used
> to make IO-bound functions non-blocking. However, for extension modules
> that release the GIL or alternative Python implementations that don't
> have one, `asyncio.to_thread()` can also be used for CPU-bound functions.
>

> *Added in 3.9*
