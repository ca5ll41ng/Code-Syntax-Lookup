---
id: "python-en-function-lzma-lzma_version_info"
language: "python"
lang: "en"
category: "function"
name: "LZMA_VERSION_INFO"
directive: "data"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.LZMA_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# LZMA_VERSION_INFO

A named tuple containing the four components of the lzma library
version that was used for building the module:
*major*, *minor*, *patch*, and *stability*.
All values except *stability* are integers; *stability* is `'alpha'`,
`'beta'`, or `'stable'`.
The components can also be accessed by name, so `lzma.LZMA_VERSION_INFO[0]`
is equivalent to `lzma.LZMA_VERSION_INFO.major` and so on.
This may be different from the lzma library actually used at runtime, which
is available as `lzma_version_info`.

> *Added in next*
