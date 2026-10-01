---
id: "python-en-function-builtins-iter"
language: "python"
lang: "en"
category: "function"
name: "iter"
signature: "iter(iterable, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#iter"
license: "PSF"
updated: "2026-10-01"
---

# iter

Return an `iterator` object.  The first argument is interpreted very
differently depending on the presence of the other arguments. Without other
arguments, the single argument must be a collection object which supports the
`iterable` protocol (the `~object.__iter__` method),
or it must support
the sequence protocol (the `~object.__getitem__` method with integer arguments
starting at `0`).  If it does not support either of those protocols,
`TypeError` is raised.

If *stop_value* or *stop_exception* is given,
then the first argument must be a callable object.  The iterator created in this case
will call *callable* with no arguments for each call to its
`~iterator.__next__` method; if the value returned is equal to
*stop_value*, or if the call raises an exception matching *stop_exception*,
`StopIteration` will be raised, otherwise the value will
be returned.

*stop_exception* is an exception class or a tuple of exception classes.
If *stop_value* is not specified,
the iteration stops only when the callable raises an exception.
If the callable raises `StopIteration`
which does not match *stop_exception*,
it is replaced with a `RuntimeError`,
as for generators (see PEP 479).

See also `typeiter`.

One useful application of the second form of `iter` is to build a
block-reader. For example, reading fixed-width blocks from a binary
database file until the end of file is reached::

   from functools import partial
   with open('mydata.db', 'rb') as f:
       for block in iter(partial(f.read, 64), b''):
           process_block(block)

*stop_exception* is useful for callables
which report `exhaustion` by raising an exception
instead of returning a special value.
For example, draining a queue::

   import queue
   for item in iter(input_queue.get_nowait, stop_exception=queue.Empty):
       process_item(item)

> *Changed in next*: Added the *stop_exception* parameter and allowed passing *stop_value* by keyword.
