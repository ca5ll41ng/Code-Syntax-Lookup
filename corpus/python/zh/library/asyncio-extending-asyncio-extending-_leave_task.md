---
id: "python-zh-function-asyncio-extending-_leave_task"
language: "python"
lang: "zh"
category: "function"
name: "_leave_task"
signature: "_leave_task(loop, task)"
directive: "function"
module: "asyncio-extending"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-extending.html#asyncio-extending._leave_task"
license: "PSF"
updated: "2026-10-01"
---

# _leave_task

将当前任务从 *task* 切换回 ``None``。

Call the function just after `coroutine.send` or `coroutine.throw`
execution.
