---
id: "python-en-function-logging-handlers-watchedfilehandler"
language: "python"
lang: "en"
category: "function"
name: "WatchedFileHandler"
signature: "WatchedFileHandler(filename, mode='a', encoding=None, delay=False, errors=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.WatchedFileHandler"
license: "PSF"
updated: "2026-10-01"
---

# WatchedFileHandler

Returns a new instance of the `WatchedFileHandler` class. The specified
file is opened and used as the stream for logging. If *mode* is not specified,
`'a'` is used.  If *encoding* is not `None`, it is used to open the file
with that encoding.  If *delay* is true, then file opening is deferred until the
first call to `emit`.  By default, the file grows indefinitely. If
*errors* is provided, it determines how encoding errors are handled.

> *Changed in 3.6*: As well as string values, :class:`~pathlib.Path` objects are also accepted for the *filename* argument.

> *Changed in 3.9*: The *errors* parameter was added.

method:: reopenIfNeeded()

method:: emit(record)
