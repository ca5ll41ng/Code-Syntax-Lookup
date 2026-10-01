---
id: "python-zh-function-unittest-mock-noncallablemagicmock"
language: "python"
lang: "zh"
category: "function"
name: "NonCallableMagicMock"
signature: "NonCallableMagicMock(*args, **kw)"
directive: "class"
module: "unittest.mock"
source_url: "https://docs.python.org/zh-cn/3/library/unittest.mock.html#unittest.mock.NonCallableMagicMock"
license: "PSF"
updated: "2026-10-01"
---

# NonCallableMagicMock

:class:`MagicMock` 的不可调用版本。

The constructor parameters have the same meaning as for
`MagicMock`, with the exception of *return_value* and
*side_effect* which have no meaning on a non-callable mock.
