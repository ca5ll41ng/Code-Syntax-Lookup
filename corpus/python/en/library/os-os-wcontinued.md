---
id: "python-en-function-os-wcontinued"
language: "python"
lang: "en"
category: "function"
name: "WCONTINUED"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.WCONTINUED"
license: "PSF"
updated: "2026-10-01"
---

# WCONTINUED

This *options* flag for `waitpid`, `wait3`, `wait4`, and
`waitid` causes child processes to be reported if they have been
continued from a job control stop since they were last reported.

availability:: Unix, not WASI, not Android, not iOS.
