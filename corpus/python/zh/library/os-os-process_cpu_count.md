---
id: "python-zh-function-os-process_cpu_count"
language: "python"
lang: "zh"
category: "function"
name: "process_cpu_count"
signature: "process_cpu_count()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.process_cpu_count"
license: "PSF"
updated: "2026-10-01"
---

# process_cpu_count

Get the number of logical CPUs usable by the calling thread of the **current
process**. Returns `None` if undetermined. It can be less than
`cpu_count` depending on the CPU affinity.

The `cpu_count` function can be used to get the number of logical CPUs
in the **system**.

If `-X cpu_count` is given or `PYTHON_CPU_COUNT` is set,
`process_cpu_count` returns the override value *n*.

另请参阅 :func:`sched_getaffinity` 函数。

> *Added in 3.13*
