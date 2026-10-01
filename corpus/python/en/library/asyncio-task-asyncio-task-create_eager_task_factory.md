---
id: "python-en-function-asyncio-task-create_eager_task_factory"
language: "python"
lang: "en"
category: "function"
name: "create_eager_task_factory"
signature: "create_eager_task_factory(custom_task_constructor)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.create_eager_task_factory"
license: "PSF"
updated: "2026-10-01"
---

# create_eager_task_factory

Create an eager task factory, similar to `eager_task_factory`,
using the provided *custom_task_constructor* when creating a new task instead
of the default `Task`.

*custom_task_constructor* must be a *callable* with the signature matching
the signature of `Task.__init__`.
The callable must return a `asyncio.Task`-compatible object.

This function returns a *callable* intended to be used as a task factory of an
event loop via `loop.set_task_factory(factory)`).

> *Added in 3.12*
