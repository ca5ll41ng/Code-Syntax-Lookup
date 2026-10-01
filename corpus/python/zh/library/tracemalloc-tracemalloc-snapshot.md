---
id: "python-zh-function-tracemalloc-snapshot"
language: "python"
lang: "zh"
category: "function"
name: "Snapshot"
directive: "class"
module: "tracemalloc"
source_url: "https://docs.python.org/zh-cn/3/library/tracemalloc.html#tracemalloc.Snapshot"
license: "PSF"
updated: "2026-10-01"
---

# Snapshot

由 Python 分配的内存块的追踪的快照。

:func:`take_snapshot` 函数创建一个快照实例。

method:: compare_to(old_snapshot: Snapshot, key_type: str, cumulative: bool=False)

method:: dump(filename)

method:: filter_traces(filters)

classmethod:: load(filename)

method:: statistics(key_type: str, cumulative: bool=False)

attribute:: traceback_limit

attribute:: traces
