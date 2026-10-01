---
id: "python-en-function-msvcrt-locking"
language: "python"
lang: "en"
category: "function"
name: "locking"
signature: "locking(fd, mode, nbytes)"
directive: "function"
module: "msvcrt"
source_url: "https://docs.python.org/3/library/msvcrt.html#msvcrt.locking"
license: "PSF"
updated: "2026-10-01"
---

# locking

Lock part of a file based on file descriptor *fd* from the C runtime. Raises
`OSError` on failure. The locked region of the file extends from the
current file position for *nbytes* bytes, and may continue beyond the end of the
file. *mode* must be one of the `LK_\*` constants listed below. Multiple
regions in a file may be locked at the same time, but may not overlap. Adjacent
regions are not merged; they must be unlocked individually.

audit-event:: msvcrt.locking fd,mode,nbytes msvcrt.locking
