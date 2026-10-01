---
id: "python-en-function-builtins-blockingioerror"
language: "python"
lang: "en"
category: "function"
name: "BlockingIOError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#BlockingIOError"
license: "PSF"
updated: "2026-10-01"
---

# BlockingIOError

Raised when an operation would block on an object (e.g. socket) set
for non-blocking operation.
Corresponds to :c`errno` :py`~errno.EAGAIN`, :py`~errno.EALREADY`,
:py`~errno.EWOULDBLOCK` and :py`~errno.EINPROGRESS`.

In addition to those of `OSError`, `BlockingIOError` can have
one more attribute:

attribute:: characters_written
