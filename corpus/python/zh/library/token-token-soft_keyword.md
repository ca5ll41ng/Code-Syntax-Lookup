---
id: "python-zh-function-token-soft_keyword"
language: "python"
lang: "zh"
category: "function"
name: "SOFT_KEYWORD"
directive: "data"
module: "token"
source_url: "https://docs.python.org/zh-cn/3/library/token.html#token.SOFT_KEYWORD"
license: "PSF"
updated: "2026-10-01"
---

# SOFT_KEYWORD

指明一个 :ref:`软关键字 <soft-keywords>` 的词元值。

The tokenizer never produces this value.
To check for a soft keyword, pass a `NAME` token's string to
`keyword.issoftkeyword`.
