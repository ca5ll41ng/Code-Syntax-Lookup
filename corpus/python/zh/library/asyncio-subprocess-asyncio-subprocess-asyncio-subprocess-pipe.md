---
id: "python-zh-function-asyncio-subprocess-asyncio-subprocess-pipe"
language: "python"
lang: "zh"
category: "function"
name: "asyncio.subprocess.PIPE"
directive: "data"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-subprocess.html#asyncio-subprocess.asyncio.subprocess.PIPE"
license: "PSF"
updated: "2026-10-01"
---

# asyncio.subprocess.PIPE

可以被传递给 *stdin*, *stdout* 或 *stderr* 形参。

If *PIPE* is passed to *stdin* argument, the
`Process.stdin` attribute
will point to a `~asyncio.StreamWriter` instance.

If *PIPE* is passed to *stdout* or *stderr* arguments, the
`Process.stdout` and
`Process.stderr`
attributes will point to `~asyncio.StreamReader` instances.
