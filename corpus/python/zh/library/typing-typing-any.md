---
id: "python-zh-function-typing-any"
language: "python"
lang: "zh"
category: "function"
name: "Any"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Any"
license: "PSF"
updated: "2026-10-01"
---

# Any

特殊类型，表示没有约束的类型。

* Every type is assignable to `Any`.
* `Any` is assignable to every type.

> *Changed in 3.11*: :data:`Any` can now be used as a base class. This can be useful for avoiding type checker errors with classes that can duck type anywhere or are highly dynamic.
