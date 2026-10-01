---
id: "python-zh-function-os-wstopsig"
language: "python"
lang: "zh"
category: "function"
name: "WSTOPSIG"
signature: "WSTOPSIG(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WSTOPSIG"
license: "PSF"
updated: "2026-10-01"
---

# WSTOPSIG

返回导致进程停止的信号。

此函数应当仅在 :func:`WIFSTOPPED` 为真值时使用。

availability:: Unix, not WASI, not Android, not iOS.
