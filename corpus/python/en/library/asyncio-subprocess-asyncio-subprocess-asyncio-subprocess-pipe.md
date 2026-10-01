---
id: "python-en-function-asyncio-subprocess-asyncio-subprocess-pipe"
language: "python"
lang: "en"
category: "function"
name: "asyncio.subprocess.PIPE"
directive: "data"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/3/library/asyncio-subprocess.html#asyncio-subprocess.asyncio.subprocess.PIPE"
license: "PSF"
updated: "2026-10-01"
---

# asyncio.subprocess.PIPE

Can be passed to the *stdin*, *stdout* or *stderr* parameters.

If *PIPE* is passed to *stdin* argument, the
`Process.stdin` attribute
will point to a `~asyncio.StreamWriter` instance.

If *PIPE* is passed to *stdout* or *stderr* arguments, the
`Process.stdout` and
`Process.stderr`
attributes will point to `~asyncio.StreamReader` instances.
