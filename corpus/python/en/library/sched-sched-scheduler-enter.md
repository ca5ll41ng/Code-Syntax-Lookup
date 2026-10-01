---
id: "python-en-function-sched-scheduler-enter"
language: "python"
lang: "en"
category: "function"
name: "scheduler.enter"
signature: "scheduler.enter(delay, priority, action, argument=(), kwargs={})"
directive: "method"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler.enter"
license: "PSF"
updated: "2026-10-01"
---

# scheduler.enter

Schedule an event for *delay* more time units. Other than the relative time, the
other arguments, the effect and the return value are the same as those for
`enterabs`.

> *Changed in 3.3*: *argument* parameter is optional.

> *Changed in 3.3*: *kwargs* parameter was added.
