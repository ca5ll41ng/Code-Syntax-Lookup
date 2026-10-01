---
id: "python-zh-function-os-wnowait"
language: "python"
lang: "zh"
category: "function"
name: "WNOWAIT"
directive: "data"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WNOWAIT"
license: "PSF"
updated: "2026-10-01"
---

# WNOWAIT

This *options* flag causes `waitid` to leave the child in a waitable state, so that
a later `wait*` call can be used to retrieve the child status information again.

这个选项对于其他 ``wait*`` 函数不可用。

availability:: Unix, not WASI, not Android, not iOS.
