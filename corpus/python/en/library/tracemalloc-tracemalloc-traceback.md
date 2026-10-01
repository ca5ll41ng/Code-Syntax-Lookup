---
id: "python-en-function-tracemalloc-traceback"
language: "python"
lang: "en"
category: "function"
name: "Traceback"
directive: "class"
module: "tracemalloc"
source_url: "https://docs.python.org/3/library/tracemalloc.html#tracemalloc.Traceback"
license: "PSF"
updated: "2026-10-01"
---

# Traceback

Sequence of `Frame` instances sorted from the oldest frame to the
most recent frame.

A traceback contains at least `1` frame. If the `tracemalloc` module
failed to get a frame, the filename `"<unknown>"` at line number `0` is
used.

When a snapshot is taken, tracebacks of traces are limited to
`get_traceback_limit` frames. See the `take_snapshot` function.
The original number of frames of the traceback is stored in the
`Traceback.total_nframe` attribute. That allows one to know if a traceback
has been truncated by the traceback limit.

The `Trace.traceback` attribute is a `Traceback` instance.

> *Changed in 3.7*: Frames are now sorted from the oldest to the most recent, instead of most recent to oldest.

attribute:: total_nframe

> *Changed in 3.9*: The :attr:`Traceback.total_nframe` attribute was added.

method:: format(limit=None, most_recent_first=False)
