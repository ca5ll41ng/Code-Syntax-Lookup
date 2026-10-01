---
id: "python-zh-function-email-charset-add_codec"
language: "python"
lang: "zh"
category: "function"
name: "add_codec"
signature: "add_codec(charset, codecname)"
directive: "function"
module: "email.charset"
source_url: "https://docs.python.org/zh-cn/3/library/email.charset.html#email.charset.add_codec"
license: "PSF"
updated: "2026-10-01"
---

# add_codec

添加在给定字符集的字符和 Unicode 之间建立映射的编解码器。

*charset* is the canonical name of a character set. *codecname* is the name of a
Python codec, as appropriate for the second argument to the `str`'s
`~str.encode` method.
