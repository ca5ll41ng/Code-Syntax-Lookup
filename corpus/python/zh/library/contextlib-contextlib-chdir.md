---
id: "python-zh-function-contextlib-chdir"
language: "python"
lang: "zh"
category: "function"
name: "chdir"
signature: "chdir(path)"
directive: "function"
module: "contextlib"
source_url: "https://docs.python.org/zh-cn/3/library/contextlib.html#contextlib.chdir"
license: "PSF"
updated: "2026-10-01"
---

# chdir

Non parallel-safe context manager to change the current working directory.
As this changes a global state, the working directory, it is not suitable
for use in most threaded or async contexts. It is also not suitable for most
non-linear code execution, like generators, where the program execution is
temporarily relinquished -- unless explicitly desired, you should not yield
when this context manager is active.

This is a simple wrapper around `~os.chdir`, it changes the current
working directory upon entering and restores the old one on exit.

该上下文管理器是 :ref:`reentrant <reentrant-cms>` 。

> *Added in 3.11*
