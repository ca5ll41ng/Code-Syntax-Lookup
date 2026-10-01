---
id: "python-en-function-multiprocessing-log_to_stderr"
language: "python"
lang: "en"
category: "function"
name: "log_to_stderr"
signature: "log_to_stderr(level=None)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/3/library/multiprocessing.html#multiprocessing.log_to_stderr"
license: "PSF"
updated: "2026-10-01"
---

# log_to_stderr

This function performs a call to `get_logger` but in addition to
returning the logger created by get_logger, it adds a handler which sends
output to `sys.stderr` using format
`'[%(levelname)s/%(processName)s] %(message)s'`.
You can modify `levelname` of the logger by passing a `level` argument.
