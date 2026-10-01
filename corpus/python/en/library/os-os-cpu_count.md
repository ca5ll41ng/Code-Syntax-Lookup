---
id: "python-en-function-os-cpu_count"
language: "python"
lang: "en"
category: "function"
name: "cpu_count"
signature: "cpu_count()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.cpu_count"
license: "PSF"
updated: "2026-10-01"
---

# cpu_count

Return the number of logical CPUs in the **system**. Returns `None` if
undetermined.

The `process_cpu_count` function can be used to get the number of
logical CPUs usable by the calling thread of the **current process**.

> *Added in 3.4*

> *Changed in 3.13*: If :option:`-X cpu_count <-X>` is given or :envvar:`PYTHON_CPU_COUNT` is set, :func:`cpu_count` returns the override value *n*.
