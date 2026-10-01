---
id: "python-en-function-os-setpgid"
language: "python"
lang: "en"
category: "function"
name: "setpgid"
signature: "setpgid(pid, pgrp, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setpgid"
license: "PSF"
updated: "2026-10-01"
---

# setpgid

Call the system call :c`setpgid` to set the process group id of the
process with id *pid* to the process group with id *pgrp*.  See the Unix manual
for the semantics.

availability:: Unix, not WASI.
