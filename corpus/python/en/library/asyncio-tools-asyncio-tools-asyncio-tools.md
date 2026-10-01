---
id: "python-en-function-asyncio-tools-asyncio-tools"
language: "python"
lang: "en"
category: "function"
name: "asyncio-tools"
title: "================================"
directive: "module"
module: "asyncio-tools"
source_url: "https://docs.python.org/3/library/asyncio-tools.html#module-asyncio-tools"
license: "PSF"
updated: "2026-10-01"
---

# ================================

currentmodule:: asyncio

.. _asyncio-introspection-tools:

**================================ Command-line introspection tools**

**Source code:** `Lib/asyncio/tools.py`

The `asyncio` module can be invoked as a script via `python -m
asyncio` to inspect the task graph of another running Python process without
modifying it or restarting it.  The `asyncio.tools` submodule implements
this interface.

The following commands inspect the process identified by `PID`:

```shell-session

$ python -m asyncio pstree [--retries N] PID
$ python -m asyncio ps [--retries N] PID
```

The commands read the target process state without executing any code in it.
They are only available on supported platforms and may require permission to
inspect another process.  See the `permission requirements` for details.

> **Seealso**
>
> `asyncio-graph`
>    Programmatic APIs for inspecting the async call graph of a task or
>    future in the current process.
>

The command examples below use this program, which creates a task hierarchy
suitable for inspection and prints its process ID:

```python
:caption: example.py

import asyncio
import os

async def play(track):
    await asyncio.sleep(3600)
    print(f"🎵 Finished: {track}")

async def album(name, tracks):
    async with asyncio.TaskGroup() as tg:
        for track in tracks:
            tg.create_task(play(track), name=track)

async def main():
    print(f"PID: {os.getpid()}")
    async with asyncio.TaskGroup() as tg:
        tg.create_task(
            album("Sundowning", ["TNDNBTG", "Levitate"]),
            name="Sundowning",
        )
        tg.create_task(
            album("TMBTE", ["DYWTYLM", "Aqua Regia"]),
            name="TMBTE",
        )

asyncio.run(main())
```

Run the program in one terminal and leave it running:

```shell-session

$ python example.py
PID: 12345
```

Then pass the printed process ID to the commands from another terminal.
Thread IDs, task IDs, file paths, and line numbers vary between runs and
source layouts.

> *Added in 3.14*

**Command-line options**

option:: pstree PID

option:: ps PID

option:: --retries N
