---
id: "python-zh-function-typing-cast"
language: "python"
lang: "zh"
category: "function"
name: "cast"
signature: "cast(typ, val)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.cast"
license: "PSF"
updated: "2026-10-01"
---

# cast

把一个值转换为指定的类型。

This returns the value unchanged.  To the type checker this
signals that the return value has the designated type, but at
runtime we intentionally don't check anything (we want this
to be as fast as possible).
