---
id: "python-zh-function-os-unshare"
language: "python"
lang: "zh"
category: "function"
name: "unshare"
signature: "unshare(flags)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.unshare"
license: "PSF"
updated: "2026-10-01"
---

# unshare

Disassociate parts of the process execution context, and move them into a
newly created namespace.
See the `unshare(2)`
man page for more details.
The *flags* argument is a bit mask, combining zero or more of the
`CLONE_* constants`,
that specifies which parts of the execution context should be
unshared from their existing associations and moved to a new namespace.
If the *flags* argument is `0`, no changes are made to the calling process's
execution context.

availability:: Linux >= 2.6.16.

> *Added in 3.12*

> **Seealso**
>
> :func:`~os.setns` 函数。
>
