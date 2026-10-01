---
id: "python-zh-function-doctest-debug_src"
language: "python"
lang: "zh"
category: "function"
name: "debug_src"
signature: "debug_src(src, pm=False, globs=None)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/zh-cn/3/library/doctest.html#doctest.debug_src"
license: "PSF"
updated: "2026-10-01"
---

# debug_src

在一个字符串中调试 doctest。

This is like function `debug` above, except that a string containing
doctest examples is specified directly, via the *src* argument.

可选参数 *pm* 的含义与上述函数 :func:`debug` 的含义相同。

Optional argument *globs* gives a dictionary to use as both local and global
execution context.  If not specified, or `None`, an empty dictionary is used.
If specified, a shallow copy of the dictionary is used.
