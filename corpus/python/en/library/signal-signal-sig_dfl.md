---
id: "python-en-function-signal-sig_dfl"
language: "python"
lang: "en"
category: "function"
name: "SIG_DFL"
directive: "data"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.SIG_DFL"
license: "PSF"
updated: "2026-10-01"
---

# SIG_DFL

This is one of two standard signal handling options; it will simply perform
the default function for the signal.  For example, on most systems the
default action for `SIGQUIT` is to dump core and exit, while the
default action for `SIGCHLD` is to simply ignore it.
