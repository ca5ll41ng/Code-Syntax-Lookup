---
id: "python-en-function-asyncio-eventloop-loop-set_default_executor"
language: "python"
lang: "en"
category: "function"
name: "loop.set_default_executor"
signature: "loop.set_default_executor(executor)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.set_default_executor"
license: "PSF"
updated: "2026-10-01"
---

# loop.set_default_executor

Set *executor* as the default executor used by `run_in_executor`.
*executor* must be an instance of
`~concurrent.futures.ThreadPoolExecutor`, which includes
`~concurrent.futures.InterpreterPoolExecutor`.

> *Changed in 3.11*: *executor* must be an instance of :class:`~concurrent.futures.ThreadPoolExecutor`.
