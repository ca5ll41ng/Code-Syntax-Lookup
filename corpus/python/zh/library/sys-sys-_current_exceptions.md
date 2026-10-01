---
id: "python-zh-function-sys-_current_exceptions"
language: "python"
lang: "zh"
category: "function"
name: "_current_exceptions"
signature: "_current_exceptions()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/zh-cn/3/library/sys.html#sys._current_exceptions"
license: "PSF"
updated: "2026-10-01"
---

# _current_exceptions

Return a dictionary mapping each thread's identifier to the topmost exception
currently active in that thread at the time the function is called.
If a thread is not currently handling an exception, it is not included in
the result dictionary.

这对于静态性能分析来说最为有用。

这个函数应该只在内部为了一些特定的目的使用。

audit-event:: sys._current_exceptions "" sys._current_exceptions

> *Changed in 3.12*: Each value in the dictionary is now a single exception instance, rather than a 3-tuple as returned from ``sys.exc_info()``.
