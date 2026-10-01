---
id: "python-en-function-os-closerange"
language: "python"
lang: "en"
category: "function"
name: "closerange"
signature: "closerange(fd_low, fd_high, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.closerange"
license: "PSF"
updated: "2026-10-01"
---

# closerange

Close all file descriptors from *fd_low* (inclusive) to *fd_high* (exclusive),
ignoring errors. Equivalent to (but much faster than)::

   for fd in range(fd_low, fd_high):
       try:
           os.close(fd)
       except OSError:
           pass
