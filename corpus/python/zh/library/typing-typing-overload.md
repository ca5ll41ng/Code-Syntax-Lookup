---
id: "python-zh-function-typing-overload"
language: "python"
lang: "zh"
category: "function"
name: "overload"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.overload"
license: "PSF"
updated: "2026-10-01"
---

# overload

用于创建重载函数和方法的装饰器。

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

请参阅 :pep:`484` 了解更多细节以及与其他类型语义的比较。

> *Changed in 3.11*: Overloaded functions can now be introspected at runtime using :func:`get_overloads`.
