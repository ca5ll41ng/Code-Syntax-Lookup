---
id: "python-en-function-builtins-interruptederror"
language: "python"
lang: "en"
category: "function"
name: "InterruptedError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#InterruptedError"
license: "PSF"
updated: "2026-10-01"
---

# InterruptedError

Raised when a system call is interrupted by an incoming signal.
Corresponds to :c`errno` :py`~errno.EINTR`.

> *Changed in 3.5*: Python now retries system calls when a syscall is interrupted by a signal, except if the signal handler raises an exception (see :pep:`475` for the rationale), instead of raising :exc:`InterruptedError`.
