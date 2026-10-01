---
id: "python-en-function-signal-pthread_sigmask"
language: "python"
lang: "en"
category: "function"
name: "pthread_sigmask"
signature: "pthread_sigmask(how, mask)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.pthread_sigmask"
license: "PSF"
updated: "2026-10-01"
---

# pthread_sigmask

Fetch and/or change the signal mask of the calling thread.  The signal mask
is the set of signals whose delivery is currently blocked for the caller.
Return the old signal mask as a set of signals.

The behavior of the call is dependent on the value of *how*, as follows.

* `SIG_BLOCK`: The set of blocked signals is the union of the current
  set and the *mask* argument.
* `SIG_UNBLOCK`: The signals in *mask* are removed from the current
  set of blocked signals.  It is permissible to attempt to unblock a
  signal which is not blocked.
* `SIG_SETMASK`: The set of blocked signals is set to the *mask*
  argument.

*mask* is a set of signal numbers (e.g. {`signal.SIGINT`,
`signal.SIGTERM`}). Use `~signal.valid_signals` for a full
mask including all signals.

For example, `signal.pthread_sigmask(signal.SIG_BLOCK, [])` reads the
signal mask of the calling thread.

`SIGKILL` and `SIGSTOP` cannot be blocked.

availability:: Unix.

See also `pause`, `sigpending` and `sigwait`.

> *Added in 3.3*
