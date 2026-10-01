---
id: "python-en-function-contextlib-asynccontextdecorator"
language: "python"
lang: "en"
category: "function"
name: "AsyncContextDecorator"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.AsyncContextDecorator"
license: "PSF"
updated: "2026-10-01"
---

# AsyncContextDecorator

Similar to `ContextDecorator`, but the context manager is entered
and exited with `async with`.  Decorate coroutine functions and
asynchronous generator functions with this class; the returned wrapper is
of the same kind.

> **Note**
>
> Synchronous functions and generators are accepted, but the wrapper is
> always asynchronous, so the decorated callable must then be awaited or
> iterated with `async for`.  If that change of calling convention is
> not intended, use `ContextDecorator` instead.
>

Example of `AsyncContextDecorator`::

   from asyncio import run
   from contextlib import AsyncContextDecorator

   class mycontext(AsyncContextDecorator):
       async def __aenter__(self):
           print('Starting')
           return self

       async def __aexit__(self, *exc):
           print('Finishing')
           return False

The class can then be used like this::

   >>> @mycontext()
   ... async def function():
   ...     print('The bit in the middle')
   ...
   >>> run(function())
   Starting
   The bit in the middle
   Finishing

   >>> async def function():
   ...    async with mycontext():
   ...         print('The bit in the middle')
   ...
   >>> run(function())
   Starting
   The bit in the middle
   Finishing

> *Added in 3.10*

> *Changed in 3.15*: Decorating an asynchronous generator function now keeps the context manager open across iteration.  Previously the context manager exited as soon as the generator object was created.  Synchronous functions and synchronous generator functions are also now accepted, with an asynchronous wrapper returned.
