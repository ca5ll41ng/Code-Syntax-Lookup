---
id: "python-zh-function-asyncio-exceptions-invalidstateerror"
language: "python"
lang: "zh"
category: "function"
name: "InvalidStateError"
directive: "exception"
module: "asyncio-exceptions"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-exceptions.html#asyncio-exceptions.InvalidStateError"
license: "PSF"
updated: "2026-10-01"
---

# InvalidStateError

:class:`Task` 或 :class:`Future` 的内部状态无效。

Can be raised in situations like setting a result value for a
*Future* object that already has a result value set.
