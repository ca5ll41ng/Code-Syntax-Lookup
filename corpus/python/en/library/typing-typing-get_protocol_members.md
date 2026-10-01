---
id: "python-en-function-typing-get_protocol_members"
language: "python"
lang: "en"
category: "function"
name: "get_protocol_members"
signature: "get_protocol_members(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.get_protocol_members"
license: "PSF"
updated: "2026-10-01"
---

# get_protocol_members

Return the set of members defined in a `Protocol`.

```python

>>> from typing import Protocol, get_protocol_members
>>> class P(Protocol):
...     def a(self) -> str: ...
...     b: int
>>> get_protocol_members(P) == frozenset({'a', 'b'})
True
```

Raise `TypeError` for arguments that are not Protocols.

> *Added in 3.13*
