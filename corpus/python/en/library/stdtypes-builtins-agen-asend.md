---
id: "python-en-function-builtins-agen-asend"
language: "python"
lang: "en"
category: "function"
name: "agen.asend"
signature: "agen.asend(value)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#agen.asend"
license: "PSF"
updated: "2026-10-01"
---

# agen.asend

Returns an awaitable which, when run, "sends" a value into the underlying
asynchronous generator function: the *value* argument becomes
the result of the current yield expression.

Otherwise, this method behaves like `~agen.__anext__`: when the
returned awaitable runs, it resumes the underlying function and either
returns the next yielded value as the value of the raised
`StopIteration`, or raises `StopAsyncIteration`.

When `asend` is called to start the asynchronous
generator, it must be called with `None` as the argument,
because there is no yield expression that could receive the value.
