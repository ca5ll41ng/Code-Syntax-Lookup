---
id: "python-en-function-weakref-finalize"
language: "python"
lang: "en"
category: "function"
name: "finalize"
signature: "finalize(obj, func, /, *args, **kwargs)"
directive: "class"
module: "weakref"
source_url: "https://docs.python.org/3/library/weakref.html#weakref.finalize"
license: "PSF"
updated: "2026-10-01"
---

# finalize

Return a callable finalizer object which will be called when *obj*
is garbage collected. Unlike an ordinary weak reference, a finalizer
will always survive until the reference object is collected, greatly
simplifying lifecycle management.

A finalizer is considered *alive* until it is called (either explicitly
or at garbage collection), and after that it is *dead*.  Calling a live
finalizer returns the result of evaluating `func(*arg, **kwargs)`,
whereas calling a dead finalizer returns `None`.

Exceptions raised by finalizer callbacks during garbage collection
will be shown on the standard error output, but cannot be
propagated.  They are handled in the same way as exceptions raised
from an object's `~object.__del__` method or a weak reference's
callback.

When the program exits (or more generally, at `interpreter shutdown`),
each remaining live finalizer is called unless its `atexit` attribute
has been set to false.
They are called in reverse order of creation.

A finalizer will never invoke its callback during the later part of
the `interpreter shutdown` when module globals are liable to have
been replaced by `None`.

method:: __call__()

method:: detach()

method:: peek()

attribute:: alive

attribute:: atexit

> **Note**
>
> It is important to ensure that *func*, *args* and *kwargs* do
> not own any references to *obj*, either directly or indirectly,
> since otherwise *obj* will never be garbage collected.  In
> particular, *func* should not be a bound method of *obj*.
>

> *Added in 3.4*
