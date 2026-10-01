---
id: "python-en-function-os-sched_setscheduler"
language: "python"
lang: "en"
category: "function"
name: "sched_setscheduler"
signature: "sched_setscheduler(pid, policy, param, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sched_setscheduler"
license: "PSF"
updated: "2026-10-01"
---

# sched_setscheduler

Set the scheduling policy for the process with PID *pid*. A *pid* of 0 means
the calling process. *policy* is one of the scheduling policy constants
above. *param* is a `sched_param` instance.
