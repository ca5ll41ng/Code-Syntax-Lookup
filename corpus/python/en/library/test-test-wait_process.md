---
id: "python-en-function-test-wait_process"
language: "python"
lang: "en"
category: "function"
name: "wait_process"
signature: "wait_process(pid, *, exitcode, timeout=None)"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.wait_process"
license: "PSF"
updated: "2026-10-01"
---

# wait_process

Wait until process *pid* completes and check that the process exit code is
*exitcode*.

Raise an `AssertionError` if the process exit code is not equal to
*exitcode*.

If the process runs longer than *timeout* seconds (`SHORT_TIMEOUT` by
default), kill the process and raise an `AssertionError`. The timeout
feature is not available on Windows.

> *Added in 3.9*
