---
id: "python-en-function-asyncio-task-task"
language: "python"
lang: "en"
category: "function"
name: "Task"
signature: "Task(coro, *, loop=None, name=None, context=None, eager_start=False)"
directive: "class"
module: "asyncio-task"
source_url: "https://docs.python.org/3/library/asyncio-task.html#asyncio-task.Task"
license: "PSF"
updated: "2026-10-01"
---

# Task

A `Future-like` object that runs a Python
`coroutine`.  Not thread-safe.

Tasks are used to run coroutines in event loops.
If a coroutine awaits on a Future, the Task suspends
the execution of the coroutine and waits for the completion
of the Future.  When the Future is *done*, the execution of
the wrapped coroutine resumes.

Event loops use cooperative scheduling: an event loop runs
one Task at a time.  While a Task awaits for the completion of a
Future, the event loop runs other Tasks, callbacks, or performs
IO operations.

Use the high-level `asyncio.create_task` function to create
Tasks, or the low-level `loop.create_task` or
`ensure_future` functions.  Manual instantiation of Tasks
is discouraged.

To cancel a running Task use the `cancel` method.  Calling it
will cause the Task to throw a `CancelledError` exception into
the wrapped coroutine.  If a coroutine is awaiting on a future-like
object during cancellation, the awaited object will be cancelled.

`cancelled` can be used to check if the Task was cancelled.
The method returns `True` if the wrapped coroutine did not
suppress the `CancelledError` exception and was actually
cancelled.

`asyncio.Task` inherits from `Future` all of its
APIs except `Future.set_result` and
`Future.set_exception`.

An optional keyword-only *context* argument allows specifying a
custom `contextvars.Context` for the *coro* to run in.
If no *context* is provided, the Task copies the current context
and later runs its coroutine in the copied context.

An optional keyword-only *eager_start* argument allows eagerly starting
the execution of the `asyncio.Task` at task creation time.
If set to `True` and the event loop is running, the task will start
executing the coroutine immediately, until the first time the coroutine
blocks. If the coroutine returns or raises without blocking, the task
will be finished eagerly and will skip scheduling to the event loop.

Tasks are `generic` over the return type of their wrapped
coroutines.

> *Changed in 3.7*: Added support for the :mod:`contextvars` module.

> *Changed in 3.8*: Added the *name* parameter.

> *Deprecated since 3.10*: Deprecation warning is emitted if *loop* is not specified and there is no running event loop.

> *Changed in 3.11*: Added the *context* parameter.

> *Changed in 3.12*: Added the *eager_start* parameter.

method:: done()

method:: result()

method:: exception()

method:: add_done_callback(callback, *, context=None)

method:: remove_done_callback(callback)

method:: get_stack(*, limit=None)

method:: print_stack(*, limit=None, file=None)

method:: get_coro()

method:: get_context()

method:: get_name()

method:: set_name(value)

method:: cancel(msg=None)

method:: cancelled()

method:: uncancel()

> *Changed in 3.13*: Changed to rescind pending cancellation requests upon reaching zero.

method:: cancelling()
