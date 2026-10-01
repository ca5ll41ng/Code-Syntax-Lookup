---
id: "python-en-function-zipfile-zipfile-writestr-zinfo_or_arcname-data-compress_type-none"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.writestr(zinfo_or_arcname, data, compress_type=None, \\"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.writestr(zinfo_or_arcname, data, compress_type=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.writestr(zinfo_or_arcname, data, compress_type=None, \

Write a file into the archive.  The contents is *data*, which may be either
a `str` or a `bytes` instance; if it is a `str`,
it is encoded as UTF-8 first.  *zinfo_or_arcname* is either the file
name it will be given in the archive, or a `ZipInfo` instance.  If it's
an instance, at least the filename, date, and time must be given.  If it's a
name, the date and time is set to the current date and time.
The archive must be opened with mode `'w'`, `'x'` or `'a'`.

If given, *compress_type* overrides the value given for the *compression*
parameter to the constructor for the new entry, or in the *zinfo_or_arcname*
(if that is a `ZipInfo` instance). Similarly, *compresslevel* will
override the constructor if given.

> **Note**
>
> When passing a `ZipInfo` instance as the *zinfo_or_arcname* parameter,
> the compression method used will be that specified in the *compress_type*
> member of the given `ZipInfo` instance.  By default, the
> `ZipInfo` constructor sets this member to `ZIP_STORED`.
>

> *Changed in 3.2*: The *compress_type* argument.

> *Changed in 3.6*: Calling :meth:`writestr` on a ZipFile created with mode ``'r'`` or a closed ZipFile will raise a :exc:`ValueError`.  Previously, a :exc:`RuntimeError` was raised.

> *Changed in 3.14*: Now respects the :envvar:`SOURCE_DATE_EPOCH` environment variable. If set, it uses this value as the modification timestamp for the file written into the ZIP archive, instead of using the current time.
