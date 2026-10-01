---
id: "python-en-function-os-write"
language: "python"
lang: "en"
category: "function"
name: "write"
signature: "write(fd, str, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.write"
license: "PSF"
updated: "2026-10-01"
---

# write

Write the bytestring in *str* to file descriptor *fd*.

Return the number of bytes actually written.

> **Note**
>
> This function is intended for low-level I/O and must be applied to a file
> descriptor as returned by `os.open` or `pipe`.  To write a "file
> object" returned by the built-in function `open` or by `popen` or
> `fdopen`, or `sys.stdout` or `sys.stderr`, use its
> `~io.TextIOBase.write` method.
>

> *Changed in 3.5*: If the system call is interrupted and the signal handler does not raise an exception, the function now retries the system call instead of raising an :exc:`InterruptedError` exception (see :pep:`475` for the rationale).
