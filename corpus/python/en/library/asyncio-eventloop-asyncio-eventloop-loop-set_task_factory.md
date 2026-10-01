---
id: "python-en-function-asyncio-eventloop-loop-set_task_factory"
language: "python"
lang: "en"
category: "function"
name: "loop.set_task_factory"
signature: "loop.set_task_factory(factory)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.set_task_factory"
license: "PSF"
updated: "2026-10-01"
---

# loop.set_task_factory

Set a task factory that will be used by
`loop.create_task`.

If *factory* is `None` the default task factory will be set.
Otherwise, *factory* must be a *callable* with the signature matching
`(loop, coro, **kwargs)`, where *loop* is a reference to the active
event loop, and *coro* is a coroutine object.  The callable
must pass on all *kwargs*, and return a `asyncio.Task`-compatible object.

> *Changed in 3.13.3*: Required that all *kwargs* are passed on to :class:`asyncio.Task`.

> *Changed in 3.13.4*: *name* is no longer passed to task factories. *context* is no longer passed to task factories if it is ``None``.  .. versionchanged:: 3.14    *name* and *context* are now unconditionally passed on to task factories again.
