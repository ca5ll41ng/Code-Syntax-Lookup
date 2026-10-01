---
id: "python-en-function-os-wtermsig"
language: "python"
lang: "en"
category: "function"
name: "WTERMSIG"
signature: "WTERMSIG(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WTERMSIG"
license: "PSF"
updated: "2026-10-01"
---

# WTERMSIG

Return the number of the signal that caused the process to terminate.

This function should be employed only if `WIFSIGNALED` is true.

availability:: Unix, not WASI, not Android, not iOS.
