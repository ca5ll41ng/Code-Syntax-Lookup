---
id: "python-en-function-os-lstat"
language: "python"
lang: "en"
category: "function"
name: "lstat"
signature: "lstat(path, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lstat"
license: "PSF"
updated: "2026-10-01"
---

# lstat

Perform the equivalent of an :c`lstat` system call on the given path.
Similar to `~os.stat`, but does not follow symbolic links. Return a
`stat_result` object.

On platforms that do not support symbolic links, this is an alias for
`~os.stat`.

As of Python 3.3, this is equivalent to `os.stat(path, dir_fd=dir_fd,
follow_symlinks=False)`.

This function can also support `paths relative to directory descriptors`.

> **Seealso**
>
> The `.stat` function.
>

> *Changed in 3.2*: Added support for Windows 6.0 (Vista) symbolic links.

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.8*: On Windows, now opens reparse points that represent another path (name surrogates), including symbolic links and directory junctions. Other kinds of reparse points are resolved by the operating system as for :func:`~os.stat`.
