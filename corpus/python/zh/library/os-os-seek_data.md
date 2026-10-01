---
id: "python-zh-function-os-seek_data"
language: "python"
lang: "zh"
category: "function"
name: "SEEK_DATA"
directive: "data"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.SEEK_DATA"
license: "PSF"
updated: "2026-10-01"
---

# SEEK_DATA

Parameters to the `lseek` function and the `~io.IOBase.seek`
method on `file-like objects`,
for seeking file data and holes on sparsely allocated files.

`SEEK_DATA`
   Adjust the file offset to the next location containing data,
   relative to the seek position.

`SEEK_HOLE`
   Adjust the file offset to the next location containing a hole,
   relative to the seek position.
   A hole is defined as a sequence of zeros.

> **Note**
>
> 这些操作只对支持它们的文件系统具有意义。
>

availability:: Linux >= 3.1, macOS, Unix

> *Added in 3.3*
