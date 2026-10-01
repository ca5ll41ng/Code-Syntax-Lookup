---
id: "python-en-function-logging-handlers-filehandler"
language: "python"
lang: "en"
category: "function"
name: "FileHandler"
signature: "FileHandler(filename, mode='a', encoding=None, delay=False, errors=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.FileHandler"
license: "PSF"
updated: "2026-10-01"
---

# FileHandler

Returns a new instance of the `FileHandler` class. The specified file is
opened and used as the stream for logging. If *mode* is not specified,
`'a'` is used.  If *encoding* is not `None`, it is used to open the file
with that encoding.  If *delay* is true, then file opening is deferred until the
first call to `emit`. By default, the file grows indefinitely. If
*errors* is specified, it's used to determine how encoding errors are handled.

> *Changed in 3.6*: As well as string values, :class:`~pathlib.Path` objects are also accepted for the *filename* argument.

> *Changed in 3.9*: The *errors* parameter was added.

method:: close()

method:: emit(record)
