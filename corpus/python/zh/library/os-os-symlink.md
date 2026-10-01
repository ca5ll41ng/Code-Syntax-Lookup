---
id: "python-zh-function-os-symlink"
language: "python"
lang: "zh"
category: "function"
name: "symlink"
signature: "symlink(src, dst, target_is_directory=False, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.symlink"
license: "PSF"
updated: "2026-10-01"
---

# symlink

创建一个指向 *src* 的符号链接，名为 *dst*。

The *src* parameter refers to the target of the link (the file or directory being linked to),
and *dst* is the name of the link being created.

On Windows, a symlink represents either a file or a directory, and does not
morph to the target dynamically.  If the target is present, the type of the
symlink will be created to match. Otherwise, the symlink will be created
as a directory if *target_is_directory* is `True` or a file symlink (the
default) otherwise.  On non-Windows platforms, *target_is_directory* is ignored.

This function can support `paths relative to directory descriptors`.

> **Note**
>
> On newer versions of Windows 10, unprivileged accounts can create symlinks
> if Developer Mode is enabled. When Developer Mode is not available/enabled,
> the *SeCreateSymbolicLinkPrivilege* privilege is required, or the process
> must be run as an administrator.
>
> `OSError` is raised when the function is called by an unprivileged
> user.
>

audit-event:: os.symlink src,dst,dir_fd os.symlink

availability:: Unix, Windows.

> *Changed in 3.2*: Added support for Windows 6.0 (Vista) symbolic links.

> *Changed in 3.3*: Added the *dir_fd* parameter, and now allow *target_is_directory* on non-Windows platforms.

> *Changed in 3.6*: Accepts a :term:`path-like object` for *src* and *dst*.

> *Changed in 3.8*: Added support for unelevated symlinks on Windows with Developer Mode.
