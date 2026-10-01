---
id: "python-en-function-signal-alarm"
language: "python"
lang: "en"
category: "function"
name: "alarm"
signature: "alarm(time)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/3/library/signal.html#signal.alarm"
license: "PSF"
updated: "2026-10-01"
---

# alarm

If *time* is non-zero, this function requests that a `SIGALRM` signal be
sent to the process in *time* seconds. Any previously scheduled alarm is
canceled (only one alarm can be scheduled at any time).  The returned value is
then the number of seconds before any previously set alarm was to have been
delivered. If *time* is zero, no alarm is scheduled, and any scheduled alarm is
canceled.  If the return value is zero, no alarm is currently scheduled.

availability:: Unix.
