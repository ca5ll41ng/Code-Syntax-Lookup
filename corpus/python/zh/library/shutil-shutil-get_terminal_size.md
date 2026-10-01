---
id: "python-zh-function-shutil-get_terminal_size"
language: "python"
lang: "zh"
category: "function"
name: "get_terminal_size"
signature: "get_terminal_size(fallback=(columns, lines))"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/zh-cn/3/library/shutil.html#shutil.get_terminal_size"
license: "PSF"
updated: "2026-10-01"
---

# get_terminal_size

获取终端窗口的尺寸。

For each of the two dimensions, the environment variable, `COLUMNS`
and `LINES` respectively, is checked. If the variable is defined and
the value is a positive integer, it is used.

When `COLUMNS` or `LINES` is not defined, which is the common case,
the terminal connected to `sys.__stdout__` is queried
by invoking `os.get_terminal_size`.

If the terminal size cannot be successfully queried, either because
the system doesn't support querying, or because we are not
connected to a terminal, the value given in `fallback` parameter
is used. `fallback` defaults to `(80, 24)` which is the default
size used by many terminal emulators.

返回的值是一个 :class:`os.terminal_size` 类型的具名元组。

See also: The Single UNIX Specification, Version 2,
`Other Environment Variables`_.

> *Added in 3.3*

> *Changed in 3.11*: The ``fallback`` values are also used if :func:`os.get_terminal_size` returns zeroes.
