---
id: "python-zh-function-asyncio-subprocess-create_subprocess_shell-cmd-stdin-none"
language: "python"
lang: "zh"
category: "function"
name: "create_subprocess_shell(cmd, stdin=None, \\"
directive: "function"
module: "asyncio-subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-subprocess.html#asyncio-subprocess.create_subprocess_shell(cmd, stdin=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# create_subprocess_shell(cmd, stdin=None, \

运行 *cmd* shell 命令。

The *limit* argument sets the buffer limit for `StreamReader`
wrappers for `~asyncio.subprocess.Process.stdout` and `~asyncio.subprocess.Process.stderr`
(if `subprocess.PIPE` is passed to *stdout* and *stderr* arguments).

返回一个 :class:`~asyncio.subprocess.Process` 实例。

See the documentation of `loop.subprocess_shell` for other
parameters.

If the process object is garbage collected while the process is still
running, the child process will be killed.

> **Important**
>
> It is the application's responsibility to ensure that all whitespace and
> special characters are quoted appropriately to avoid `shell injection
> <https://en.wikipedia.org/wiki/Shell_injection#Shell_injection>`_
> vulnerabilities. The `shlex.quote` function can be used to properly
> escape whitespace and special shell characters in strings that are going
> to be used to construct shell commands.
>

> *Changed in 3.10*: Removed the *loop* parameter.
