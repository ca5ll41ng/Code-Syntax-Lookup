---
id: "python-zh-function-zlib-decompress-flush"
language: "python"
lang: "zh"
category: "function"
name: "Decompress.flush"
signature: "Decompress.flush(length=DEF_BUF_SIZE, /)"
directive: "method"
module: "zlib"
source_url: "https://docs.python.org/zh-cn/3/library/zlib.html#zlib.Decompress.flush"
license: "PSF"
updated: "2026-10-01"
---

# Decompress.flush

All pending input is processed, and a bytes object containing the remaining
uncompressed output is returned.  After calling `flush`, the
`decompress` method cannot be called again; the only realistic action is
to delete the object.

可选的形参 *length* 设置输出缓冲区的初始大小。
