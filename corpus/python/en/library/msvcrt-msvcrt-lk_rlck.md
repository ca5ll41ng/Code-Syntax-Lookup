---
id: "python-en-function-msvcrt-lk_rlck"
language: "python"
lang: "en"
category: "function"
name: "LK_RLCK"
directive: "data"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.LK_RLCK"
license: "PSF"
updated: "2026-10-01"
---

# LK_RLCK

Locks the specified bytes. If the bytes cannot be locked, the program
immediately tries again after 1 second. If, after 10 attempts, the bytes cannot
be locked, `OSError` is raised.
