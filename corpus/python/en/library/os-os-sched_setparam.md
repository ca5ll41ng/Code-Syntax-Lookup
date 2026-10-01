---
id: "python-en-function-os-sched_setparam"
language: "python"
lang: "en"
category: "function"
name: "sched_setparam"
signature: "sched_setparam(pid, param, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sched_setparam"
license: "PSF"
updated: "2026-10-01"
---

# sched_setparam

Set the scheduling parameters for the process with PID *pid*. A *pid* of 0 means
the calling process. *param* is a `sched_param` instance.
