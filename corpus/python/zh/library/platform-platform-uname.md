---
id: "python-zh-function-platform-uname"
language: "python"
lang: "zh"
category: "function"
name: "uname"
signature: "uname()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/zh-cn/3/library/platform.html#platform.uname"
license: "PSF"
updated: "2026-10-01"
---

# uname

Fairly portable uname interface. Returns a `~collections.namedtuple`
containing six attributes: `system`, `node`, `release`,
`version`, `machine`, and `processor`.

:attr:`processor` 将根据需要延后获取。

Note: the first two attribute names differ from the names presented by
`os.uname`, where they are named `sysname` and
`nodename`.

无法确定的条目会被设为 ``''``。

> *Changed in 3.3*: Result changed from a tuple to a :func:`~collections.namedtuple`.

> *Changed in 3.9*: :attr:`processor` is resolved late instead of immediately.
