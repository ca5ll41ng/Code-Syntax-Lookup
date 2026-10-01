---
id: "python-zh-function-asyncio-runner-run"
language: "python"
lang: "zh"
category: "function"
name: "run"
signature: "run(coro, *, debug=None, loop_factory=None)"
directive: "function"
module: "asyncio-runner"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-runner.html#asyncio-runner.run"
license: "PSF"
updated: "2026-10-01"
---

# run

在 asyncio 事件循环中执行 *coro* 并返回结果。

参数可以是任意可等待对象。

This function runs the awaitable, taking care of managing the
asyncio event loop, *finalizing asynchronous generators*, and
closing the executor.

This function cannot be called when another asyncio event loop is
running in the same thread.

If *debug* is `True`, the event loop will be run in debug mode. `False` disables
debug mode explicitly. `None` is used to respect the global
`asyncio-debug-mode` settings.

If *loop_factory* is not `None`, it is used to create a new event loop;
otherwise `asyncio.new_event_loop` is used. The loop is closed at the end.
This function should be used as a main entry point for asyncio programs,
and should ideally only be called once. It is recommended to use
*loop_factory* to configure the event loop.

The executor is given a timeout duration of 5 minutes to shutdown.
If the executor hasn't finished within that duration, a warning is
emitted and the executor is closed.

示例::

    async def main():
        await asyncio.sleep(1)
        print('hello')

    asyncio.run(main())

> *Added in 3.7*

> *Changed in 3.9*: Updated to use :meth:`loop.shutdown_default_executor`.

> *Changed in 3.10*: *debug* is ``None`` by default to respect the global debug mode settings.

> *Changed in 3.12*: Added *loop_factory* parameter.

> *Changed in 3.14*: *coro* can be any awaitable object.
