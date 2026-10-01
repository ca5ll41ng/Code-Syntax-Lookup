---
id: "python-zh-function-asyncio-extending-task-__init__"
language: "python"
lang: "zh"
category: "function"
name: "Task.__init__"
signature: "Task.__init__(coro, *, loop=None, name=None, context=None)"
directive: "method"
module: "asyncio-extending"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-extending.html#asyncio-extending.Task.__init__"
license: "PSF"
updated: "2026-10-01"
---

# Task.__init__

创建一个内置的 Task 实例。

*loop* is an optional event loop instance. The rest of arguments are described in
`loop.create_task` description.

> *Changed in 3.11*: *context* argument is added.
