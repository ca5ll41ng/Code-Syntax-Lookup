---
id: "python-en-function-msvcrt-putch"
language: "python"
lang: "en"
category: "function"
name: "putch"
signature: "putch(char)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.putch"
license: "PSF"
updated: "2026-10-01"
---

# putch

Print the byte string *char* to the console without buffering.  Raises
`OSError` on failure, for example when the process has no console
attached.

> *Changed in next*: Failures are now reported by raising :exc:`OSError` instead of being silently ignored.
