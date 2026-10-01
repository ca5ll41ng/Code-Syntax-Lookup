---
id: "python-zh-function-typing-get_protocol_members"
language: "python"
lang: "zh"
category: "function"
name: "get_protocol_members"
signature: "get_protocol_members(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.get_protocol_members"
license: "PSF"
updated: "2026-10-01"
---

# get_protocol_members

返回 :class:`Protocol` 中定义的成员构成的集合。

```python

>>> from typing import Protocol, get_protocol_members
>>> class P(Protocol):
...     def a(self) -> str: ...
...     b: int
>>> get_protocol_members(P) == frozenset({'a', 'b'})
True
```

如果参数不是协议，引发 :exc:`TypeError`。

> *Added in 3.13*
