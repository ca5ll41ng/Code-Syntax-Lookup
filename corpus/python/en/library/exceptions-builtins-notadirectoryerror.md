---
id: "python-en-function-builtins-notadirectoryerror"
language: "python"
lang: "en"
category: "function"
name: "NotADirectoryError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#NotADirectoryError"
license: "PSF"
updated: "2026-10-01"
---

# NotADirectoryError

Raised when a directory operation (such as `os.listdir`) is requested on
something which is not a directory.  On most POSIX platforms, it may also be
raised if an operation attempts to open or traverse a non-directory file as if
it were a directory.
Corresponds to :c`errno` :py`~errno.ENOTDIR`.
