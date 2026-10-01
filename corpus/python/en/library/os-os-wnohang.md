---
id: "python-en-function-os-wnohang"
language: "python"
lang: "en"
category: "function"
name: "WNOHANG"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WNOHANG"
license: "PSF"
updated: "2026-10-01"
---

# WNOHANG

This *options* flag causes `waitpid`, `wait3`, `wait4`, and
`waitid` to return right away if no child process status is available
immediately.

availability:: Unix, not WASI, not Android, not iOS.
