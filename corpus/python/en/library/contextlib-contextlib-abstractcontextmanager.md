---
id: "python-en-function-contextlib-abstractcontextmanager"
language: "python"
lang: "en"
category: "function"
name: "AbstractContextManager"
directive: "class"
module: "contextlib"
source_url: "https://docs.python.org/3/library/contextlib.html#contextlib.AbstractContextManager"
license: "PSF"
updated: "2026-10-01"
---

# AbstractContextManager

An `abstract base class` for classes that implement
`~object.__enter__` and `~object.__exit__`. A default
implementation for `~object.__enter__` is provided which returns
`self` while `~object.__exit__` is an abstract method which by default
returns `None`. See also the definition of `typecontextmanager`.

> *Added in 3.6*
