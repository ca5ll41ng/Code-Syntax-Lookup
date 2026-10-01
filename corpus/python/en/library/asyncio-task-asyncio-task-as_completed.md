---
id: "python-en-function-asyncio-task-as_completed"
language: "python"
lang: "en"
category: "function"
name: "as_completed"
signature: "as_completed(fs, *, timeout=None)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.as_completed"
license: "PSF"
updated: "2026-10-01"
---

# as_completed

Run `awaitable objects` in the *fs* iterable
concurrently. The returned object can be iterated to obtain the results
of the awaitables as they finish.

The object returned by `as_completed()` can be iterated as an
`asynchronous iterator` or a plain `iterator`. When asynchronous
iteration is used, the originally-supplied awaitables are yielded if they
are tasks or futures. This makes it easy to correlate previously-scheduled
tasks with their results. Example::

    ipv4_connect = create_task(open_connection("127.0.0.1", 80))
    ipv6_connect = create_task(open_connection("::1", 80))
    tasks = [ipv4_connect, ipv6_connect]

    async for earliest_connect in as_completed(tasks):
        # earliest_connect is done. The result can be obtained by
        # awaiting it or calling earliest_connect.result()
        reader, writer = await earliest_connect

        if earliest_connect is ipv6_connect:
            print("IPv6 connection established.")
        else:
            print("IPv4 connection established.")

During asynchronous iteration, implicitly-created tasks will be yielded for
supplied awaitables that aren't tasks or futures.

When used as a plain iterator, each iteration yields a new coroutine that
returns the result or raises the exception of the next completed awaitable.
This pattern is compatible with Python versions older than 3.13::

    ipv4_connect = create_task(open_connection("127.0.0.1", 80))
    ipv6_connect = create_task(open_connection("::1", 80))
    tasks = [ipv4_connect, ipv6_connect]

    for next_connect in as_completed(tasks):
        # next_connect is not one of the original task objects. It must be
        # awaited to obtain the result value or raise the exception of the
        # awaitable that finishes next.
        reader, writer = await next_connect

A `TimeoutError` is raised if the timeout occurs before all awaitables
are done. This is raised by the `async for` loop during asynchronous
iteration or by the coroutines yielded during plain iteration.

`as_completed()` does not cancel the tasks running the supplied
awaitables: if a timeout occurs or the iteration is cancelled, the
remaining tasks continue to run.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Deprecated since 3.10*: Deprecation warning is emitted if not all awaitable objects in the *fs* iterable are Future-like objects and there is no running event loop.

> *Changed in 3.12*: Added support for generators yielding tasks.

> *Changed in 3.13*: The result can now be used as either an :term:`asynchronous iterator` or as a plain :term:`iterator` (previously it was only a plain iterator).
