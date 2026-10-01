---
id: "python-en-function-builtins-generator-close"
language: "python"
lang: "en"
category: "function"
name: "generator.close"
signature: "generator.close()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#generator.close"
license: "PSF"
updated: "2026-10-01"
---

# generator.close

Raises a `GeneratorExit` exception at the point where the generator
function is currently suspended (equivalent to calling `throw(GeneratorExit)`).

If the generator function has already exited (due to an exception or
normal return), or raises `GeneratorExit` (by not catching the
exception), `close` returns `None`.
If the generator yields a value, a `RuntimeError` is raised.
If the generator raises any other exception, it is propagated to the caller.
If a generator returns a value upon being closed, that value is returned
by `close`.

When a generator iterator is garbage collected before it has exited,
`~generator.close` is called automatically.

> *Changed in 3.13*: If a generator returns a value upon being closed, the value is returned by :meth:`close`. Previously, it returned ``None``.
