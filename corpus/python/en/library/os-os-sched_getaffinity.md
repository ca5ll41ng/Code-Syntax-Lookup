---
id: "python-en-function-os-sched_getaffinity"
language: "python"
lang: "en"
category: "function"
name: "sched_getaffinity"
signature: "sched_getaffinity(pid, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sched_getaffinity"
license: "PSF"
updated: "2026-10-01"
---

# sched_getaffinity

Return the set of CPUs the process with PID *pid* is restricted to.

If *pid* is zero, return the set of CPUs the calling thread of the current
process is restricted to.

See also the `process_cpu_count` function.
