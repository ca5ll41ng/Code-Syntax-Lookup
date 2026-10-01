---
id: "python-zh-function-os-listdrives"
language: "python"
lang: "zh"
category: "function"
name: "listdrives"
signature: "listdrives()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.listdrives"
license: "PSF"
updated: "2026-10-01"
---

# listdrives

返回一个包括Windows系统上驱动名称的列表。

A drive name typically looks like `'C:\\'`. Not every drive name
will be associated with a volume, and some may be inaccessible for
a variety of reasons, including permissions, network connectivity
or missing media. This function does not test for access.

May raise `OSError` if an error occurs collecting the drive
names.

audit-event:: os.listdrives "" os.listdrives

availability:: Windows

> *Added in 3.12*
