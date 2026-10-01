---
id: "python-en-function-select-kqueue-control-changelist-max_events-timeout-eventlist"
language: "python"
lang: "en"
category: "function"
name: "kqueue.control(changelist, max_events[, timeout]) -> eventlist"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.kqueue.control(changelist, max_events[, timeout]) -> eventlist"
license: "PSF"
updated: "2026-10-01"
---

# kqueue.control(changelist, max_events[, timeout]) -> eventlist

Low level interface to kevent

- changelist must be an iterable of kevent objects or `None`
- max_events must be 0 or a positive integer
- timeout in seconds (non-integers are possible); the default is `None`,
  to wait forever

> *Changed in 3.5*: The function is now retried with a recomputed timeout when interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale), instead of raising :exc:`InterruptedError`.

> *Changed in 3.15*: Accepts any real number as *timeout*, not only integer or float.
