---
id: "python-zh-function-os-pidfd_open"
language: "python"
lang: "zh"
category: "function"
name: "pidfd_open"
signature: "pidfd_open(pid, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.pidfd_open"
license: "PSF"
updated: "2026-10-01"
---

# pidfd_open

Return a file descriptor referring to the process *pid* with *flags* set.
This descriptor can be used to perform process management without races
and signals.

更多详细信息请参阅 :manpage:`pidfd_open(2)` 手册页。

availability:: Linux >= 5.3, Android >= `build-time` API level 31

> *Added in 3.9*

data:: PIDFD_NONBLOCK

availability:: Linux >= 5.10

> *Added in 3.12*
