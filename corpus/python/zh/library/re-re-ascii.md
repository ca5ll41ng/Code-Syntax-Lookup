---
id: "python-zh-function-re-ascii"
language: "python"
lang: "zh"
category: "function"
name: "ASCII"
directive: "data"
module: "re"
source_url: "https://docs.python.org/zh-cn/3/library/re.html#re.ASCII"
license: "PSF"
updated: "2026-10-01"
---

# ASCII

Make `\w`, `\W`, `\b`, `\B`, `\d`, `\D`, `\s` and `\S`
perform ASCII-only matching instead of full Unicode matching.  This is only
meaningful for Unicode (str) patterns, and is ignored for bytes patterns.

对应于内联旗标 ``(?a)``。

> **Note**
>
> The :py`~re.U` flag still exists for backward compatibility,
> but is redundant in Python 3 since
> matches are Unicode by default for `str` patterns,
> and Unicode matching isn't allowed for bytes patterns.
> :py`~re.UNICODE` and the inline flag `(?u)` are similarly redundant.
>
