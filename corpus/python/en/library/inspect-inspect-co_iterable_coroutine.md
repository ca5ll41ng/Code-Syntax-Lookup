---
id: "python-en-function-inspect-co_iterable_coroutine"
language: "python"
lang: "en"
category: "function"
name: "CO_ITERABLE_COROUTINE"
directive: "data"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.CO_ITERABLE_COROUTINE"
license: "PSF"
updated: "2026-10-01"
---

# CO_ITERABLE_COROUTINE

The flag is used to transform generators into generator-based
coroutines.  Generator objects with this flag can be used in
`await` expression, and can `yield from` coroutine objects.
See PEP 492 for more details.

> *Added in 3.5*
