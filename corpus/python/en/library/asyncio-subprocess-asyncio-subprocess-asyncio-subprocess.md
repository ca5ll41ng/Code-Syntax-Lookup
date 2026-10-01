---
id: "python-en-function-asyncio-subprocess-asyncio-subprocess"
language: "python"
lang: "en"
category: "function"
name: "asyncio-subprocess"
title: "Subprocess and Threads"
directive: "module"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/3/library/asyncio-subprocess.html#module-asyncio-subprocess"
license: "PSF"
updated: "2026-10-01"
---

# Subprocess and Threads

.. _asyncio-subprocess-threads:

**Subprocess and Threads**

Standard asyncio event loop supports running subprocesses from different threads by
default.

On Windows subprocesses are provided by `ProactorEventLoop` only (default),
`SelectorEventLoop` has no subprocess support.

Note that alternative event loop implementations might have own limitations;
please refer to their documentation.

> **Seealso**
>
> The `Concurrency and multithreading in asyncio` section.
>

**Examples**

An example using the `~asyncio.subprocess.Process` class to
control a subprocess and the `StreamReader` class to read from
its standard output.

.. _asyncio_example_create_subprocess_exec:

The subprocess is created by the `create_subprocess_exec`
function::

    import asyncio
    import sys

    async def get_date():
        code = 'import datetime as dt; print(dt.datetime.now())'

        # Create the subprocess; redirect the standard output
        # into a pipe.
        proc = await asyncio.create_subprocess_exec(
            sys.executable, '-c', code,
            stdout=asyncio.subprocess.PIPE)

        # Read one line of output.
        data = await proc.stdout.readline()
        line = data.decode('ascii').rstrip()

        # Wait for the subprocess exit.
        await proc.wait()
        return line

    date = asyncio.run(get_date())
    print(f"Current date: {date}")

See also the `same example`
written using low-level APIs.
