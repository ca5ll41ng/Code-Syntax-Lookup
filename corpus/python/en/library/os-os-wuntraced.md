---
id: "python-en-function-os-wuntraced"
language: "python"
lang: "en"
category: "function"
name: "WUNTRACED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WUNTRACED"
license: "PSF"
updated: "2026-10-01"
---

# WUNTRACED

This *options* flag for `waitpid`, `wait3`, and `wait4` causes
child processes to also be reported if they have been stopped but their
current state has not been reported since they were stopped.

This option is not available for `waitid`.

availability:: Unix, not WASI, not Android, not iOS.
