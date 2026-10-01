---
id: "python-zh-function-multiprocessing-get_start_method"
language: "python"
lang: "zh"
category: "function"
name: "get_start_method"
signature: "get_start_method(allow_none=False)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.get_start_method"
license: "PSF"
updated: "2026-10-01"
---

# get_start_method

返回启动进程时使用的启动方法名。

If the global start method is not set and *allow_none* is `False`, the global start
method is set to the default, and its name is returned. See
`global-start-method` for more details.

The return value can be `'fork'`, `'spawn'`, `'forkserver'`
or `None`.  See `multiprocessing-start-methods`.

> *Added in 3.4*

> *Changed in 3.8*: On macOS, the *spawn* start method is now the default.  The *fork* start method should be considered unsafe as it can lead to crashes of the subprocess. See :issue:`33725`.
