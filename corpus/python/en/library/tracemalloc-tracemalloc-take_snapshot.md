---
id: "python-en-function-tracemalloc-take_snapshot"
language: "python"
lang: "en"
category: "function"
name: "take_snapshot"
signature: "take_snapshot()"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.take_snapshot"
license: "PSF"
updated: "2026-10-01"
---

# take_snapshot

Take a snapshot of traces of memory blocks allocated by Python. Return a new
`Snapshot` instance.

The snapshot does not include memory blocks allocated before the
`tracemalloc` module started to trace memory allocations.

Tracebacks of traces are limited to `get_traceback_limit` frames. Use
the *nframe* parameter of the `start` function to store more frames.

The `tracemalloc` module must be tracing memory allocations to take a
snapshot, see the `start` function.

See also the `get_object_traceback` function.
