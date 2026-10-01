---
id: "python-en-function-tracemalloc-snapshot"
language: "python"
lang: "en"
category: "function"
name: "Snapshot"
directive: "class"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.Snapshot"
license: "PSF"
updated: "2026-10-01"
---

# Snapshot

Snapshot of traces of memory blocks allocated by Python.

The `take_snapshot` function creates a snapshot instance.

method:: compare_to(old_snapshot: Snapshot, key_type: str, cumulative: bool=False)

method:: dump(filename)

method:: filter_traces(filters)

classmethod:: load(filename)

method:: statistics(key_type: str, cumulative: bool=False)

attribute:: traceback_limit

attribute:: traces
