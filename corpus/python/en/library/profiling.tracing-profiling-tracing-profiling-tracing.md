---
id: "python-en-function-profiling-tracing-profiling-tracing"
language: "python"
lang: "en"
category: "function"
name: "profiling.tracing"
title: "Profiling requires that the profiled code returns normally. If the"
directive: "module"
module: "profiling.tracing"
source_url: "https://docs.python.org/3/library/profiling.tracing.html#module-profiling.tracing"
license: "PSF"
updated: "2026-10-01"
---

# Profiling requires that the profiled code returns normally. If the

> **Note**
>
> Profiling requires that the profiled code returns normally. If the
> interpreter terminates (for example, via `sys.exit`) during
> profiling, no results will be available.
>

**Using a custom timer**

The `Profile` class accepts a custom timing function, allowing you to
measure different aspects of execution such as wall-clock time or CPU time.
Pass the timing function to the constructor::

   pr = profiling.tracing.Profile(my_timer_function)

The timer function must return a single number representing the current time.
If it returns integers, also specify *timeunit* to indicate the duration of
one unit::

   # Timer returns time in milliseconds
   pr = profiling.tracing.Profile(my_ms_timer, 0.001)

For best performance, the timer function should be as fast as possible. The
profiler calls it frequently, so timer overhead directly affects profiling
overhead.

The `time` module provides several functions suitable for use as custom
timers:

- `time.perf_counter` for high-resolution wall-clock time
- `time.process_time` for CPU time (excluding sleep)
- `time.monotonic` for monotonic clock time

**Limitations**

Deterministic profiling has inherent limitations related to timing accuracy.

The underlying timer typically has a resolution of about one millisecond.
Measurements cannot be more accurate than this resolution. With enough
measurements, timing errors tend to average out, but individual measurements
may be imprecise.

There is also latency between when an event occurs and when the profiler
captures the timestamp. Similarly, there is latency after reading the
timestamp before user code resumes. Functions called frequently accumulate
this latency, which can make them appear slower than they actually are. This
error is typically less than one clock tick per call but can become
significant for functions called many times.

The `profiling.tracing` module (and its `cProfile` alias) is
implemented as a C extension with low overhead, so these timing issues are
less pronounced than with the deprecated pure Python `profile` module.

> **Seealso**
>
> `profiling`
>    Overview of Python profiling tools and guidance on choosing a profiler.
>
> `profiling.sampling`
>    Statistical sampling profiler for production use.
>
> `pstats`
>    Statistics analysis and formatting for profile data.
>
> `profile`
>    Deprecated pure Python profiler (includes calibration documentation).
>
