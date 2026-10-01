---
id: "python-en-function-signal-getsignal"
language: "python"
lang: "en"
category: "function"
name: "getsignal"
signature: "getsignal(signalnum)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.getsignal"
license: "PSF"
updated: "2026-10-01"
---

# getsignal

Return the current signal handler for the signal *signalnum*. The returned value
may be a callable Python object, or one of the special values
`signal.SIG_IGN`, `signal.SIG_DFL` or `None`.  Here,
`signal.SIG_IGN` means that the signal was previously ignored,
`signal.SIG_DFL` means that the default way of handling the signal was
previously in use, and `None` means that the previous signal handler was not
installed from Python.
