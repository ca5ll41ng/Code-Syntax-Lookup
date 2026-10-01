---
id: "python-zh-function-os-seek_set"
language: "python"
lang: "zh"
category: "function"
name: "SEEK_SET"
directive: "data"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.SEEK_SET"
license: "PSF"
updated: "2026-10-01"
---

# SEEK_SET

Parameters to the `lseek` function and the `~io.IOBase.seek`
method on `file-like objects`,
for whence to adjust the file position indicator.

`SEEK_SET`
   Adjust the file position relative to the beginning of the file.
`SEEK_CUR`
   Adjust the file position relative to the current file position.
`SEEK_END`
   Adjust the file position relative to the end of the file.

它们的值分别为 0, 1 和 2。
