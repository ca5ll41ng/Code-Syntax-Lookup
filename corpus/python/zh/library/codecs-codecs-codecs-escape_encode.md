---
id: "python-zh-function-codecs-codecs-escape_encode"
language: "python"
lang: "zh"
category: "function"
name: "codecs.escape_encode"
signature: "codecs.escape_encode(input, errors=None)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.escape_encode"
license: "PSF"
updated: "2026-10-01"
---

# codecs.escape_encode

Encode *input* using escape sequences. Similar to how `repr` on bytes
produces escaped byte values.

*input* 必须是一个 :class:`bytes` 对象。

Returns a tuple `(output, length)` where *output* is a `bytes`
object and *length* is the number of bytes consumed.
