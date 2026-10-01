---
id: "python-en-function-asyncio-runner-runner"
language: "python"
lang: "en"
category: "function"
name: "Runner"
signature: "Runner(*, debug=None, loop_factory=None)"
directive: "class"
module: "asyncio-runner"
source_url: "https://docs.python.org/3/library/asyncio-runner.html#asyncio-runner.Runner"
license: "PSF"
updated: "2026-10-01"
---

# Runner

A context manager that simplifies *multiple* async function calls in the same
context.

Sometimes several top-level async functions should be called in the same `event
loop` and `contextvars.Context`.

If *debug* is `True`, the event loop will be run in debug mode. `False` disables
debug mode explicitly. `None` is used to respect the global
`asyncio-debug-mode` settings.

*loop_factory* could be used for overriding the loop creation.
It is the responsibility of the *loop_factory* to set the created loop as the
current one. By default `asyncio.new_event_loop` is used and set as
current event loop with `asyncio.set_event_loop` if *loop_factory* is `None`.

Basically, `asyncio.run` example can be rewritten with the runner usage::

     async def main():
         await asyncio.sleep(1)
         print('hello')

     with asyncio.Runner() as runner:
         runner.run(main())

> *Added in 3.11*

method:: run(coro, *, context=None)

method:: close()

method:: get_loop()

> **Note**
>
> `Runner` uses the lazy initialization strategy, its constructor doesn't
> initialize underlying low-level structures.
>
> Embedded *loop* and *context* are created at the `with` body entering
> or the first call of `run` or `get_loop`.
>
