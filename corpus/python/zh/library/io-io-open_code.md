---
id: "python-zh-function-io-open_code"
language: "python"
lang: "zh"
category: "function"
name: "open_code"
signature: "open_code(path)"
directive: "function"
module: "io"
source_url: "https://docs.python.org/zh-cn/3/library/io.html#io.open_code"
license: "PSF"
updated: "2026-10-01"
---

# open_code

Opens the provided file with mode `'rb'`. This function should be used
when the intent is to treat the contents as executable code.

*path* 应当为 :class:`str` 类型并且是一个绝对路径。

The behavior of this function may be overridden by an earlier call to the
:c`PyFile_SetOpenCodeHook`. However, assuming that *path* is a
`str` and an absolute path, `open_code(path)` should always behave
the same as `open(path, 'rb')`. Overriding the behavior is intended for
additional validation or preprocessing of the file.

> *Added in 3.8*
