---
id: "python-en-function-tempfile-temporaryfile"
language: "python"
lang: "en"
category: "function"
name: "TemporaryFile"
signature: "TemporaryFile(mode='w+b', buffering=-1, encoding=None, newline=None, suffix=None, prefix=None, dir=None, *, errors=None)"
directive: "function"
module: "tempfile"
source_url: "https://docs.python.org/3/library/tempfile.html#tempfile.TemporaryFile"
license: "PSF"
updated: "2026-10-01"
---

# TemporaryFile

Return a `file-like object` that can be used as a temporary storage area.
The file is created securely, using the same rules as `mkstemp`. It will be destroyed as soon
as it is closed (including an implicit close when the object is garbage
collected).  Under Unix, the directory entry for the file is either not created at all or is removed
immediately after the file is created.  Other platforms do not support
this; your code should not rely on a temporary file created using this
function having or not having a visible name in the file system.

The resulting object can be used as a `context manager` (see
`tempfile-examples`).  On completion of the context or
destruction of the file object the temporary file will be removed
from the filesystem.

The *mode* parameter defaults to `'w+b'` so that the file created can
be read and written without being closed.  Binary mode is used so that it
behaves consistently on all platforms without regard for the data that is
stored.  *buffering*, *encoding*, *errors* and *newline* are interpreted as for
`open`.

The *dir*, *prefix* and *suffix* parameters have the same meaning and
defaults as with `mkstemp`.

The returned object is a true file object on POSIX platforms.  On other
platforms, it is a file-like object whose `file` attribute is the
underlying true file object.

The :py`os.O_TMPFILE` flag is used if it is available and works
(Linux-specific, requires Linux kernel 3.11 or later).

On platforms that are neither Posix nor Cygwin, TemporaryFile is an alias
for NamedTemporaryFile.

audit-event:: tempfile.mkstemp fullpath tempfile.TemporaryFile

> *Changed in 3.5*: The :py:const:`os.O_TMPFILE` flag is now used if available.

> *Changed in 3.8*: Added *errors* parameter.
