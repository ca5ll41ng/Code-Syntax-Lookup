---
id: "python-zh-function-asyncio-task-wait_for"
language: "python"
lang: "zh"
category: "function"
name: "wait_for"
signature: "wait_for(fut, timeout)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.wait_for"
license: "PSF"
updated: "2026-10-01"
---

# wait_for

Wait for the *fut* `awaitable`
to complete with a timeout.

*timeout* can either be `None` or a float or int number of seconds
to wait for.  If *timeout* is `None`, block until the future
completes.

If a timeout occurs, it cancels *fut* and raises `TimeoutError`.

To prevent *fut* from being cancelled, wrap it in `shield`.

The function will wait until the future is actually cancelled,
so the total wait time may exceed the *timeout*. If an exception
happens during cancellation, it is propagated.

If the wait is cancelled, the future *fut* is also cancelled.

.. _asyncio_example_waitfor:

示例::

    async def eternity():
        # Sleep for one hour
        await asyncio.sleep(3600)
        print('yay!')

    async def main():
        # Wait for at most 1 second
        try:
            await asyncio.wait_for(eternity(), timeout=1.0)
        except TimeoutError:
            print('timeout!')

    asyncio.run(main())

    # Expected output:
    #
    #     timeout!

> *Changed in 3.7*: When *fut* is cancelled due to a timeout, ``wait_for`` waits for *fut* to be cancelled.  Previously, it raised :exc:`TimeoutError` immediately.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Raises :exc:`TimeoutError` instead of :exc:`asyncio.TimeoutError`.

> *Changed in 3.12*: Implemented using :func:`asyncio.timeout`, a coroutine passed as *fut* is no longer wrapped in a :class:`Task` when *timeout* is positive.
