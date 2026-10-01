---
id: "python-zh-function-os-path-realpath"
language: "python"
lang: "zh"
category: "function"
name: "realpath"
signature: "realpath(path, /, *, strict=False)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/zh-cn/3/library/os.path.html#os.path.realpath"
license: "PSF"
updated: "2026-10-01"
---

# realpath

Return the canonical path of the specified filename, eliminating any symbolic
links encountered in the path (if they are supported by the operating
system). On Windows, this function will also resolve MS-DOS (also called 8.3)
style names such as `C:\\PROGRA~1` to `C:\\Program Files`.
The returned path uses the case reported by the operating system,
which can differ from the case of *path*,
in particular the drive letter is capitalized.

By default, the path is evaluated up to the first component that does not
exist, is a symlink loop, or whose evaluation raises `OSError`.
All such components are appended unchanged to the existing part of the path.

Some errors that are handled this way include "access denied", "not a
directory", or "bad argument to internal function". Thus, the
resulting path may be missing or inaccessible, may still contain
links or loops, and may traverse non-directories.

此行为可通过关键字参数来修改：

If *strict* is `True`, the first error encountered when evaluating the path is
re-raised.
In particular, `FileNotFoundError` is raised if *path* does not exist,
or another `OSError` if it is otherwise inaccessible.
If *strict* is `ALL_BUT_LAST`, the last component of the path
is allowed to be missing, but all other errors are raised.

If *strict* is :py`os.path.ALLOW_MISSING`, errors other than
`FileNotFoundError` are re-raised (as with `strict=True`).
Thus, the returned path will not contain any symbolic links, but the named
file and some of its parent directories may be missing.

> **Note**
>
> This function emulates the operating system's procedure for making a path
> canonical, which differs slightly between Windows and UNIX with respect
> to how links and subsequent path components interact.
>
> Operating system APIs make paths canonical as needed, so it's not
> normally necessary to call this function.
>

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.8*: Symbolic links and junctions are now resolved on Windows.

> *Changed in 3.10*: The *strict* parameter was added.

> *Changed in 3.15*: The :data:`ALL_BUT_LAST` and :data:`ALLOW_MISSING` values for the *strict* parameter was added.
