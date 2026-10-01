---
id: "python-zh-function-inspect-getargvalues"
language: "python"
lang: "zh"
category: "function"
name: "getargvalues"
signature: "getargvalues(frame)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.getargvalues"
license: "PSF"
updated: "2026-10-01"
---

# getargvalues

Get information about arguments passed into a particular frame.  A
`named tuple` `ArgInfo(args, varargs, keywords, locals)` is
returned. *args* is a list of the argument names.  *varargs* and *keywords*
are the names of the `*` and `**` arguments or `None`.  *locals* is the
locals dictionary of the given frame.

> **Note**
>
> 该函数因疏忽在 Python 3.5 中被错误地标记为弃用。
>
