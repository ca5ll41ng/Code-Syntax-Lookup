---
id: "python-zh-function-asyncio-subprocess-stdout-none-stderr-none-limit-65536-kwds"
language: "python"
lang: "zh"
category: "function"
name: "stdout=None, stderr=None, limit=65536, **kwds)"
directive: "function"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-subprocess.html#asyncio-subprocess.stdout=None, stderr=None, limit=65536, **kwds)"
license: "PSF"
updated: "2026-10-01"
---

# stdout=None, stderr=None, limit=65536, **kwds)

创建一个子进程。

The *limit* argument sets the buffer limit for `StreamReader`
wrappers for `~asyncio.subprocess.Process.stdout` and `~asyncio.subprocess.Process.stderr`
(if `subprocess.PIPE` is passed to *stdout* and *stderr* arguments).

返回一个 :class:`~asyncio.subprocess.Process` 实例。

See the documentation of `loop.subprocess_exec` for other
parameters.

If the process object is garbage collected while the process is still
running, the child process will be killed.

> *Changed in 3.10*: Removed the *loop* parameter.
