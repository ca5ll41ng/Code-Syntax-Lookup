---
id: "python-zh-function-tokenize-generate_tokens"
language: "python"
lang: "zh"
category: "function"
name: "generate_tokens"
signature: "generate_tokens(readline)"
directive: "function"
module: "tokenize"
source_url: "https://docs.python.org/zh-cn/3/library/tokenize.html#tokenize.generate_tokens"
license: "PSF"
updated: "2026-10-01"
---

# generate_tokens

对读取 unicode 字符串而不是字节的源进行标记。

Like `.tokenize`, the *readline* argument is a callable returning
a single line of input. However, `generate_tokens` expects *readline*
to return a str object rather than bytes.

The result is an iterator yielding named tuples, exactly like
`.tokenize`. It does not yield an `~token.ENCODING` token.
