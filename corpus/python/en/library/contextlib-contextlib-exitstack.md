---
id: "python-en-function-contextlib-exitstack"
language: "python"
lang: "en"
category: "function"
name: "ExitStack"
signature: "ExitStack()"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.ExitStack"
license: "PSF"
updated: "2026-10-01"
---

# ExitStack

A context manager that is designed to make it easy to programmatically
combine other context managers and cleanup functions, especially those
that are optional or otherwise driven by input data.

For example, a set of files may easily be handled in a single with
statement as follows::

   with ExitStack() as stack:
       files = [stack.enter_context(open(fname)) for fname in filenames]
       # All opened files will automatically be closed at the end of
       # the with statement, even if attempts to open files later
       # in the list raise an exception

The `~object.__enter__` method returns the `ExitStack` instance, and
performs no additional operations.

Each instance maintains a stack of registered callbacks that are called in
reverse order when the instance is closed (either explicitly or implicitly
at the end of a `with` statement). Note that callbacks are *not*
invoked implicitly when the context stack instance is garbage collected.

This stack model is used so that context managers that acquire their
resources in their `__init__` method (such as file objects) can be
handled correctly.

Since registered callbacks are invoked in the reverse order of
registration, this ends up behaving as if multiple nested `with`
statements had been used with the registered set of callbacks. This even
extends to exception handling - if an inner callback suppresses or replaces
an exception, then outer callbacks will be passed arguments based on that
updated state.

This is a relatively low level API that takes care of the details of
correctly unwinding the stack of exit callbacks. It provides a suitable
foundation for higher level context managers that manipulate the exit
stack in application specific ways.

> *Added in 3.3*

method:: enter_context(cm)

method:: push(exit)

method:: callback(callback, /, *args, **kwds)

method:: pop_all()

method:: close()
