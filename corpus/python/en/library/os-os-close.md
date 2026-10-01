---
id: "python-en-function-os-close"
language: "python"
lang: "en"
category: "function"
name: "close"
signature: "close(fd)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.close"
license: "PSF"
updated: "2026-10-01"
---

# close

Close file descriptor *fd*.

> **Note**
>
> This function is intended for low-level I/O and must be applied to a file
> descriptor as returned by `os.open` or `pipe`.  To close a "file
> object" returned by the built-in function `open` or by `popen` or
> `fdopen`, use its `~io.IOBase.close` method.
>
