---
id: "python-en-function-asyncio-task-current_task"
language: "python"
lang: "en"
category: "function"
name: "current_task"
signature: "current_task(loop=None)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.current_task"
license: "PSF"
updated: "2026-10-01"
---

# current_task

Return the currently running `Task` instance, or `None` if
no task is running.

If *loop* is `None` `get_running_loop` is used to get
the current loop.

> *Added in 3.7*
