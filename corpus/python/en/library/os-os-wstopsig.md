---
id: "python-en-function-os-wstopsig"
language: "python"
lang: "en"
category: "function"
name: "WSTOPSIG"
signature: "WSTOPSIG(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WSTOPSIG"
license: "PSF"
updated: "2026-10-01"
---

# WSTOPSIG

Return the signal which caused the process to stop.

This function should be employed only if `WIFSTOPPED` is true.

availability:: Unix, not WASI, not Android, not iOS.
