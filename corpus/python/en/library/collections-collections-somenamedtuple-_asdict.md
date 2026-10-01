---
id: "python-en-function-collections-somenamedtuple-_asdict"
language: "python"
lang: "en"
category: "function"
name: "somenamedtuple._asdict"
signature: "somenamedtuple._asdict()"
directive: "method"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.somenamedtuple._asdict"
license: "PSF"
updated: "2026-10-01"
---

# somenamedtuple._asdict

Return a new `dict` which maps field names to their corresponding
values:

```python

>>> p = Point(x=11, y=22)
>>> p._asdict()
{'x': 11, 'y': 22}
```

> *Changed in 3.1*: Returns an :class:`OrderedDict` instead of a regular :class:`dict`.

> *Changed in 3.8*: Returns a regular :class:`dict` instead of an :class:`OrderedDict`. As of Python 3.7, regular dicts are guaranteed to be ordered.  If the extra features of :class:`OrderedDict` are required, the suggested remediation is to cast the result to the desired type: ``OrderedDict(nt._asdict())``.
