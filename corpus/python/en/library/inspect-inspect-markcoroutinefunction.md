---
id: "python-en-function-inspect-markcoroutinefunction"
language: "python"
lang: "en"
category: "function"
name: "markcoroutinefunction"
signature: "markcoroutinefunction(func)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.markcoroutinefunction"
license: "PSF"
updated: "2026-10-01"
---

# markcoroutinefunction

Decorator to mark a callable as a `coroutine function` if it would not
otherwise be detected by `iscoroutinefunction`.

This may be of use for sync functions that return a `coroutine`, if
the function is passed to an API that requires `iscoroutinefunction`.

When possible, using an `async def` function is preferred. Also
acceptable is calling the function and testing the return with
`iscoroutine`.

> *Added in 3.12*
