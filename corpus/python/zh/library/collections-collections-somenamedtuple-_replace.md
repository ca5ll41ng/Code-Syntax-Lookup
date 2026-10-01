---
id: "python-zh-function-collections-somenamedtuple-_replace"
language: "python"
lang: "zh"
category: "function"
name: "somenamedtuple._replace"
signature: "somenamedtuple._replace(**kwargs)"
directive: "method"
module: "collections"
source_url: "https://docs.python.org/zh-cn/3/library/collections.html#collections.somenamedtuple._replace"
license: "PSF"
updated: "2026-10-01"
---

# somenamedtuple._replace

Return a new instance of the named tuple replacing specified fields with new
values::

    >>> p = Point(x=11, y=22)
    >>> p._replace(x=33)
    Point(x=33, y=22)

    >>> for partnum, record in inventory.items():
    ...     inventory[partnum] = record._replace(price=newprices[partnum], timestamp=time.now())

泛型函数 :func:`copy.replace` 也支持具名元组。

> *Changed in 3.13*: Raise :exc:`TypeError` instead of :exc:`ValueError` for invalid keyword arguments.
