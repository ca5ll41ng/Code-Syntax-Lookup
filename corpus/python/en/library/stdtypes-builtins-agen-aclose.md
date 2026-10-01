---
id: "python-en-function-builtins-agen-aclose"
language: "python"
lang: "en"
category: "function"
name: "agen.aclose"
signature: "agen.aclose()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#agen.aclose"
license: "PSF"
updated: "2026-10-01"
---

# agen.aclose

Returns an awaitable that when run will throw a `GeneratorExit` into
the underlying asynchronous generator function at the point where it is
currently suspended (equivalent to calling `athrow(GeneratorExit)`).

If the asynchronous generator function then exits gracefully, is already
closed, or raises `GeneratorExit` (by not catching the exception),
then the returned awaitable will raise a `StopIteration` exception.
Any further awaitables returned by subsequent calls to the asynchronous
generator will raise a `StopAsyncIteration` exception.

If the asynchronous generator yields a value, a `RuntimeError` is
raised by the awaitable.
If the asynchronous generator raises any other exception, that exception
is propagated to the caller of the awaitable.

If the asynchronous generator has already exited due to an exception or
normal exit, then further calls to `aclose` will return an awaitable
that does nothing.
