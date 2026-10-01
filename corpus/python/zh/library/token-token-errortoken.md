---
id: "python-zh-function-token-errortoken"
language: "python"
lang: "zh"
category: "function"
name: "ERRORTOKEN"
directive: "data"
module: "token"
source_url: "https://docs.python.org/zh-cn/3/library/token.html#token.ERRORTOKEN"
license: "PSF"
updated: "2026-10-01"
---

# ERRORTOKEN

用于表示错误输入的词元值。

The `tokenize` module generally indicates errors by
raising exceptions instead of emitting this token.
It can also emit tokens such as `OP` or `NAME` with strings that
are later rejected by the parser.
