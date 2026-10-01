---
id: "python-zh-function-bz2-compress"
language: "python"
lang: "zh"
category: "function"
name: "compress"
signature: "compress(data, compresslevel=9)"
directive: "function"
module: "bz2"
source_url: "https://docs.python.org/zh-cn/3/library/bz2.html#bz2.compress"
license: "PSF"
updated: "2026-10-01"
---

# compress

压缩 *data*，此参数为一个 :term:`字节类对象 <bytes-like object>`。

*compresslevel*, if given, must be an integer between `1` and `9`. The
default is `9`.

对于增量压缩，请改用 :class:`BZ2Compressor`。
