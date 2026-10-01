---
id: "python-en-function-signal-siginterrupt"
language: "python"
lang: "en"
category: "function"
name: "siginterrupt"
signature: "siginterrupt(signalnum, flag)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.siginterrupt"
license: "PSF"
updated: "2026-10-01"
---

# siginterrupt

Change system call restart behaviour: if *flag* is `False`, system
calls will be restarted when interrupted by signal *signalnum*, otherwise
system calls will be interrupted.  Returns nothing.

availability:: Unix.

Note that installing a signal handler with `signal` will reset the
restart behaviour to interruptible by implicitly calling
:c`siginterrupt` with a true *flag* value for the given signal.
