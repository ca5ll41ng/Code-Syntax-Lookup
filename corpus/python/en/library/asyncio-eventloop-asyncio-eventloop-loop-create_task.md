---
id: "python-en-function-asyncio-eventloop-loop-create_task"
language: "python"
lang: "en"
category: "function"
name: "loop.create_task"
signature: "loop.create_task(coro, *, name=None, context=None, eager_start=None, **kwargs)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.create_task"
license: "PSF"
updated: "2026-10-01"
---

# loop.create_task

Schedule the execution of `coroutine` *coro*.
Return a `Task` object.

Third-party event loops can use their own subclass of `Task`
for interoperability. In this case, the result type is a subclass
of `Task`.

The full function signature is largely the same as that of the
`Task` constructor (or factory) - all of the keyword arguments to
this function are passed through to that interface.

If the *name* argument is provided and not `None`, it is set as
the name of the task using `Task.set_name`.

An optional keyword-only *context* argument allows specifying a
custom `contextvars.Context` for the *coro* to run in.
The current context copy is created when no *context* is provided.

An optional keyword-only *eager_start* argument allows specifying
if the task should execute eagerly during the call to create_task,
or be scheduled later. If *eager_start* is not passed the mode set
by `loop.set_task_factory` will be used.

> *Changed in 3.8*: Added the *name* parameter.

> *Changed in 3.11*: Added the *context* parameter.

> *Changed in 3.13.3*: Added ``kwargs`` which passes on arbitrary extra parameters, including  ``name`` and ``context``.

> *Changed in 3.13.4*: Rolled back the change that passes on *name* and *context* (if it is None), while still passing on other arbitrary keyword arguments (to avoid breaking backwards compatibility with 3.13.3).

> *Changed in 3.14*: All *kwargs* are now passed on. The *eager_start* parameter works with eager task factories.
