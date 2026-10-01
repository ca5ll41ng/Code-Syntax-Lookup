---
id: "python-en-function-contextlib-contextmanager"
language: "python"
lang: "en"
category: "function"
name: "contextmanager"
directive: "decorator"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.contextmanager"
license: "PSF"
updated: "2026-10-01"
---

# contextmanager

This function is a `decorator` that can be used to define a factory
function for `with` statement context managers, without needing to
create a class or separate `~object.__enter__` and `~object.__exit__` methods.

While many objects natively support use in with statements, sometimes a
resource needs to be managed that isn't a context manager in its own right,
and doesn't implement a `close()` method for use with `contextlib.closing`.

An abstract example would be the following to ensure correct resource
management::

   from contextlib import contextmanager

   @contextmanager
   def managed_resource(*args, **kwds):
       # Code to acquire resource, e.g.:
       resource = acquire_resource(*args, **kwds)
       try:
           yield resource
       finally:
           # Code to release resource, e.g.:
           release_resource(resource)

The function can then be used like this::

   >>> with managed_resource(timeout=3600) as resource:
   ...     # Resource is released at the end of this block,
   ...     # even if code in the block raises an exception

The function being decorated must return a `generator`-iterator when
called. This iterator must yield exactly one value, which will be bound to
the targets in the `with` statement's `as` clause, if any.

At the point where the generator yields, the block nested in the `with`
statement is executed.  The generator is then resumed after the block is exited.
If an unhandled exception occurs in the block, it is reraised inside the
generator at the point where the yield occurred.  Thus, you can use a
`try`...\ `except`...\ `finally` statement to trap
the error (if any), or ensure that some cleanup takes place. If an exception is
trapped merely in order to log it or to perform some action (rather than to
suppress it entirely), the generator must reraise that exception. Otherwise the
generator context manager will indicate to the `with` statement that
the exception has been handled, and execution will resume with the statement
immediately following the `with` statement.

`contextmanager` uses `ContextDecorator` so the context managers
it creates can be used as decorators as well as in `with` statements.
When used as a decorator, a new generator instance is implicitly created on
each function call (this allows the otherwise "one-shot" context managers
created by `contextmanager` to meet the requirement that context
managers support multiple invocations in order to be used as decorators).

> *Changed in 3.2*: Use of :class:`ContextDecorator`.
