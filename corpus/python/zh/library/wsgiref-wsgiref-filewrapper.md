---
id: "python-zh-function-wsgiref-filewrapper"
language: "python"
lang: "zh"
category: "function"
name: "FileWrapper"
signature: "FileWrapper(filelike, blksize=8192)"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.FileWrapper"
license: "PSF"
updated: "2026-10-01"
---

# FileWrapper

A concrete implementation of the `wsgiref.types.FileWrapper`
protocol used to convert a file-like object to an `iterator`.
The resulting objects
are `iterable`\ s. As the object is iterated over, the
optional *blksize* parameter will be repeatedly passed to the *filelike*
object's `read` method to obtain bytestrings to yield.  When `read`
returns an empty bytestring, iteration is ended and is not resumable.

If *filelike* has a `close` method, the returned object will also have a
`close` method, and it will invoke the *filelike* object's `close`
method when called.

用法示例::

   from io import StringIO
   from wsgiref.util import FileWrapper

   # We're using a StringIO-buffer for as the file-like object
   filelike = StringIO("This is an example file-like object"*10)
   wrapper = FileWrapper(filelike, blksize=5)

   for chunk in wrapper:
       print(chunk)

> *Changed in 3.11*: Support for :meth:`~object.__getitem__` method has been removed.
