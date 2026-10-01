---
id: "python-en-function-resource-rlimit_cpu"
language: "python"
lang: "en"
category: "function"
name: "RLIMIT_CPU"
directive: "data"
module: "resource"
source_url: "https://docs.python.org/3/library/resource.html#resource.RLIMIT_CPU"
license: "PSF"
updated: "2026-10-01"
---

# RLIMIT_CPU

The maximum amount of processor time (in seconds) that a process can use. If
this limit is exceeded, a `~signal.SIGXCPU` signal is sent to the process. (See
the `signal` module documentation for information about how to catch this
signal and do something useful, e.g. flush open files to disk.)
