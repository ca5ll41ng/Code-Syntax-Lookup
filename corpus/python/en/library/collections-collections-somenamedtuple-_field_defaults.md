---
id: "python-en-function-collections-somenamedtuple-_field_defaults"
language: "python"
lang: "en"
category: "function"
name: "somenamedtuple._field_defaults"
directive: "attribute"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.somenamedtuple._field_defaults"
license: "PSF"
updated: "2026-10-01"
---

# somenamedtuple._field_defaults

Dictionary mapping field names to default values.

```python

>>> Account = namedtuple('Account', ['type', 'balance'], defaults=[0])
>>> Account._field_defaults
{'balance': 0}
>>> Account('premium')
Account(type='premium', balance=0)
```
