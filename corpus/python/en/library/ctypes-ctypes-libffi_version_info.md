---
id: "python-en-function-ctypes-libffi_version_info"
language: "python"
lang: "en"
category: "function"
name: "LIBFFI_VERSION_INFO"
directive: "data"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.LIBFFI_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# LIBFFI_VERSION_INFO

A named tuple containing the three components of the libffi library
version that was used for building the module:
*major*, *minor*, and *patch*.
All values are integers.
The components can also be accessed by name,
so `ctypes.LIBFFI_VERSION_INFO[0]` is equivalent to
`ctypes.LIBFFI_VERSION_INFO.major` and so on.
This may be different from the libffi library actually used at runtime,
which is available as `libffi_version_info`.

> *Added in next*
