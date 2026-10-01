---
id: "python-en-function-os-p_all"
language: "python"
lang: "en"
category: "function"
name: "P_ALL"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.P_ALL"
license: "PSF"
updated: "2026-10-01"
---

# P_ALL

These are the possible values for *idtype* in `waitid`. They affect
how *id* is interpreted:

* `P_PID` - wait for the child whose PID is *id*.
* `P_PGID` - wait for any child whose progress group ID is *id*.
* `P_ALL` - wait for any child; *id* is ignored.
* `P_PIDFD` - wait for the child identified by the file descriptor
  *id* (a process file descriptor created with `pidfd_open`).

availability:: Unix, not WASI, not Android, not iOS.

> **Note**
>
>

> *Added in 3.3*

> *Added in 3.9*: The :data:`!P_PIDFD` constant.
