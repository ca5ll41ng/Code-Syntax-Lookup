---
id: "python-en-function-asyncio-future-asyncio-future"
language: "python"
lang: "en"
category: "function"
name: "asyncio-future"
title: "This example creates a Future object, creates and schedules an"
directive: "module"
module: "asyncio-future"
source_url: "https://docs.python.org/3/library/asyncio-future.html#module-asyncio-future"
license: "PSF"
updated: "2026-10-01"
---

# This example creates a Future object, creates and schedules an

.. _asyncio_example_future:

This example creates a Future object, creates and schedules an
asynchronous Task to set result for the Future, and waits until
the Future has a result::

    async def set_after(fut, delay, value):
        # Sleep for *delay* seconds.
        await asyncio.sleep(delay)

        # Set *value* as a result of *fut* Future.
        fut.set_result(value)

    async def main():
        # Get the current event loop.
        loop = asyncio.get_running_loop()

        # Create a new Future object.
        fut = loop.create_future()

        # Run "set_after()" coroutine in a parallel Task.
        # We are using the low-level "loop.create_task()" API here because
        # we already have a reference to the event loop at hand.
        # Otherwise we could have just used "asyncio.create_task()".
        loop.create_task(
            set_after(fut, 1, '... world'))

        print('hello ...')

        # Wait until *fut* has a result (1 second) and print it.
        print(await fut)

    asyncio.run(main())

> **Important**
>
> The Future object was designed to mimic
> `concurrent.futures.Future`.  Key differences include:
>
> - unlike asyncio Futures, `concurrent.futures.Future`
>   instances cannot be awaited.
>
> - `asyncio.Future.result` and `asyncio.Future.exception`
>   do not accept the *timeout* argument.
>
> - `asyncio.Future.result` and `asyncio.Future.exception`
>   raise an `InvalidStateError` exception when the Future is not
>   *done*.
>
> - Callbacks registered with `asyncio.Future.add_done_callback`
>   are not called immediately.  They are scheduled with
>   `loop.call_soon` instead.
>
> - asyncio Future is not compatible with the
>   `concurrent.futures.wait` and
>   `concurrent.futures.as_completed` functions.
>
> - `asyncio.Future.cancel` accepts an optional `msg` argument,
>   but `concurrent.futures.Future.cancel` does not.
>
