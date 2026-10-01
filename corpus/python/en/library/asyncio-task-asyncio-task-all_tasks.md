---
id: "python-en-function-asyncio-task-all_tasks"
language: "python"
lang: "en"
category: "function"
name: "all_tasks"
signature: "all_tasks(loop=None)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.all_tasks"
license: "PSF"
updated: "2026-10-01"
---

# all_tasks

Return a set of not yet finished `Task` objects run by
the loop.

If *loop* is `None`, `get_running_loop` is used for getting
current loop.

> *Added in 3.7*
