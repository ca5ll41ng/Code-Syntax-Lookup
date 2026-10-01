---
id: "python-en-function-zipfile-zipfile-open"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.open"
signature: "ZipFile.open(name, mode='r', pwd=None, *, force_zip64=False)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.open"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.open

Access a member of the archive as a binary file-like object.  *name*
can be either the name of a file within the archive or a `ZipInfo`
object.  The *mode* parameter, if included, must be `'r'` (the default)
or `'w'`.  *pwd* is the password used to decrypt encrypted ZIP files as a
`bytes` object.

`~ZipFile.open` is also a context manager and therefore supports the
`with` statement::

   with ZipFile('spam.zip') as myzip:
       with myzip.open('eggs.txt') as myfile:
           print(myfile.read())

With *mode* `'r'` the file-like object
(`ZipExtFile`) is read-only and provides the following methods:
`~io.BufferedIOBase.read`, `~io.IOBase.readline`,
`~io.IOBase.readlines`, `~io.IOBase.seek`,
`~io.IOBase.tell`, `~container.__iter__`, `~iterator.__next__`.
These objects can operate independently of the ZipFile.

With `mode='w'`, a writable file handle is returned, which supports the
`~io.BufferedIOBase.write` method.  While a writable file handle is open,
attempting to read or write other files in the ZIP file will raise a
`ValueError`.

In both cases the file-like object has also attributes `name`,
which is equivalent to the name of a file within the archive, and
`mode`, which is `'rb'` or `'wb'` depending on the input mode.

When writing a file, if the file size is not known in advance but may exceed
2 GiB, pass `force_zip64=True` to ensure that the header format is
capable of supporting large files.  If the file size is known in advance,
construct a `ZipInfo` object with `~ZipInfo.file_size` set, and
use that as the *name* parameter.

> **Note**
>
> The `.open`, `read` and `extract` methods can take a filename
> or a `ZipInfo` object.  You will appreciate this when trying to read a
> ZIP file that contains members with duplicate names.
>

> *Changed in 3.6*: Removed support of ``mode='U'``.  Use :class:`io.TextIOWrapper` for reading compressed text files in :term:`universal newlines` mode.

> *Changed in 3.6*: :meth:`ZipFile.open` can now be used to write files into the archive with the ``mode='w'`` option.

> *Changed in 3.6*: Calling :meth:`.open` on a closed ZipFile will raise a :exc:`ValueError`. Previously, a :exc:`RuntimeError` was raised.

> *Changed in 3.13*: Added attributes :attr:`!name` and :attr:`!mode` for the writeable file-like object. The value of the :attr:`!mode` attribute for the readable file-like object was changed from ``'r'`` to ``'rb'``.
