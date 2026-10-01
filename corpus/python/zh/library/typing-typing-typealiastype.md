---
id: "python-zh-function-typing-typealiastype"
language: "python"
lang: "zh"
category: "function"
name: "TypeAliasType"
signature: "TypeAliasType(name, value, *, type_params=(), qualname=None)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.TypeAliasType"
license: "PSF"
updated: "2026-10-01"
---

# TypeAliasType

通过 :keyword:`type` 语句创建的类型别名的类型。

示例:

```python

>>> type Alias = int
>>> type(Alias)
<class 'typing.TypeAliasType'>
```

> *Added in 3.12*

attribute:: __name__

attribute:: __qualname__

attribute:: __module__

attribute:: __type_params__

attribute:: __value__

method:: evaluate_value

#### Unpacking

Type aliases support star unpacking using the `*Alias` syntax.
This is equivalent to using `Unpack[Alias]` directly:

```python

>>> type Alias = tuple[int, str]
>>> type Unpacked = tuple[bool, *Alias]
>>> Unpacked.__value__
tuple[bool, typing.Unpack[Alias]]
```

> *Added in 3.14*
