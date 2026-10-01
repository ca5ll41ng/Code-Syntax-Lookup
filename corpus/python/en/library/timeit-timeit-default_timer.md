---
id: "python-en-function-timeit-default_timer"
language: "python"
lang: "en"
category: "function"
name: "default_timer"
signature: "default_timer()"
directive: "function"
module: "timeit"
source_url: "https://docs.python.org/3/library/timeit.html#timeit.default_timer"
license: "PSF"
updated: "2026-10-01"
---

# default_timer

The default timer, which is always time.perf_counter(), returns float seconds.
An alternative, time.perf_counter_ns, returns integer nanoseconds.

> *Changed in 3.3*: :func:`time.perf_counter` is now the default timer.
