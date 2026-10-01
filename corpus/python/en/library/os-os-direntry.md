---
id: "python-en-function-os-direntry"
language: "python"
lang: "en"
category: "function"
name: "DirEntry"
directive: "class"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.DirEntry"
license: "PSF"
updated: "2026-10-01"
---

# DirEntry

Object yielded by `scandir` to expose the file path and other file
attributes of a directory entry.

`scandir` will provide as much of this information as possible without
making additional system calls. When a `stat()` or `lstat()` system call
is made, the `os.DirEntry` object will cache the result.

`os.DirEntry` instances are not intended to be stored in long-lived data
structures; if you know the file metadata has changed or if a long time has
elapsed since calling `scandir`, call `os.stat(entry.path)` to fetch
up-to-date information.

Because the `os.DirEntry` methods can make operating system calls, they may
also raise `OSError`. If you need very fine-grained
control over errors, you can catch `OSError` when calling one of the
`os.DirEntry` methods and handle as appropriate.

To be directly usable as a `path-like object`, `os.DirEntry`
implements the `PathLike` interface.

`DirEntry` objects are `generic` over the type of the
path (`str` or `bytes`).

Attributes and methods on a `os.DirEntry` instance are as follows:

attribute:: name

attribute:: path

method:: inode()

method:: is_dir(*, follow_symlinks=True)

method:: is_file(*, follow_symlinks=True)

method:: is_symlink()

method:: is_junction()

method:: stat(*, follow_symlinks=True)

Note that there is a nice correspondence between several attributes
and methods of `os.DirEntry` and of `pathlib.Path`.  In
particular, the `name` attribute has the same
meaning, as do the `is_dir()`, `is_file()`, `is_symlink()`,
`is_junction()`, and `stat()` methods.

> *Added in 3.5*

> *Changed in 3.6*: Added support for the :class:`~os.PathLike` interface.  Added support for :class:`bytes` paths on Windows.

> *Changed in 3.12*: The ``st_ctime`` attribute of a stat result is deprecated on Windows. The file creation time is properly available as ``st_birthtime``, and in the future ``st_ctime`` may be changed to return zero or the metadata change time, if available.
