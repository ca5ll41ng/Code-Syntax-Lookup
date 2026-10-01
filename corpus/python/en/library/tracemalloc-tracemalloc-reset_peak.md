---
id: "python-en-function-tracemalloc-reset_peak"
language: "python"
lang: "en"
category: "function"
name: "reset_peak"
signature: "reset_peak()"
directive: "function"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.reset_peak"
license: "PSF"
updated: "2026-10-01"
---

# reset_peak

Set the peak size of memory blocks traced by the `tracemalloc` module
to the current size.

Do nothing if the `tracemalloc` module is not tracing memory
allocations.

This function only modifies the recorded peak size, and does not modify or
clear any traces, unlike `clear_traces`. Snapshots taken with
`take_snapshot` before a call to `reset_peak` can be
meaningfully compared to snapshots taken after the call.

See also `get_traced_memory`.

> *Added in 3.9*
