---
id: "python-en-function-token-soft_keyword"
language: "python"
lang: "en"
category: "function"
name: "SOFT_KEYWORD"
directive: "data"
module: "token"
source_url: "https://docs.python.org/3/library/token.html#token.SOFT_KEYWORD"
license: "PSF"
updated: "2026-10-01"
---

# SOFT_KEYWORD

Token value indicating a `soft keyword`.

The tokenizer never produces this value.
To check for a soft keyword, pass a `NAME` token's string to
`keyword.issoftkeyword`.
