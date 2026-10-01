---
id: "python-zh-function-socket-timeout"
language: "python"
lang: "zh"
category: "function"
name: "timeout"
directive: "exception"
module: "socket"
source_url: "https://docs.python.org/zh-cn/3/library/socket.html#socket.timeout"
license: "PSF"
updated: "2026-10-01"
---

# timeout

:exc:`TimeoutError` 的已被弃用的别名。

A subclass of `OSError`, this exception is raised when a timeout
occurs on a socket which has had timeouts enabled via a prior call to
`~socket.settimeout` (or implicitly through
`~socket.setdefaulttimeout`).  The accompanying value is a string
whose value is currently always "timed out".

> *Changed in 3.3*: This class was made a subclass of :exc:`OSError`.

> *Changed in 3.10*: This class was made an alias of :exc:`TimeoutError`.
