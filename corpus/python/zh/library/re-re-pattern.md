---
id: "python-zh-function-re-pattern"
language: "python"
lang: "zh"
category: "function"
name: "Pattern"
directive: "class"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.Pattern"
license: "PSF"
updated: "2026-10-01"
---

# Pattern

由 :func:`re.compile` 返回的已编译正则表达式对象。

Patterns are `generic` over the type of string they handle
(`str` or `bytes`).

> *Changed in 3.9*: :py:class:`re.Pattern` supports ``[]`` to indicate a Unicode (str) or bytes pattern. See :ref:`types-genericalias`.
