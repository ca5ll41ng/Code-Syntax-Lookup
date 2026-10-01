---
id: "python-en-function-builtins-brokenpipeerror"
language: "python"
lang: "en"
category: "function"
name: "BrokenPipeError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#BrokenPipeError"
license: "PSF"
updated: "2026-10-01"
---

# BrokenPipeError

A subclass of `ConnectionError`, raised when trying to write on a
pipe while the other end has been closed, or trying to write on a socket
which has been shutdown for writing.
Corresponds to :c`errno` :py`~errno.EPIPE` and :py`~errno.ESHUTDOWN`.
