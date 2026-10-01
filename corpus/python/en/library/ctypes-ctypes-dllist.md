---
id: "python-en-function-ctypes-dllist"
language: "python"
lang: "en"
category: "function"
name: "dllist"
signature: "dllist()"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.dllist"
license: "PSF"
updated: "2026-10-01"
---

# dllist

Try to provide a list of paths of the shared libraries loaded into the current
process.  These paths are not normalized or processed in any way.  The function
can raise `OSError` if the underlying platform APIs fail.
The exact functionality is system dependent.

On most platforms, the first element of the list represents the current
executable file. It may be an empty string.

availability:: Windows, macOS, iOS, glibc, BSD libc, musl

> *Added in 3.14*
