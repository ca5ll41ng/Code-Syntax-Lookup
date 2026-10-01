---
id: "python-en-function-asyncio-task-create_task"
language: "python"
lang: "en"
category: "function"
name: "create_task"
signature: "create_task(coro, *, name=None, context=None, eager_start=None, **kwargs)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.create_task"
license: "PSF"
updated: "2026-10-01"
---

# create_task

Wrap the *coro* `coroutine` into a `Task`
and schedule its execution.  Return the Task object.

The full function signature is largely the same as that of the
`Task` constructor (or factory) - all of the keyword arguments to
this function are passed through to that interface.

An optional keyword-only *context* argument allows specifying a
custom `contextvars.Context` for the *coro* to run in.
The current context copy is created when no *context* is provided.

An optional keyword-only *eager_start* argument allows specifying
if the task should execute eagerly during the call to create_task,
or be scheduled later. If *eager_start* is not passed the mode set
by `loop.set_task_factory` will be used.

The task is executed in the loop returned by `get_running_loop`,
`RuntimeError` is raised if there is no running loop in
current thread.

> **Note**
>
> `asyncio.TaskGroup.create_task` is a new alternative
> leveraging structural concurrency; it allows for waiting
> for a group of related tasks with strong safety guarantees.
>

> **Important**
>
> Save a reference to the result of this function, to avoid
> a task disappearing mid-execution. The event loop only keeps
> weak references to tasks. A task that isn't referenced elsewhere
> may get garbage collected at any time, even before it's done.
> For reliable "fire-and-forget" background tasks, gather them in
> a collection::
>
>     background_tasks = set()
>
>     for i in range(10):
>         task = asyncio.create_task(some_coro(param=i))
>
>         # Add task to the set. This creates a strong reference.
>         background_tasks.add(task)
>
>         # To prevent keeping references to finished tasks forever,
>         # make each task remove its own reference from the set after
>         # completion:
>         task.add_done_callback(background_tasks.discard)
>
> Note that this approach never awaits the tasks, so if a task
> fails, its exception is never retrieved and asyncio logs a
> "Task exception was never retrieved" message when the task is
> garbage collected.  To avoid this, use `asyncio.TaskGroup`
> which keeps a strong reference to each task, awaits them and
> propagates their exceptions::
>
>     async with asyncio.TaskGroup() as tg:
>         for i in range(10):
>             tg.create_task(some_coro(param=i))
>

> *Added in 3.7*

> *Changed in 3.8*: Added the *name* parameter.

> *Changed in 3.11*: Added the *context* parameter.

> *Changed in 3.14*: Added the *eager_start* parameter by passing on all *kwargs*.
