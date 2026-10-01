---
id: "python-en-function-msvcrt-lk_lock"
language: "python"
lang: "en"
category: "function"
name: "LK_LOCK"
directive: "data"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.LK_LOCK"
license: "PSF"
updated: "2026-10-01"
---

# LK_LOCK

Locks the specified bytes. If the bytes cannot be locked, the program
immediately tries again after 1 second. If, after 10 attempts, the bytes cannot
be locked, `OSError` is raised.
