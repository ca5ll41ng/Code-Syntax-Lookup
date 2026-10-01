---
id: "python-en-function-gzip-gzipfile"
language: "python"
lang: "en"
category: "function"
name: "GzipFile"
signature: "GzipFile(filename=None, mode=None, compresslevel=6, fileobj=None, mtime=None)"
directive: "class"
module: "gzip"
source_url: "https://docs.python.org/3/library/gzip.html#gzip.GzipFile"
license: "PSF"
updated: "2026-10-01"
---

# GzipFile

Constructor for the `GzipFile` class, which simulates most of the
methods of a `file object`, with the exception of the `~io.IOBase.truncate`
method.  At least one of *fileobj* and *filename* must be given a non-trivial
value.

The new class instance is based on *fileobj*, which can be a regular file, an
`io.BytesIO` object, or any other object which simulates a file.  It
defaults to `None`, in which case *filename* is opened to provide a file
object.

When *fileobj* is not `None`, the *filename* argument is only used to be
included in the `gzip` file header, which may include the original
filename of the uncompressed file.  It defaults to the filename of *fileobj*, if
discernible; otherwise, it defaults to the empty string, and in this case the
original filename is not included in the header.

The *mode* argument can be any of `'r'`, `'rb'`, `'a'`, `'ab'`, `'w'`,
`'wb'`, `'x'`, or `'xb'`, depending on whether the file will be read or
written.  The default is the mode of *fileobj* if discernible; otherwise, the
default is `'rb'`.  In future Python releases the mode of *fileobj* will
not be used.  It is better to always specify *mode* for writing.

Note that the file is always opened in binary mode. To open a compressed file
in text mode, use `.open` (or wrap your `GzipFile` with an
`io.TextIOWrapper`).

The *compresslevel* argument is an integer from `0` to `9` controlling
the level of compression; `1` is fastest and produces the least
compression, and `9` is slowest and produces the most compression. `0`
is no compression. The default is `9`.

The optional *mtime* argument is the timestamp requested by gzip. The time
is in Unix format, i.e., seconds since 00:00:00 UTC, January 1, 1970. Set
*mtime* to `0` to generate a compressed stream that does not depend on
creation time. If *mtime* is omitted or `None`, the current time is used;
however, if the current time is outside the range 00:00:00 UTC, January 1,
1970 through 06:28:15 UTC, February 7, 2106, or explicitly passed *mtime*
argument is outside the range `0` to `2**32-1`, then the value `0`
is used instead.

See below for the `mtime` attribute that is set when decompressing.

Calling a `GzipFile` object's `close` method does not close
*fileobj*, since you might wish to append more material after the compressed
data.  This also allows you to pass an `io.BytesIO` object opened for
writing as *fileobj*, and retrieve the resulting memory buffer using the
`io.BytesIO` object's `~io.BytesIO.getvalue` method.

`GzipFile` supports the `io.BufferedIOBase` interface,
including iteration and the `with` statement.  Only the
`~io.IOBase.truncate` method isn't implemented.

`GzipFile` also provides the following method and attribute:

method:: peek(n)

attribute:: mode

attribute:: mtime

attribute:: name

> *Changed in 3.1*: Support for the :keyword:`with` statement was added, along with the *mtime* constructor argument and :attr:`mtime` attribute.

> *Changed in 3.2*: Support for zero-padded and unseekable files was added.

> *Changed in 3.3*: The :meth:`io.BufferedIOBase.read1` method is now implemented.

> *Changed in 3.4*: Added support for the ``'x'`` and ``'xb'`` modes.

> *Changed in 3.5*: Added support for writing arbitrary :term:`bytes-like objects <bytes-like object>`. The :meth:`~io.BufferedIOBase.read` method now accepts an argument of ``None``.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Deprecated since 3.9*: Opening :class:`GzipFile` for writing without specifying the *mode* argument is deprecated.

> *Changed in 3.12*: Remove the ``filename`` attribute, use the :attr:`~GzipFile.name` attribute instead.

> *Changed in 3.15*: The default compression level was reduced to 6 (down from 9). It is the default level used by most compression tools and a better tradeoff between speed and performance.
