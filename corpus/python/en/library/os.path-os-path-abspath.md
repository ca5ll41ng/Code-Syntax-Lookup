---
id: "python-en-function-os-path-abspath"
language: "python"
lang: "en"
category: "function"
name: "abspath"
signature: "abspath(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.abspath"
license: "PSF"
updated: "2026-10-01"
---

# abspath

Return a normalized absolutized version of the pathname *path*. On most
platforms, this is equivalent to calling `normpath(join(os.getcwd(), path))`.

On Windows the path is normalized by the operating system,
therefore the result can differ from `normpath(join(os.getcwd(), path))`.
A drive-relative path is resolved against the current directory
of the specified drive, and the drive letter is capitalized.
Trailing dots and spaces are stripped.
For example::

   >>> os.path.abspath('c:spam')
   'C:\\Temp\\spam'
   >>> os.path.abspath('c:/temp/spam. . .')
   'c:\\temp\\spam'

> **Seealso**
>
>

> *Changed in 3.6*: Accepts a :term:`path-like object`.
