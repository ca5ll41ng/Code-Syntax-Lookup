---
id: "python-en-function-tracemalloc-start"
language: "python"
lang: "en"
category: "function"
name: "start"
signature: "start(nframe: int=1)"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.start"
license: "PSF"
updated: "2026-10-01"
---

# start

Start tracing Python memory allocations: install hooks on Python memory
allocators. Collected tracebacks of traces will be limited to *nframe*
frames. By default, a trace of a memory block only stores the most recent
frame: the limit is `1`. *nframe* must be greater or equal to `1`.

You can still read the original number of total frames that composed the
traceback by looking at the `Traceback.total_nframe` attribute.

Storing more than `1` frame is only useful to compute statistics grouped
by `'traceback'` or to compute cumulative statistics: see the
`Snapshot.compare_to` and `Snapshot.statistics` methods.

Storing more frames increases the memory and CPU overhead of the
`tracemalloc` module. Use the `get_tracemalloc_memory` function
to measure how much memory is used by the `tracemalloc` module.

The `PYTHONTRACEMALLOC` environment variable
(`PYTHONTRACEMALLOC=NFRAME`) and the `-X` `tracemalloc=NFRAME`
command line option can be used to start tracing at startup.

See also `stop`, `is_tracing` and `get_traceback_limit`
functions.
