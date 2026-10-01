---
id: "python-en-function-sched-scheduler-queue"
language: "python"
lang: "en"
category: "function"
name: "scheduler.queue"
directive: "attribute"
module: "sched"
source_url: "https://docs.python.org/3/library/sched.html#sched.scheduler.queue"
license: "PSF"
updated: "2026-10-01"
---

# scheduler.queue

Read-only attribute returning a list of upcoming events in the order they
will be run.  Each event is shown as a `named tuple` with the
following fields:  time, priority, action, argument, kwargs.
