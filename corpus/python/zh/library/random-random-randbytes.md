---
id: "python-zh-function-random-randbytes"
language: "python"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "randbytes"
signature: "randbytes(n)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/zh-cn/3/library/random.html#random.randbytes"
license: "PSF"
updated: "2026-10-01"
---

# randbytes

生成 *n* 个随机字节。

This method should not be used for generating security tokens.
Use `secrets.token_bytes` instead.

> *Added in 3.9*
