---
id: "python-en-function-logging-handlers-rotatingfilehandler"
language: "python"
lang: "en"
category: "function"
name: "RotatingFileHandler"
signature: "RotatingFileHandler(filename, mode='a', maxBytes=0, backupCount=0, encoding=None, delay=False, errors=None)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.RotatingFileHandler"
license: "PSF"
updated: "2026-10-01"
---

# RotatingFileHandler

Returns a new instance of the `RotatingFileHandler` class. The specified
file is opened and used as the stream for logging. If *mode* is not specified,
`'a'` is used.  If *encoding* is not `None`, it is used to open the file
with that encoding.  If *delay* is true, then file opening is deferred until the
first call to `emit`.  By default, the file grows indefinitely. If
*errors* is provided, it determines how encoding errors are handled.

You can use the *maxBytes* and *backupCount* values to allow the file to
`rollover` at a predetermined size. When the size is about to be exceeded,
the file is closed and a new file is silently opened for output. Rollover occurs
whenever the current log file is nearly *maxBytes* in length; but if either of
*maxBytes* or *backupCount* is zero, rollover never occurs, so you generally want
to set *backupCount* to at least 1, and have a non-zero *maxBytes*.
When *backupCount* is non-zero, the system will save old log files by appending
the extensions '.1', '.2' etc., to the filename. For example, with a *backupCount*
of 5 and a base file name of `app.log`, you would get `app.log`,
`app.log.1`, `app.log.2`, up to `app.log.5`. The file being
written to is always `app.log`.  When this file is filled, it is closed
and renamed to `app.log.1`, and if files `app.log.1`,
`app.log.2`, etc. exist, then they are renamed to `app.log.2`,
`app.log.3` etc. respectively.

> *Changed in 3.6*: As well as string values, :class:`~pathlib.Path` objects are also accepted for the *filename* argument.

> *Changed in 3.9*: The *errors* parameter was added.

method:: doRollover()

method:: emit(record)

method:: shouldRollover(record)
