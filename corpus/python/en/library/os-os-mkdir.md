---
id: "python-en-function-os-mkdir"
language: "python"
lang: "en"
category: "function"
name: "mkdir"
signature: "mkdir(path, mode=0o777, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.mkdir"
license: "PSF"
updated: "2026-10-01"
---

# mkdir

Create a directory named *path* with numeric mode *mode*.

If the directory already exists, `FileExistsError` is raised. If a parent
directory in the path does not exist, `FileNotFoundError` is raised.

.. _mkdir_modebits:

On some systems, *mode* is ignored.  Where it is used, the current umask
value is first masked out.  If bits other than the last 9 (i.e. the last 3
digits of the octal representation of the *mode*) are set, their meaning is
platform-dependent.  On some platforms, they are ignored and you should call
`chmod` explicitly to set them.

On Windows, a *mode* of `0o700` is specifically handled to apply access
control to the new directory such that only the current user and
administrators have access. Other values of *mode* are ignored.

This function can also support `paths relative to directory descriptors`.

It is also possible to create temporary directories; see the
`tempfile` module's `tempfile.mkdtemp` function.

audit-event:: os.mkdir path,mode,dir_fd os.mkdir

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.13*: Windows now handles a *mode* of ``0o700``.
