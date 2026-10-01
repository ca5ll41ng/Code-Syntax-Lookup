---
id: "python-en-function-os-lseek"
language: "python"
lang: "en"
category: "function"
name: "lseek"
signature: "lseek(fd, pos, whence, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lseek"
license: "PSF"
updated: "2026-10-01"
---

# lseek

Set the current position of file descriptor *fd* to position *pos*, modified
by *whence*, and return the new position in bytes relative to
the start of the file.
Valid values for *whence* are:

* `SEEK_SET` or `0` -- set *pos* relative to the beginning of the file
* `SEEK_CUR` or `1` -- set *pos* relative to the current file position
* `SEEK_END` or `2` -- set *pos* relative to the end of the file
* `SEEK_HOLE` -- set *pos* to the next data location, relative to *pos*
* `SEEK_DATA` -- set *pos* to the next data hole, relative to *pos*

> *Changed in 3.3*: Add support for :const:`!SEEK_HOLE` and :const:`!SEEK_DATA`.
