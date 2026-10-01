---
id: "python-zh-function-bz2-decompress"
language: "python"
lang: "zh"
category: "function"
name: "decompress"
signature: "decompress(data)"
directive: "function"
module: "bz2"
source_url: "https://docs.python.org/zh-cn/3/library/bz2.html#bz2.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

解压缩 *data*，此参数为一个 :term:`字节类对象 <bytes-like object>`。

If *data* is the concatenation of multiple compressed streams, decompress
all of the streams.

对于增量解压缩，请改用 :class:`BZ2Decompressor`。

> *Changed in 3.3*: Support for multi-stream inputs was added.
