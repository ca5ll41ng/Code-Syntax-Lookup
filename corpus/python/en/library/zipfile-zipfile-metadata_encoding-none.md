---
id: "python-en-function-zipfile-metadata_encoding-none"
language: "python"
lang: "en"
category: "function"
name: "metadata_encoding=None)"
directive: "class"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.metadata_encoding=None)"
license: "PSF"
updated: "2026-10-01"
---

# metadata_encoding=None)

Open a ZIP file, where *file* can be a path to a file (a string), a
file-like object or a `path-like object`.

The *mode* parameter should be `'r'` to read an existing
file, `'w'` to truncate and write a new file, `'a'` to append to an
existing file, or `'x'` to exclusively create and write a new file.
If *mode* is `'x'` and *file* refers to an existing file,
a `FileExistsError` will be raised.
If *mode* is `'a'` and *file* refers to an existing ZIP
file, then additional files are added to it.  If *file* does not refer to a
ZIP file, then a new ZIP archive is appended to the file.  This is meant for
adding a ZIP archive to another file (such as `python.exe`).  If
*mode* is `'a'` and the file does not exist at all, it is created.
If *mode* is `'r'` or `'a'`, the file should be seekable.

*compression* is the ZIP compression method to use when writing the archive,
and should be `ZIP_STORED`, `ZIP_DEFLATED`,
`ZIP_BZIP2`, `ZIP_LZMA`, or `ZIP_ZSTANDARD`;
unrecognized values will cause `NotImplementedError` to be raised.  If
`ZIP_DEFLATED`, `ZIP_BZIP2`, `ZIP_LZMA`, or
`ZIP_ZSTANDARD` is specified but the corresponding module
(`zlib`, `bz2`, `lzma`, or `compression.zstd`) is not
available, `RuntimeError` is raised. The default is `ZIP_STORED`.

If *allowZip64* is `True` (the default) zipfile will create ZIP files that
use the ZIP64 extensions when the zipfile is larger than 4 GiB. If it is
`false` `zipfile` will raise an exception when the ZIP file would
require ZIP64 extensions.

The *compresslevel* parameter controls the compression level to use when
writing files to the archive.
When using `ZIP_STORED` or `ZIP_LZMA` it has no effect.
When using `ZIP_DEFLATED` integers `0` through `9` are accepted
(see `zlib` for more information).
When using `ZIP_BZIP2` integers `1` through `9` are accepted
(see `bz2` for more information).
When using `ZIP_ZSTANDARD` integers `-131072` through `22` are
commonly accepted (see
`CompressionParameter.compression_level`
for more on retrieving valid values and their meaning).

The *strict_timestamps* argument, when set to `False`, allows to
zip files older than 1980-01-01 at the cost of setting the
timestamp to 1980-01-01.
Similar behavior occurs with files newer than 2107-12-31,
the timestamp is also set to the limit.

When mode is `'r'`, *metadata_encoding* may be set to the name of a codec,
which will be used to decode metadata such as the names of members and ZIP
comments.

If the file is created with mode `'w'`, `'x'` or `'a'` and then
`closed` without adding any files to the archive, the appropriate
ZIP structures for an empty archive will be written to the file.

ZipFile is also a context manager and therefore supports the
`with` statement.  In the example, *myzip* is closed after the
`with` statement's suite is finished---even if an exception occurs::

   with ZipFile('spam.zip', 'w') as myzip:
       myzip.write('eggs.txt')

> **Note**
>
> *metadata_encoding* is an instance-wide setting for the ZipFile.
> It is not possible to set this on a per-member basis.
>
> This attribute is a workaround for legacy implementations which produce
> archives with names in the current locale encoding or code page (mostly
> on Windows).  According to the .ZIP standard, the encoding of metadata
> may be specified to be either IBM code page (default) or UTF-8 by a flag
> in the archive header.
> That flag takes precedence over *metadata_encoding*, which is
> a Python-specific extension.
>

> *Changed in 3.2*: Added the ability to use :class:`ZipFile` as a context manager.

> *Changed in 3.3*: Added support for :mod:`bzip2 <bz2>` and :mod:`lzma` compression.

> *Changed in 3.4*: ZIP64 extensions are enabled by default.

> *Changed in 3.5*: Added support for writing to unseekable streams. Added support for the ``'x'`` mode.

> *Changed in 3.6*: Previously, a plain :exc:`RuntimeError` was raised for unrecognized compression values.

> *Changed in 3.6.2*: The *file* parameter accepts a :term:`path-like object`.

> *Changed in 3.7*: Add the *compresslevel* parameter.

> *Changed in 3.8*: The *strict_timestamps* keyword-only parameter.

> *Changed in 3.11*: Added support for specifying member name encoding for reading metadata in the zipfile's directory and file headers.

> *Changed in next*: Deleting a writable, open :class:`zipfile.ZipFile` now emits a :exc:`ResourceWarning`. Use as a :term:`context manager` or call :meth:`~zipfile.ZipFile.close` explicitly.
