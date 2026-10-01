---
id: "python-en-function-profiling-tracing-profile"
language: "python"
lang: "en"
category: "function"
name: "Profile"
signature: "Profile(timer=None, timeunit=0.0, subcalls=True, builtins=True)"
directive: "class"
module: "profiling.tracing"
source_url: "https://docs.python.org/3/library/profiling.tracing.html#profiling.tracing.Profile"
license: "PSF"
updated: "2026-10-01"
---

# Profile

A profiler object that collects execution statistics.

The optional *timer* argument specifies a custom timing function. If not
provided, the profiler uses a platform-appropriate default timer. When
supplying a custom timer, it must return a single number representing the
current time. If the timer returns integers, use *timeunit* to specify the
duration of one time unit (for example, `0.001` for milliseconds).

The *subcalls* argument controls whether the profiler tracks call
relationships between functions. The *builtins* argument controls whether
built-in functions are profiled.

> *Changed in 3.8*: Added context manager support.

method:: enable()

method:: disable()

method:: create_stats()

method:: print_stats(sort=-1)

method:: dump_stats(filename)

method:: run(cmd)

method:: runctx(cmd, globals, locals)

method:: runcall(func, /, *args, **kwargs)
