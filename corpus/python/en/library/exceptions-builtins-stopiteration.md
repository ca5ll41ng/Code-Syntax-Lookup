---
id: "python-en-function-builtins-stopiteration"
language: "python"
lang: "en"
category: "function"
name: "StopIteration"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#StopIteration"
license: "PSF"
updated: "2026-10-01"
---

# StopIteration

Raised by built-in function `next` and an `iterator`\'s
`~iterator.__next__` method to signal that there are no further
items produced by the iterator.

attribute:: StopIteration.value

When a `generator` or `coroutine` function
returns, a new `StopIteration` instance is
raised, and the value returned by the function is used as the
`value` parameter to the constructor of the exception.

If a generator code directly or indirectly raises `StopIteration`,
it is converted into a `RuntimeError` (retaining the
`StopIteration` as the new exception's cause).

> *Changed in 3.3*: Added ``value`` attribute and the ability for generator functions to use it to return a value.

> *Changed in 3.5*: Introduced the RuntimeError transformation via ``from __future__ import generator_stop``, see :pep:`479`.

> *Changed in 3.7*: Enable :pep:`479` for all code by default: a :exc:`StopIteration` error raised in a generator is transformed into a :exc:`RuntimeError`.
