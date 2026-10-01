---
id: "python-zh-function-asyncio-extending-_enter_task"
language: "python"
lang: "zh"
category: "function"
name: "_enter_task"
signature: "_enter_task(loop, task)"
directive: "function"
module: "asyncio-extending"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-extending.html#asyncio-extending._enter_task"
license: "PSF"
updated: "2026-10-01"
---

# _enter_task

将当前任务切换为 *task* 参数。

Call the function just before executing a portion of embedded *coroutine*
(`coroutine.send` or `coroutine.throw`).
