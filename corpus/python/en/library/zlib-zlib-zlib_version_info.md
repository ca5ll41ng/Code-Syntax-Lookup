---
id: "python-en-function-zlib-zlib_version_info"
language: "python"
lang: "en"
category: "function"
name: "ZLIB_VERSION_INFO"
directive: "data"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.ZLIB_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# ZLIB_VERSION_INFO

A named tuple containing the four components of the zlib library
version that was used for building the module:
*major*, *minor*, *revision*, and *subversion*.
All values are integers.
The components can also be accessed by name, so `zlib.ZLIB_VERSION_INFO[0]`
is equivalent to `zlib.ZLIB_VERSION_INFO.major` and so on.
This may be different from the zlib library actually used at runtime, which
is available as `zlib_version_info`.

> *Added in next*
