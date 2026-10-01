---
id: "python-zh-function-sqlite3-row"
language: "python"
lang: "zh"
category: "function"
name: "Row"
directive: "class"
module: "sqlite3"
source_url: "https://docs.python.org/zh-cn/3/library/sqlite3.html#sqlite3.Row"
license: "PSF"
updated: "2026-10-01"
---

# Row

A `Row` instance serves as a highly optimized
`~Connection.row_factory` for `Connection` objects.
It supports iteration, equality testing, `len`,
and `mapping` access by column name and index.

Two `Row` objects compare equal
if they have identical column names and values.

详情参见 :ref:`sqlite3-howto-row-factory`。

method:: keys

> *Changed in 3.5*: Added support of slicing.
