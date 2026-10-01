---
id: "python-en-function-contextlib-abstractasynccontextmanager"
language: "python"
lang: "en"
category: "function"
name: "AbstractAsyncContextManager"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.AbstractAsyncContextManager"
license: "PSF"
updated: "2026-10-01"
---

# AbstractAsyncContextManager

An `abstract base class` for classes that implement
`~object.__aenter__` and `~object.__aexit__`. A default
implementation for `~object.__aenter__` is provided which returns
`self` while `~object.__aexit__` is an abstract method which by default
returns `None`. See also the definition of
`async-context-managers`.

> *Added in 3.7*
