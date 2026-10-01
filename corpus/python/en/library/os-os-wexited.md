---
id: "python-en-function-os-wexited"
language: "python"
lang: "en"
category: "function"
name: "WEXITED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WEXITED"
license: "PSF"
updated: "2026-10-01"
---

# WEXITED

This *options* flag for `waitid` causes child processes that have terminated to
be reported.

The other `wait*` functions always report children that have terminated,
so this option is not available for them.

availability:: Unix, not WASI, not Android, not iOS.

> *Added in 3.3*
