---
id: "python-zh-function-collections-defaultdict"
language: "python"
lang: "zh"
category: "function"
name: "defaultdict"
signature: "defaultdict(default_factory=None, /, **kwargs)"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/zh-cn/3/library/collections.html#collections.defaultdict"
license: "PSF"
updated: "2026-10-01"
---

# defaultdict

Return a new dictionary-like object.  `defaultdict` is a subclass of the
built-in `dict` class.  It overrides one method and adds one writable
instance variable.  The remaining functionality is the same as for the
`dict` class and is not documented here.

The first argument provides the initial value for the `default_factory`
attribute; it defaults to `None`. All remaining arguments are treated the same
as if they were passed to the `dict` constructor, including keyword
arguments.

`defaultdict`\s are `generic` over two types,
signifying (respectively) the types of the dictionary's keys and values.

`defaultdict` objects support the following method in addition to the
standard `dict` operations:

method:: __missing__(key, /)

:class:`defaultdict` 对象支持以下实例变量：

attribute:: default_factory

> *Changed in 3.9*: Added merge (``|``) and update (``|=``) operators, specified in :pep:`584`.
