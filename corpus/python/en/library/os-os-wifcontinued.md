---
id: "python-en-function-os-wifcontinued"
language: "python"
lang: "en"
category: "function"
name: "WIFCONTINUED"
signature: "WIFCONTINUED(status)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WIFCONTINUED"
license: "PSF"
updated: "2026-10-01"
---

# WIFCONTINUED

Return `True` if a stopped child has been resumed by delivery of
`~signal.SIGCONT` (if the process has been continued from a job
control stop), otherwise return `False`.

See `WCONTINUED` option.

availability:: Unix, not WASI, not Android, not iOS.
