---
id: "python-zh-function-os-pwrite"
language: "python"
lang: "zh"
category: "function"
name: "pwrite"
signature: "pwrite(fd, str, offset, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.pwrite"
license: "PSF"
updated: "2026-10-01"
---

# pwrite

Write the bytestring in *str* to file descriptor *fd* at position of
*offset*, leaving the file offset unchanged.

返回实际写入的字节数。

availability:: Unix.

> *Added in 3.3*
