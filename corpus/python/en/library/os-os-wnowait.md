---
id: "python-en-function-os-wnowait"
language: "python"
lang: "en"
category: "function"
name: "WNOWAIT"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WNOWAIT"
license: "PSF"
updated: "2026-10-01"
---

# WNOWAIT

This *options* flag causes `waitid` to leave the child in a waitable state, so that
a later `wait*` call can be used to retrieve the child status information again.

This option is not available for the other `wait*` functions.

availability:: Unix, not WASI, not Android, not iOS.
