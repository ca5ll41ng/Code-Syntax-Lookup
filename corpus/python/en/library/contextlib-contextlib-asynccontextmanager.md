---
id: "python-en-function-contextlib-asynccontextmanager"
language: "python"
lang: "en"
category: "function"
name: "asynccontextmanager"
directive: "decorator"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.asynccontextmanager"
license: "PSF"
updated: "2026-10-01"
---

# asynccontextmanager

Similar to `~contextlib.contextmanager`, but creates an
`asynchronous context manager`.

This function is a `decorator` that can be used to define a factory
function for `async with` statement asynchronous context managers,
without needing to create a class or separate `~object.__aenter__` and
`~object.__aexit__` methods. It must be applied to an `asynchronous
generator` function.

A simple example::

   from contextlib import asynccontextmanager

   @asynccontextmanager
   async def get_connection():
       conn = await acquire_db_connection()
       try:
           yield conn
       finally:
           await release_db_connection(conn)

   async def get_all_users():
       async with get_connection() as conn:
           return conn.query('SELECT ...')

> *Added in 3.7*

Context managers defined with `asynccontextmanager` can be used
either as decorators or with `async with` statements::

  import time
  from contextlib import asynccontextmanager

  @asynccontextmanager
  async def timeit():
      now = time.monotonic()
      try:
          yield
      finally:
          print(f'it took {time.monotonic() - now}s to run')

  @timeit()
  async def main():
      # ... async code ...

When used as a decorator, a new generator instance is implicitly created on
each function call. This allows the otherwise "one-shot" context managers
created by `asynccontextmanager` to meet the requirement that context
managers support multiple invocations in order to be used as decorators.

> *Changed in 3.10*: Async context managers created with :deco:`asynccontextmanager` can be used as decorators.
