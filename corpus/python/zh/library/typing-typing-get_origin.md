---
id: "python-zh-function-typing-get_origin"
language: "python"
lang: "zh"
category: "function"
name: "get_origin"
signature: "get_origin(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.get_origin"
license: "PSF"
updated: "2026-10-01"
---

# get_origin

Get the unsubscripted version of a type: for a typing object of the form
`X[Y, Z, ...]` return `X`.

If `X` is a typing-module alias for a builtin or
`collections` class, it will be normalized to the original class.
If `X` is an instance of `ParamSpecArgs` or `ParamSpecKwargs`,
return the underlying `ParamSpec`.
Return `None` for unsupported objects.

示例：

```python

assert get_origin(str) is None
assert get_origin(Dict[str, int]) is dict
assert get_origin(Union[int, str]) is Union
assert get_origin(Annotated[str, "metadata"]) is Annotated
P = ParamSpec('P')
assert get_origin(P.args) is P
assert get_origin(P.kwargs) is P
```

> *Added in 3.8*
