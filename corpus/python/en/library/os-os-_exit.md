---
id: "python-en-function-os-_exit"
language: "python"
lang: "en"
category: "function"
name: "_exit"
signature: "_exit(n)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os._exit"
license: "PSF"
updated: "2026-10-01"
---

# _exit

Exit the process with status *n*, without calling cleanup handlers, flushing
stdio buffers, etc.

> **Note**
>
> The standard way to exit is `sys.exit(n)`.  `_exit` should
> normally only be used in the child process after a `fork`.
>
