---
id: "python-zh-function-codecs-backslashreplace_errors"
language: "python"
lang: "zh"
category: "function"
name: "backslashreplace_errors"
signature: "backslashreplace_errors(exception)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.backslashreplace_errors"
license: "PSF"
updated: "2026-10-01"
---

# backslashreplace_errors

实现了 ``'backslashreplace'`` 错误处理。

Malformed data is replaced by a backslashed escape sequence.
On encoding, use the hexadecimal form of Unicode code point with formats
`\\x{hh}` `\\u{xxxx}` `\\U{xxxxxxxx}`.
On decoding, use the hexadecimal form of
byte value with format `\\x{hh}`.

> *Changed in 3.5*: Works with decoding and translating.
