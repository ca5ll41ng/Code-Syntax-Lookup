---
id: "python-en-function-os-getpgid"
language: "python"
lang: "en"
category: "function"
name: "getpgid"
signature: "getpgid(pid)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getpgid"
license: "PSF"
updated: "2026-10-01"
---

# getpgid

Return the process group id of the process with process id *pid*. If *pid* is 0,
the process group id of the current process is returned.

availability:: Unix, not WASI.
