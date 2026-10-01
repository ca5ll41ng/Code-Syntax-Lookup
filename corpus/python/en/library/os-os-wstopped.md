---
id: "python-en-function-os-wstopped"
language: "python"
lang: "en"
category: "function"
name: "WSTOPPED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WSTOPPED"
license: "PSF"
updated: "2026-10-01"
---

# WSTOPPED

This *options* flag for `waitid` causes child processes that have been stopped
by the delivery of a signal to be reported.

This option is not available for the other `wait*` functions.

availability:: Unix, not WASI, not Android, not iOS.

> *Added in 3.3*
