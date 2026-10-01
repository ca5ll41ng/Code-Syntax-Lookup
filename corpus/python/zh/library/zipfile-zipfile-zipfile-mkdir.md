---
id: "python-zh-function-zipfile-zipfile-mkdir"
language: "python"
lang: "zh"
category: "function"
name: "ZipFile.mkdir"
signature: "ZipFile.mkdir(zinfo_or_directory, mode=511)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/zh-cn/3/library/zipfile.html#zipfile.ZipFile.mkdir"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.mkdir

Create a directory inside the archive.  If *zinfo_or_directory* is a string,
a directory is created inside the archive with the mode that is specified in
the *mode* argument. If, however, *zinfo_or_directory* is
a `ZipInfo` instance then the *mode* argument is ignored.

归档文件必须以 ``'w'``, ``'x'`` 或 ``'a'`` 模式打开。

> *Added in 3.11*
