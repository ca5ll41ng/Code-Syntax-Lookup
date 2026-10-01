---
id: "python-zh-function-inspect-isawaitable"
language: "python"
lang: "zh"
category: "function"
name: "isawaitable"
signature: "isawaitable(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.isawaitable"
license: "PSF"
updated: "2026-10-01"
---

# isawaitable

如果该对象可以在 :keyword:`await` 表达式中使用时返回 ``True``。

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
