---
id: "python-zh-function-asyncio-runner-asyncio-runner"
language: "python"
lang: "zh"
category: "function"
name: "asyncio-runner"
title: "Handling Keyboard Interruption"
directive: "module"
module: "asyncio-runner"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-runner.html#module-asyncio-runner"
license: "PSF"
updated: "2026-10-01"
---

# Handling Keyboard Interruption

**Handling Keyboard Interruption**

> *Added in 3.11*

When `signal.SIGINT` is raised by `Ctrl-C`, `KeyboardInterrupt`
exception is raised in the main thread by default. However this doesn't work with
`asyncio` because it can interrupt asyncio internals and can hang the program from
exiting.

为解决此问题，:mod:`asyncio` 将按以下步骤处理 :const:`signal.SIGINT`:

1. `asyncio.Runner.run` installs a custom `signal.SIGINT` handler before
   any user code is executed and removes it when exiting from the function.
2. The `~asyncio.Runner` creates the main task for the passed coroutine for its
   execution.
3. When `signal.SIGINT` is raised by `Ctrl-C`, the custom signal handler
   cancels the main task by calling `asyncio.Task.cancel` which raises
   `asyncio.CancelledError` inside the main task.  This causes the Python stack
   to unwind, `try/except` and `try/finally` blocks can be used for resource
   cleanup.  After the main task is cancelled, `asyncio.Runner.run` raises
   `KeyboardInterrupt`.
4. A user could write a tight loop which cannot be interrupted by
   `asyncio.Task.cancel`, in which case the second following `Ctrl-C`
   immediately raises the `KeyboardInterrupt` without cancelling the main task.
