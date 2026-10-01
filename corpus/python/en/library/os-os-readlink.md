---
id: "python-en-function-os-readlink"
language: "python"
lang: "en"
category: "function"
name: "readlink"
signature: "readlink(path, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.readlink"
license: "PSF"
updated: "2026-10-01"
---

# readlink

Return a string representing the path to which the symbolic link points.  The
result may be either an absolute or relative pathname; if it is relative, it
may be converted to an absolute pathname using
`os.path.join(os.path.dirname(path), result)`.

If the *path* is a string object (directly or indirectly through a
`PathLike` interface), the result will also be a string object,
and the call may raise a UnicodeDecodeError. If the *path* is a bytes
object (direct or indirectly), the result will be a bytes object.

This function can also support `paths relative to directory descriptors`.

When trying to resolve a path that may contain links, use
`~os.path.realpath` to properly handle recursion and platform
differences.

availability:: Unix, Windows.

> *Changed in 3.2*: Added support for Windows 6.0 (Vista) symbolic links.

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object` on Unix.

> *Changed in 3.8*: Accepts a :term:`path-like object` and a bytes object on Windows.  Added support for directory junctions, and changed to return the substitution path (which typically includes ``\\?\`` prefix) rather than the optional "print name" field that was previously returned.
