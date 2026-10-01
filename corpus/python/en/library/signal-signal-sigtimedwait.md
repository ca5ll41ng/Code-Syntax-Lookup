---
id: "python-en-function-signal-sigtimedwait"
language: "python"
lang: "en"
category: "function"
name: "sigtimedwait"
signature: "sigtimedwait(sigset, timeout)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.sigtimedwait"
license: "PSF"
updated: "2026-10-01"
---

# sigtimedwait

Like `sigwaitinfo`, but takes an additional *timeout* argument
specifying a timeout. If *timeout* is specified as `0`, a poll is
performed. Returns `None` if a timeout occurs.

availability:: Unix.

See also `pause`, `sigwait` and `sigwaitinfo`.

> *Added in 3.3*

> *Changed in 3.5*: The function is now retried with the recomputed *timeout* if interrupted by a signal not in *sigset* and the signal handler does not raise an exception (see :pep:`475` for the rationale).

> *Changed in 3.15*: Accepts any real number as *timeout*, not only integer or float.
