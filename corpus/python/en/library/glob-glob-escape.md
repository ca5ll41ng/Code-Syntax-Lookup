---
id: "python-en-function-glob-escape"
language: "python"
lang: "en"
category: "function"
name: "escape"
signature: "escape(pathname)"
directive: "function"
module: "glob"
source_url: "https://docs.python.org/3/library/glob.html#glob.escape"
license: "PSF"
updated: "2026-10-01"
---

# escape

Escape all special characters (`'?'`, `'*'` and `'['`).
This is useful if you want to match an arbitrary literal string that may
have special characters in it.  Special characters in drive/UNC
sharepoints are not escaped, for example on Windows
`escape('//?/c:/Quo vadis?.txt')` returns `'//?/c:/Quo vadis[?].txt'`.

> *Added in 3.4*
