---
id: "python-zh-function-os-sched_getaffinity"
language: "python"
lang: "zh"
category: "function"
name: "sched_getaffinity"
signature: "sched_getaffinity(pid, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.sched_getaffinity"
license: "PSF"
updated: "2026-10-01"
---

# sched_getaffinity

返回 PID 为 *pid* 的进程被限制到的那一组 CPU。

If *pid* is zero, return the set of CPUs the calling thread of the current
process is restricted to.

另请参阅 :func:`process_cpu_count` 函数。
