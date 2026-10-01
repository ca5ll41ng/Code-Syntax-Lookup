---
id: "python-en-function-os-pidfd_open"
language: "python"
lang: "en"
category: "function"
name: "pidfd_open"
signature: "pidfd_open(pid, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pidfd_open"
license: "PSF"
updated: "2026-10-01"
---

# pidfd_open

Return a file descriptor referring to the process *pid* with *flags* set.
This descriptor can be used to perform process management without races
and signals.

See the `pidfd_open(2)` man page for more details.

availability:: Linux >= 5.3, Android >= `build-time` API level 31

> *Added in 3.9*

data:: PIDFD_NONBLOCK

availability:: Linux >= 5.10

> *Added in 3.12*
