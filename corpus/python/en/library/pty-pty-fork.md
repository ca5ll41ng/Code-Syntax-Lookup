---
id: "python-en-function-pty-fork"
language: "python"
lang: "en"
category: "function"
name: "fork"
signature: "fork()"
directive: "function"
module: "pty"
source_url: "https://docs.python.org/3/library/pty.html#pty.fork"
license: "PSF"
updated: "2026-10-01"
---

# fork

Fork. Connect the child's controlling terminal to a pseudo-terminal. Return
value is `(pid, fd)`. Note that the child  gets *pid* 0, and the *fd* is
*invalid*. The parent's return value is the *pid* of the child, and *fd* is a
file descriptor connected to the child's controlling terminal (and also to the
child's standard input and output).

The returned file descriptor *fd* is `non-inheritable`.

> **Warning**
>
> higher-level system APIs, and that includes using `urllib.request`.
>

> *Changed in 3.15*: The returned file descriptor is now made non-inheritable.
