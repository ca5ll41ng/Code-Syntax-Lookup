---
id: "python-en-function-token-errortoken"
language: "python"
lang: "en"
category: "function"
name: "ERRORTOKEN"
directive: "data"
module: "token"
source_url: "https://docs.python.org/3/library/token.html#token.ERRORTOKEN"
license: "PSF"
updated: "2026-10-01"
---

# ERRORTOKEN

Token value used to indicate wrong input.

The `tokenize` module generally indicates errors by
raising exceptions instead of emitting this token.
It can also emit tokens such as `OP` or `NAME` with strings that
are later rejected by the parser.
