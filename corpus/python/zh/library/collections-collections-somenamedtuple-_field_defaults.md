---
id: "python-zh-function-collections-somenamedtuple-_field_defaults"
language: "python"
lang: "zh"
category: "function"
name: "somenamedtuple._field_defaults"
directive: "attribute"
module: "collections"
source_url: "https://docs.python.org/zh-cn/3/library/collections.html#collections.somenamedtuple._field_defaults"
license: "PSF"
updated: "2026-10-01"
---

# somenamedtuple._field_defaults

字典将字段名称映射到默认值。

```python

>>> Account = namedtuple('Account', ['type', 'balance'], defaults=[0])
>>> Account._field_defaults
{'balance': 0}
>>> Account('premium')
Account(type='premium', balance=0)
```
