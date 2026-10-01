---
id: "python-zh-function-urllib-parse-unquote_to_bytes"
language: "python"
lang: "zh"
category: "function"
name: "unquote_to_bytes"
signature: "unquote_to_bytes(string)"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.parse.html#urllib.parse.unquote_to_bytes"
license: "PSF"
updated: "2026-10-01"
---

# unquote_to_bytes

Replace `%{xx}` escapes with their single-octet equivalent, and return a
`bytes` object.

*string* 可以是 :class:`str` 或 :class:`bytes` 对象。

If it is a `str`, unescaped non-ASCII characters in *string*
are encoded into UTF-8 bytes.

例如: ``unquote_to_bytes('a%26%EF')`` 将产生 ``b'a&\xef'``。
