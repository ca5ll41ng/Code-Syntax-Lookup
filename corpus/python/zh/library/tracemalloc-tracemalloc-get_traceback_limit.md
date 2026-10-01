---
id: "python-zh-function-tracemalloc-get_traceback_limit"
language: "python"
lang: "zh"
category: "function"
name: "get_traceback_limit"
signature: "get_traceback_limit()"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/zh-cn/3/library/tracemalloc.html#tracemalloc.get_traceback_limit"
license: "PSF"
updated: "2026-10-01"
---

# get_traceback_limit

获取保存在一个追踪的回溯中的最大帧数。

The `tracemalloc` module must be tracing memory allocations to
get the limit, otherwise an exception is raised.

该限制是由 :func:`start` 函数设置的。
