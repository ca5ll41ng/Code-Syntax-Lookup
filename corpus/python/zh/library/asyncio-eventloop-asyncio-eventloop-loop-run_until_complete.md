---
id: "python-zh-function-asyncio-eventloop-loop-run_until_complete"
language: "python"
lang: "zh"
category: "function"
name: "loop.run_until_complete"
signature: "loop.run_until_complete(future)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.run_until_complete"
license: "PSF"
updated: "2026-10-01"
---

# loop.run_until_complete

Run until the *future* (an instance of `Future`) has
completed.

If the argument is a `coroutine object` it
is implicitly scheduled to run as a `asyncio.Task`.

返回 Future 的结果 或者引发相关异常。
