---
id: "python-en-function-pstats-stats"
language: "python"
lang: "en"
category: "function"
name: "Stats"
signature: "Stats(*filenames_or_profile, stream=sys.stdout)"
directive: "class"
module: "pstats"
source_url: "https://docs.python.org/3/library/pstats.html#pstats.Stats"
license: "PSF"
updated: "2026-10-01"
---

# Stats

Create a statistics object from profile data.

The arguments can be filenames (strings or path-like objects) or
`~profiling.tracing.Profile` objects. If multiple sources are
provided, their statistics are combined.

The *stream* argument specifies where output from `print_stats` and
related methods is written. It defaults to `sys.stdout`.

The profile data format is specific to the Python version that created it.
There is no compatibility guarantee between Python versions or between
different profilers.

method:: strip_dirs()

method:: add(*filenames)

method:: dump_stats(filename)

method:: sort_stats(*keys)

method:: reverse_order()

method:: print_stats(*restrictions)

method:: print_callers(*restrictions)

method:: print_callees(*restrictions)

method:: get_stats_profile()
