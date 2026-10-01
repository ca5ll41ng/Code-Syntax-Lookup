---
id: "python-zh-function-os-listdir"
language: "python"
lang: "zh"
category: "function"
name: "listdir"
signature: "listdir(path='.')"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.listdir"
license: "PSF"
updated: "2026-10-01"
---

# listdir

Return a list containing the names of the entries in the directory given by
*path*.  The list is in arbitrary order, and does not include the special
entries `'.'` and `'..'` even if they are present in the directory.
If a file is removed from or added to the directory during the call of
this function, whether a name for that file be included is unspecified.

*path* may be a `path-like object`.  If *path* is of type `bytes`
(directly or indirectly through the `PathLike` interface),
the filenames returned will also be of type `bytes`;
in all other circumstances, they will be of type `str`.

This function can also support `specifying a file descriptor`; the file descriptor must refer to a directory.

audit-event:: os.listdir path os.listdir

> **Note**
>
> 要将 ``str`` 类型的文件名编码为 ``bytes``，请使用 :func:`~os.fsencode`。
>

> **Seealso**
>
> The `scandir` function returns directory entries along with
> file attribute information, giving better performance for many
> common use cases.
>

> *Changed in 3.2*: The *path* parameter became optional.

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.15*: ``os.listdir(-1)`` now fails with ``OSError(errno.EBADF)`` rather than listing the current directory.
