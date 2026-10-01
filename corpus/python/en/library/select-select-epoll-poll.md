---
id: "python-en-function-select-epoll-poll"
language: "python"
lang: "en"
category: "function"
name: "epoll.poll"
signature: "epoll.poll(timeout=None, maxevents=-1)"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.epoll.poll"
license: "PSF"
updated: "2026-10-01"
---

# epoll.poll

Wait for events.
If *timeout* is given, it specifies the length of time in seconds
(may be non-integer) which the system will wait for events before returning.

> *Changed in 3.5*: The function is now retried with a recomputed timeout when interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale), instead of raising :exc:`InterruptedError`.

> *Changed in 3.15*: Accepts any real number as *timeout*, not only integer or float.
