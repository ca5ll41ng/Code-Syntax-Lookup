---
id: "python-en-function-typing-overload"
language: "python"
lang: "en"
category: "function"
name: "overload"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.overload"
license: "PSF"
updated: "2026-10-01"
---

# overload

Decorator for creating overloaded functions and methods.

The `@overload` decorator allows describing functions and methods
that support multiple different combinations of argument types. A series
of `@overload`-decorated definitions must be followed by exactly one
non-`@overload`-decorated definition (for the same function/method).

`@overload`-decorated definitions are for the benefit of the
type checker only, since they will be overwritten by the
non-`@overload`-decorated definition. The non-`@overload`-decorated
definition, meanwhile, will be used at
runtime but should be ignored by a type checker.  At runtime, calling
an `@overload`-decorated function directly will raise
`NotImplementedError`.

An example of overload that gives a more
precise type than can be expressed using a union or a type variable:

```python

@overload
def process(response: None) -> None:
    ...
@overload
def process(response: int) -> tuple[int, str]:
    ...
@overload
def process(response: bytes) -> str:
    ...
def process(response):
    ...  # actual implementation goes here
```

See PEP 484 for more details and comparison with other typing semantics.

> *Changed in 3.11*: Overloaded functions can now be introspected at runtime using :func:`get_overloads`.
