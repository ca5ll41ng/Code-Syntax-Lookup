---
id: "python-en-function-inspect-getcoroutinestate"
language: "python"
lang: "en"
category: "function"
name: "getcoroutinestate"
signature: "getcoroutinestate(coroutine)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getcoroutinestate"
license: "PSF"
updated: "2026-10-01"
---

# getcoroutinestate

Get current state of a coroutine object.  The function is intended to be
used with coroutine objects created by `async def` functions, but
will accept any coroutine-like object that has `cr_running` and
`cr_frame` attributes.

Possible states are:

* CORO_CREATED: Waiting to start execution.
* CORO_RUNNING: Currently being executed by the interpreter.
* CORO_SUSPENDED: Currently suspended at an await expression.
* CORO_CLOSED: Execution has completed.

> *Added in 3.5*
