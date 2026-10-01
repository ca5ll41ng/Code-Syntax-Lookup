---
id: "python-en-function-inspect-isawaitable"
language: "python"
lang: "en"
category: "function"
name: "isawaitable"
signature: "isawaitable(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.isawaitable"
license: "PSF"
updated: "2026-10-01"
---

# isawaitable

Return `True` if the object can be used in `await` expression.

Can also be used to distinguish generator-based coroutines from regular
generators:

```python

import types

def gen():
    yield
@types.coroutine
def gen_coro():
    yield

assert not isawaitable(gen())
assert isawaitable(gen_coro())
```

> *Added in 3.5*
