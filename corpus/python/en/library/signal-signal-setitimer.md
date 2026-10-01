---
id: "python-en-function-signal-setitimer"
language: "python"
lang: "en"
category: "function"
name: "setitimer"
signature: "setitimer(which, seconds, interval=0)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.setitimer"
license: "PSF"
updated: "2026-10-01"
---

# setitimer

Sets given interval timer (one of `signal.ITIMER_REAL`,
`signal.ITIMER_VIRTUAL` or `signal.ITIMER_PROF`) specified
by *which* to fire after *seconds* (rounded up to microseconds, different from
`alarm`) and after that every *interval* seconds (if *interval*
is non-zero). The interval timer specified by *which* can be cleared by
setting *seconds* to zero.

When an interval timer fires, a signal is sent to the process.
The signal sent is dependent on the timer being used;
`signal.ITIMER_REAL` will deliver `SIGALRM`,
`signal.ITIMER_VIRTUAL` sends `SIGVTALRM`,
and `signal.ITIMER_PROF` will deliver `SIGPROF`.

The old values are returned as a two-tuple of floats:
(`delay`, `interval`).

Attempting to pass an invalid interval timer will cause an
`ItimerError`.

availability:: Unix.

> *Changed in 3.15*: Accepts any real numbers as *seconds* and *interval*, not only integers or floats.
