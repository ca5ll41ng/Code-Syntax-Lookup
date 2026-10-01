---
id: "python-zh-function-os-listvolumes"
language: "python"
lang: "zh"
category: "function"
name: "listvolumes"
signature: "listvolumes()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.listvolumes"
license: "PSF"
updated: "2026-10-01"
---

# listvolumes

返回一个包含系统中的卷的列表。

Volumes are typically represented as a GUID path that looks like
`\\?\Volume{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}\`. Files can
usually be accessed through a GUID path, permissions allowing.
However, users are generally not familiar with them, and so the
recommended use of this function is to retrieve mount points
using `os.listmounts`.

如果在收集卷时发生错误则可能引发 :exc:`OSError`。

audit-event:: os.listvolumes "" os.listvolumes

availability:: Windows

> *Added in 3.12*
