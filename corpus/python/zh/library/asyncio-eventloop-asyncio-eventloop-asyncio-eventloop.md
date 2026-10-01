---
id: "python-zh-function-asyncio-eventloop-asyncio-eventloop"
language: "python"
lang: "zh"
category: "function"
name: "asyncio-eventloop"
title: "Examples"
directive: "module"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#module-asyncio-eventloop"
license: "PSF"
updated: "2026-10-01"
---

# Examples

**Examples**

Note that all examples in this section **purposefully** show how
to use the low-level event loop APIs, such as `loop.run_forever`
and `loop.call_soon`.  Modern asyncio applications rarely
need to be written this way; consider using the high-level functions
like `asyncio.run`.

.. _asyncio_example_lowlevel_helloworld:

**Hello World with call_soon()**

An example using the `loop.call_soon` method to schedule a
callback. The callback displays `"Hello World"` and then stops the
event loop::

    import asyncio

    def hello_world(loop):
        """A callback to print 'Hello World' and stop the event loop"""
        print('Hello World')
        loop.stop()

    loop = asyncio.new_event_loop()

    # Schedule a call to hello_world()
    loop.call_soon(hello_world, loop)

    # Blocking call interrupted by loop.stop()
    try:
        loop.run_forever()
    finally:
        loop.close()

> **Seealso**
>
> A similar `Hello World`
> example created with a coroutine and the `run` function.
>

.. _asyncio_example_call_later:

**Display the current date with call_later()**

An example of a callback displaying the current date every second. The
callback uses the `loop.call_later` method to reschedule itself
after 5 seconds, and then stops the event loop::

    import asyncio
    import datetime as dt

    def display_date(end_time, loop):
        print(dt.datetime.now())
        if (loop.time() + 1.0) < end_time:
            loop.call_later(1, display_date, end_time, loop)
        else:
            loop.stop()

    loop = asyncio.new_event_loop()

    # Schedule the first call to display_date()
    end_time = loop.time() + 5.0
    loop.call_soon(display_date, end_time, loop)

    # Blocking call interrupted by loop.stop()
    try:
        loop.run_forever()
    finally:
        loop.close()

> **Seealso**
>
> A similar `current date` example
> created with a coroutine and the `run` function.
>

.. _asyncio_example_watch_fd:

**Watch a file descriptor for read events**

Wait until a file descriptor received some data using the
`loop.add_reader` method and then close the event loop::

    import asyncio
    from socket import socketpair

    # Create a pair of connected file descriptors
    rsock, wsock = socketpair()

    loop = asyncio.new_event_loop()

    def reader():
        data = rsock.recv(100)
        print("Received:", data.decode())

        # We are done: unregister the file descriptor
        loop.remove_reader(rsock)

        # Stop the event loop
        loop.stop()

    # Register the file descriptor for read event
    loop.add_reader(rsock, reader)

    # Simulate the reception of data from the network
    loop.call_soon(wsock.send, 'abc'.encode())

    try:
        # Run the event loop
        loop.run_forever()
    finally:
        # We are done. Close sockets and the event loop.
        rsock.close()
        wsock.close()
        loop.close()

> **Seealso**
>
> * A similar `example`
>   using transports, protocols, and the
>   `loop.create_connection` method.
>
> * Another similar `example`
>   using the high-level `asyncio.open_connection` function
>   and streams.
>

.. _asyncio_example_unix_signals:

**Set signal handlers for SIGINT and SIGTERM**

（这个 ``signal`` 示例只适用于 Unix。）

Register handlers for signals `~signal.SIGINT` and `~signal.SIGTERM`
using the `loop.add_signal_handler` method::

    import asyncio
    import functools
    import os
    import signal

    def ask_exit(signame, loop):
        print("got signal %s: exit" % signame)
        loop.stop()

    async def main():
        loop = asyncio.get_running_loop()

        for signame in {'SIGINT', 'SIGTERM'}:
            loop.add_signal_handler(
                getattr(signal, signame),
                functools.partial(ask_exit, signame, loop))

        await asyncio.sleep(3600)

    print("Event loop running for 1 hour, press Ctrl+C to interrupt.")
    print(f"pid {os.getpid()}: send SIGINT or SIGTERM to exit.")

    asyncio.run(main())
