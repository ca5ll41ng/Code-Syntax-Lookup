---
id: "python-en-function-asyncio-task-taskgroup"
language: "python"
lang: "en"
category: "function"
name: "TaskGroup"
signature: "TaskGroup()"
directive: "class"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.TaskGroup"
license: "PSF"
updated: "2026-10-01"
---

# TaskGroup

An `asynchronous context manager`
holding a group of tasks.
Tasks can be added to the group using `create_task`.
All tasks are awaited when the context manager exits.

> *Added in 3.11*

method:: create_task(coro, *, name=None, context=None, eager_start=None, **kwargs)

method:: cancel()
