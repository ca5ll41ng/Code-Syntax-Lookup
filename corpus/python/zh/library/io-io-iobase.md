---
id: "python-zh-function-io-iobase"
language: "python"
lang: "zh"
category: "function"
name: "IOBase"
directive: "class"
module: "io"
source_url: "https://docs.python.org/zh-cn/3/library/io.html#io.IOBase"
license: "PSF"
updated: "2026-10-01"
---

# IOBase

所有 I/O 类的抽象基类。

This class provides empty abstract implementations for many methods
that derived classes can override selectively; the default
implementations represent a file that cannot be read, written or
seeked.

Even though `IOBase` does not declare `read`
or `write` because their signatures will vary, implementations and
clients should consider those methods part of the interface.  Also,
implementations may raise a `ValueError` (or `UnsupportedOperation`)
when operations they do not support are called.

The basic type used for binary data read from or written to a file is
`bytes`.  Other `bytes-like objects` are
accepted as method arguments too.  Text I/O classes work with `str` data.

Note that calling any method (even inquiries) on a closed stream is
undefined.  Implementations may raise `ValueError` in this case.

`IOBase` (and its subclasses) supports the iterator protocol, meaning
that an `IOBase` object can be iterated over yielding the lines in a
stream.  Lines are defined slightly differently depending on whether the
stream is a binary stream (yielding bytes), or a text stream (yielding
character strings).  See `~IOBase.readline` below.

`IOBase` is also a context manager and therefore supports the
`with` statement.  In this example, *file* is closed after the
`with` statement's suite is finished---even if an exception occurs::

   with open('spam.txt', 'w') as file:
       file.write('Spam and eggs!')

:class:`IOBase` 提供以下数据属性和方法：

method:: close()

attribute:: closed

method:: fileno()

method:: flush()

method:: isatty()

method:: readable()

method:: readline(size=-1, /)

method:: readlines(hint=-1, /)

method:: seek(offset, whence=os.SEEK_SET, /)

method:: seekable()

method:: tell()

method:: truncate(size=None, /)

method:: writable()

method:: writelines(lines, /)

method:: __del__()
