---
id: "python-en-function-signal-itimer_prof"
language: "python"
lang: "en"
category: "function"
name: "ITIMER_PROF"
directive: "data"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.ITIMER_PROF"
license: "PSF"
updated: "2026-10-01"
---

# ITIMER_PROF

Decrements interval timer both when the process executes and when the
system is executing on behalf of the process. Coupled with ITIMER_VIRTUAL,
this timer is usually used to profile the time spent by the application
in user and kernel space. SIGPROF is delivered upon expiration.
