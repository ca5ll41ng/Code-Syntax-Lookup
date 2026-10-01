---
id: "python-zh-function-signal-pidfd_send_signal"
language: "python"
lang: "zh"
category: "function"
name: "pidfd_send_signal"
signature: "pidfd_send_signal(pidfd, sig, siginfo=None, flags=0)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/zh-cn/3/library/signal.html#signal.pidfd_send_signal"
license: "PSF"
updated: "2026-10-01"
---

# pidfd_send_signal

Send signal *sig* to the process referred to by file descriptor *pidfd*.
Python does not currently support the *siginfo* parameter; it must be
`None`.  The *flags* argument is provided for future extensions; no flag
values are currently defined.

更多信息请参阅 :manpage:`pidfd_send_signal(2)` 手册页面。

availability:: Linux >= 5.1, Android >= `build-time` API level 31

> *Added in 3.9*
