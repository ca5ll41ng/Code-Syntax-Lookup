---
id: "python-zh-function-os-wuntraced"
language: "python"
lang: "zh"
category: "function"
name: "WUNTRACED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.WUNTRACED"
license: "PSF"
updated: "2026-10-01"
---

# WUNTRACED

This *options* flag for `waitpid`, `wait3`, and `wait4` causes
child processes to also be reported if they have been stopped but their
current state has not been reported since they were stopped.

这个选项对于 :func:`waitid` 不可用。

availability:: Unix, not WASI, not Android, not iOS.
