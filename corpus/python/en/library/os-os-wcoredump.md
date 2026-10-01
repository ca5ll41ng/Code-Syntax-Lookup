---
id: "python-en-function-os-wcoredump"
language: "python"
lang: "en"
category: "function"
name: "WCOREDUMP"
signature: "WCOREDUMP(status, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WCOREDUMP"
license: "PSF"
updated: "2026-10-01"
---

# WCOREDUMP

Return `True` if a core dump was generated for the process, otherwise
return `False`.

This function should be employed only if `WIFSIGNALED` is true.

availability:: Unix, not WASI, not Android, not iOS.
