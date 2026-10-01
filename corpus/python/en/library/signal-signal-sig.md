---
id: "python-en-function-signal-sig"
language: "python"
lang: "en"
category: "function"
name: "SIG*"
directive: "data"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.SIG*"
license: "PSF"
updated: "2026-10-01"
---

# SIG*

All the signal numbers are defined symbolically.  For example, the hangup signal
is defined as `signal.SIGHUP`; the variable names are identical to the
names used in C programs, as found in `<signal.h>`.  The Unix man page for
'`signal`' lists the existing signals (on some systems this is
`signal(2)`, on others the list is in `signal(7)`). Note that
not all systems define the same set of signal names; only those names defined by
the system are defined by this module.
