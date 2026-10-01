---
id: "python-en-function-ctypes-find_msvcrt"
language: "python"
lang: "en"
category: "function"
name: "find_msvcrt"
signature: "find_msvcrt()"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.find_msvcrt"
license: "PSF"
updated: "2026-10-01"
---

# find_msvcrt

Returns the filename of the VC runtime library used by Python,
and by the extension modules.

If the name of the library cannot be determined, `None` is returned.
Notably, this will happen for recent versions of the VC runtime library,
which are not directly loadable.

If you need to free memory, for example, allocated by an extension module
with a call to the `free(void *)`, it is important that you use the
function in the same library that allocated the memory.

availability:: Windows

soft-deprecated:: 3.16
