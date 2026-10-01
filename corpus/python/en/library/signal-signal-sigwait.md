---
id: "python-en-function-signal-sigwait"
language: "python"
lang: "en"
category: "function"
name: "sigwait"
signature: "sigwait(sigset)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.sigwait"
license: "PSF"
updated: "2026-10-01"
---

# sigwait

Suspend execution of the calling thread until the delivery of one of the
signals specified in the signal set *sigset*.  The function accepts the signal
(removes it from the pending list of signals), and returns the signal number.

availability:: Unix.

See also `pause`, `pthread_sigmask`, `sigpending`,
`sigwaitinfo` and `sigtimedwait`.

> *Added in 3.3*
