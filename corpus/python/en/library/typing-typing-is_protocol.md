---
id: "python-en-function-typing-is_protocol"
language: "python"
lang: "en"
category: "function"
name: "is_protocol"
signature: "is_protocol(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.is_protocol"
license: "PSF"
updated: "2026-10-01"
---

# is_protocol

Determine if a type is a `Protocol`.

For example:

```python

class P(Protocol):
    def a(self) -> str: ...
    b: int

assert is_protocol(P)
assert not is_protocol(int)
```

This function only returns true for `Protocol` classes, not for
`generic aliases` of them:

```python

class GenericP[T](Protocol):
    def a(self) -> T: ...
    b: int

assert not is_protocol(GenericP[int])
```

> *Added in 3.13*
