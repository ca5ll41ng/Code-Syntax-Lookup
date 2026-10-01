---
id: "python-zh-function-os-wstopped"
language: "python"
lang: "zh"
category: "function"
name: "WSTOPPED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WSTOPPED"
license: "PSF"
updated: "2026-10-01"
---

# WSTOPPED

This *options* flag for `waitid` causes child processes that have been stopped
by the delivery of a signal to be reported.

这个选项对于其他 ``wait*`` 函数不可用。

availability:: Unix, not WASI, not Android, not iOS.

> *Added in 3.3*
