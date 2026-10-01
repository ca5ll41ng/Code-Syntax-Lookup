---
id: "python-en-function-tracemalloc-stop"
language: "python"
lang: "en"
category: "function"
name: "stop"
signature: "stop()"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.stop"
license: "PSF"
updated: "2026-10-01"
---

# stop

Stop tracing Python memory allocations: uninstall hooks on Python memory
allocators. Also clears all previously collected traces of memory blocks
allocated by Python.

Call `take_snapshot` function to take a snapshot of traces before
clearing them.

See also `start`, `is_tracing` and `clear_traces`
functions.
