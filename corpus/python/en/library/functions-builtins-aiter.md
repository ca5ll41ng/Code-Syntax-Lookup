---
id: "python-en-function-builtins-aiter"
language: "python"
lang: "en"
category: "function"
name: "aiter"
signature: "aiter(async_iterable, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#aiter"
license: "PSF"
updated: "2026-10-01"
---

# aiter

Return an `asynchronous iterator` object.
The first argument is interpreted very differently
depending on the presence of the other arguments.
Without other arguments,
the single argument must be an `asynchronous iterable`,
and the result is equivalent to calling `x.__aiter__()`.

If *stop_value* or *stop_exception* is given,
then the first argument must be a callable object.
The asynchronous iterator created in this case
calls *callable* with no arguments and awaits the result
for each call to its `~object.__anext__` method;
if the awaited value is equal to *stop_value*,
or if the call raises an exception matching *stop_exception*,
`StopAsyncIteration` will be raised,
otherwise the value will be returned.
The callable is only called when the result of `~object.__anext__`
is awaited.

*stop_exception* is an exception class or a tuple of exception classes.
If *stop_value* is not specified,
the iteration stops only when the callable raises an exception.
If the callable raises `StopAsyncIteration`
which does not match *stop_exception*,
it is replaced with a `RuntimeError`,
as for asynchronous generators (see PEP 525).

For example, reading fixed-size chunks from an asynchronous stream
until the end of file is reached::

   from functools import partial
   async for chunk in aiter(partial(reader.read, 1024), b''):
       process_chunk(chunk)

Or consuming an `asyncio.Queue` until it is shut down::

   from asyncio import QueueShutDown
   async for item in aiter(queue.get, stop_exception=QueueShutDown):
       process_item(item)

> *Added in 3.10*

> *Changed in next*: Added the *stop_value* and *stop_exception* parameters.
