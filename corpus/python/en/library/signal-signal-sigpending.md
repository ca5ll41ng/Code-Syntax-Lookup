---
id: "python-en-function-signal-sigpending"
language: "python"
lang: "en"
category: "function"
name: "sigpending"
signature: "sigpending()"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.sigpending"
license: "PSF"
updated: "2026-10-01"
---

# sigpending

Examine the set of signals that are pending for delivery to the calling
thread (i.e., the signals which have been raised while blocked).  Return the
set of the pending signals.

availability:: Unix.

See also `pause`, `pthread_sigmask` and `sigwait`.

> *Added in 3.3*
