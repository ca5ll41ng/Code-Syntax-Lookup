---
id: "python-en-function-select-devpoll-poll"
language: "python"
lang: "en"
category: "function"
name: "devpoll.poll"
signature: "devpoll.poll([timeout])"
directive: "method"
module: "select"
source_url: "https://docs.python.org/3/library/select.html#select.devpoll.poll"
license: "PSF"
updated: "2026-10-01"
---

# devpoll.poll

Polls the set of registered file descriptors, and returns a possibly empty list
containing `(fd, event)` 2-tuples for the descriptors that have events or
errors to report. *fd* is the file descriptor, and *event* is a bitmask with
bits set for the reported events for that descriptor --- `POLLIN` for
waiting input, `POLLOUT` to indicate that the descriptor can be written
to, and so forth. An empty list indicates that the call timed out and no file
descriptors had any events to report. If *timeout* is given, it specifies the
length of time in milliseconds which the system will wait for events before
returning. If *timeout* is omitted, -1, or `None`, the call will
block until there is an event for this poll object.

> *Changed in 3.5*: The function is now retried with a recomputed timeout when interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale), instead of raising :exc:`InterruptedError`.

> *Changed in 3.15*: Accepts any real number as *timeout*, not only integer or float.
