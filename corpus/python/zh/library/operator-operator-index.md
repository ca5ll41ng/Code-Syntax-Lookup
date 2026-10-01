---
id: "python-zh-function-operator-index"
language: "python"
lang: "zh"
category: "function"
name: "index"
signature: "index(a)"
directive: "function"
module: "operator"
source_url: "https://docs.python.org/zh-cn/3/library/operator.html#operator.index"
license: "PSF"
updated: "2026-10-01"
---

# index

返回 *a* 转换为整数的结果。 等价于 ``a.__index__()``。

> *Changed in 3.10*: The result always has exact type :class:`int`.  Previously, the result could have been an instance of a subclass of ``int``.
