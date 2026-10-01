---
id: "python-zh-function-hashlib-file_digest"
language: "python"
lang: "zh"
category: "function"
name: "file_digest"
signature: "file_digest(fileobj, digest, /)"
directive: "function"
module: "hashlib"
source_url: "https://docs.python.org/zh-cn/3/library/hashlib.html#hashlib.file_digest"
license: "PSF"
updated: "2026-10-01"
---

# file_digest

返回一个根据文件对象进行更新的摘要对象。

*fileobj* must be a file-like object opened for reading in binary mode.
It accepts file objects from  builtin `open`, `~io.BytesIO`
instances, SocketIO objects from `socket.socket.makefile`, and
similar. *fileobj* must be opened in blocking mode, otherwise a
`BlockingIOError` may be raised.

The function may bypass Python's I/O and use the file descriptor
from `~io.IOBase.fileno` directly. *fileobj* must be assumed to be
in an unknown state after this function returns or raises. It is up to
the caller to close *fileobj*.

*digest* must either be a hash algorithm name as a *str*, a hash
constructor, or a callable that returns a hash object.

示例：

   >>> import io, hashlib, hmac
   >>> with open("library/hashlib.rst", "rb") as f:
   ...     digest = hashlib.file_digest(f, "sha256")
   ...
   >>> digest.hexdigest()  # doctest: +ELLIPSIS
   '...'

   >>> buf = io.BytesIO(b"somedata")
   >>> mac1 = hmac.HMAC(b"key", digestmod=hashlib.sha512)
   >>> digest = hashlib.file_digest(buf, lambda: mac1)

   >>> digest is mac1
   True
   >>> mac2 = hmac.HMAC(b"key", b"somedata", digestmod=hashlib.sha512)
   >>> mac1.digest() == mac2.digest()
   True

> *Added in 3.11*

> *Changed in 3.14*: Now raises a :exc:`BlockingIOError` if the file is opened in non-blocking mode. Previously, spurious null bytes were added to the digest.
