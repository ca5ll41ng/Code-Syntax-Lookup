---
id: "python-zh-function-multiprocessing-cpu_count"
language: "python"
lang: "zh"
category: "function"
name: "cpu_count"
signature: "cpu_count()"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.cpu_count"
license: "PSF"
updated: "2026-10-01"
---

# cpu_count

返回系统的CPU数量。

This number is not equivalent to the number of CPUs the current process can
use.  The number of usable CPUs can be obtained with
`os.process_cpu_count` (or `len(os.sched_getaffinity(0))`).

When the number of CPUs cannot be determined a `NotImplementedError`
is raised.

> **Seealso**
>
> `os.cpu_count`
> `os.process_cpu_count`
>

> *Changed in 3.13*: The return value can also be overridden using the :option:`-X cpu_count <-X>` flag or :envvar:`PYTHON_CPU_COUNT` as this is merely a wrapper around the :mod:`os` cpu count APIs.
