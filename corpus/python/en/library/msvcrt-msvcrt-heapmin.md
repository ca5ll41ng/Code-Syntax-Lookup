---
id: "python-en-function-msvcrt-heapmin"
language: "python"
lang: "en"
category: "function"
name: "heapmin"
signature: "heapmin()"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.heapmin"
license: "PSF"
updated: "2026-10-01"
---

# heapmin

Force the :c`malloc` heap to clean itself up and return unused blocks to
the operating system. On failure, this raises `OSError`.
