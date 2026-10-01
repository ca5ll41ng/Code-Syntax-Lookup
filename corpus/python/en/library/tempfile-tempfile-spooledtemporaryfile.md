---
id: "python-en-function-tempfile-spooledtemporaryfile"
language: "python"
lang: "en"
category: "function"
name: "SpooledTemporaryFile"
signature: "SpooledTemporaryFile(max_size=0, mode='w+b', buffering=-1, encoding=None, newline=None, suffix=None, prefix=None, dir=None, *, errors=None)"
directive: "class"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.SpooledTemporaryFile"
license: "PSF"
updated: "2026-10-01"
---

# SpooledTemporaryFile

This class operates exactly as `TemporaryFile` does, except that
data is spooled in memory until the file size exceeds *max_size*, or
until the file's `~io.IOBase.fileno` method is called, at which point the
contents are written to disk and operation proceeds as with
`TemporaryFile`.

method:: SpooledTemporaryFile.rollover

The returned object is a file-like object whose `_file` attribute
is either an `io.BytesIO` or `io.TextIOWrapper` object
(depending on whether binary or text *mode* was specified) or a true file
object, depending on whether `rollover` has been called.  This
file-like object can be used in a `with` statement, just like
a normal file.

> *Changed in 3.3*: the truncate method now accepts a *size* argument.

> *Changed in 3.8*: Added *errors* parameter.

> *Changed in 3.11*: Fully implements the :class:`io.BufferedIOBase` and :class:`io.TextIOBase` abstract base classes (depending on whether binary or text *mode* was specified).
