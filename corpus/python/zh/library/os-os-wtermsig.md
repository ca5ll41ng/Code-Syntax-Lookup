---
id: "python-zh-function-os-wtermsig"
language: "python"
lang: "zh"
category: "function"
name: "WTERMSIG"
signature: "WTERMSIG(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WTERMSIG"
license: "PSF"
updated: "2026-10-01"
---

# WTERMSIG

返回导致进程终止的信号的编号。

此函数应当仅在 :func:`WIFSIGNALED` 为真值时使用。

availability:: Unix, not WASI, not Android, not iOS.
