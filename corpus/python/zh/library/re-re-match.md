---
id: "python-zh-function-re-match"
language: "python"
lang: "zh"
category: "function"
name: "Match"
directive: "class"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.Match"
license: "PSF"
updated: "2026-10-01"
---

# Match

由成功的 ``match`` 和 ``search`` 所返回的匹配对象。

Matches are `generic` over the type of string which was
matched (`str` or `bytes`).

> *Changed in 3.9*: :py:class:`re.Match` supports ``[]`` to indicate a Unicode (str) or bytes match. See :ref:`types-genericalias`.
