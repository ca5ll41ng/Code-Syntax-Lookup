---
id: "python-en-function-contextlib-aclosing"
language: "python"
lang: "en"
category: "function"
name: "aclosing"
signature: "aclosing(thing)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.aclosing"
license: "PSF"
updated: "2026-10-01"
---

# aclosing

Return an async context manager that calls the `aclose()` method of *thing*
upon completion of the block.  This is basically equivalent to::

   from contextlib import asynccontextmanager

   @asynccontextmanager
   async def aclosing(thing):
       try:
           yield thing
       finally:
           await thing.aclose()

Significantly, `aclosing()` supports deterministic cleanup of async
generators when they happen to exit early by `break` or an
exception.  For example::

   from contextlib import aclosing

   async with aclosing(my_generator()) as values:
       async for value in values:
           if value == 42:
               break

This pattern ensures that the generator's async exit code is executed in
the same context as its iterations (so that exceptions and context
variables work as expected, and the exit code isn't run after the
lifetime of some task it depends on).

> *Added in 3.10*
