---
id: "python-en-function-os-forkpty"
language: "python"
lang: "en"
category: "function"
name: "forkpty"
signature: "forkpty()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.forkpty"
license: "PSF"
updated: "2026-10-01"
---

# forkpty

Fork a child process, using a new pseudo-terminal as the child's controlling
terminal. Return a pair of `(pid, fd)`, where *pid* is `0` in the child, the
new child's process id in the parent, and *fd* is the file descriptor of the
master end of the pseudo-terminal.  For a more portable approach, use the
`pty` module.  If an error occurs `OSError` is raised.

The returned file descriptor *fd* is `non-inheritable`.

audit-event:: os.forkpty "" os.forkpty

> **Warning**
>
> On macOS the use of this function is unsafe when mixed with using
> higher-level system APIs, and that includes using `urllib.request`.
>

> *Changed in 3.8*: Calling ``forkpty()`` in a subinterpreter is no longer supported (:exc:`RuntimeError` is raised).

> *Changed in 3.12*: If Python is able to detect that your process has multiple threads, this now raises a :exc:`DeprecationWarning`. See the longer explanation on :func:`os.fork`.

> *Changed in 3.15*: The returned file descriptor is now made non-inheritable.

availability:: Unix, not WASI, not Android, not iOS.
