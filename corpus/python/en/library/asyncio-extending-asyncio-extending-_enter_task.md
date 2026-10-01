---
id: "python-en-function-asyncio-extending-_enter_task"
language: "python"
lang: "en"
category: "function"
name: "_enter_task"
signature: "_enter_task(loop, task)"
directive: "function"
module: "asyncio-extending"
source_url: "https://docs.python.org/3/library/asyncio-extending.html#asyncio-extending._enter_task"
license: "PSF"
updated: "2026-10-01"
---

# _enter_task

Switch the current task to the *task* argument.

Call the function just before executing a portion of embedded *coroutine*
(`coroutine.send` or `coroutine.throw`).
