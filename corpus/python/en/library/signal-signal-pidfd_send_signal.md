---
id: "python-en-function-signal-pidfd_send_signal"
language: "python"
lang: "en"
category: "function"
name: "pidfd_send_signal"
signature: "pidfd_send_signal(pidfd, sig, siginfo=None, flags=0)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.pidfd_send_signal"
license: "PSF"
updated: "2026-10-01"
---

# pidfd_send_signal

Send signal *sig* to the process referred to by file descriptor *pidfd*.
Python does not currently support the *siginfo* parameter; it must be
`None`.  The *flags* argument is provided for future extensions; no flag
values are currently defined.

See the `pidfd_send_signal(2)` man page for more information.

availability:: Linux >= 5.1, Android >= `build-time` API level 31

> *Added in 3.9*
