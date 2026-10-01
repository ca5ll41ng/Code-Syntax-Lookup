---
id: "python-en-function-os-getppid"
language: "python"
lang: "en"
category: "function"
name: "getppid"
signature: "getppid()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getppid"
license: "PSF"
updated: "2026-10-01"
---

# getppid

Return the parent's process id.  When the parent process has exited, on Unix
the id returned is the one of the init process (1), on Windows it is still
the same id, which may be already reused by another process.

availability:: Unix, Windows, not WASI.

> *Changed in 3.2*: Added support for Windows.
