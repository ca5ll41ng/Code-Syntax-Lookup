---
id: "python-en-function-os-fsync"
language: "python"
lang: "en"
category: "function"
name: "fsync"
signature: "fsync(fd)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fsync"
license: "PSF"
updated: "2026-10-01"
---

# fsync

Force write of file with filedescriptor *fd* to disk.  On Unix, this calls the
native :c`fsync` function; on Windows, the MS :c`_commit` function.

If you're starting with a buffered Python `file object` *f*, first do
`f.flush()`, and then do `os.fsync(f.fileno())`, to ensure that all internal
buffers associated with *f* are written to disk.

availability:: Unix, Windows.
