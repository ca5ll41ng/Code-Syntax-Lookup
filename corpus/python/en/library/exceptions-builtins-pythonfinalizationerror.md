---
id: "python-en-function-builtins-pythonfinalizationerror"
language: "python"
lang: "en"
category: "function"
name: "PythonFinalizationError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#PythonFinalizationError"
license: "PSF"
updated: "2026-10-01"
---

# PythonFinalizationError

This exception is derived from `RuntimeError`.  It is raised when
an operation is blocked during interpreter shutdown also known as
`Python finalization`.

Examples of operations which can be blocked with a
`PythonFinalizationError` during the Python finalization:

* Creating a new Python thread.
* `Joining` a running daemon thread.
* `os.fork`,
* acquiring a lock such as `threading.Lock`, when it is known that
  the operation would otherwise deadlock.

See also the `sys.is_finalizing` function.

> *Added in 3.13*: Previously, a plain :exc:`RuntimeError` was raised.

> *Changed in 3.14*: :meth:`threading.Thread.join` can now raise this exception.

> *Changed in 3.15*: This exception may be raised when acquiring :meth:`threading.Lock` or :meth:`threading.RLock`.
