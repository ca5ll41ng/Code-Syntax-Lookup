---
id: "python-zh-function-bz2-bz2file"
language: "python"
lang: "zh"
category: "function"
name: "BZ2File"
signature: "BZ2File(filename, mode='r', *, compresslevel=9)"
directive: "class"
module: "bz2"
source_url: "https://docs.python.org/zh-cn/3/library/bz2.html#bz2.BZ2File"
license: "PSF"
updated: "2026-10-01"
---

# BZ2File

用二进制模式打开 bzip2 压缩文件。

If *filename* is a `str` or `bytes` object, open the named file
directly. Otherwise, *filename* should be a `file object`, which will
be used to read or write the compressed data.

The *mode* argument can be either `'r'` for reading (default), `'w'` for
overwriting, `'x'` for exclusive creation, or `'a'` for appending. These
can equivalently be given as `'rb'`, `'wb'`, `'xb'` and `'ab'`
respectively.

If *filename* is a file object (rather than an actual file name), a mode of
`'w'` does not truncate the file, and is instead equivalent to `'a'`.

If *mode* is `'w'` or `'a'`, *compresslevel* can be an integer between
`1` and `9` specifying the level of compression: `1` produces the
least compression, and `9` (default) produces the most compression.

If *mode* is `'r'`, the input file may be the concatenation of multiple
compressed streams.

`BZ2File` provides all of the members specified by the
`io.BufferedIOBase`, except for `~io.BufferedIOBase.detach`
and `~io.IOBase.truncate`.
Iteration and the `with` statement are supported.

:class:`BZ2File` 还提供了以下方法和属性：

method:: peek([n])

method:: fileno()

method:: readable()

method:: seekable()

method:: writable()

method:: read1(size=-1)

method:: readinto(b)

attribute:: mode

attribute:: name

> *Changed in 3.1*: Support for the :keyword:`with` statement was added.

> *Changed in 3.3*: Support was added for *filename* being a :term:`file object` instead of an actual filename.  The ``'a'`` (append) mode was added, along with support for reading multi-stream files.

> *Changed in 3.4*: The ``'x'`` (exclusive creation) mode was added.

> *Changed in 3.5*: The :meth:`~io.BufferedIOBase.read` method now accepts an argument of ``None``.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.9*: The *buffering* parameter has been removed. It was ignored and deprecated since Python 3.0. Pass an open file object to control how the file is opened.  The *compresslevel* parameter became keyword-only.

> *Changed in 3.10*: This class is thread unsafe in the face of multiple simultaneous readers or writers, just like its equivalent classes in :mod:`gzip` and :mod:`lzma` have always been.
