---
id: "python-en-function-builtins-generator-throw"
language: "python"
lang: "en"
category: "function"
name: "generator.throw"
signature: "generator.throw(value)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#generator.throw"
license: "PSF"
updated: "2026-10-01"
---

# generator.throw

Raises an exception at the point where the generator is currently suspended.

Otherwise, this method behaves like `~generator.__next__`: it resumes
the underlying function and either returns the next yielded value or raises
`StopIteration`.
If the generator function does not catch the passed-in exception, or
raises a different exception, then that exception propagates to the caller.

When `throw` is called to start the generator, the generator
immediately exits (that is, subsequent calls to `~generator.__next__`
will raise `StopIteration`) and the thrown exception is propagated to
`throw`'s caller.

In typical use, this is called with a single argument, an exception instance,
similar to the way the `raise` keyword is used.

For backwards compatibility, however, the second signature is
supported, following a convention from older versions of Python.
The *type* argument should be an exception class, and *value*
should be an exception instance. If the *value* is not provided, the
*type* constructor is called to get an instance. If *traceback*
is provided, it is set on the exception, otherwise any existing
`~BaseException.__traceback__` attribute stored in *value* may
be cleared.

> *Changed in 3.12*: The second signature \(type\[, value\[, traceback\]\]\) is deprecated and may be removed in a future version of Python.
