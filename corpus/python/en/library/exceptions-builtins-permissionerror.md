---
id: "python-en-function-builtins-permissionerror"
language: "python"
lang: "en"
category: "function"
name: "PermissionError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#PermissionError"
license: "PSF"
updated: "2026-10-01"
---

# PermissionError

Raised when trying to run an operation without the adequate access
rights - for example filesystem permissions.
Corresponds to :c`errno` :py`~errno.EACCES`,
:py`~errno.EPERM`, and :py`~errno.ENOTCAPABLE`.

> *Changed in 3.11.1*: WASI's :py:const:`~errno.ENOTCAPABLE` is now mapped to :exc:`PermissionError`.
