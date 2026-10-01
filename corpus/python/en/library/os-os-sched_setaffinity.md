---
id: "python-en-function-os-sched_setaffinity"
language: "python"
lang: "en"
category: "function"
name: "sched_setaffinity"
signature: "sched_setaffinity(pid, mask, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sched_setaffinity"
license: "PSF"
updated: "2026-10-01"
---

# sched_setaffinity

Restrict the process with PID *pid* (or the current process if zero) to a
set of CPUs.  *mask* is an iterable of integers representing the set of
CPUs to which the process should be restricted.
