---
id: "python-en-function-typing-any"
language: "python"
lang: "en"
category: "function"
name: "Any"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Any"
license: "PSF"
updated: "2026-10-01"
---

# Any

Special type indicating an unconstrained type.

* Every type is assignable to `Any`.
* `Any` is assignable to every type.

> *Changed in 3.11*: :data:`Any` can now be used as a base class. This can be useful for avoiding type checker errors with classes that can duck type anywhere or are highly dynamic.
