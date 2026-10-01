---
id: "python-zh-function-multiprocessing-active_children"
language: "python"
lang: "zh"
category: "function"
name: "active_children"
signature: "active_children()"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.active_children"
license: "PSF"
updated: "2026-10-01"
---

# active_children

返回当前进程存活的子进程的列表。

Calling this has the side effect of "joining" any processes which have
already finished.
