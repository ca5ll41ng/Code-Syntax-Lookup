---
id: "python-zh-function-sys-exception"
language: "python"
lang: "zh"
category: "function"
name: "exception"
signature: "exception()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys.exception"
license: "PSF"
updated: "2026-10-01"
---

# exception

This function, when called while an exception handler is executing (such as
an `except` or `except*` clause), returns the exception instance that
was caught by this handler. When exception handlers are nested within one
another, only the exception handled by the innermost handler is accessible.

如果没有任何异常处理器在执行，此函数将返回 ``None``。

> *Added in 3.11*
