---
id: "python-en-function-sched-scheduler"
language: "python"
lang: "en"
category: "function"
name: "scheduler"
signature: "scheduler(timefunc=time.monotonic, delayfunc=time.sleep)"
directive: "class"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler"
license: "PSF"
updated: "2026-10-01"
---

# scheduler

The `scheduler` class defines a generic interface to scheduling events.
It needs two functions to actually deal with the "outside world" --- *timefunc*
should be callable without arguments, and return  a number (the "time", in any
units whatsoever).  The *delayfunc* function should be callable with one
argument, compatible with the output of *timefunc*, and should delay that many
time units. *delayfunc* will also be called with the argument `0` after each
event is run to allow other threads an opportunity to run in multi-threaded
applications.

> *Changed in 3.3*: *timefunc* and *delayfunc* parameters are optional.

> *Changed in 3.3*: :class:`scheduler` class can be safely used in multi-threaded environments.
