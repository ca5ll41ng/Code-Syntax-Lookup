---
id: "python-en-function-sched-scheduler-cancel"
language: "python"
lang: "en"
category: "function"
name: "scheduler.cancel"
signature: "scheduler.cancel(event)"
directive: "method"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler.cancel"
license: "PSF"
updated: "2026-10-01"
---

# scheduler.cancel

Remove the event from the queue. If *event* is not an event currently in the
queue, this method will raise a `ValueError`.
