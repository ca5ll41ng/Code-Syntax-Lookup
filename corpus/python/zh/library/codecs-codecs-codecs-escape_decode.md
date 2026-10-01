---
id: "python-zh-function-codecs-codecs-escape_decode"
language: "python"
lang: "zh"
category: "function"
name: "codecs.escape_decode"
signature: "codecs.escape_decode(input, errors=None)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.escape_decode"
license: "PSF"
updated: "2026-10-01"
---

# codecs.escape_decode

将 *input* 从转义序列解码回原始字节串。

*input* 必须是一个 :term:`bytes-like object`。

Returns a tuple `(output, length)` where *output* is a `bytes`
object and *length* is the number of bytes consumed.
