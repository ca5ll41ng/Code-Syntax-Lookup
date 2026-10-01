---
id: "python-zh-function-unittest-mock-magicmock"
language: "python"
lang: "zh"
category: "function"
name: "MagicMock"
signature: "MagicMock(*args, **kw)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/zh-cn/3/library/unittest.mock.html#unittest.mock.MagicMock"
license: "PSF"
updated: "2026-10-01"
---

# MagicMock

`MagicMock` is a subclass of `Mock` with default implementations
of most of the `magic methods`. You can use
`MagicMock` without having to configure the magic methods yourself.

构造器形参的含义与 :class:`Mock` 的相同。

If you use the *spec* or *spec_set* arguments then *only* magic methods
that exist in the spec will be created.
